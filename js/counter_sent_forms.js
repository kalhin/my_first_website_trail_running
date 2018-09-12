document.querySelector('.counting-registrations')
    .addEventListener('click', countingRegistrations);
    let i = 1;
function countingRegistrations(){
    const display = document.querySelector('.display');
    display.value = i++;
}