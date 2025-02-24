 var minusButton = document.querySelectorAll('.minus-btn');
 var plusButton = document.querySelectorAll('.plus-btn');
 var faqbody = document.getElementsByClassName('faq-body');
 console.log(minusButton)
 console.log(plusButton)

 for( var i = 0; i < minusButton.length; i++ ){
     minusButton[i].addEventListener( 'click',function(e) {
        this.parentNode.nextElementSibling.style.display = 'none'
        this.style.display = 'none'
        this.previousElementSibling.style.display = 'block'
     });
 }

 for( var i = 0; i < plusButton.length; i++ ){
     plusButton[i].addEventListener( 'click',function(e) {
        this.parentNode.nextElementSibling.style.display = 'block'
        this.style.display = 'none'
        this.nextElementSibling.style.display = 'block'
     });
 }





