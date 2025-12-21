// 1. Fungsi Preloader (Menghilangkan layar putih saat web siap)
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // 2. Menandai Menu Aktif
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // 3. LOGIKA DROPDOWN MOBILE (Klik 1: Buka, Klik 2: Link)
    const dropdown = document.querySelector(".dropdown");
    const dropbtn = document.querySelector(".dropbtn");
    let isDropdownOpen = false;

    if (dropbtn) {
        dropbtn.addEventListener("click", function(e) {
            if (window.innerWidth <= 768) {
                if (!isDropdownOpen) {
                    // Sentuhan Pertama: Buka Dropdown
                    e.preventDefault();
                    dropdown.classList.add("active");
                    isDropdownOpen = true;
                } 
                // Sentuhan Kedua: Biarkan browser masuk ke layanan.html
            }
        });
    }

    // 4. Scroll Reveal (Muncul saat scroll)
    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal, .s-card, .f-box");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Jalankan saat awal
});
/* --- LOGIKA NAVIGASI RAPI --- */
document.addEventListener("DOMContentLoaded", function() {
    const dropBtn = document.querySelector(".dropbtn");
    const dropdown = document.querySelector(".dropdown");

    if (dropBtn) {
        dropBtn.addEventListener("click", function(e) {
            if (window.innerWidth <= 768) {
                // Jika belum terbuka, buka dropdown (Accordion style)
                if (!dropdown.classList.contains("active")) {
                    e.preventDefault(); 
                    dropdown.classList.add("active");
                } 
                // Jika sudah terbuka (klik kedua), maka akan masuk ke layanan.html
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const layananBtn = document.getElementById("layanan-btn");
    const dropdownParent = document.querySelector(".dropdown");

    if (layananBtn) {
        layananBtn.addEventListener("click", function(e) {
            // Hanya berlaku untuk tampilan Mobile (lebar layar <= 768px)
            if (window.innerWidth <= 768) {
                // Berhenti pindah halaman agar menu bisa di-toggle
                e.preventDefault();
                e.stopPropagation();

                // Logika Buka-Tutup (Toggle)
                // Jika sudah ada class 'open', maka hapus (tutup). Jika belum ada, maka tambah (buka).
                dropdownParent.classList.toggle("open");
            }
        });
    }

    // Menutup dropdown secara otomatis jika pengguna mengklik area di luar menu
    document.addEventListener("click", function(e) {
        if (dropdownParent && !dropdownParent.contains(e.target)) {
            dropdownParent.classList.remove("open");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const btnOpen = document.getElementById("mobile-menu-open");
    const btnClose = document.getElementById("mobile-menu-close");
    const navContent = document.getElementById("nav-content");
    const overlay = document.getElementById("nav-overlay");
    const layananBtn = document.getElementById("layanan-btn");
    const dropdownParent = document.querySelector(".dropdown");

    // 1. Buka Menu Sidebar
    btnOpen.addEventListener("click", () => {
        navContent.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Stop scroll body
    });

    // 2. Tutup Menu Sidebar
    const closeSidebar = () => {
        navContent.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "auto"; // Aktifkan scroll body
    };

    btnClose.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    // 3. Dropdown Accordion di Mobile
    if (layananBtn) {
        layananBtn.addEventListener("click", function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdownParent.classList.toggle("open");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const layananBtn = document.getElementById("layanan-btn");
    const dropdownParent = document.querySelector(".dropdown");

    // 1. Logika Klik untuk Buka/Tutup (Toggle)
    if (layananBtn) {
        layananBtn.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation(); // Mencegah event "klik di luar" langsung terpicu
                dropdownParent.classList.toggle("open");
            }
        });
    }

    // 2. Logika Klik di Luar Menu (Back/Close)
    document.addEventListener("click", (e) => {
        // Jika menu sedang terbuka DAN yang diklik bukan bagian dari dropdown
        if (dropdownParent.classList.contains("open")) {
            if (!dropdownParent.contains(e.target)) {
                dropdownParent.classList.remove("open");
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. LOGIKA DROPDOWN MOBILE (Close X & Click Outside) ---
    const layananBtn = document.getElementById("layanan-btn");
    const dropdownParent = document.querySelector(".dropdown");

    if (layananBtn) {
        layananBtn.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                dropdownParent.classList.toggle("open");
            }
        });
    }

    // Klik di luar untuk menutup dropdown (Back)
    document.addEventListener("click", (e) => {
        if (dropdownParent && dropdownParent.classList.contains("open")) {
            if (!dropdownParent.contains(e.target)) {
                dropdownParent.classList.remove("open");
            }
        }
    });


    // --- 2. EFEK SLIDE SAAT SCROLL (Scroll Reveal) ---
    const revealElements = () => {
        // Ambil semua elemen dengan class 'reveal'
        const reveals = document.querySelectorAll(".reveal, .s-card, .feature-item");
        
        reveals.forEach((el) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100; // Jarak pemicu munculnya elemen

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    };

    // Jalankan saat scroll dan saat halaman pertama dimuat
    window.addEventListener("scroll", revealElements);
    revealElements(); 


    // --- 3. PRELOADER ---
    const loader = document.getElementById("preloader");
    if (loader) {
        window.addEventListener("load", () => {
            loader.style.opacity = "0";
            setTimeout(() => { loader.style.display = "none"; }, 500);
        });
    }
});

// Inisialisasi Swiper Portfolio
const swiper = new Swiper('.portfolio-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Pengaturan jumlah slide berdasarkan lebar layar
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});