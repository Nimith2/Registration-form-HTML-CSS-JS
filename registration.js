const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (username.length < 4) {
        usernameError.textContent = "Username must be at least 4 characters long.";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "Invalid email address.";
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
    }

    if (
        usernameError.textContent === "" &&
        emailError.textContent === "" &&
        passwordError.textContent === "" &&
        confirmPasswordError.textContent === ""
    ) {
        alert("Registration successful!");
    }
});
