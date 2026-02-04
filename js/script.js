const userId = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');
const loginBtn = document.querySelector('.login-btn');
const formBody = document.querySelector('.login-card-body');

/* Disable login initially */
loginBtn.disabled = true;

/* Enable button when both fields filled */
function checkInputs() {
  if (userId.value.trim() !== "" && password.value.trim() !== "") {
    loginBtn.classList.add("active");
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.remove("active");
    loginBtn.disabled = true;
  }
}

userId.addEventListener("input", checkInputs);
password.addEventListener("input", checkInputs);

/* Fake login error (UI only) */
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  /* Remove existing error */
  const oldError = document.querySelector(".login-error");
  if (oldError) oldError.remove();

  /* Show fake error */
  const error = document.createElement("div");
  error.className = "login-error";
  error.innerHTML = `
    We do not recognize your User ID or password.
    Please try again or click
    <strong>“Forgot Your Password?”</strong> for assistance.
  `;

  formBody.insertBefore(error, formBody.firstChild);
});

/* Password eye toggle (already requested earlier) */
document.querySelectorAll(".toggle-password").forEach(icon => {
  icon.addEventListener("click", () => {
    const input = icon.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("ri-eye-off-fill", "ri-eye-fill");
    } else {
      input.type = "password";
      icon.classList.replace("ri-eye-fill", "ri-eye-off-fill");
    }
  });
});
