// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "#050914";
        navbar.style.boxShadow = "0 4px 20px rgba(0, 217, 255, 0.15)";
    } else {
        navbar.style.background = "rgba(8, 13, 26, 0.95)";
        navbar.style.boxShadow = "none";
    }
});


// ===============================
// TYPING EFFECT
// ===============================

const typingText = document.querySelector(".hero h2");

const text = "AI & Data Science Student";

let index = 0;

function typeEffect() {

    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;

        setTimeout(typeEffect, 100);
    }
}

// Clear existing text before starting
if (typingText) {
    typingText.textContent = "";
    typeEffect();
}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const cards = document.querySelectorAll(
    ".skill, .project, .edu-box, .about"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Initial style
cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});


// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.style.color = "white";

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.style.color = "#00d9ff";
        }

    });

});
