const commentFormHandler = async (event) => {
    event.preventDefault();


    const comment = document.querySelector('#password').value.trim();

    if (emailUsername && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to comment');
        }
    }
};

document.querySelector('commentForm').addEventListener('submit', commentFormHandler);