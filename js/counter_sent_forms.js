function counterValue () {
    const display = document.querySelector('.display');
    if (localStorage.length = 0){
        display.value = 0;
    } else {
    display.value = localStorage['send-counter']; 
    }
}


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





