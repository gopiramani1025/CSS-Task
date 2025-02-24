var menuButton = document.getElementById('hamburger');
var navBar = document.getElementsByClassName('nav-bar');
console.log(navBar)
// document.getElementsByClassName('');
// document.getElementsByTagName('');
// document.querySelector('');
// document.querySelectorAll('');


menuButton.addEventListener( 'click',function(e){
    // console.log(this.parentNode.children['1'].style.display = " block");
    // console.log(this.previousElementSibling)
    // this.previousElementSibling.style.display = 'block';
     navBar[0].style.display = 'block';
} );
// menuButton.onclick = function(){ alert("Hello"); }