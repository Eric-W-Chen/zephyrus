# Interactive Demo Page (Task 4)

## Overview

This project demonstrates a fully interactive web page that allows users to customize the appearance and animation of a heading element. The page utilizes JavaScript, HTML, and CSS to dynamically manipulate the DOM, creating a seamless and engaging user experience. Users can select a color palette, choose an animation effect, and apply their preferences to the heading.

## Features

- **Dynamic Color and Animation Selection**: Users can choose from pre-defined color options (blue, red, green, or none) and animations (bounce, shake, fade, or none).
- **Responsive Design**: The layout and typography scale fluidly across devices and screen sizes.
- **Interactive Feedback**: The selected options are visually highlighted, and animations are reset for a smooth user experience.
- **Reset Functionality**: Users can easily reset the heading to its default state.

## Approach

### CSS Design

1. **Typography and Scaling**:

   - Font sizes are designed using a scalable system with `rem` units for consistent accessibility and responsiveness.
   - A typography system defines font sizes, weights, and line heights to create a cohesive visual hierarchy.

2. **Responsive Design**:

   - The layout employs `flexbox` for alignment and distribution of elements.
   - `rem` is used for general spacing, and `em` units are chosen for media queries because they adapt better to the user's base font size, ensuring a more accessible design.

3. **Media Queries**:

   - Media queries dynamically adjust font sizes, spacing, and layout for smaller screens (e.g., mobile devices).

   **Example**:

   ```css
   @media only screen and (max-width: 37.5em) {
     body {
       font-size: 1.4rem;
       padding: 2.5rem;
     }
   }
   ```

4. **Flexbox Layout**

- The page layout leverages `flex` for centering and aligning elements:
  - **Main Element**: Uses `flex: 1` to ensure it stretches to fill available space between the header and footer.
  - **Button Container**: Aligns buttons horizontally with `flex` and adjusts to vertical stacking on smaller screens.

### JavaScript Functionality

#### Dynamic Option Handling

`data-type` attributes are used to define the type of each option, improving readability and maintainability over hardcoding class indices.

Example:

```javascript
const selectedType = target.getAttribute("data-type");
```

#### Animation with animationend

The animationend event listener removes animation classes after they finish playing, ensuring smooth reapplication if the user applies the same animation consecutively.

Example:

```javascript
heading.addEventListener(
  "animationend",
  () => {
    heading.classList.remove(animationClass);
  },
  { once: true }
);
```

#### Flexibility in Resetting

The resetHeading function clears all applied styles and resets the selected options.

Example:

```javascript
function resetHeading() {
  heading.style.color = DEFAULT_COLOR;
  heading.classList.remove(...ANIMATION_CLASSES);
}
```

#### Refactoring with Objects

A `selectedTypes` object centralizes the state for both color and animation, replacing individual variables (e.g., `selectedColor`, `selectedAnimation`) for better scalability and simplicity.

### Challenges and Solutions

#### Handling Animation Reapplication

- **Challenge**: When users clicked "Apply Combination" to the same animation, the animation would not reset properly.
- **Solution**: The `animationend` event listener was used to remove the applied class once the animation finished, ensuring smooth reapplication.

#### Class Matching

- **Challenge**: The JavaScript logic originally depended on class indices, making it fragile.
- **Solution**: Switched to `data-type` attributes for clearer and more reliable matching.

#### Responsiveness

- **Challenge**: Ensuring the page looked great on all screen sizes without hardcoding breakpoints.
- **Solution**: Used `em` units in media queries and `flex` for layout, allowing the design to scale naturally with the user's base font size.

### Folder Structure

```bash
/task4
|-- index.html   # HTML structure for the interactive page
|-- styles.css   # CSS styles, including responsiveness and animations
|-- script.js    # JavaScript for dynamic interactivity
```

### Design Choices

#### Color Palette

- **Muted Secondary Colors**: Used colors such as `#dee2e6` and `#e9ecef` for unselected states, creating a clean and modern aesthetic.
- **Vibrant Primary Colors**: Applied colors like `#2a71d0` and `#d02a2a` for selected states to provide clear visual feedback.

#### Typography System

- Defined a font size scale for consistency and readability.
- **Headings**: Large, bold headings (`5rem`) were chosen to draw attention.
- **Body Text**: Maintained a comfortable reading size of `1.6rem`.

#### Hover and Active States

- Buttons and list items provide feedback using hover effects, such as scaling and shadows.
- **Active States**: Designed to be visually distinct, clearly indicating interaction.

### Conclusion

This project showcases a thoughtful combination of modern CSS and JavaScript techniques to create a highly interactive and accessible web page. Challenges like animation resetting, state management, and responsiveness were resolved using scalable and efficient solutions. The result is a polished, user-friendly demo that adapts seamlessly across devices.
