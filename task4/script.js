const heading = document.querySelector(".main-heading");
const colorList = document.querySelector(".color-list");
const animationList = document.querySelector(".animation-list");
const defaultColor = document.querySelector(".color.none");
const defaultAnimation = document.querySelector(".animation.none");
const applyBtn = document.querySelector(".apply-btn");
const resetBtn = document.querySelector(".reset-btn");
const feedbackContainer = document.querySelector(".feedback");

let feedbackTimeout;

// Constants for default styles
const DEFAULT_COLOR = "#505050";

const SETTINGS = {
  colors: {
    blue: "#2a71d0",
    red: "#d02a2a",
    green: "#2ad02a",
  },
  animations: ["animate-bounce", "animate-shake", "animate-fade"],
};

const selectedTypes = {
  color: null,
  animation: null,
};

/**
 * Updates the 'selected' class for a clicked element within a parent container.
 * @param {HTMLElement} target - The clicked element.
 * @param {string} parentSelector - The parent container selector.
 * @returns {void}
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
 * Resets the heading styles to the default state, including color and animations.
 * Clears the `selectedTypes` object and removes any applied animation classes.
 *
 * @returns {void}
 */
function resetHeading() {
  selectedTypes.color = null;
  selectedTypes.animation = null;
  heading.style.color = DEFAULT_COLOR;
  heading.classList.remove(...SETTINGS.animations);
}

/**
 * Displays a feedback message in the feedback container.
 * Replaces any existing message and removes it after a delay.
 *
 * @param {string} message - The feedback message to display.
 *
 * @returns {void}
 */
function showFeedback(message) {
  // Clear any existing timeout
  if (feedbackTimeout) clearTimeout(feedbackTimeout);

  // Update the feedback message
  feedbackContainer.textContent = message;

  // Remove the feedback message after 3 seconds
  feedbackTimeout = setTimeout(() => {
    feedbackContainer.textContent = "";
  }, 3000);
}

/**
 * Hides the feedback message in the feedback container immediately after user makes a selection.
 * Clears any existing timeout to prevent delayed removal of feedback.
 *
 * @returns {void}
 */
function hideFeedback() {
  if (feedbackTimeout) clearTimeout(feedbackTimeout);
  feedbackContainer.textContent = "";
}

/**
 * Applies the selected color to the heading element.
 * If no color is selected, the default color is used.
 *
 * @returns {void}
 */
function applyColor() {
  heading.style.color = selectedTypes.color
    ? SETTINGS.colors[selectedTypes.color]
    : DEFAULT_COLOR;
}

/**
 * Applies the selected animation to the heading element.
 * If no animation is selected, no animation is applied. Automatically removes the animation class after it completes.
 *
 * @returns {void}
 */
function applyAnimation() {
  heading.classList.remove(...SETTINGS.animations);

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
 * Applies the selected color and animation to the heading element.
 * If no valid selections are made, provides user feedback.
 *
 * @returns {void}
 */
function applySelection() {
  const isColorNone = selectedTypes.color === null;
  const isAnimationNone = selectedTypes.animation === null;

  // If both are none, provide feedback but suppress the message if "none" is explicitly selected
  if (isColorNone && isAnimationNone) {
    const colorSelected = colorList.querySelector(".selected");
    const animationSelected = animationList.querySelector(".selected");

    // Check if the user explicitly selected "none" for both
    if (
      colorSelected?.getAttribute("data-type") !== "none" &&
      animationSelected?.getAttribute("data-type") !== "none"
    ) {
      showFeedback("Please select either a color or animation!");
      return;
    }
  }

  applyColor();
  applyAnimation();
}

/**
 * Event handler to update the currently selected color and/or animation.
 * Updates the `selectedTypes` object and highlights the clicked element.
 *
 * @param {Object} e - The event object from the click event.
 * @param {string} parentSelector - CSS selector for the parent container of the elements.
 * @param {string} type - The type of selection ('color' or 'animation').
 * @returns {void}
 */
function handleSelection(e, parentSelector, type) {
  const target = e.target;

  if (!target.classList.contains(type)) return;

  // Retrieve the value from the data-type attribute. Using data-types is more readable as opposed in this case to classes as we'd have to access the indices from the classList due to multiple classes.
  const selectedType = target.getAttribute("data-type");

  // If the type is "none", set the value to null; otherwise, set it to the selectedType
  selectedTypes[type] = selectedType === "none" ? null : selectedType;

  updateSelected(target, parentSelector);

  // Hide feedback after a valid selection
  hideFeedback();
}

/**
 * Sets default selections to "none" for both color and animation options.
 * This visually highlights the default state for the user.
 *
 * @returns {void}
 */
function setDefaultSelections() {
  if (defaultColor) {
    updateSelected(defaultColor, ".color-list");
  }
  if (defaultAnimation) {
    updateSelected(defaultAnimation, ".animation-list");
  }
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
  applySelection();
});

// Reset color, animation, and selections
resetBtn.addEventListener("click", () => {
  resetHeading();
  document
    .querySelectorAll(".selected")
    .forEach((el) => el.classList.remove("selected"));
});

setDefaultSelections();
