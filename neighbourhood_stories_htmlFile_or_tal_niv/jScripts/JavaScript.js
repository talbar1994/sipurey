var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].display = "block"; 
}

function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if (innerUl) innerUl.style.display = "block";
        }, true);
    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null) {
            navInner[i].addEventListener("blur", function (event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }
}
function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");
   
     for(var i = 0, len = navA.length; i < len; i++){
       navA[i].addEventListener("focus",function(event) {
       var innerUl = event.target.parentElement.querySelector("ul")
       if(innerUl) innerUl.style.display = "block";
      }, true);
     }
      
       for(var i = 0, len = navInner.length; i < len; i++){
         if(navInner[i].parentElement.nextElementSibling === null){
           navInner[i].addEventListener("blur",function(event) {
             event.target.parentElement.parentElement.style.display = "none"
           },true);
         }
       }
  }