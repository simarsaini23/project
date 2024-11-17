// This function simulates clearing user session data
function logout() {
    // Clear session data or token here
    // Example: localStorage.removeItem('userToken');

    // Redirect to login page (optional)
    window.location.href = 'login.html';
}

// Call the logout function when the page loads (optional)
window.onload = logout;