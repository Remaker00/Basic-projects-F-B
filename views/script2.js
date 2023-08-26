const userLogin = document.getElementById('loginform');


userLogin.addEventListener('submit', handleLogin);

async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = { email, password };
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Logged in successfully!');

            window.location.href= "Expense.html";
        } else {
            alert('Login failed. Invalid credentials.');
        }

    } catch (error) {
        console.error('Error:', error);
    }

};