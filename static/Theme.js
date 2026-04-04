function applyTheme() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
    }
}

// Panggil langsung agar tidak ada kedipan putih (flash) saat refresh halaman
applyTheme();

// Jalankan ulang saat DOM selesai dimuat untuk memastikan elemen body ter-cover
document.addEventListener('DOMContentLoaded', applyTheme);

// Masukkan gaya CSS yang komprehensif agar semua bagian berubah gelap
const style = document.createElement('style');
style.innerHTML = `
    /* Transisi halus saat perpindahan mode */
    body, aside, main, div, nav, a, .bg-white {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }

    /* Latar belakang utama gelap total */
    .dark-mode, 
    .dark-mode body, 
    .dark-mode aside, 
    .dark-mode main, 
    .dark-mode .bg-white { 
        background-color: #0f172a !important; 
        color: #f8fafc !important; 
    }

    /* Warna Teks Terang */
    .dark-mode h1, .dark-mode h2, .dark-mode h3, .dark-mode h4, 
    .dark-mode p, .dark-mode label, .dark-mode span, .dark-mode i { 
        color: #f8fafc !important; 
    }

    /* Border dan Garis Pemisah Gelap */
    .dark-mode .border-gray-100, 
    .dark-mode .border-gray-200, 
    .dark-mode border-r, 
    .dark-mode border-b,
    .dark-mode div { 
        border-color: #1e293b !important; 
    }

    /* Navigasi dan Link */
    .dark-mode nav a:not(.sidebar-item-active) { 
        color: #94a3b8 !important; 
    }
    
    .dark-mode nav a:hover {
        background-color: #1e293b !important;
    }

    /* Card atau Kotak Konten */
    .dark-mode .bg-white {
        background-color: #1e293b !important;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3) !important;
    }

    /* Input Form (Login/Kuesioner) */
    .dark-mode input {
        background-color: #0f172a !important;
        border-color: #334155 !important;
        color: #ffffff !important;
    }

    /* Tombol atau Badge berwarna muda */
    .dark-mode .bg-blue-50, .dark-mode .bg-orange-50 {
        background-color: #1e293b !important;
    }

    /* Notification Panel Dark Mode */
    .dark-mode #notifPanel {
        background-color: #1e293b !important;
        border-color: #334155 !important;
    }
    .dark-mode #notifPanel .border-gray-100,
    .dark-mode #notifPanel .border-b {
        border-color: #334155 !important;
    }
    .dark-mode .notif-item:hover {
        background-color: #334155 !important;
    }
    .dark-mode .bg-green-50, .dark-mode .bg-amber-50 {
        background-color: #1e293b !important;
    }
`;
document.head.appendChild(style);