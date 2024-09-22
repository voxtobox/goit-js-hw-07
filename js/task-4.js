const registerForm = document.querySelector('form.login-form');

registerForm.addEventListener('submit', checkForm);

function checkForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: email.trim(),
      password: password.trim(),
    };
    console.log(formData);
  }
  form.reset();
}