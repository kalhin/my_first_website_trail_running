const addButtonComments = document.querySelector('.add_comments_button');
addButtonComments.addEventListener('click', addName) 
function addName() {
        const textName = document.querySelector('.text_name');
        const li = document.createElement('li');
        li.innerText = textName.value;
        document.querySelector('.name').appendChild(li);
        textName.value = '';
}
addButtonComments.addEventListener('click', addComment)
function addComment() {
        const textComment = document.querySelector('.text_comment');
        const li = document.createElement('li');
        li.innerText = textComment.value;
        document.querySelector('.comments').appendChild(li);
        textComment.value = '';
}
