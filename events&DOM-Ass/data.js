function loginValidateForm() {
    let email = document.getElementById("user email").value;
    let password = document.getElementById("user password").value;

    if (email === "rahul@gmail.com" && password === "ILI123") {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid email or password.");
        return false;
    }

    // Add your login validation logic here
}