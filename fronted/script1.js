const userForm = document.getElementById('user-form');
const userList = document.getElementById('user-list');

// Define the handlesubmit function here

const loginButton = document.getElementById('itm1');
loginButton.addEventListener('click', async (event) => {
    event.preventDefault();

    // Hide certain elements
    document.getElementById('name-container').style.display = 'none';
    document.getElementById('itm1').style.display = 'none';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginData = { email, password };
    
    // Clear the user list and add a back button
    userList.innerHTML = '';
    const backbtn = document.createElement('button');
    backbtn.textContent = "Back";
    userList.appendChild(backbtn);

    backbtn.addEventListener('click', (event) => {
        userForm.reset();
        backbtn.remove();
        document.getElementById('name-container').style.display = 'block'; 
        document.getElementById('itm1').style.display = 'block'; 
    });
    
    // Attach a new submit event listener for login
    userForm.removeEventListener('submit', handlesubmit); // Remove previous listener
    userForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        try {
            // Check login logic here
            // For now, let's assume a successful login
            // You should handle this on the server and return appropriate data

            alert('You are successfully logged in.');
        } catch (error) {
            console.log("Error:", error);
        }
    });
});
