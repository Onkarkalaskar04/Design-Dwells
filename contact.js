function validateForm() {
    let isValid = true;

    // Get form values
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let email = document.getElementById("email").value.trim();

    // Reset error messages
    document.getElementById("first-name-error").innerText = "";
    document.getElementById("last-name-error").innerText = "";
    document.getElementById("email-error").innerText = "";

    // Validation checks
    if (firstName === "") {
        document.getElementById("first-name-error").innerText = "First Name is required.";
        isValid = false;
    }

    if (lastName === "") {
        document.getElementById("last-name-error").innerText = "Last Name is required.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("email-error").innerText = "Email is required.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("email-error").innerText = "Enter a valid email address.";
        isValid = false;
    }

    return isValid;
}
