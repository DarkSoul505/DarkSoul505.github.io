window.addEventListener('scroll', function() {
    var navbar = document.getElementById('container');
    var navLinks = container.querySelectorAll('a');
    var heading = container.querySelectorAll('.text');


    if (window.scrollY > 50) {
        navbar.style.backgroundColor ='rgba(0, 0, 0, 0.1)';  // Sesuaikan nilai ini dengan kapan efek blur harus diaktifkan // Atur latar belakang menjadi warna hitam dengan kejernihan rendah
        navbar.style.backdropFilter = 'blur(20px)'; // Terapkan efek blur saat di-scroll
        navbar.style.color = 'white'; // Atur warna teks menjadi putih
        
        navLinks.forEach(function(link) {
            link.style.color ='rgba(255, 255, 255, 1)';
        });

        navTex
    } else {
        navbar.style.backgroundColor = 'transparent'; // Kembalikan latar belakang menjadi transparan
        navbar.style.backdropFilter = 'blur(0)'; // Kembalikan ke efek blur tidak aktif saat di-scroll ke atas
        navbar.style.color = 'black'; // Kembalikan warna teks menjadi hitam

        navLinks.forEach(function(link) {
            link.style.color = 'black';
        });
    }
});
