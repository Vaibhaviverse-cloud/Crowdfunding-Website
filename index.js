if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
} else {
  document.getElementById("status").innerText = "✅ Now you are logged in";
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}
