$(document).ready(function() {
    // Signup form submission
    $('#signupForm').submit(function(event) {
        event.preventDefault();
        const user = {
            username: $('#username').val(),
            firstname: $('#firstname').val(),
            lastname: $('#lastname').val(),
            password: $('#password').val()
        };
        $.post('/api/auth/signup', user, function(data) {
            alert('Signup successful');
            window.location.href = '/';
        }).fail(function(error) {
            alert('Signup failed');
        });
    });

    // Login form submission
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        const user = {
            username: $('#loginUsername').val(),
            password: $('#loginPassword').val()
        };
        $.post('/api/auth/login', user, function(data) {
            alert('Login successful');
            // Store session identifier in localStorage
            localStorage.setItem('user', user.username);
            // Redirect to chat page
            window.location.href = '/chat';
        }).fail(function(error) {
            alert('Login failed');
        });
    });

    // Check if the user is already logged in when loading the page
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
        // If a user is found in localStorage, redirect to the chat page
        window.location.href = '/chat';
    }
});
