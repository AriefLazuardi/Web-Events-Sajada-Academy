const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  const div = document.querySelector("div#mobile-menu-2");

  div.classList.toggle("hidden");
});

const listMenu = document.querySelectorAll("ul#menu li");

listMenu.forEach((el) => {
  el.addEventListener("click", () => {
    // Hapus kelas "text-white" dari a dengan aria-current="page"
    const currentPage = document.querySelector('a[aria-current="page"]');
    if (currentPage) {
      currentPage.classList.remove("text-white");
      currentPage.classList.add("text-gray-400", "dark:text-gray-400");
    }
  });
});

// Dapatkan elemen tombol hamburger
var hamburgerBtn = document.getElementById("hamburger");

// Tambahkan event listener pada elemen tersebut
hamburgerBtn.addEventListener("click", function () {
  // Dapatkan elemen dengan id "mobile-menu-2"
  var mobileMenu = document.getElementById("mobile-menu-2");
  if (window.innerWidth < 640) {
    mobileMenu.classList.add("bg-[#0E3065]");
  } else {
    mobileMenu.classList.remove("bg-[#0E3065]");
  }
  // Tambahkan kelas "bg-[#0E3065]" pada elemen tersebut
});

// const currentPages = document.querySelectorAll('a[aria-current="page"]');

// // Menghapus kelas "bg-[#FFB707]" dari setiap elemen a yang ditemukan
// currentPages.forEach((page) => {
//   page.classList.remove("bg-[#FFB707]");
// });

document.addEventListener("DOMContentLoaded", function () {
  const currentPages = document.querySelectorAll('a[aria-current="page"]');

  // Menghapus kelas "bg-[#FFB707]" dari setiap elemen a yang ditemukan
  currentPages.forEach((page) => {
    page.classList.remove("text-[#text-white]");
  });
});

// Dapatkan elemen <li> dengan teks "Home"
var homeLi = document.querySelector('li a[aria-current="page"]');

// Tambahkan event listener pada elemen tersebut
homeLi.addEventListener("click", function () {
  // Ubah kelas dari "bg-[#FFB707]" menjadi "bg-[#0E3065]"
  homeLi.classList.remove("text-[#0E3065]");
  // homeLi.classList.remove("text-white", "dark:hover:text-white");
  homeLi.classList.add("text-gray-400", "dark:text-gray-400");
});

const btn = document.getElementById("hamburger");
btn.addEventListener("click", () => {});

new Swiper(".events-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
