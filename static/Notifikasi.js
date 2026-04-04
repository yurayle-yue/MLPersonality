/**
 * Sistem Notifikasi ML Personality
 * Menyimpan & menampilkan notifikasi di dropdown bell icon
 */

const NOTIF_KEY = 'mlNotifikasi';
const NOTIF_READ_KEY = 'mlNotifRead';

// --- Data Layer ---
function getNotifikasi() {
    return JSON.parse(localStorage.getItem(NOTIF_KEY) || '[]');
}

function simpanNotifikasi(list) {
    localStorage.setItem(NOTIF_KEY, JSON.stringify(list));
}

function tambahNotifikasi(judul, pesan, tipe = 'info') {
    // tipe: 'sukses', 'info', 'peringatan'
    const list = getNotifikasi();
    list.unshift({
        id: Date.now(),
        judul: judul,
        pesan: pesan,
        tipe: tipe,
        waktu: new Date().toLocaleString('id-ID'),
        dibaca: false
    });
    // Max 20 notifikasi
    if (list.length > 20) list.length = 20;
    simpanNotifikasi(list);
    updateBadge();
}

function tandaiSemuaDibaca() {
    const list = getNotifikasi();
    list.forEach(n => n.dibaca = true);
    simpanNotifikasi(list);
    updateBadge();
}

function hapusNotifikasi(id) {
    let list = getNotifikasi();
    list = list.filter(n => n.id !== id);
    simpanNotifikasi(list);
    updateBadge();
    renderNotifList();
}

function hapusSemuaNotifikasi() {
    simpanNotifikasi([]);
    updateBadge();
    renderNotifList();
}

function getUnreadCount() {
    return getNotifikasi().filter(n => !n.dibaca).length;
}

// --- UI Layer ---
function updateBadge() {
    const badge = document.getElementById('notifBadge');
    const count = getUnreadCount();
    if (badge) {
        if (count > 0) {
            badge.style.display = 'flex';
            badge.textContent = count > 9 ? '9+' : count;
        } else {
            badge.style.display = 'none';
        }
    }
}

function getIkonTipe(tipe) {
    switch (tipe) {
        case 'sukses': return { icon: 'fa-check-circle', color: 'text-green-500', bg: 'bg-green-50' };
        case 'peringatan': return { icon: 'fa-exclamation-triangle', color: 'text-amber-500', bg: 'bg-amber-50' };
        default: return { icon: 'fa-info-circle', color: 'text-blue-500', bg: 'bg-blue-50' };
    }
}

function renderNotifList() {
    const container = document.getElementById('notifListContainer');
    if (!container) return;

    const list = getNotifikasi();

    if (list.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-10 px-4">
                <div class="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                    <i class="fas fa-bell-slash text-gray-300 text-2xl"></i>
                </div>
                <p class="text-sm font-bold text-gray-400">Belum ada notifikasi</p>
                <p class="text-xs text-gray-300 mt-1">Aktivitas Anda akan muncul di sini</p>
            </div>`;
        return;
    }

    let html = '';
    list.forEach(n => {
        const { icon, color, bg } = getIkonTipe(n.tipe);
        const unreadStyle = n.dibaca ? '' : 'border-l-4 border-blue-500';
        const unreadBg = n.dibaca ? '' : 'bg-blue-50/30';
        html += `
            <div class="notif-item flex items-start gap-3 p-3 md:p-4 hover:bg-gray-50 transition-colors rounded-xl ${unreadStyle} ${unreadBg} group" data-id="${n.id}">
                <div class="w-9 h-9 ${bg} rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <i class="fas ${icon} ${color} text-sm"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs md:text-sm font-bold text-gray-800 leading-snug">${n.judul}</p>
                    <p class="text-[11px] md:text-xs text-gray-500 mt-0.5 leading-relaxed">${n.pesan}</p>
                    <p class="text-[10px] text-gray-300 mt-1 font-bold">${n.waktu}</p>
                </div>
                <button onclick="event.stopPropagation(); hapusNotifikasi(${n.id})" class="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 transition-all p-1 shrink-0" title="Hapus">
                    <i class="fas fa-times text-xs"></i>
                </button>
            </div>`;
    });
    container.innerHTML = html;
}

function toggleNotifPanel() {
    const panel = document.getElementById('notifPanel');
    const overlay = document.getElementById('notifOverlay');
    if (!panel) return;

    const isOpen = !panel.classList.contains('hidden');
    if (isOpen) {
        panel.classList.add('hidden');
        overlay.classList.add('hidden');
    } else {
        renderNotifList();
        panel.classList.remove('hidden');
        overlay.classList.remove('hidden');
        // Tandai semua dibaca saat panel dibuka
        setTimeout(() => tandaiSemuaDibaca(), 800);
    }
}

// --- Notifikasi Otomatis: Selamat Datang (1x per sesi) ---
function notifSelamatDatang() {
    if (!sessionStorage.getItem('welcomeNotifShown')) {
        const jam = new Date().getHours();
        let salam = 'Selamat Pagi';
        if (jam >= 11 && jam < 15) salam = 'Selamat Siang';
        else if (jam >= 15 && jam < 18) salam = 'Selamat Sore';
        else if (jam >= 18 || jam < 5) salam = 'Selamat Malam';

        tambahNotifikasi(
            `${salam}!`,
            'Selamat datang kembali di ML Personality. Isi kuesioner untuk menganalisis tipe kepribadian Anda.',
            'info'
        );
        sessionStorage.setItem('welcomeNotifShown', 'true');
    }
}

// --- Notifikasi Hasil Analisis (dipanggil dari HasilAnalisis.html) ---
function notifHasilAnalisis(prediksi, confidence) {
    if (!sessionStorage.getItem('hasilNotifShown')) {
        tambahNotifikasi(
            'Analisis Selesai!',
            `Hasil prediksi: ${prediksi} dengan confidence ${confidence}%. Lihat detail di halaman Hasil Analisis.`,
            'sukses'
        );
        sessionStorage.setItem('hasilNotifShown', 'true');
    }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', function () {
    updateBadge();
    notifSelamatDatang();
});
