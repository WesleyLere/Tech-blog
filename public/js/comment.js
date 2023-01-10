const post_id = location.pathname.split('/')[2];
const commentFormHandler = async () => {
    event.preventDefault();


    const comment = document.querySelector('#commentInput').value.trim();

    if (comment) {
        const response = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ comment, post_id }),
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

document.querySelector('#commentButton').addEventListener('click', commentFormHandler);