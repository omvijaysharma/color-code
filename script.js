// DOM Elements
const input = document.getElementById('colorInput');
const colorBox = document.getElementById('colorBox');
const errorMessage = document.getElementById('errorMessage');
const suggestionMessage = document.getElementById('suggestionMessage');
const colorsPanel = document.getElementById('colorsPanel');

// Default Colors for Suggestions
const defaultColors = ["#000000", "#FFFFFF", "#FF5733", "#33FF57", "#5733FF"];

// Ensure "#" is always present in input
input.value = "#";
input.addEventListener("input", () => {
    if (!input.value.startsWith("#")) {
        input.value = "#" + input.value.replace(/#/g, "");
    }
});
input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && input.value === "#") {
        event.preventDefault();
    }
});

// Validate and Update Color
function validateAndChangeColor() {
    const colorCode = input.value;
    if (/^#[0-9A-Fa-f]{3,6}$/.test(colorCode)) {
        colorBox.style.backgroundColor = colorCode;
        errorMessage.style.visibility = "hidden";
        suggestionMessage.style.visibility = "hidden";
    } else {
        colorBox.style.backgroundColor = "#fff";
        errorMessage.style.visibility = "visible";
        const suggestedColor = defaultColors[Math.floor(Math.random() * defaultColors.length)];
        suggestionMessage.textContent = `Suggested color: ${suggestedColor}`;
        suggestionMessage.style.visibility = "visible";
    }
}

// Toggle Colors Panel
function toggleColorsPanel() {
    if (colorsPanel.style.left === "0px") {
        colorsPanel.style.left = "-45vw";
    } else {
        colorsPanel.style.left = "0px";
    }
}