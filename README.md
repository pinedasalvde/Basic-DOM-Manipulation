# Basic-DOM-Manipulation

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Basic DOM Manipulation</title>
</head>
<body>
  <!-- Form section: collects user information -->
  <form id="infoForm">
    <!-- Name input field: lets the user type their name -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <!-- Age input field: lets the user enter their age as a number -->
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="0">

    <!-- Button section: triggers JavaScript to display input values -->
    <button type="button" id="showBtn">Show Values</button>
  </form>

  <!-- External JavaScript file that handles form behavior -->
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// ===============================
// Section 1: Select form elements
// ===============================

// Reference to the whole form (used for resetting fields)
const form = document.getElementById('infoForm');

// Reference to the name input field
const nameInput = document.getElementById('name');

// Reference to the age input field
const ageInput = document.getElementById('age');

// Reference to the button that shows values
const showBtn = document.getElementById('showBtn');


// ==============================================
// Section 2: Show alert when button is clicked
// ==============================================

// When the user clicks the button, display the entered name and age
showBtn.addEventListener('click', () => {
  alert(`Name: ${nameInput.value}\nAge: ${ageInput.value}`);
});


// ===================================================
// Section 3: Clear form when Escape key is pressed
// ===================================================

// Listen for key presses anywhere on the page
document.addEventListener('keydown', (event) => {
  // If the pressed key is Escape, reset all form fields
  if (event.key === 'Escape') {
    form.reset();
  }
});
```
