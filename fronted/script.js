const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', handlesubmit);

async function handlesubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {name, email, password};

    try {
        fetch('/api/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        userForm.reset();

    }catch {
        console.log("Error while inserting data");
    }
}