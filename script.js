// DOM Elements
const loginPopup = document.getElementById('loginPopup');
const registerPopup = document.getElementById('registerPopup');
const closeLoginPopupBtn = document.getElementById('closeLoginPopupBtn');
const closeRegisterPopupBtn = document.getElementById('closeRegisterPopupBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginError = document.getElementById('loginError');
const registerError = document.getElementById('registerError');

// Function to show popup
function showPopup(popup) {
  popup.classList.remove('hidden');
}

// Function to hide popup
function hidePopup(popup) {
  popup.classList.add('hidden');
}

// Event Listeners
loginBtn.addEventListener('click', () => {
  showPopup(loginPopup);
});

registerBtn.addEventListener('click', () => {
  showPopup(registerPopup);
});

closeLoginPopupBtn.addEventListener('click', () => {
  hidePopup(loginPopup);
});

closeRegisterPopupBtn.addEventListener('click', () => {
  hidePopup(registerPopup);
});

// Login Form Submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // ตัวอย่างการตรวจสอบข้อมูล (สามารถเปลี่ยนเป็น API Call ได้)
  if (email === "user@example.com" && password === "password") {
    alert('Login successful!');
    hidePopup(loginPopup);
  } else {
    loginError.classList.remove('hidden');
  }
});

// Register Form Submission
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    registerError.classList.remove('hidden');
    return;
  }

  // ตัวอย่างการสมัครสมาชิก (สามารถเปลี่ยนเป็น API Call ได้)
  alert('Registration successful!');
  hidePopup(registerPopup);
});