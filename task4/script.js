const heading = document.querySelector(".main-heading");
const colorList = document.querySelector(".color-list");
const animationList = document.querySelector(".animation-list");
const applyBtn = document.querySelector(".apply-btn");
const resetBtn = document.querySelector(".reset-btn");

// Constants for default styles
const DEFAULT_COLOR = "#505050";
const ANIMATION_CLASSES = ["animate-bounce", "animate-shake", "animate-fade"];
const COLORS = {
  blue: "#2a71d0",
  red: "#d02a2a",
  green: "#2ad02a",
};

const selectedTypes = {
  color: null,
  animation: null,
};

/**
 * Updates the 'selected' class for a clicked element within a parent container.
 * @param {HTMLElement} target - The clicked element.
 * @param {string} parentSelector - The parent container selector.
 */
function updateSelected(target, parentSelector) {
  const parent = document.querySelector(parentSelector);

  if (!parent || !target) {
    return;
  }

  parent
    .querySelectorAll(".selected")
    .forEach((el) => el.classList.remove("selected"));
  target.classList.add("selected");
}

/**
 * Resets the heading styles
 */
function resetHeading() {
  selectedTypes.color = null;
  selectedTypes.animation = null;
  heading.style.color = DEFAULT_COLOR;
  heading.classList.remove(...ANIMATION_CLASSES);
}

/**
 * Applies the selected color to the header
 */
function applyColor() {
  heading.style.color = selectedTypes.color
    ? COLORS[selectedTypes.color]
    : DEFAULT_COLOR;
}

/**
 * Applies the selected animation to the header
 */
function applyAnimation() {
  heading.classList.remove(...ANIMATION_CLASSES);

  if (selectedTypes.animation) {
    const animationClass = `animate-${selectedTypes.animation}`;
    heading.classList.add(animationClass);

    // Wait for animation to end before removing it
    heading.addEventListener(
      "animationend",
      () => {
        heading.classList.remove(animationClass);
      },
      { once: true } // Ensures the listener is removed after it runs once
    );
  }
}

/**
 * Event handler to update the currently selected color and/or animation
 * @param {Object} e - The event object
 * @param {string} parentSelector - The parent container selector.
 * @param {string} type - Either color or animation type
 */
function handleSelection(e, parentSelector, type) {
  const target = e.target;

  if (!target.classList.contains(type)) return;

  // Retrieve the value from the data-type attribute. Using data-types is more readable as opposed in this case to classes as we'd have to access the indices from the classList due to multiple classes.
  const selectedType = target.getAttribute("data-type");

  // If the type is "none", set the value to null; otherwise, set it to the selectedType
  selectedTypes[type] = selectedType === "none" ? null : selectedType;

  updateSelected(target, parentSelector);
}

// Selecting color
colorList.addEventListener("click", (e) =>
  handleSelection(e, ".color-list", "color")
);

// Selecting animation
animationList.addEventListener("click", (e) =>
  handleSelection(e, ".animation-list", "animation")
);

// Apply selected combination
applyBtn.addEventListener("click", () => {
  applyColor();
  applyAnimation();
});

// Reset color and animation
resetBtn.addEventListener("click", () => {
  resetHeading();
  document
    .querySelectorAll(".selected")
    .forEach((el) => el.classList.remove("selected"));
  selectedTypes.color = null;
  selectedTypes.animation = null;
});
