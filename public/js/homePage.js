const { Post } = require('../../models');


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


Handlebars.registerPartial(
    "posts", 
`   <div class="bg-slate-700 shadow-lg w-1/2 rounded-2xl flex-column px-8 pt-6 pb-8 mb-4 mx-auto signUp-form">
<div class="mb-4">
  <label class="block text-slate-200 text-sm font-bold mb-2" for="titleInput">
    {{${Post.title}}} h
  </label>
</div>
<div class="mb-4">
  <label class="block text-slate-200 text-sm font-bold mb-2 h-1/5" for="bodyInput">
    {{${Post.body}}} h
  </label>
</div>
</div>`
)