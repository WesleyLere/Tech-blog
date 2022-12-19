const loginFormHandler = async (event) => {
    event.preventDefault();

    const emailUsername = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (emailUsername && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ emailUsername, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};



async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#signupUsername').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        //   console.log()
        if (response.ok) {
            document.location.replace('/');
        } else {
            console.log(response);
        }
    }
}


document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signUp-form').addEventListener('submit', signupFormHandler);