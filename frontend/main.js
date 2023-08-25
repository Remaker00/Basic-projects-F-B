// Implement form submissions and AJAX calls here
// For signup
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
  
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      alert(responseData.message);
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  });
  
  // For login
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.status === 200) {
        alert(responseData.message);
        // Store the token in localStorage or cookies for future authenticated requests
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  });
  