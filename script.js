const title = document.getElementById("title");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const colorPicker = document.getElementById("colorPicker");
const saveColorBtn = document.getElementById("saveColorBtn");

// Load saved preferences
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    const savedColor = localStorage.getItem("favoriteColor");

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add("light"); // default theme
    }

    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
};

// Toggle light/dark theme
toggleThemeBtn.onclick = () => {
    // Remove saved background color so theme color shows
    document.body.style.backgroundColor = "";

    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);

    animateTitle();
};

// Save background color
saveColorBtn.onclick = () => {
    const selectedColor = colorPicker.value;
    localStorage.setItem("favoriteColor", selectedColor);
    document.body.style.backgroundColor = selectedColor;

    animateTitle();
};

// Reusable animation function
function animateTitle() {
    title.classList.add("animate");
    setTimeout(() => title.classList.remove("animate"), 500);
}
