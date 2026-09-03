const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const searchBtn = document.getElementById("searchBtn");

// Mobile menu
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Active navigation link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Close mobile menu
        navMenu.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});

// Search interaction
searchBtn.addEventListener("click", () => {
    const searchTerm = prompt("What are you looking for?");

    if (searchTerm && searchTerm.trim() !== "") {
        alert(`Searching for: ${searchTerm.trim()}`);
    }
});
