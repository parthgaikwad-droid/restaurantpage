document.addEventListener("DOMContentLoaded", () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[new Date().getDay()];
    const specials = {
        "Monday": "Chef's Truffle Pasta",
        "Tuesday": "Woodfired Margherita Pizza",
        "Wednesday": "Grilled Ribeye Special",
        "Thursday": "Artisan Sushi Platter",
        "Friday": "Spicy Garlic Jumbo Shrimp",
        "Saturday": "Chocolate Lava Cake Delight",
        "Sunday": "Family Feast Platter"
    };
    const badge = document.getElementById("specialBadge");
    if (badge) {
        badge.innerText = `✨ Today's Special (${today}): ${specials[today] || "Chef's Surprise"}`;
    }

    const galleryImages = document.querySelectorAll(".gallery-img");
    const modalImage = document.getElementById("modalImage");
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            modalImage.src = img.src;
        });
    });

    const form = document.getElementById("contactForm");
    const successAlert = document.getElementById("formSuccess");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!form.checkValidity()) {
                e.stopPropagation();
                form.classList.add("was-validated");
                successAlert.classList.add("d-none");
            } else {
                form.classList.remove("was-validated");
                successAlert.classList.remove("d-none");
                form.reset();
            }
        });
    }

    const darkModeToggle = document.getElementById("darkModeToggle");
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkModeToggle.innerText = "☀️ Light Mode";
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            let theme = "light";
            if (document.body.classList.contains("dark-mode")) {
                theme = "dark";
                darkModeToggle.innerText = "☀️ Light Mode";
            } else {
                darkModeToggle.innerText = "🌙 Dark Mode";
            }
            localStorage.setItem("theme", theme);
        });
    }
});