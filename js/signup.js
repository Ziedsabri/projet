function togglePassword(fieldId, iconId) {
    
    const passwordField = document.getElementById(fieldId);
    const eyeIcon = document.getElementById(iconId);
    if (passwordField.type === 'password') {
        passwordField.type = 'text';  // Show the password
        eyeIcon.classList.remove('fa-eye');  // Remove 'eye' icon
        eyeIcon.classList.add('fa-eye-slash');  // Add 'eye-slash' icon
    } else {
        passwordField.type = 'password';  // Hide the password
        eyeIcon.classList.remove('fa-eye-slash');  // Remove 'eye-slash' icon
        eyeIcon.classList.add('fa-eye');  // Add 'eye' icon
    }
}

