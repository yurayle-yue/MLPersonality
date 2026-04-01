# ML Personality - Klasifikasi Kepribadian Ekstrovert dan Introvert Menggunakan Algoritma Machine Learning

Aplikasi web berbasis **Flask** untuk mengklasifikasikan tipe kepribadian **Ekstrovert** atau **Introvert** menggunakan tiga algoritma Machine Learning: **K-Nearest Neighbors (KNN)**, **Support Vector Machine (SVM)**, dan **Naive Bayes**. Aplikasi ini dikembangkan sebagai bagian dari penelitian skripsi untuk membandingkan performa ketiga algoritma dalam konteks analisis kepribadian.

---

## Daftar Isi

- [Latar Belakang](#latar-belakang)
- [Rumusan Masalah](#rumusan-masalah)
- [Tujuan Penelitian](#tujuan-penelitian)
- [Manfaat Penelitian](#manfaat-penelitian)
- [Ruang Lingkup dan Batasan](#ruang-lingkup-dan-batasan)
- [Metodologi Penelitian](#metodologi-penelitian)
- [Fitur Aplikasi](#fitur-aplikasi)
- [Arsitektur Sistem](#arsitektur-sistem)
- [Tech Stack](#tech-stack)
- [Struktur Proyek](#struktur-proyek)
- [Dataset](#dataset)
- [Preprocessing Data](#preprocessing-data)
- [Algoritma yang Digunakan](#algoritma-yang-digunakan)
- [Proses Training Model](#proses-training-model)
- [Hasil Evaluasi Model](#hasil-evaluasi-model)
- [Alur Kerja Aplikasi](#alur-kerja-aplikasi)
- [Sistem Login](#sistem-login)
- [Pemetaan Kuesioner ke Fitur](#pemetaan-kuesioner-ke-fitur)
- [Mekanisme Prediksi](#mekanisme-prediksi)
- [Penjelasan Visualisasi](#penjelasan-visualisasi)
- [Serialisasi Model](#serialisasi-model)
- [Cara Menjalankan Lokal](#cara-menjalankan-lokal)
- [Deploy ke Vercel](#deploy-ke-vercel)
- [Penjelasan File](#penjelasan-file)
- [Kesimpulan dan Saran](#kesimpulan-dan-saran)
- [Referensi](#referensi)

---

## Latar Belakang

Kepribadian merupakan aspek psikologis fundamental yang memengaruhi cara seseorang berpikir, merasakan, dan berinteraksi dengan lingkungannya. Salah satu dikotomi kepribadian yang paling dikenal adalah **Ekstrovert vs Introvert**, yang pertama kali diperkenalkan oleh psikolog Swiss **Carl Gustav Jung** pada tahun 1921 dalam karyanya *Psychological Types*. Ekstrovert cenderung mendapatkan energi dari interaksi sosial, bersifat terbuka, dan menikmati berada di lingkungan yang ramai. Sebaliknya, introvert lebih nyaman dengan aktivitas soliter, cenderung reflektif, dan membutuhkan waktu sendiri untuk mengisi ulang energi.

Dalam dunia modern, pemahaman terhadap tipe kepribadian memiliki aplikasi luas di berbagai bidang, termasuk:
- **Psikologi klinis**: Membantu terapis memahami pola perilaku pasien
- **Human Resource**: Penempatan karyawan sesuai tipe kepribadian untuk produktivitas optimal
- **Pendidikan**: Menyesuaikan metode pengajaran dengan gaya belajar siswa
- **Pemasaran**: Segmentasi konsumen berdasarkan preferensi sosial

Secara tradisional, klasifikasi kepribadian dilakukan melalui tes psikologis manual seperti **Myers-Briggs Type Indicator (MBTI)** atau **Big Five Personality Test**. Namun, metode manual ini memiliki keterbatasan dalam hal skalabilitas, konsistensi, dan kecepatan. Dengan kemajuan teknologi **Machine Learning (ML)**, klasifikasi kepribadian dapat dilakukan secara otomatis dan objektif berdasarkan data perilaku yang terukur.

Penelitian ini mengimplementasikan dan membandingkan tiga algoritma klasifikasi yang banyak digunakan dalam literatur machine learning, yaitu **K-Nearest Neighbors (KNN)**, **Support Vector Machine (SVM)**, dan **Naive Bayes**, untuk menentukan algoritma mana yang paling efektif dalam mengklasifikasikan tipe kepribadian berdasarkan pola perilaku sosial.

---

## Rumusan Masalah

Berdasarkan latar belakang di atas, rumusan masalah dalam penelitian ini adalah:

1. Bagaimana mengimplementasikan algoritma K-Nearest Neighbors (KNN), Support Vector Machine (SVM), dan Naive Bayes untuk mengklasifikasikan tipe kepribadian Ekstrovert dan Introvert berdasarkan data perilaku sosial?
2. Bagaimana perbandingan performa ketiga algoritma tersebut berdasarkan metrik evaluasi Accuracy, Precision, Recall, dan F1-Score?
3. Bagaimana membangun aplikasi web yang dapat memprediksi tipe kepribadian pengguna secara real-time berdasarkan jawaban kuesioner?

---

## Tujuan Penelitian

1. **Mengimplementasikan** tiga algoritma Machine Learning (KNN, SVM, Naive Bayes) untuk klasifikasi kepribadian Ekstrovert dan Introvert berdasarkan 7 fitur perilaku sosial.
2. **Membandingkan** performa ketiga algoritma berdasarkan metrik evaluasi: Accuracy, Precision, Recall, dan F1-Score untuk menentukan algoritma terbaik.
3. **Membangun** aplikasi web interaktif berbasis Flask yang memungkinkan pengguna mengetahui tipe kepribadiannya melalui kuesioner 10 pertanyaan.
4. **Menyajikan** hasil analisis dalam bentuk visualisasi yang informatif menggunakan Chart.js, termasuk grafik perbandingan akurasi, confusion matrix, radar chart fitur, dan grafik probabilitas.

---

## Manfaat Penelitian

### Manfaat Teoritis
- Memberikan kontribusi terhadap studi perbandingan algoritma klasifikasi dalam domain analisis kepribadian.
- Menyediakan referensi implementasi pemetaan data kuesioner biner ke fitur numerik untuk model machine learning.
- Menunjukkan bahwa data perilaku sosial memiliki korelasi kuat dengan tipe kepribadian dan dapat diklasifikasikan dengan akurasi tinggi (>90%).

### Manfaat Praktis
- Menyediakan alat bantu bagi individu untuk mengenali tipe kepribadian mereka secara cepat dan gratis.
- Memberikan gambaran bagi praktisi HR, pendidik, atau psikolog tentang potensi penerapan machine learning dalam asesmen kepribadian.
- Menjadi referensi bagi mahasiswa dan peneliti yang ingin mengembangkan aplikasi web berbasis machine learning dengan Flask dan Vercel.

---

## Ruang Lingkup dan Batasan

### Ruang Lingkup
- Penelitian ini berfokus pada klasifikasi **biner** (dua kelas): Ekstrovert dan Introvert.
- Dataset yang digunakan berasal dari Kaggle dengan 2.900 record dan 7 fitur perilaku sosial.
- Tiga algoritma yang dibandingkan: KNN (k=5), SVM (kernel linear), dan Gaussian Naive Bayes.
- Aplikasi web dibangun menggunakan framework Flask (Python) dengan deployment di Vercel.
- Visualisasi menggunakan Chart.js (client-side rendering).

### Batasan Penelitian
- Klasifikasi hanya mencakup dua tipe kepribadian (Ekstrovert/Introvert), tidak mencakup spektrum kepribadian yang lebih luas seperti MBTI (16 tipe) atau Big Five (5 dimensi).
- Dataset bersifat statis (tidak bertambah seiring waktu) dan berasal dari satu sumber (Kaggle).
- Kuesioner menggunakan format biner (Ya/Tidak) yang kemudian dipetakan ke fitur numerik, sehingga terdapat penyederhanaan (simplification) dari jawaban pengguna.
- Sistem login bersifat demonstratif (hardcoded) dan tidak menggunakan database untuk manajemen pengguna.
- Aplikasi tidak menyimpan riwayat prediksi pengguna secara persisten (hanya dalam session sementara).
- Penelitian tidak melakukan tuning hyperparameter secara ekstensif; parameter yang digunakan adalah parameter umum/default dari masing-masing algoritma.

---

## Metodologi Penelitian

Penelitian ini mengadopsi metodologi **CRISP-DM** (Cross-Industry Standard Process for Data Mining), yang merupakan standar industri untuk proyek data mining dan machine learning:

```
┌─────────────────────────────────────────────────────────────────────┐
│                      METODOLOGI CRISP-DM                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. Business Understanding    ──>  Memahami kebutuhan klasifikasi   │
│     (Pemahaman Bisnis)             kepribadian Ekstrovert/Introvert │
│           │                                                         │
│           v                                                         │
│  2. Data Understanding        ──>  Eksplorasi dataset Kaggle:       │
│     (Pemahaman Data)               2.900 record, 7 fitur, 1 target │
│           │                                                         │
│           v                                                         │
│  3. Data Preparation          ──>  Cleaning, Encoding, Scaling,     │
│     (Persiapan Data)               Train-Test Split (80:20)         │
│           │                                                         │
│           v                                                         │
│  4. Modeling                  ──>  Training KNN, SVM, Naive Bayes   │
│     (Pemodelan)                    pada data training (2.320 data)  │
│           │                                                         │
│           v                                                         │
│  5. Evaluation                ──>  Evaluasi pada data testing       │
│     (Evaluasi)                     (580 data): Acc, Prec, Rec, F1   │
│           │                                                         │
│           v                                                         │
│  6. Deployment                ──>  Aplikasi web Flask + Vercel      │
│     (Penerapan)                    dengan model pre-trained (.pkl)  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Tahapan Detail

| Fase | Kegiatan | Output |
|------|----------|--------|
| **Business Understanding** | Studi literatur tentang kepribadian Ekstrovert/Introvert, identifikasi kebutuhan klasifikasi otomatis | Rumusan masalah dan tujuan penelitian |
| **Data Understanding** | Eksplorasi dataset Kaggle, analisis distribusi fitur, identifikasi tipe data dan missing values | Pemahaman karakteristik dataset (2.900 record, 7 fitur + 1 target, balanced class) |
| **Data Preparation** | Pembersihan data, penghapusan kolom tidak relevan (`id_peserta`), encoding kategorikal (`LabelEncoder`), normalisasi fitur (`StandardScaler`), pembagian data 80:20 | Dataset siap training: 2.320 train, 580 test |
| **Modeling** | Training 3 model: KNN (k=5, Euclidean), SVM (linear kernel), Gaussian Naive Bayes | 3 file model `.pkl` + `scaler.pkl` + encoder `.pkl` |
| **Evaluation** | Pengujian pada data testing, perhitungan metrik (Accuracy, Precision, Recall, F1-Score), confusion matrix | Tabel perbandingan performa, `metrics.json` |
| **Deployment** | Pengembangan aplikasi web Flask, integrasi model `.pkl`, deploy ke Vercel | Aplikasi web online yang dapat diakses publik |

---

## Fitur Aplikasi

| No | Fitur | Deskripsi |
|----|-------|-----------|
| 1 | **Kuesioner Interaktif** | 10 pertanyaan Ya/Tidak berbasis perilaku sosial dengan progress bar real-time untuk menganalisis tipe kepribadian pengguna |
| 2 | **Prediksi Multi-Algoritma** | Prediksi dilakukan oleh 3 algoritma sekaligus (KNN, SVM, Naive Bayes) dengan sistem **voting mayoritas** untuk hasil yang lebih robust |
| 3 | **Visualisasi Interaktif** | 4 jenis grafik menggunakan Chart.js: (a) perbandingan akurasi, (b) probabilitas prediksi dataset, (c) radar fitur pengguna, (d) confusion matrix |
| 4 | **Metrik Evaluasi Lengkap** | Menampilkan Accuracy, Precision, Recall, dan F1-Score untuk setiap algoritma dalam bentuk kartu metrik interaktif |
| 5 | **Dark Mode** | Dukungan tema gelap yang tersimpan di `localStorage` browser, diterapkan secara konsisten di seluruh halaman |
| 6 | **Sistem Login** | Autentikasi pengguna menggunakan session Flask sebelum mengakses fitur aplikasi |
| 7 | **Responsive UI** | Tampilan modern dan responsif menggunakan Tailwind CSS yang dapat diakses dari desktop maupun mobile |
| 8 | **Serverless Deployment** | Dapat di-deploy ke Vercel sebagai serverless function tanpa perlu mengelola server |

---

## Arsitektur Sistem

```
┌──────────────────────────────────────────────────────────────────────┐
│                        ARSITEKTUR SISTEM                             │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────┐       HTTP Request       ┌──────────────────┐      │
│  │             │ ─────────────────────────>│                  │      │
│  │   Browser   │                           │   Flask Server   │      │
│  │  (Frontend) │ <─────────────────────────│    (Backend)     │      │
│  │             │       HTML Response       │                  │      │
│  └─────────────┘                           └────────┬─────────┘      │
│        │                                            │                │
│        │ Teknologi:                                 │ Proses:        │
│        │ - Tailwind CSS                             │ 1. Routing     │
│        │ - Chart.js                                 │ 2. Session     │
│        │ - Font Awesome                             │ 3. Prediksi    │
│        │ - Jinja2 Template                          │                │
│        │                                            v                │
│        │                              ┌─────────────────────────┐    │
│        │                              │   Pre-trained Models    │    │
│        │                              │   (api/*.pkl)           │    │
│        │                              ├─────────────────────────┤    │
│        │                              │ - model_knn.pkl         │    │
│        │                              │ - model_svm.pkl         │    │
│        │                              │ - model_nb.pkl          │    │
│        │                              │ - scaler.pkl            │    │
│        │                              │ - le_target.pkl         │    │
│        │                              │ - metrics.json          │    │
│        │                              └─────────────────────────┘    │
│        │                                                             │
│        │                              ┌─────────────────────────┐    │
│        └─────────────────────────────>│   Vercel (Hosting)      │    │
│               Auto-deploy via         │   Serverless Function   │    │
│               GitHub Integration      │   @vercel/python        │    │
│                                       └─────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────┘
```

### Alur Data (Data Flow)

```
Pengguna ──> Form Kuesioner ──> 10 jawaban biner (Ya=1 / Tidak=0)
                                        │
                                        v
                              ┌─────────────────────┐
                              │  Feature Engineering │
                              │  10 biner -> 7 fitur │
                              └──────────┬──────────┘
                                         │
                                         v
                              ┌─────────────────────┐
                              │  Feature Scaling     │
                              │  StandardScaler.pkl  │
                              └──────────┬──────────┘
                                         │
                          ┌──────────────┼──────────────┐
                          v              v              v
                    ┌──────────┐  ┌──────────┐  ┌──────────┐
                    │   KNN    │  │   SVM    │  │  Naive   │
                    │  (.pkl)  │  │  (.pkl)  │  │  Bayes   │
                    └────┬─────┘  └────┬─────┘  └────┬─────┘
                         │             │             │
                         v             v             v
                    ┌──────────────────────────────────────┐
                    │         Majority Voting               │
                    │  (2 dari 3 model setuju = prediksi)  │
                    └──────────────────┬───────────────────┘
                                       │
                                       v
                              ┌─────────────────────┐
                              │  Hasil Prediksi:     │
                              │  Extrovert/Introvert │
                              │  + Confidence Level  │
                              └─────────────────────┘
```

---

## Tech Stack

| Komponen | Teknologi | Versi | Fungsi |
|----------|-----------|-------|--------|
| **Bahasa Pemrograman** | Python | 3.12 | Bahasa utama untuk backend dan machine learning |
| **Web Framework** | Flask | 3.1.3 | Routing URL, templating Jinja2, session management, HTTP handling |
| **ML Library** | scikit-learn | 1.6.1 | Implementasi algoritma KNN, SVM, Naive Bayes, preprocessing, evaluasi |
| **Data Processing** | Pandas | 2.2.2 | Manipulasi DataFrame untuk feature engineering |
| **Komputasi Numerik** | NumPy | 2.0.2 | Operasi array, perhitungan statistik, dan transformasi data |
| **Serialisasi Model** | joblib | 1.5.3 | Menyimpan (dump) dan memuat (load) model `.pkl` secara efisien |
| **CSS Framework** | Tailwind CSS | 3.x (CDN) | Utility-first CSS framework untuk styling UI responsif |
| **Charting Library** | Chart.js | 4.x (CDN) | Rendering grafik interaktif di sisi klien (bar, radar, dll) |
| **Icon Library** | Font Awesome | 6.4.0 (CDN) | Ikon vektor untuk elemen UI |
| **Templating** | Jinja2 | (bawaan Flask) | Template engine untuk rendering HTML dinamis di server |
| **Deployment** | Vercel | - | Platform serverless untuk hosting aplikasi Python |

---

## Struktur Proyek

```
MLPersonality/
│
├── api/                          # Folder serverless function dan model ML
│   ├── index.py                  # Entry point Vercel (mengimpor app dari app.py)
│   ├── model_knn.pkl             # Model K-Nearest Neighbors (pre-trained, k=5)
│   ├── model_svm.pkl             # Model Support Vector Machine (pre-trained, linear)
│   ├── model_nb.pkl              # Model Gaussian Naive Bayes (pre-trained)
│   ├── scaler.pkl                # StandardScaler (fitted pada 2.320 data training)
│   ├── le_target.pkl             # LabelEncoder label Personality (Extrovert=0, Introvert=1)
│   ├── le_stage.pkl              # LabelEncoder fitur Stage_fear (No=0, Yes=1)
│   ├── le_drained.pkl            # LabelEncoder fitur Drained_after_socializing (No=0, Yes=1)
│   └── metrics.json              # Metrik evaluasi (accuracy, precision, recall, F1, CM)
│
├── static/                       # File statis (JavaScript)
│   └── Theme.js                  # Handler dark mode berbasis localStorage
│
├── templates/                    # Template HTML (Jinja2)
│   ├── Login.html                # Halaman login (AJAX-based authentication)
│   ├── Kuesioner.html            # Halaman kuesioner 10 pertanyaan (progress bar)
│   ├── HasilAnalisis.html        # Halaman hasil (prediksi + 4 chart Chart.js)
│   ├── Tentang.html              # Halaman informasi algoritma dan glosarium
│   └── Pengaturan.html           # Halaman pengaturan (dark mode, notifikasi)
│
├── app.py                        # Aplikasi Flask utama (routing + prediksi)
├── requirements.txt              # Dependencies Python (flask, scikit-learn, dll)
├── vercel.json                   # Konfigurasi build dan routing Vercel
├── .gitignore                    # Daftar file/folder yang diabaikan Git
└── README.md                     # Dokumentasi proyek (file ini)
```

---

## Dataset

### Sumber Data

Dataset yang digunakan bersumber dari platform Kaggle:
- **Nama**: Extrovert vs Introvert Behavior Data
- **URL**: [kaggle.com/datasets/rakeshkapilavai/extrovert-vs-introvert-behavior-data](https://www.kaggle.com/datasets/rakeshkapilavai/extrovert-vs-introvert-behavior-data)
- **Format asli**: CSV (Comma-Separated Values) dengan header dipisahkan titik koma (`;`) dan data dipisahkan koma (`,`)

### Deskripsi Dataset

Dataset berisi **2.900 record** data perilaku sosial yang dikumpulkan melalui survei. Setiap record merepresentasikan satu responden dengan **7 fitur perilaku** (independent variables) dan **1 label target** (dependent variable).

### Variabel / Fitur

| No | Nama Variabel | Deskripsi | Tipe Data | Rentang Nilai | Peran |
|----|---------------|-----------|-----------|---------------|-------|
| 1 | `Time_spent_Alone` | Rata-rata waktu yang dihabiskan sendiri per hari (jam) | Numerik (float) | 0.0 - 10.0 | Independent |
| 2 | `Stage_fear` | Apakah memiliki ketakutan tampil di depan umum | Kategorikal | Yes / No | Independent |
| 3 | `Social_event_attendance` | Frekuensi menghadiri acara sosial per bulan | Numerik (float) | 0.0 - 10.0 | Independent |
| 4 | `Going_outside` | Frekuensi keluar rumah untuk aktivitas sosial per minggu | Numerik (integer) | 0 - 10 | Independent |
| 5 | `Drained_after_socializing` | Apakah merasa kelelahan setelah bersosialisasi | Kategorikal | Yes / No | Independent |
| 6 | `Friends_circle_size` | Jumlah teman dekat dalam lingkaran pertemanan | Numerik (float) | 0.0 - 15.0 | Independent |
| 7 | `Post_frequency` | Frekuensi posting di media sosial per minggu | Numerik (float) | 0.0 - 10.0 | Independent |
| 8 | `Personality` | Tipe kepribadian (label target) | Kategorikal | Extrovert / Introvert | **Dependent** |

### Distribusi Kelas

Dataset memiliki distribusi kelas yang relatif **seimbang (balanced)** antara Extrovert dan Introvert. Distribusi yang seimbang ini penting karena:
- Tidak memerlukan teknik resampling seperti **SMOTE** (Synthetic Minority Oversampling Technique) atau **undersampling**
- Metrik **Accuracy** dapat digunakan secara langsung sebagai indikator performa tanpa bias terhadap kelas mayoritas
- Hasil **Precision** dan **Recall** tidak terdistorsi oleh ketidakseimbangan kelas

### Korelasi Fitur dengan Label Target

Berdasarkan karakteristik data, fitur-fitur memiliki korelasi logis dengan tipe kepribadian:

| Fitur | Extrovert (cenderung) | Introvert (cenderung) |
|-------|----------------------|----------------------|
| `Time_spent_Alone` | Rendah (0-4) | Tinggi (6-10) |
| `Stage_fear` | No | Yes |
| `Social_event_attendance` | Tinggi (5-10) | Rendah (0-4) |
| `Going_outside` | Tinggi (5-10) | Rendah (0-4) |
| `Drained_after_socializing` | No | Yes |
| `Friends_circle_size` | Banyak (8-15) | Sedikit (0-6) |
| `Post_frequency` | Tinggi (5-10) | Rendah (0-4) |

---

## Preprocessing Data

Sebelum data digunakan untuk training model, dilakukan beberapa tahapan preprocessing secara berurutan:

### 1. Pembersihan Data (Data Cleaning)

```
Data Mentah (2.900+ baris)
    │
    ├── Hapus kolom 'id_peserta' (tidak relevan untuk klasifikasi)
    ├── Konversi string ke numerik: pd.to_numeric(col, errors='coerce')
    └── Hapus baris dengan NaN: df.dropna()
    │
    v
Data Bersih (2.900 baris, 8 kolom)
```

- **Penghapusan kolom**: Kolom `id_peserta` hanya berisi identitas responden dan tidak memiliki nilai prediktif, sehingga dihapus.
- **Konversi tipe data**: Akibat format CSV yang tidak standar (header dengan `;`, data dengan `,`), beberapa kolom numerik terbaca sebagai string dan perlu dikonversi.
- **Penanganan missing values**: Baris yang mengandung `NaN` (akibat konversi gagal) dihapus menggunakan `dropna()`.

### 2. Encoding Kategorikal (Label Encoding)

Fitur kategorikal (bertipe string) diubah menjadi representasi numerik menggunakan `sklearn.preprocessing.LabelEncoder`. LabelEncoder meng-assign integer berdasarkan urutan alfabet:

| Fitur | Nilai Asli | Nilai Encoded | Penjelasan |
|-------|-----------|---------------|------------|
| `Stage_fear` | No | 0 | Urutan alfabet: N < Y |
| `Stage_fear` | Yes | 1 | |
| `Drained_after_socializing` | No | 0 | Urutan alfabet: N < Y |
| `Drained_after_socializing` | Yes | 1 | |
| `Personality` (target) | Extrovert | 0 | Urutan alfabet: E < I |
| `Personality` (target) | Introvert | 1 | |

Setiap LabelEncoder disimpan sebagai file `.pkl` agar encoding konsisten antara training dan prediksi.

### 3. Pembagian Data (Train-Test Split)

Data dibagi menjadi dua subset menggunakan fungsi `train_test_split()` dari scikit-learn:

| Parameter | Nilai | Penjelasan |
|-----------|-------|------------|
| `test_size` | 0.2 (20%) | 20% data untuk pengujian |
| `random_state` | 42 | Seed untuk reproduktivitas hasil |
| `shuffle` | True (default) | Data diacak sebelum pembagian |

**Hasil pembagian:**
- **Data Training**: 2.320 record (80%) - digunakan untuk melatih model
- **Data Testing**: 580 record (20%) - digunakan untuk evaluasi performa model

Penggunaan `random_state=42` memastikan bahwa setiap kali kode dijalankan, pembagian data menghasilkan subset yang **identik**, sehingga hasil eksperimen dapat direproduksi oleh peneliti lain.

### 4. Normalisasi Fitur (Feature Scaling)

Fitur numerik dinormalisasi menggunakan **StandardScaler** (Z-Score Normalization):

$$z = \frac{x - \mu}{\sigma}$$

Di mana:
- $x$ = nilai fitur asli
- $\mu$ = rata-rata (mean) fitur pada data training
- $\sigma$ = standar deviasi (standard deviation) fitur pada data training
- $z$ = nilai fitur setelah normalisasi

**Mengapa scaling diperlukan?**

| Algoritma | Pengaruh Scaling | Penjelasan |
|-----------|-----------------|------------|
| **KNN** | **Sangat penting** | KNN menghitung jarak Euclidean; fitur dengan skala besar (misal `Friends_circle_size`: 0-15) akan mendominasi fitur dengan skala kecil (misal `Stage_fear`: 0-1) tanpa normalisasi |
| **SVM** | **Sangat penting** | SVM mencari hyperplane optimal berdasarkan margin; fitur tidak ternormalisasi membuat optimisasi menjadi lambat dan bias |
| **Naive Bayes** | **Tidak wajib** | Gaussian NB menghitung mean dan variance per kelas per fitur secara independen, sehingga tidak bergantung pada skala relatif antar fitur. Namun, scaling tetap dilakukan untuk konsistensi pipeline |

**Penting:** `StandardScaler` hanya di-**fit** pada data training (`fit_transform`), kemudian diterapkan pada data testing (`transform`) tanpa fitting ulang. Ini mencegah **data leakage** (informasi dari data testing bocor ke proses training).

---

## Algoritma yang Digunakan

### 1. K-Nearest Neighbors (KNN)

**Definisi:** KNN adalah algoritma klasifikasi berbasis *instance-based learning* (lazy learning) yang mengklasifikasikan data baru berdasarkan mayoritas kelas dari *k* tetangga terdekat dalam ruang fitur.

**Prinsip kerja:**
1. Hitung jarak antara data baru dengan **semua** data training
2. Ambil *k* data training dengan jarak terkecil (tetangga terdekat)
3. Lakukan **voting mayoritas**: kelas yang paling banyak di antara *k* tetangga menjadi prediksi

**Parameter yang digunakan:**

| Parameter | Nilai | Penjelasan |
|-----------|-------|------------|
| `n_neighbors` | 5 | Jumlah tetangga terdekat yang dipertimbangkan |
| `metric` | Euclidean (default) | Metode perhitungan jarak |
| `weights` | uniform (default) | Semua tetangga memiliki bobot yang sama |

**Rumus jarak Euclidean:**

$$d(x, y) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}$$

Di mana $x$ dan $y$ adalah dua titik data dalam ruang fitur berdimensi $n$.

**Kelebihan:**
- Sederhana dan mudah diimplementasikan, tidak memerlukan proses training eksplisit
- Tidak memerlukan asumsi distribusi data (non-parametric)
- Efektif untuk dataset berukuran kecil hingga sedang
- Mampu menangkap batas keputusan (decision boundary) yang kompleks

**Kekurangan:**
- Komputasi lambat pada dataset besar karena harus menghitung jarak ke semua data training (kompleksitas O(n))
- Sangat sensitif terhadap fitur yang tidak dinormalisasi (fitur berskala besar mendominasi)
- Rentan terhadap *curse of dimensionality* (performa menurun pada dimensi tinggi)
- Sensitif terhadap noise dan outlier dalam data

### 2. Support Vector Machine (SVM)

**Definisi:** SVM adalah algoritma klasifikasi berbasis *discriminative model* yang mencari **hyperplane** optimal untuk memisahkan dua kelas data dengan **margin** (jarak antara hyperplane dan data terdekat dari masing-masing kelas) yang maksimal.

**Prinsip kerja:**
1. Cari hyperplane $f(x) = w \cdot x + b$ yang memisahkan dua kelas
2. Maksimalkan margin antara hyperplane dan data terdekat (support vectors)
3. Data baru diklasifikasikan berdasarkan posisinya terhadap hyperplane

**Parameter yang digunakan:**

| Parameter | Nilai | Penjelasan |
|-----------|-------|------------|
| `kernel` | linear | Menggunakan kernel linear (tanpa transformasi non-linear) |
| `C` | 1.0 (default) | Parameter regularisasi yang mengontrol trade-off antara margin dan error |
| `probability` | True | Mengaktifkan estimasi probabilitas menggunakan Platt scaling |

**Fungsi keputusan (decision function):**

$$f(x) = w \cdot x + b$$

**Formulasi optimisasi (primal):**

$$\min_{w,b} \frac{1}{2} \|w\|^2 \quad \text{subject to} \quad y_i(w \cdot x_i + b) \geq 1, \quad \forall i$$

Di mana:
- $w$ = vektor bobot (weight vector) yang menentukan orientasi hyperplane
- $b$ = bias yang menentukan posisi hyperplane
- $y_i$ = label kelas data ke-$i$ (+1 atau -1)
- $x_i$ = vektor fitur data ke-$i$

**Kelebihan:**
- Sangat efektif pada ruang berdimensi tinggi
- Bekerja baik pada dataset dengan margin pemisahan yang jelas
- Robust terhadap overfitting, terutama pada kernel linear
- Efektif meskipun jumlah fitur lebih besar dari jumlah sampel

**Kekurangan:**
- Tidak efisien pada dataset yang sangat besar (kompleksitas training O(n^2) hingga O(n^3))
- Sensitif terhadap pemilihan kernel dan parameter C
- Sulit diinterpretasikan pada kernel non-linear
- Estimasi probabilitas (Platt scaling) memerlukan cross-validation internal, sehingga training lebih lambat

### 3. Naive Bayes (Gaussian)

**Definisi:** Naive Bayes adalah algoritma klasifikasi berbasis **probabilistik** yang menggunakan **Teorema Bayes** dengan asumsi **independensi kondisional** (naive assumption) antar fitur untuk menghitung probabilitas posterior setiap kelas.

**Prinsip kerja:**
1. Hitung probabilitas prior $P(C)$ untuk setiap kelas dari data training
2. Hitung likelihood $P(x_i|C)$ menggunakan distribusi Gaussian untuk setiap fitur
3. Hitung probabilitas posterior $P(C|X)$ menggunakan Teorema Bayes
4. Pilih kelas dengan probabilitas posterior tertinggi

**Teorema Bayes:**

$$P(C|X) = \frac{P(X|C) \cdot P(C)}{P(X)}$$

Di mana:
- $P(C|X)$ = probabilitas posterior kelas $C$ diberikan fitur $X$
- $P(X|C)$ = likelihood (probabilitas fitur $X$ muncul pada kelas $C$)
- $P(C)$ = probabilitas prior kelas $C$ (proporsi kelas dalam data training)
- $P(X)$ = evidence (probabilitas marginal fitur $X$, sama untuk semua kelas sehingga dapat diabaikan saat perbandingan)

**Asumsi Naive (Independensi Kondisional):**

$$P(X|C) = P(x_1|C) \cdot P(x_2|C) \cdot \ldots \cdot P(x_n|C) = \prod_{i=1}^{n} P(x_i|C)$$

Asumsi ini menyatakan bahwa setiap fitur saling independen satu sama lain **diberikan kelas**. Meskipun asumsi ini jarang terpenuhi di data nyata, Naive Bayes tetap menunjukkan performa yang baik dalam praktik.

**Distribusi Gaussian (untuk fitur kontinu):**

$$P(x_i|C) = \frac{1}{\sqrt{2\pi\sigma_C^2}} \exp\left(-\frac{(x_i - \mu_C)^2}{2\sigma_C^2}\right)$$

Di mana $\mu_C$ dan $\sigma_C$ adalah mean dan standar deviasi fitur $x_i$ pada kelas $C$, dihitung dari data training.

**Kelebihan:**
- Sangat cepat dalam training dan prediksi (kompleksitas linear O(n))
- Bekerja baik bahkan dengan data training yang sedikit
- Tidak sensitif terhadap fitur yang tidak relevan
- Memberikan estimasi probabilitas yang natural

**Kekurangan:**
- Asumsi independensi antar fitur jarang terpenuhi di data nyata (fitur seringkali berkorelasi)
- Performa menurun jika fitur sangat berkorelasi
- Estimasi probabilitas bisa tidak akurat meskipun klasifikasi benar

### Perbandingan Karakteristik Algoritma

| Aspek | KNN | SVM | Naive Bayes |
|-------|-----|-----|-------------|
| **Tipe** | Instance-based (Lazy) | Discriminative | Probabilistik (Generative) |
| **Training** | Tidak ada (menyimpan semua data) | Mencari hyperplane optimal | Menghitung mean, variance, prior |
| **Prediksi** | Lambat (hitung jarak ke semua data) | Cepat (evaluasi fungsi linear) | Sangat cepat (perhitungan probabilitas) |
| **Asumsi** | Tidak ada | Margin pemisahan linear | Independensi antar fitur |
| **Scaling** | Wajib | Wajib | Tidak wajib |
| **Interpretasi** | Rendah | Sedang (support vectors) | Tinggi (probabilitas per kelas) |
| **Sensitif outlier** | Ya | Tidak (jika C kecil) | Tidak |
| **Cocok untuk** | Dataset kecil-sedang | Margin pemisah jelas | Fitur independen |

---

## Proses Training Model

### Alur Training

```
Dataset (2.900 record)
    │
    v
Preprocessing (cleaning, encoding, scaling)
    │
    v
Train-Test Split (80:20, random_state=42)
    │
    ├── Training Set (2.320 record) ──> fit() KNN, SVM, NB
    │                                        │
    │                                        v
    │                                   3 model terlatih
    │                                        │
    │                                        v
    │                                   joblib.dump() ──> .pkl files
    │
    └── Testing Set (580 record) ──> predict() dengan 3 model
                                         │
                                         v
                                    Evaluasi metrik
                                         │
                                         v
                                    metrics.json
```

### Kode Training (Ringkasan)

```python
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
import joblib

# Pembagian data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Normalisasi
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)   # fit + transform pada training
X_test_scaled = scaler.transform(X_test)          # hanya transform pada testing

# Training 3 model
models = {
    'KNN': KNeighborsClassifier(n_neighbors=5),
    'SVM': SVC(kernel='linear', probability=True),
    'Naive Bayes': GaussianNB()
}

for name, model in models.items():
    model.fit(X_train_scaled, y_train)            # Training
    joblib.dump(model, f'api/model_{name}.pkl')   # Simpan model

joblib.dump(scaler, 'api/scaler.pkl')             # Simpan scaler
```

### Mengapa Menggunakan File .pkl (Pre-trained)?

Dalam tahap deployment, model **tidak dilatih ulang** setiap kali ada request. Sebaliknya, model yang sudah dilatih disimpan dalam format `.pkl` menggunakan `joblib` dan di-load saat aplikasi startup. Pendekatan ini memiliki keuntungan:

| Aspek | Retrain per Request | Pre-trained (.pkl) |
|-------|--------------------|--------------------|
| **Kecepatan** | Lambat (training ulang) | Cepat (load file saja) |
| **Konsistensi** | Hasil bisa berbeda | Hasil selalu konsisten |
| **Resource** | CPU intensif | Minimal (baca file) |
| **Cocok untuk** | Eksperimen/riset | Production/deployment |

---

## Hasil Evaluasi Model

### Metrik Evaluasi

Model dievaluasi menggunakan 4 metrik utama yang dihitung dari confusion matrix:

| Metrik | Rumus | Deskripsi |
|--------|-------|-----------|
| **Accuracy** | $\frac{TP + TN}{TP + TN + FP + FN}$ | Proporsi prediksi yang benar dari seluruh prediksi. Metrik paling umum untuk dataset seimbang. |
| **Precision** | $\frac{TP}{TP + FP}$ | Dari semua yang diprediksi positif, berapa yang benar-benar positif. Penting jika **false positive** harus diminimalkan. |
| **Recall** | $\frac{TP}{TP + FN}$ | Dari semua data positif, berapa yang berhasil dideteksi. Penting jika **false negative** harus diminimalkan. |
| **F1-Score** | $2 \times \frac{Precision \times Recall}{Precision + Recall}$ | Rata-rata harmonik dari Precision dan Recall. Berguna ketika kita membutuhkan keseimbangan antara Precision dan Recall. |

Di mana:
- **TP (True Positive)**: Data Extrovert yang diprediksi Extrovert (benar)
- **TN (True Negative)**: Data Introvert yang diprediksi Introvert (benar)
- **FP (False Positive)**: Data Introvert yang diprediksi Extrovert (salah)
- **FN (False Negative)**: Data Extrovert yang diprediksi Introvert (salah)

### Perbandingan Performa (Data Testing: 580 record)

| Algoritma | Accuracy | Precision | Recall | F1-Score |
|-----------|----------|-----------|--------|----------|
| **KNN** (k=5) | 92.41% | 92.45% | 92.41% | 92.42% |
| **SVM** (linear) | **92.93%** | **92.96%** | **92.93%** | **92.93%** |
| **Naive Bayes** | **92.93%** | **92.96%** | **92.93%** | **92.93%** |

### Confusion Matrix

**KNN (K-Nearest Neighbors):**

|  | Prediksi: Extrovert | Prediksi: Introvert | Total |
|--|---------------------|---------------------|-------|
| **Aktual: Extrovert** | **276** (TP) | 26 (FN) | 302 |
| **Aktual: Introvert** | 18 (FP) | **260** (TN) | 278 |
| **Total** | 294 | 286 | **580** |

- Salah prediksi: 44 dari 580 (7.59%)
- KNN lebih sering salah pada Extrovert yang diprediksi Introvert (26 kesalahan) dibanding sebaliknya (18 kesalahan)

**SVM (Support Vector Machine):**

|  | Prediksi: Extrovert | Prediksi: Introvert | Total |
|--|---------------------|---------------------|-------|
| **Aktual: Extrovert** | **278** (TP) | 24 (FN) | 302 |
| **Aktual: Introvert** | 17 (FP) | **261** (TN) | 278 |
| **Total** | 295 | 285 | **580** |

- Salah prediksi: 41 dari 580 (7.07%)

**Naive Bayes (Gaussian):**

|  | Prediksi: Extrovert | Prediksi: Introvert | Total |
|--|---------------------|---------------------|-------|
| **Aktual: Extrovert** | **278** (TP) | 24 (FN) | 302 |
| **Aktual: Introvert** | 17 (FP) | **261** (TN) | 278 |
| **Total** | 295 | 285 | **580** |

- Salah prediksi: 41 dari 580 (7.07%)
- Confusion matrix **identik** dengan SVM

### Analisis dan Pembahasan Hasil

1. **Performa keseluruhan sangat baik (>92%)**: Ketiga algoritma menunjukkan akurasi di atas 92%, yang mengindikasikan bahwa 7 fitur perilaku sosial yang digunakan memiliki **daya diskriminasi yang kuat** terhadap tipe kepribadian. Data perilaku seperti waktu sendiri, ketakutan panggung, dan ukuran lingkaran pertemanan secara efektif membedakan Extrovert dan Introvert.

2. **SVM dan Naive Bayes identik (92.93%)**: Kedua algoritma menghasilkan confusion matrix yang persis sama. Hal ini dimungkinkan karena:
   - Dataset memiliki **distribusi yang jelas terpisah** (well-separated classes), sehingga hyperplane linear SVM dan decision boundary probabilistik Naive Bayes konvergen ke hasil yang sama.
   - Kedua algoritma menangkap pola diskriminatif yang sama dari data.

3. **KNN sedikit di bawah (92.41%, selisih 0.52%)**: KNN memiliki 3 kesalahan lebih banyak dibanding SVM/NB. Ini dapat disebabkan oleh:
   - Adanya **noise** atau **outlier** di area batas keputusan yang memengaruhi voting tetangga terdekat.
   - Pemilihan k=5 yang mungkin belum optimal (bisa ditingkatkan melalui hyperparameter tuning).

4. **Precision dan Recall seimbang**: Pada semua model, Precision dan Recall bernilai hampir sama, menunjukkan **tidak ada bias** signifikan terhadap salah satu kelas. Model tidak cenderung memprediksi Extrovert lebih sering dari Introvert atau sebaliknya.

5. **Rekomendasi**: **SVM** direkomendasikan sebagai algoritma utama karena:
   - Memiliki akurasi tertinggi bersama Naive Bayes
   - Lebih robust terhadap variasi data dibanding KNN
   - Memiliki kemampuan generalisasi yang baik berkat prinsip margin maksimal
   - Namun, **Naive Bayes** juga layak dipertimbangkan karena training dan prediksi yang jauh lebih cepat dengan performa setara.

---

## Alur Kerja Aplikasi

```
┌──────────┐     ┌─────────────┐     ┌──────────────┐     ┌───────────────────┐
│  Login   │────>│  Kuesioner  │────>│   Analyze    │────>│  Hasil Analisis   │
│ (/login) │     │  (/)        │     │  (/analyze)  │     │  (/hasil)         │
│          │     │             │     │  POST Form   │     │                   │
│ POST JSON│     │ 10 soal     │     │ Simpan ke    │     │ Prediksi +        │
│ via AJAX │     │ Ya/Tidak    │     │ session      │     │ Metrik + Chart.js │
└──────────┘     └─────────────┘     └──────────────┘     └───────────────────┘
      │                                                            │
      │           ┌─────────────┐     ┌──────────────┐             │
      │           │   Tentang   │     │  Pengaturan  │             │
      │           │  (/tentang) │     │ (/pengaturan)│             │
      │           │             │     │              │             │
      │           │ Info algo + │     │ Dark mode +  │             │
      │           │ glosarium   │     │ preferensi   │             │
      │           └─────────────┘     └──────────────┘             │
      │                                                            │
      │           ┌─────────────┐                                  │
      └──────────>│   Logout    │<─────────────────────────────────┘
                  │  (/logout)  │
                  │ Clear session│
                  └─────────────┘
```

### Halaman-halaman Aplikasi

| No | Halaman | Route | Method | Deskripsi |
|----|---------|-------|--------|-----------|
| 1 | **Login** | `/login` | GET, POST | Form login. GET menampilkan halaman, POST memproses autentikasi via AJAX (JSON). |
| 2 | **Kuesioner** | `/` | GET | Halaman utama. Menampilkan 10 pertanyaan Ya/Tidak dengan progress bar. Memerlukan login. |
| 3 | **Analyze** | `/analyze` | POST | Menerima jawaban dari form kuesioner, menyimpan ke session, redirect ke `/hasil`. |
| 4 | **Hasil Analisis** | `/hasil` | GET | Menampilkan prediksi kepribadian, metrik evaluasi, dan 4 visualisasi Chart.js. |
| 5 | **Tentang** | `/tentang` | GET | Informasi tentang tujuan eksperimen, penjelasan 3 algoritma, dan glosarium istilah. |
| 6 | **Pengaturan** | `/pengaturan` | GET | Pengaturan dark mode, notifikasi, dan manajemen data dengan modal konfirmasi. |
| 7 | **Logout** | `/logout` | GET | Menghapus seluruh session (`session.clear()`) dan redirect ke halaman login. |

---

## Sistem Login

Aplikasi menggunakan autentikasi sederhana berbasis **session Flask**. Data akun disimpan secara statis di `app.py` dalam dictionary `USER_DATA`. Proses login dilakukan melalui **AJAX request** (fetch API) ke endpoint `/login` dengan method POST dan body JSON.

### Alur Autentikasi

```
Browser                              Flask Server
   │                                      │
   │  POST /login                         │
   │  {"username":"admin","password":"12345"}
   │ ────────────────────────────────────> │
   │                                      │ Cek USER_DATA
   │                                      │ admin:12345 ✓
   │  200 {"status":"success"}            │
   │ <──────────────────────────────────── │ Set session['logged_in']=True
   │                                      │ Set session['username']='admin'
   │  Redirect ke /                       │
   │ ────────────────────────────────────> │
   │                                      │ Cek session['logged_in'] ✓
   │  Render Kuesioner.html               │
   │ <──────────────────────────────────── │
```

### Akun yang Tersedia

| Username | Password | Keterangan |
|----------|----------|------------|
| `admin` | `12345` | Akun administrator |
| `2244002` | `winston` | Akun mahasiswa (NIM: 2244002, Nama: Winston Gareth) |

### Proteksi Route

Setiap halaman (kecuali `/login`) memeriksa `session['logged_in']`. Jika pengguna belum login, mereka akan di-redirect secara otomatis ke halaman login:

```python
@app.route('/')
def index():
    if not session.get('logged_in'):
        return redirect(url_for('login'))
    return render_template('Kuesioner.html')
```

---

## Pemetaan Kuesioner ke Fitur

Aplikasi menggunakan **10 pertanyaan biner** (Ya/Tidak) yang dipetakan ke **7 fitur dataset**. Pemetaan ini merupakan proses **feature engineering** yang mengkonversi input kualitatif pengguna menjadi fitur kuantitatif yang dapat diproses oleh model machine learning.

### Daftar Pertanyaan

| No | Pertanyaan | Indikator | Fitur Terkait |
|----|-----------|-----------|---------------|
| Q1 | Apakah Anda merasa lebih berenergi setelah menghabiskan waktu bersama orang lain? | Extrovert (+) | Time_spent_Alone (inverse), Going_outside |
| Q2 | Apakah Anda lebih suka bekerja dalam tim daripada bekerja sendiri? | Extrovert (+) | Social_event_attendance, Friends_circle_size |
| Q3 | Apakah Anda mudah memulai percakapan dengan orang yang baru dikenal? | Extrovert (+) | Social_event_attendance, Going_outside |
| Q4 | Apakah Anda merasa nyaman menjadi pusat perhatian dalam suatu acara? | Extrovert (+) | Stage_fear (inverse) |
| Q5 | Apakah Anda lebih suka menghabiskan waktu luang dengan banyak teman daripada sendirian? | Extrovert (+) | Going_outside, Friends_circle_size |
| Q6 | Apakah Anda cenderung berpikir dengan keras (berbicara saat berpikir)? | Extrovert (+) | Post_frequency |
| Q7 | Apakah Anda merasa lelah setelah menghadiri acara sosial yang ramai? | Introvert (+) | Drained_after_socializing |
| Q8 | Apakah Anda lebih suka merencanakan sesuatu secara detail sebelum bertindak? | Introvert (+) | Time_spent_Alone, Friends_circle_size (inverse) |
| Q9 | Apakah Anda merasa lebih produktif ketika bekerja di lingkungan yang tenang? | Introvert (+) | Time_spent_Alone |
| Q10 | Apakah Anda lebih suka mendengarkan daripada berbicara dalam diskusi kelompok? | Introvert (+) | Social_event_attendance (inverse), Post_frequency (inverse) |

### Formula Pemetaan

Setiap fitur dihitung dari kombinasi beberapa pertanyaan dengan bobot yang seimbang. Nilai biner (0 atau 1) dari jawaban di-rata-rata lalu di-scale ke rentang fitur asli dataset:

| Fitur | Formula | Rentang | Logika |
|-------|---------|---------|--------|
| `Time_spent_Alone` | $\frac{(1 - Q1) + Q8 + Q9 + Q10}{4} \times 10$ | 0.0 - 10.0 | Introvert menjawab Ya pada Q8,Q9,Q10 dan Tidak pada Q1 -> skor tinggi |
| `Stage_fear` | Jika Q4 = 0 maka 1 (Yes), selainnya 0 (No) | 0 atau 1 | Tidak nyaman jadi pusat perhatian = memiliki stage fear |
| `Social_event_attendance` | $\frac{Q2 + Q3 + (1 - Q10)}{3} \times 8$ | 0.0 - 8.0 | Suka tim, mudah bicara, aktif diskusi -> kehadiran sosial tinggi |
| `Going_outside` | $\frac{Q1 + Q3 + Q5}{3} \times 8$ | 0.0 - 8.0 | Berenergi dari orang, mudah bicara, suka teman -> sering keluar |
| `Drained_after_socializing` | Jika Q7 = 1 maka 1 (Yes), selainnya 0 (No) | 0 atau 1 | Pemetaan langsung dari Q7 |
| `Friends_circle_size` | $\frac{Q2 + Q5 + (1 - Q8)}{3} \times 14$ | 0.0 - 14.0 | Suka tim, suka teman, tidak terlalu planner -> circle besar |
| `Post_frequency` | $\frac{Q6 + (1 - Q10)}{2} \times 8$ | 0.0 - 8.0 | Berpikir keras + aktif bicara -> sering posting |

### Logika Pemetaan

- **Q1-Q6** bersifat **positif terhadap extrovert**: jawaban "Ya" menghasilkan skor fitur yang mengarah ke pola extrovert (social_event tinggi, time_alone rendah, friends_circle besar).
- **Q7-Q10** bersifat **positif terhadap introvert**: jawaban "Ya" menghasilkan skor fitur yang mengarah ke pola introvert (time_alone tinggi, drained=yes, post_frequency rendah).
- Untuk fitur yang **berbanding terbalik**, digunakan **inversi** `(1 - Qn)`. Contoh: Q1 = Ya (energi dari orang) berarti Time_spent_Alone rendah, sehingga digunakan `(1 - Q1)`.

---

## Mekanisme Prediksi

### Diagram Alur Prediksi

```
Jawaban Kuesioner: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    │
    v
┌─────────────────────────────────────┐
│ Step 1: Feature Engineering         │
│ 10 jawaban biner → 7 fitur numerik  │
│                                     │
│ Time_spent_Alone    = 0.0           │
│ Stage_fear          = 0 (No)        │
│ Social_event_att.   = 8.0           │
│ Going_outside       = 8.0           │
│ Drained_after_soc.  = 0 (No)        │
│ Friends_circle_size = 14.0          │
│ Post_frequency      = 8.0           │
└──────────────┬──────────────────────┘
               │
               v
┌─────────────────────────────────────┐
│ Step 2: Feature Scaling             │
│ StandardScaler.transform(features)  │
│ Menggunakan scaler.pkl (fitted      │
│ pada data training)                 │
└──────────────┬──────────────────────┘
               │
               v
┌─────────────────────────────────────┐
│ Step 3: Prediksi Multi-Model        │
│                                     │
│ KNN:         Extrovert (72.3%)      │
│ SVM:         Extrovert (88.5%)      │
│ Naive Bayes: Extrovert (91.4%)      │
└──────────────┬──────────────────────┘
               │
               v
┌─────────────────────────────────────┐
│ Step 4: Majority Voting             │
│                                     │
│ Extrovert: 3 suara ✓               │
│ Introvert: 0 suara                  │
│                                     │
│ Confidence = avg(72.3, 88.5, 91.4)  │
│            = 84.1%                  │
└──────────────┬──────────────────────┘
               │
               v
┌─────────────────────────────────────┐
│ Hasil: EXTROVERT (84.1%)           │
└─────────────────────────────────────┘
```

### Penjelasan Langkah

1. **Feature Engineering**: 10 jawaban biner dikonversi menjadi 7 fitur numerik menggunakan formula pemetaan.

2. **Feature Scaling**: Fitur dinormalisasi menggunakan `StandardScaler` yang **sama** dengan yang digunakan saat training. File `scaler.pkl` menyimpan parameter $\mu$ dan $\sigma$ dari data training.

3. **Prediksi Multi-Model**: Ketiga model memprediksi secara **independen**. Setiap model menghasilkan:
   - **Kelas prediksi**: Extrovert (0) atau Introvert (1)
   - **Probabilitas**: Distribusi keyakinan untuk setiap kelas

4. **Majority Voting**: Prediksi akhir ditentukan oleh suara terbanyak:
   - 3 model setuju → confidence tinggi
   - 2 vs 1 → confidence sedang
   - **Confidence level** = rata-rata dari probabilitas tertinggi masing-masing model

---

## Penjelasan Visualisasi

Halaman Hasil Analisis menampilkan 4 jenis visualisasi menggunakan **Chart.js** (client-side rendering):

### 1. Grafik Perbandingan Akurasi (Bar Chart)

- **Tipe**: Grouped bar chart
- **Isi**: Accuracy, Precision, dan F1-Score untuk ketiga algoritma
- **Tujuan**: Memberikan perbandingan visual langsung antar performa algoritma
- **Pembacaan**: Bar yang lebih tinggi menunjukkan performa yang lebih baik

### 2. Grafik Probabilitas Prediksi Dataset (Bar Chart)

- **Tipe**: Grouped bar chart
- **Isi**: Rata-rata probabilitas prediksi Extrovert dan Introvert dari dataset testing untuk setiap model
- **Tujuan**: Menunjukkan distribusi keyakinan model terhadap kedua kelas
- **Pembacaan**: Probabilitas yang mendekati 50:50 menunjukkan dataset seimbang; deviasi menunjukkan bias model

### 3. Radar Chart Fitur Pengguna

- **Tipe**: Radar/spider chart
- **Isi**: 7 nilai fitur yang dipetakan dari jawaban kuesioner pengguna
- **Tujuan**: Menampilkan profil perilaku pengguna secara visual
- **Pembacaan**: Area yang lebih luas pada sisi extrovert (social_event, going_outside, friends_circle) mengindikasikan kecenderungan extrovert, dan sebaliknya

### 4. Confusion Matrix (Tabel HTML)

- **Tipe**: Tabel berwarna
- **Isi**: Confusion matrix 2x2 untuk setiap algoritma
- **Tujuan**: Menunjukkan detail kesalahan prediksi (tipe error) per algoritma
- **Pembacaan**: Sel diagonal (TP, TN) berwarna biru = prediksi benar; sel off-diagonal (FP, FN) berwarna kuning = prediksi salah

---

## Serialisasi Model

### Apa itu Serialisasi Model?

Serialisasi model adalah proses mengkonversi objek model machine learning dari memori Python menjadi **file biner** (`.pkl`) yang dapat disimpan di disk dan di-load kembali kapan saja tanpa perlu melatih ulang model.

### Mengapa Menggunakan joblib?

Penelitian ini menggunakan library **joblib** (bukan pickle bawaan Python) karena:

| Aspek | pickle | joblib |
|-------|--------|--------|
| **Kecepatan** | Standar | Lebih cepat untuk array NumPy besar |
| **Kompresi** | Tidak ada | Mendukung kompresi otomatis |
| **Kompatibilitas** | Umum | Direkomendasikan oleh scikit-learn |
| **Ukuran file** | Lebih besar | Lebih kecil (terutama untuk model besar) |

### Daftar File .pkl

| File | Tipe Objek | Ukuran | Deskripsi |
|------|-----------|--------|-----------|
| `model_knn.pkl` | `KNeighborsClassifier` | ~310 KB | Model KNN menyimpan **seluruh data training** (lazy learner) |
| `model_svm.pkl` | `SVC` | ~34 KB | Model SVM menyimpan support vectors dan parameter hyperplane |
| `model_nb.pkl` | `GaussianNB` | ~1 KB | Model NB menyimpan mean, variance, dan prior per kelas (sangat ringkas) |
| `scaler.pkl` | `StandardScaler` | ~1 KB | Menyimpan mean dan std setiap fitur dari data training |
| `le_target.pkl` | `LabelEncoder` | ~0.5 KB | Mapping: Extrovert=0, Introvert=1 |
| `le_stage.pkl` | `LabelEncoder` | ~0.5 KB | Mapping: No=0, Yes=1 |
| `le_drained.pkl` | `LabelEncoder` | ~0.5 KB | Mapping: No=0, Yes=1 |

**Catatan ukuran file**: KNN memiliki ukuran file terbesar karena menyimpan seluruh data training (2.320 record x 7 fitur), sedangkan Naive Bayes paling kecil karena hanya menyimpan parameter statistik (mean, variance) per kelas per fitur.

---

## Cara Menjalankan Lokal

### Prasyarat

- **Python** 3.10 atau lebih baru ([download](https://www.python.org/downloads/))
- **pip** (Python package manager, biasanya sudah termasuk dalam instalasi Python)
- **Git** (opsional, untuk clone repository)

### Langkah-langkah

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd MLPersonality
   ```

2. **Buat virtual environment**
   ```bash
   python -m venv venv
   ```

3. **Aktifkan virtual environment**
   ```bash
   # Windows (Command Prompt)
   venv\Scripts\activate

   # Windows (PowerShell)
   venv\Scripts\Activate.ps1

   # Linux / macOS
   source venv/bin/activate
   ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Jalankan aplikasi**
   ```bash
   python app.py
   ```

6. **Buka browser** di `http://localhost:5000`

7. **Login** dengan akun: `admin` / `12345`

### Troubleshooting

| Masalah | Solusi |
|---------|--------|
| `ModuleNotFoundError: No module named 'flask'` | Pastikan virtual environment sudah aktif dan jalankan `pip install -r requirements.txt` |
| `Address already in use` | Port 5000 sudah digunakan. Jalankan: `python app.py` lalu buka port lain, atau matikan proses yang menggunakan port 5000 |
| `FileNotFoundError: .pkl` | Pastikan folder `api/` berisi semua file `.pkl` dan `metrics.json` |

---

## Deploy ke Vercel

### Metode 1: Vercel CLI

1. **Install Vercel CLI** (memerlukan Node.js)
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy ke production**
   ```bash
   vercel --prod
   ```

4. **(Opsional) Set secret key sebagai environment variable**
   ```bash
   vercel env add SECRET_KEY
   ```

### Metode 2: GitHub Integration (Rekomendasi)

1. Push repository ke GitHub
2. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub
3. Klik **"New Project"** dan pilih repository MLPersonality
4. Vercel akan otomatis mendeteksi konfigurasi dari `vercel.json`
5. Klik **"Deploy"**
6. Setiap push ke branch `main` akan **otomatis trigger deploy ulang**

### Konfigurasi Vercel (`vercel.json`)

```json
{
  "builds": [
    {
      "src": "api/index.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/api/index"
    }
  ]
}
```

**Penjelasan:**
- `builds`: Menentukan `api/index.py` sebagai entry point yang di-build menggunakan `@vercel/python` runtime
- `routes`: Semua request (`/(.*)`) diarahkan ke `/api/index`, yang kemudian meneruskan ke Flask untuk diproses
- Flask menangani routing internal (`/login`, `/hasil`, dll) dan serving static files (`/static/Theme.js`)

### File Entry Point (`api/index.py`)

```python
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app import app
```

File ini menambahkan root proyek ke Python path lalu mengimpor objek `app` Flask, sehingga Vercel dapat menjalankan aplikasi.

---

## Penjelasan File

### File Python

| File | Deskripsi |
|------|-----------|
| `app.py` | File utama aplikasi Flask (~185 baris). Berisi: (1) Load model `.pkl` saat startup, (2) Fungsi `predict_from_answers()` untuk pemetaan kuesioner ke fitur dan prediksi, (3) Route definitions untuk semua halaman. Model di-load **sekali** saat startup, bukan per-request, untuk efisiensi. |
| `api/index.py` | Entry point untuk Vercel serverless function (~5 baris). Menambahkan root proyek ke `sys.path` dan mengimpor objek `app` dari `app.py`. |

### File Model (.pkl)

Semua file `.pkl` diserialisasi menggunakan **joblib** dan di-load saat aplikasi startup oleh `app.py`:

| File | Tipe Objek | Deskripsi |
|------|-----------|-----------|
| `model_knn.pkl` | `KNeighborsClassifier` | Model KNN dengan k=5, trained pada 2.320 data |
| `model_svm.pkl` | `SVC` | Model SVM dengan kernel linear dan probability=True, trained pada 2.320 data |
| `model_nb.pkl` | `GaussianNB` | Model Gaussian Naive Bayes, trained pada 2.320 data |
| `scaler.pkl` | `StandardScaler` | Scaler yang di-fit pada data training untuk normalisasi fitur (menyimpan mean dan std) |
| `le_target.pkl` | `LabelEncoder` | Encoder untuk label target (Extrovert=0, Introvert=1) |
| `le_stage.pkl` | `LabelEncoder` | Encoder untuk fitur Stage_fear (No=0, Yes=1) |
| `le_drained.pkl` | `LabelEncoder` | Encoder untuk fitur Drained_after_socializing (No=0, Yes=1) |

### File Konfigurasi

| File | Deskripsi |
|------|-----------|
| `metrics.json` | Menyimpan metrik evaluasi yang dihitung saat training: accuracy, precision, recall, F1-score per model; confusion matrix per model; probabilitas rata-rata per model; jumlah data training dan testing. Disajikan di halaman hasil tanpa perlu komputasi ulang. |
| `requirements.txt` | Daftar 5 dependencies Python: `flask==3.1.3`, `numpy==2.0.2`, `pandas==2.2.2`, `scikit-learn==1.6.1`, `joblib==1.5.3` |
| `vercel.json` | Konfigurasi Vercel: build dari `api/index.py` menggunakan `@vercel/python`, route semua request ke Flask |
| `.gitignore` | Mengabaikan: `__pycache__/`, `*.pyc`, `flask_session/`, `.env`, `.vercel`, `node_modules/`, `.DS_Store`, `venv/`, `.venv/` |

### File Template (HTML)

| File | Deskripsi |
|------|-----------|
| `Login.html` | Form login dengan 2 field (username, password). Validasi via AJAX menggunakan fetch API. Tombol toggle show/hide password. Mendukung dark mode. Menampilkan hint akun demo. |
| `Kuesioner.html` | 10 pertanyaan yang di-generate via JavaScript. Setiap pertanyaan memiliki 2 tombol (Ya/Tidak) yang meng-update hidden input. Progress bar real-time menunjukkan jumlah pertanyaan yang dijawab. Tombol Submit baru aktif setelah semua 10 pertanyaan dijawab. |
| `HasilAnalisis.html` | Halaman paling kompleks. Menampilkan: (1) Hero section dengan prediksi akhir dan confidence, (2) Kartu prediksi per algoritma dengan probability bars, (3) Kartu metrik (Accuracy, Precision, Recall, F1) per algoritma, (4) 4 chart Chart.js. Data dikirim dari Flask sebagai variabel Jinja2 dan dikonversi ke JSON untuk Chart.js. |
| `Tentang.html` | Informasi statis: tujuan eksperimen, penjelasan 3 algoritma (KNN, SVM, NB) dengan ikon, glosarium 4 istilah (Akurasi, F1-Score, Presisi, Confusion Matrix). Layout sidebar konsisten. |
| `Pengaturan.html` | 3 toggle: dark mode, notifikasi, simpan otomatis. Modal konfirmasi saat menyimpan. Toast notification untuk feedback. Dark mode menggunakan `localStorage` dan diterapkan via `Theme.js`. |

### File Statis

| File | Deskripsi |
|------|-----------|
| `Theme.js` | Handler dark mode (~78 baris). Membaca `localStorage.getItem('darkMode')`, menerapkan class `dark-mode` ke `<html>` dan `<body>`. Menyisipkan `<style>` dinamis untuk mengubah warna background, teks, border, input, dan card. Dijalankan **sebelum DOM render** (di `<head>`) untuk menghindari flash of white content saat halaman dimuat. |

---

## Kesimpulan dan Saran

### Kesimpulan

1. **Ketiga algoritma berhasil mengklasifikasikan** tipe kepribadian Ekstrovert dan Introvert dengan akurasi tinggi (>92%), membuktikan bahwa data perilaku sosial merupakan prediktor yang efektif untuk klasifikasi kepribadian.

2. **SVM dan Naive Bayes menunjukkan performa terbaik** dengan akurasi identik sebesar **92.93%**, diikuti oleh KNN dengan akurasi **92.41%**. Selisih performa yang kecil (~0.5%) menunjukkan bahwa ketiga algoritma sama-sama efektif untuk dataset ini.

3. **Confusion matrix menunjukkan tidak ada bias kelas** yang signifikan pada ketiga model. Jumlah false positive dan false negative relatif seimbang, menandakan model tidak cenderung memprediksi satu kelas lebih sering dari yang lain.

4. **Aplikasi web berhasil dibangun** menggunakan Flask dan Chart.js yang mampu memprediksi kepribadian pengguna secara real-time berdasarkan kuesioner 10 pertanyaan, dengan sistem voting mayoritas dari 3 algoritma untuk hasil yang lebih robust.

5. **Arsitektur pre-trained model (.pkl)** memungkinkan prediksi yang cepat tanpa perlu melatih ulang model, sehingga aplikasi dapat di-deploy secara efisien sebagai serverless function di Vercel.

### Saran untuk Pengembangan

1. **Hyperparameter tuning**: Melakukan pencarian parameter optimal menggunakan `GridSearchCV` atau `RandomizedSearchCV`, khususnya untuk nilai `k` pada KNN dan parameter `C` pada SVM.

2. **Cross-validation**: Menggunakan k-fold cross-validation (misal 5-fold atau 10-fold) untuk evaluasi yang lebih robust dan mengurangi variance pada estimasi performa.

3. **Penambahan algoritma**: Membandingkan dengan algoritma lain seperti Random Forest, Gradient Boosting (XGBoost), atau Neural Network untuk perspektif yang lebih luas.

4. **Kuesioner yang lebih kaya**: Mengembangkan kuesioner dengan skala Likert (1-5) alih-alih biner (Ya/Tidak) untuk pemetaan fitur yang lebih granular dan akurat.

5. **Database pengguna**: Mengimplementasikan database (SQLite/PostgreSQL) untuk menyimpan akun pengguna, riwayat tes, dan data longitudinal.

6. **Spektrum kepribadian**: Memperluas klasifikasi ke spektrum yang lebih luas (misal MBTI 16 tipe atau Big Five 5 dimensi) dengan dataset yang sesuai.

7. **A/B testing**: Menguji apakah pengguna merasa hasil prediksi akurat melalui feedback form, untuk validasi eksternal di luar metrik teknis.

---

## Referensi

1. Jung, C. G. (1921). *Psychological Types*. Rascher Verlag.
2. Pedregosa, F., et al. (2011). Scikit-learn: Machine Learning in Python. *Journal of Machine Learning Research*, 12, 2825-2830.
3. Cover, T., & Hart, P. (1967). Nearest Neighbor Pattern Classification. *IEEE Transactions on Information Theory*, 13(1), 21-27.
4. Cortes, C., & Vapnik, V. (1995). Support-Vector Networks. *Machine Learning*, 20(3), 273-297.
5. Rish, I. (2001). An Empirical Study of the Naive Bayes Classifier. *IJCAI Workshop on Empirical Methods in AI*.
6. Kaggle Dataset: [Extrovert vs Introvert Behavior Data](https://www.kaggle.com/datasets/rakeshkapilavai/extrovert-vs-introvert-behavior-data)
7. Flask Documentation: [flask.palletsprojects.com](https://flask.palletsprojects.com/)
8. scikit-learn Documentation: [scikit-learn.org](https://scikit-learn.org/stable/)
9. Chart.js Documentation: [chartjs.org](https://www.chartjs.org/docs/latest/)
10. Vercel Python Runtime: [vercel.com/docs/functions/runtimes/python](https://vercel.com/docs/functions/runtimes/python)

---

## Lisensi

Proyek ini dibuat untuk keperluan akademik (skripsi). Seluruh kode sumber bersifat open-source dan dapat digunakan untuk keperluan edukasi dan penelitian.
