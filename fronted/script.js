const userForm = document.getElementById('user-form');
const userList = document.getElementById('user-list');
const userList1 = document.getElementById('user-list1').style.display = 'none';;

userForm.addEventListener('submit', handlesubmit);

async function handlesubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {name, email, password};

    const existingUserEmails = Array.from(userList1.children).map(li => li.textContent.split(' - ')[1]);
    if (existingUserEmails.includes(email)) {
        alert("Email already exists");
        return; // Don't proceed if email exists
    }

    try {
        await fetch('/api/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        userForm.reset();
        const userList1 = document.getElementById('user-list1').style.display = 'none';
        alert("New User Created");
        
        fetchUsers();

    }catch {
        console.log("Error while inserting data");
    }
};

const loginButton = document.getElementById('itm1');
loginButton.addEventListener('click', async(event) => {
    event.preventDefault();
    userForm.reset();
    document.getElementById('name-container').style.display = 'none';
    document.getElementById('itm1').style.display = 'none';
    document.getElementById('submit').textContent="Login"
    
    const backbtn = document.createElement('button');
    backbtn.textContent="Back"
    userList.appendChild(backbtn);
    backbtn.addEventListener('click', (event) => {
        userForm.reset(); // Reset the form, not the button
        backbtn.remove(); // Remove the back button
        document.getElementById('name-container').style.display = 'inline-block'; 
        document.getElementById('itm1').style.display = 'block'; 
        document.getElementById('submit').textContent="Sign Up"
    });

    userForm.addEventListener('submit', handlesubmit);
});

async function fetchUsers() {
    await fetch('/api/user')
        .then(res => res.json())
        .then(users => {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name} - ${user.email} - ${user.password}  `;
                userList1.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}

fetchUsers();