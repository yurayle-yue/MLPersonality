from flask import Flask, render_template, request, redirect, url_for, session, jsonify
import numpy as np
import pandas as pd
import os
import json
import joblib
from collections import Counter

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'ml_personality_secret_key_2244002')

USER_DATA = {
    "admin": "12345",
    "2244002": "winston"
}

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
API_DIR = os.path.join(BASE_DIR, 'api')

# --- Load pre-trained models and metrics at startup ---
scaler = joblib.load(os.path.join(API_DIR, 'scaler.pkl'))
le_target = joblib.load(os.path.join(API_DIR, 'le_target.pkl'))
models = {
    "KNN": joblib.load(os.path.join(API_DIR, 'model_knn.pkl')),
    "SVM": joblib.load(os.path.join(API_DIR, 'model_svm.pkl')),
    "Naive Bayes": joblib.load(os.path.join(API_DIR, 'model_nb.pkl'))
}

with open(os.path.join(API_DIR, 'metrics.json'), 'r') as f:
    ml_metrics = json.load(f)

FEATURE_NAMES = ['Time_spent_Alone', 'Stage_fear', 'Social_event_attendance',
                 'Going_outside', 'Drained_after_socializing', 'Friends_circle_size',
                 'Post_frequency']


def predict_from_answers(answers):
    """Predict personality from 10 binary questionnaire answers using pre-trained models."""
    q = [int(a) for a in answers]

    # Map 10 binary questions to 7 dataset features
    # Q1: Energi setelah bersama orang (extrovert+)
    # Q2: Suka kerja tim (extrovert+)
    # Q3: Mudah memulai percakapan (extrovert+)
    # Q4: Nyaman jadi pusat perhatian (extrovert+, no stage fear)
    # Q5: Suka waktu luang dengan teman (extrovert+)
    # Q6: Berpikir dengan keras (extrovert+)
    # Q7: Lelah setelah acara sosial (introvert+, drained)
    # Q8: Suka merencanakan detail (introvert+)
    # Q9: Produktif di lingkungan tenang (introvert+)
    # Q10: Suka mendengarkan daripada bicara (introvert+)

    time_alone = round(((1 - q[0]) + q[7] + q[8] + q[9]) / 4 * 10, 1)
    stage_fear = 1 if q[3] == 0 else 0       # Yes(1) if NOT comfortable
    social_event = round((q[1] + q[2] + (1 - q[9])) / 3 * 8, 1)
    going_outside = round((q[0] + q[2] + q[4]) / 3 * 8, 1)
    drained = 1 if q[6] == 1 else 0           # Yes(1) if drained
    friends_circle = round((q[1] + q[4] + (1 - q[7])) / 3 * 14, 1)
    post_freq = round((q[5] + (1 - q[9])) / 2 * 8, 1)

    features = pd.DataFrame([[time_alone, stage_fear, social_event, going_outside,
                               drained, friends_circle, post_freq]], columns=FEATURE_NAMES)
    features_scaled = scaler.transform(features)

    predictions = {}
    probs = {}
    for name, model in models.items():
        pred = model.predict(features_scaled)[0]
        prob = model.predict_proba(features_scaled)[0]
        predictions[name] = le_target.classes_[pred]
        probs[name] = {
            le_target.classes_[i]: round(float(p) * 100, 1)
            for i, p in enumerate(prob)
        }

    votes = Counter(predictions.values())
    final = votes.most_common(1)[0][0]
    avg_conf = round(float(np.mean([max(p.values()) for p in probs.values()])), 1)

    return {
        'predictions': predictions,
        'probabilities': probs,
        'final': final,
        'confidence': avg_conf,
        'features': {
            'Time_spent_Alone': time_alone,
            'Stage_fear': stage_fear,
            'Social_event_attendance': social_event,
            'Going_outside': going_outside,
            'Drained_after_socializing': drained,
            'Friends_circle_size': friends_circle,
            'Post_frequency': post_freq
        }
    }


# --- ROUTES ---

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        if username in USER_DATA and USER_DATA[username] == password:
            session['logged_in'] = True
            session['username'] = username
            return jsonify({"status": "success"}), 200
        return jsonify({"status": "error", "message": "Username atau Password salah"}), 401
    return render_template('Login.html')


@app.route('/')
def index():
    if not session.get('logged_in'):
        return redirect(url_for('login'))
    return render_template('Kuesioner.html')


@app.route('/analyze', methods=['POST'])
def analyze():
    if not session.get('logged_in'):
        return redirect(url_for('login'))

    answers = []
    for i in range(1, 11):
        val = request.form.get(f'q{i}', '0')
        answers.append(int(val) if val else 0)

    session['answers'] = answers
    session['analyzed'] = True
    return redirect(url_for('hasil'))


@app.route('/hasil')
def hasil():
    if not session.get('logged_in'):
        return redirect(url_for('login'))

    if not session.get('analyzed'):
        return render_template('HasilAnalisis.html', has_results=False)

    try:
        answers = session.get('answers', [0] * 10)
        prediction = predict_from_answers(answers)

        return render_template('HasilAnalisis.html',
            has_results=True,
            results=ml_metrics['results'],
            cms=ml_metrics['cms'],
            probabilities=ml_metrics['probabilities'],
            class_labels=ml_metrics['class_labels'],
            prediction=prediction,
            final_pred=prediction['final'],
            confidence=prediction['confidence']
        )
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        return render_template('HasilAnalisis.html', has_results=False)


@app.route('/tentang')
def tentang():
    if not session.get('logged_in'):
        return redirect(url_for('login'))
    return render_template('Tentang.html')


@app.route('/pengaturan')
def pengaturan():
    if not session.get('logged_in'):
        return redirect(url_for('login'))
    return render_template('Pengaturan.html')


@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))


if __name__ == '__main__':
    app.run(debug=True)
