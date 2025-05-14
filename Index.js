window.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".input", {
        strings: ["Software Development", "Cyber Security", "Databases"],
        typeSpeed: 70,
        backSpeed: 55,
        loop: true
    });
});

const toggle = document.querySelector('.menu-toggle'); 
const nav = document.querySelector('.navlinks-mobile'); 
const navLinks = document.querySelectorAll('.navlinks-mobile a');

toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Only run on screens <= 768px
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    if (!isSmallScreen) return;

    const projectItems = document.querySelectorAll(".project-item");
    let lastTapped = null;

    projectItems.forEach(item => {
        const link = item.querySelector("a");

        item.addEventListener("touchstart", function (e) {
        if (lastTapped !== this) {
            e.preventDefault();

            // Remove tapped state from others
            projectItems.forEach(i => i.classList.remove("tapped"));

            // Set current as tapped
            this.classList.add("tapped");
            lastTapped = this;

            // Optional: auto-remove the overlay after 1.5 seconds
            setTimeout(() => {
            if (this === lastTapped) {
                this.classList.remove("tapped");
                lastTapped = null;
            }
            }, 1500);
        } else {
            // Second tap - follow the link
            lastTapped = null;
            this.classList.remove("tapped");
            window.location = link.href;
        }
        });
    });
});