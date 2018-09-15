const addButtonComments = document.querySelector('.add_comments_button');
addButtonComments.addEventListener('click', addComment)
function addComment() {
        const textComment = document.querySelector('.text_comment');
        const li = document.createElement('li');
        li.innerText = textComment.value;
        document.querySelector('.comments').appendChild(li);
        textComment.value = '';
}
