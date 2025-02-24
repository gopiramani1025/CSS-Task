var arrowButton = document.querySelectorAll('.arrow-btn');
var arrow2Button = document.querySelectorAll('.arrow2-btn');
var content = document.getElementsByClassName('content');
 console.log(arrowButton)
 console.log(arrow2Button)


 for( var i = 0; i < arrowButton.length; i++ ){
    arrowButton[i].addEventListener( 'click',function(e) {
       this.parentNode.nextElementSibling.style.display = 'block'
       this.style.display = 'none'
        this.nextElementSibling.style.display = 'block'
    });
}

for( var i = 0; i < arrow2Button.length; i++ ){
    arrow2Button[i].addEventListener( 'click',function(e) {
       this.parentNode.nextElementSibling.style.display = 'block'
       this.style.display = 'none'
        this.nextElementSibling.style.display = 'block'
    });

}
