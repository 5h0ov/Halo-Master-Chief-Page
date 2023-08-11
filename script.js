//Get element from the DOM
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar'); 
const menu = document.querySelector('.menu');
//PX offset when the navbar activates
const offset = 100;

//Add click event to menu button 
menBtn.addEventListener('click', () =>{
    //Toggle the menu-open class
    menu.classList.toggle('menu-open');
});

//Add scroll event listener to the page
window.addEventListener("scroll", () =>{
    //if the page is scrolled by 50px or more
    if (pageYOffset > offset) {
        //Activate navbar
        navbar.classList.add('navbar-active');
    } else {
        //Deactivate Navbar
        navbar.classList.remove('navbar-active')
    }
});

// Get the button
let mybutton = document.getElementById("myBtn");
    
// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
