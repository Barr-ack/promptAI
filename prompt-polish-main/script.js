const loginToggle = document.getElementById('loginToggle');
const signupToggle = document.getElementById('signupToggle');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('strengthMeter');
const languageSelect = document.getElementById('languageSelect');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const matchMessage = document.getElementById('matchMessage');

// === Toggle Login / Signup ===
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

// === Password Strength Checker ===
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

// === Language Switcher (demo) ===
languageSelect.addEventListener('change', () => {
  alert(`Language switched to: ${languageSelect.value}`);
});

// === Password Match Validation + Signup Submission ===
signupForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  if (password.value !== confirmPassword.value) {
    matchMessage.textContent = "Passwords do not match.";
    matchMessage.classList.add('error');
    matchMessage.classList.remove('success');
    return;
  }

  matchMessage.textContent = "Passwords match!";
  matchMessage.classList.add('success');
  matchMessage.classList.remove('error');

  // Gather signup form data
  const formData = new FormData(signupForm);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("http://localhost:5678/webhook-test/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert("✅ Signup successful!");
      signupForm.reset();
      // 🔹 Redirect to dashboard/prompt page
      window.location.href = "prompt.html";  
    } else {
      alert("❌ Signup failed.");
    }
  } catch (err) {
    alert("Network error: " + err.message);
  }
});

// === Login Form Submission ===
loginForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(loginForm);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("http://localhost:5678/webhook-test/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert("✅ Login successful!");
      loginForm.reset();
      // 🔹 Redirect to dashboard/prompt page
      window.location.href = "prompt2.html";  
    } else {
      alert("❌ Login failed.");
    }
  } catch (err) {
    alert("Network error: " + err.message);
  }
});

// === Real-time password match feedback ===
confirmPassword?.addEventListener('input', () => {
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
