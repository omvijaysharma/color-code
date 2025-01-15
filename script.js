// DOM Elements
const input = document.getElementById('colorInput');
const colorBox = document.getElementById('colorBox');
const errorMessage = document.getElementById('errorMessage');
const suggestionMessage = document.getElementById('suggestionMessage');
const colorsPanel = document.getElementById('colorsPanel');

// Slider Elements
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');
const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

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

        // Update sliders based on the color input
        const red = parseInt(colorCode.slice(1, 3), 16);
        const green = parseInt(colorCode.slice(3, 5), 16);
        const blue = parseInt(colorCode.slice(5, 7), 16);

        redSlider.value = red;
        greenSlider.value = green;
        blueSlider.value = blue;

        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;
    } else {
        colorBox.style.backgroundColor = "#fff";
        errorMessage.style.visibility = "visible";
        const suggestedColor = defaultColors[Math.floor(Math.random() * defaultColors.length)];
        suggestionMessage.textContent = `Suggested color: ${suggestedColor}`;
        suggestionMessage.style.visibility = "visible";
    }
}

// Update Color from Sliders
function updateColorFromSliders() {
    const red = parseInt(redSlider.value);
    const green = parseInt(greenSlider.value);
    const blue = parseInt(blueSlider.value);

    // Update displayed values
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;

    // Generate color code
    const colorCode = `#${red.toString(16).padStart(2, '0')}${green
        .toString(16)
        .padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

    // Apply color
    colorBox.style.backgroundColor = colorCode;
    input.value = colorCode;
}

// Toggle Colors Panel
function toggleColorsPanel() {
    if (colorsPanel.style.left === "0px") {
        colorsPanel.style.left = "-45vw";
    } else {
        colorsPanel.style.left = "0px";
    }
}