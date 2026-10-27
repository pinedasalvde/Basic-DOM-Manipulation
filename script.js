const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

document.getElementById('show-btn').addEventListener('click', () => {
  alert(`Name: ${nameInput.value}\nAge: ${ageInput.value}`);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    form.reset();
  }
});
