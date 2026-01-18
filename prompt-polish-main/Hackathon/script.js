const loginToggle = document.getElementById('loginToggle');
const signupToggle = document.getElementById('signupToggle');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('strengthMeter');
const languageSelect = document.getElementById('languageSelect');

loginToggle.onclick = () => {
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
  loginToggle.classList.add('active');
  signupToggle.classList.remove('active');
};

signupToggle.onclick = () => {
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  signupToggle.classList.add('active');
  loginToggle.classList.remove('active');
};

// Password strength checker
passwordInput?.addEventListener('input', () => {
  const val = passwordInput.value;
  let strength = 'Weak';
  if (val.length > 8 && /[A-Z]/.test(val) && /\d/.test(val) && /[@$!%*?&]/.test(val)) {
    strength = 'Strong';
  } else if (val.length > 6) {
    strength = 'Medium';
  }
  strengthMeter.textContent = `Password Strength: ${strength}`;
});

// Language switcher (basic demo)
languageSelect.addEventListener('change', () => {
  alert(`Language switched to: ${languageSelect.value}`);
});
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const matchMessage = document.getElementById('matchMessage');

signupForm.addEventListener('submit', function (e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault(); // Stop form submission
    matchMessage.textContent = "Passwords do not match.";
    matchMessage.classList.add('error');
    matchMessage.classList.remove('success');
  } else {
    matchMessage.textContent = "Passwords match!";
    matchMessage.classList.add('success');
    matchMessage.classList.remove('error');
  }
});
confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value === password.value) {
    matchMessage.textContent = "Passwords match!";
    matchMessage.classList.add('success');
    matchMessage.classList.remove('error');
  } else {
    matchMessage.textContent = "Passwords do not match.";
    matchMessage.classList.add('error');
    matchMessage.classList.remove('success');
  }
});

