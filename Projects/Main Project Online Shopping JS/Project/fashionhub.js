var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 2000);

/*let slideIndex = 1;
showSlides(slideIndex);

function controls(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let userSelction = document.getElementsByClassName("slides");
  if (n > userSelction.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = userSelction.length
  }
  for (i = 0; i < userSelction.length; i++) {
    userSelction[i].style.display = "none";
  }
  userSelction[slideIndex-1].style.display = "block";
}*/
 
