// Go to login page
function openLogin() {
  window.location.href = "login.html";
}

// Cross button → Home page
function goHome() {
  window.location.href = "index.html";
}

// Login logic (fixed credentials)
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@example.com" && password === "12345") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}

// Donate button logic
function donate() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    alert("Proceed to payment");
  } else {
    alert("Please login to donate");
    window.location.href = "login.html";
  }
}

// Show login status on home page
window.onload = function () {
  const status = document.getElementById("loginStatus");
  if (!status) return;

  if (localStorage.getItem("isLoggedIn") === "true") {
    status.innerText = "✅ You are logged in";
  } else {
    status.innerText = "❌ You are browsing as guest";
  }
};
