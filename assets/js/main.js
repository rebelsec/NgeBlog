// Lightmode Darkmode start
document.addEventListener("DOMContentLoaded", function () {
  var darkModeToggle = document.getElementById("darkModeToggle");
  var sunSvg = darkModeToggle.querySelector(".h-8.w-8");
  var moonSvg = darkModeToggle.querySelector(".h-8.w-8.hidden");

  // Mengecek apakah pengguna sebelumnya memilih dark mode
  var isDarkMode = localStorage.getItem("darkMode") === "enabled";
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
    sunSvg.classList.add("hidden");
    moonSvg.classList.remove("hidden");
  }

  darkModeToggle.addEventListener("click", function () {
    // Toggle mode gelap dan terang pada elemen <html>
    document.documentElement.classList.toggle("dark");

    // Toggle tampilan SVG
    sunSvg.classList.toggle("hidden");
    moonSvg.classList.toggle("hidden");

    // Simpan preferensi dark mode pada localStorage
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

// Lightmode Darkmode end

// Hamburger mode start
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.querySelector("#hamburger-button");
  const mobileMenu = document.querySelector("#mobile-menu");

  // Toggle mobile menu visibility
  hamburgerButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});
// Hamburger mode end
