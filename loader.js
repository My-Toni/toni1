// Simulasikan loading halaman
window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    // Tambahkan delay untuk simulasi loading
    setTimeout(function() {
        loadingOverlay.classList.add('hidden');
    }, 1000); // Ubah delay sesuai kebutuhan
});