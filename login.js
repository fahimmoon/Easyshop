document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform other actions
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
