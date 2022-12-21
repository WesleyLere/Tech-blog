


async function postButton(event) {
    event.preventDefault()
    const title = document.querySelector('#titleInput').value.trim();
    const body = document.querySelector('#bodyInput').value.trim();

    if (title && body) {
        const response = await fetch('/api/posts/new', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            console.log(response);
        }
    }
}



document.querySelector('#addButton').addEventListener('click', postButton);
