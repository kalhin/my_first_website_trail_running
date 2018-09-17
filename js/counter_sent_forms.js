 document.querySelector('form')
    .addEventListener('submit', function(e){
    if(e.target.checkValidity()){
        if (localStorage['send-counter'] === undefined){
            localStorage['send-counter'] = 1;
        } else {
        localStorage['send-counter'] = parseInt(localStorage['send-counter']) + 1;
        }
    }
});

const display = document.querySelector('.display');
display.value = localStorage['send-counter'];