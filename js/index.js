var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("myslides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

const linkWhatIsIt = document.querySelector('.group_1 a');
linkWhatIsIt.href = 'https://trail-running-runingboy.c9users.io/what_it_is.html';