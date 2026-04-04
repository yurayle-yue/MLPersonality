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
