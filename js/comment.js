const addButtonComments = document.querySelector('.add_comments_button');
addButtonComments.addEventListener('click', () => {
        const textName = document.querySelector('.text_name');
        const li = document.createElement('li');
        li.innerText = textName.value;
        document.querySelector('.comments').appendChild(li);
        textName.value = '';
        
});

addButtonComments.addEventListener('click', () => {
        const textComment = document.querySelector('.text_comment');
        const li = document.createElement('li');
        li.innerText = textComment.value;
        document.querySelector('.comments').appendChild(li);
        textComment.value = '';
});


