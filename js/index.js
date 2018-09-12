let myIndex = 0;
carousel();

function carousel() {
    let i;
    const slider = document.getElementsByClassName("myslides");
    for (i = 0; i < slider.length; i++) {
       slider[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > slider.length) {myIndex = 1}    
    slider[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500);
}

document.querySelector('.counting-registrations')
    .addEventListener('click', countingRegistrations);
    let startNumber = 1;
function countingRegistrations(){
    const display = document.querySelector('.display');
    display.value = startNumber++;
}

