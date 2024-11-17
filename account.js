document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically send a request to your server for authentication
    console.log('Email:', email);
    console.log('Password:', password);
});