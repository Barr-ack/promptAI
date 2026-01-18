const signupForm = document.getElementById('signupForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const matchMessage = document.getElementById('matchMessage');

signupForm.addEventListener('submit', function (e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    matchMessage.textContent = "Passwords do not match.";
    matchMessage.classList.add('error');
    matchMessage.classList.remove('success');
  } else {
    matchMessage.textContent = "Passwords match!";
    matchMessage.classList.add('success');
    matchMessage.classList.remove('error');
  }
});