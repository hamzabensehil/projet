/* --slideshow-auto--*/
var slideIndex = 0;
slider();

function slider() {
  var i;
  var x = document.getElementsByClassName("slide-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display ="none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(slider, 3000); // Change image every 2 seconds
}

/* --slideshow-manuel--*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;

  var x = document.getElementsByClassName("Slides-img");
  if (n > x.length)
   {slideIndex = 1}
  if (n < 1)
   {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  

  }
  x[slideIndex-1].style.display = "flex"; 

  
}

/*add to cart */
let prix=document.querySelectorAll("#prix")
let quant=document.querySelectorAll("#quant")
let plusbtn=document.querySelectorAll(".plus")
let moinbtn=document.querySelectorAll(".minus")





for (let i = 0; i<plusbtn.length; i++){
   plusbtn[i].addEventListener("click", increment)
    function increment(){
      quant[i].value++
      updattotal()
    }
  }
  for (let i = 0; i<moinbtn.length; i++){
   moinbtn[i].addEventListener("click", decrement)
     function decrement(){
       console.log("increment click")
       quant[i].value--
       updattotal()

     }
   }
   
   function responsive() {
 
    var x = document.getElementById("mynav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
  function responsiv() {
 
    var x = document.getElementById("mynavf");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

  




