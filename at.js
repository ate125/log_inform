document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    document.querySelectorAll(".error").forEach((e) => {
      e.textContent = "";
      e.classList.remove("show");
    });

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!/^[A-Za-z]+$/.test(firstName)) {
      document.getElementById("firstNameError").textContent =
        "First name must contain letters only.";
      document.getElementById("firstNameError").classList.add("show");
      valid = false;
    }

    if (!/^[A-Za-z]+$/.test(lastName)) {
      document.getElementById("lastNameError").textContent =
        "Last name must contain letters only.";
      document.getElementById("lastNameError").classList.add("show");
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById("emailError").textContent =
        "Enter a valid email address.";
      document.getElementById("emailError").classList.add("show");
      valid = false;
    }

    if (!/^(\+251|0)?9\d{8}$/.test(phone)) {
      document.getElementById("phoneError").textContent =
        "Enter a valid Ethiopian phone number (e.g. +2519xxxxxxxx or 09xxxxxxxx).";
      document.getElementById("phoneError").classList.add("show");
      valid = false;
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password)
    ) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
      document.getElementById("passwordError").classList.add("show");
      valid = false;
    }

    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match.";
      document.getElementById("confirmPasswordError").classList.add("show");
      valid = false;
    }

    if (valid) {
      const btn = document.querySelector("button");
      btn.classList.add("loading");
      btn.innerHTML = "Submitting...";
      setTimeout(() => {
        btn.classList.remove("loading");
        btn.innerHTML = "Submit";
        alert("Form submitted successfully!");
      }, 1500);
    }
  });

document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const pwd = document.getElementById("password");
    pwd.type = pwd.type === "password" ? "text" : "password";
    this.textContent = pwd.type === "password" ? "👁" : "🙈";
  });

document
  .getElementById("toggleConfirmPassword")
  .addEventListener("click", function () {
    const pwd = document.getElementById("confirmPassword");
    pwd.type = pwd.type === "password" ? "text" : "password";
    this.textContent = pwd.type === "password" ? "👁" : "🙈";
  });
