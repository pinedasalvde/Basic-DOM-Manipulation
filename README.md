# Basic-DOM-Manipulation

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Basic DOM Manipulation</title>
</head>
<body>
  <form id="infoForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="0">

    <button type="button" id="showBtn">Show Values</button>
  </form>

  <script src="script.js"></script>
</body>
</html>
```

```javascript
const form = document.getElementById('infoForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const showBtn = document.getElementById('showBtn');

// Show an alert with the entered values when the button is clicked
showBtn.addEventListener('click', () => {
  alert(`Name: ${nameInput.value}\nAge: ${ageInput.value}`);
});

// Clear the form when Escape is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    form.reset();
  }
});
```
