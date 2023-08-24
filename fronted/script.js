const userForm = document.getElementById('user-form');
const userList = document.getElementById('user-list');
userForm.addEventListener('submit', handlesubmit);

async function handlesubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {name, email, password};

    try {
        await fetch('/api/user',{
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
};

const loginButton = document.getElementById('itm1');
loginButton.addEventListener('click', async(event) => {
    event.preventDefault();
    document.getElementById('name-container').style.display = 'none';
    document.getElementById('itm1').style.display = 'none';
    
    const backbtn = document.createElement('button');
    backbtn.textContent="Back"
    userList.appendChild(backbtn);
    backbtn.addEventListener('click', (event) => {
        userForm.reset(); // Reset the form, not the button
        backbtn.remove(); // Remove the back button
        document.getElementById('name-container').style.display = 'inline-block'; 
        document.getElementById('itm1').style.display = 'block'; 
    });
});