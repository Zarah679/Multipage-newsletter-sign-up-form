dismissButton = document.getElementById("dismissBtn")
userEmail = document.getElementById("userEmail")


const savedEmail = localStorage.getItem("subscribedEmail");

if (savedEmail) {
  userEmail.innerHTML = `A confirmation has been sent to <span class="email-highlight">${savedEmail}</span>. Please open it and click the button inside to confirm your subscription`;
}

dismissButton.addEventListener("click", function () {
  localStorage.removeItem("subscribedEmail");
  window.location.href = 'index.html';
});