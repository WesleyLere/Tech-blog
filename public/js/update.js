async function postButton(event) {
    //console.log('hello world')
    event.preventDefault()
    const title = document.querySelector('#titleInput').value.trim();
    const body = document.querySelector('#bodyInput').value.trim();
    console.log(title, body)
    if (title && body) {
        const response = await fetch('/api/posts/update', {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            console.log(response);
        }
    }
}

document.querySelector('#postButton').addEventListener('click', postButton);