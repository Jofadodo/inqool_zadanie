// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

var menuButton = document.getElementById("menuButton");
var navigation = document.getElementsByClassName('navigation__link-list')[0];
var form = document.getElementById('form');


function scrollToTargetAdjusted($target) {
  var element = document.getElementById($target);
  // hodnota offsetu, keby sa neskryl navbar, prekryl by zobrazený element (100)
  var headerOffset = 0;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
  });

  if (window.screen.width <= 720) {
    navigation.style.width = "0%";
    menuButton.className = "navigation__openbtn";
  }
}

window.onload = function() {
  document.getElementsByClassName('skills__block__box')[0].click();
  setFunction();
};
window.onresize = function() {setFunction()};
function setFunction() {
  const element = document.getElementById("images");
  const cssObj = window.getComputedStyle(element, null);
  const offset = (parseInt(cssObj.getPropertyValue("height").replace(/px/,""))+50)+"px";

  document.getElementById('portfolio').style.marginTop = offset;
}


function changeNav() {
  if (menuButton.className == "navigation__openbtn") {
    menuButton.className = "navigation__closebtn";
    navigation.style.width = "70%";
  }
  else {
    menuButton.className = "navigation__openbtn";
    navigation.style.width = "0%";
  }
}


function searchBar() {
  var input = document.getElementById("search");
  if (input.style.width > "0px") {
    input.style.width = null;
    input.style.paddingRight = "0px";
    if (window.screen.width <= 475) menuButton.style.width = "70px";
  }
  else {
    input.style.width = "100%";
    input.style.paddingRight = "40px";
    if (window.screen.width <= 475) menuButton.style.width = "0%";
  }
}



window.onscroll = function() {scrollFunction(), navbarHide()};
var mybutton = document.getElementById("topButton");
var prevScrollpos = window.pageYOffset;
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
}
function navbarHide() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navigation")[0].style.top = null;
  } else {
    document.getElementsByClassName("navigation")[0].style.top = "-140px";
    document.getElementById("search").style.width = null;
    document.getElementById("search").style.paddingRight = "0px";
  }
  prevScrollpos = currentScrollPos;
}

function topFunction() {
  document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
var scroll = 700;
function scrollToLeft() {
  if (window.screen.width <= 1000) scroll = 400;
  else scroll = 700;
  document.getElementById('portfolio').scrollTo({
    left: document.getElementById('portfolio').scrollLeft-scroll,
    behavior: "smooth"
  });
}
function scrollToRight() {
  if (window.screen.width <= 1000) scroll = 400;
  else scroll = 700;
  document.getElementById('portfolio').scrollTo({
    left: document.getElementById('portfolio').scrollLeft+scroll,
    behavior: "smooth"
  });
}

var portfolio = document.getElementById('portfolio');
document.getElementById('portfolio').onscroll = function(){
  if (document.getElementById('portfolio').scrollLeft > 0) {
      document.getElementById('scrollLeft').style.display = "block";
  } else document.getElementById('scrollLeft').style.display = "none";

  if (portfolio.offsetWidth + portfolio.scrollLeft >= portfolio.scrollWidth - 1) {
    document.getElementById('scrollRight').style.display = "none";
  } else document.getElementById('scrollRight').style.display = "block";
}


function toggleForm() {
  if (form.className == "input-form--active") {
    form.className = "input-form";
  }
  else form.className = "input-form--active";
}

window.onclick = function(event) {
  if (event.target == form) {
    toggleForm();
    enableScroll();
  }
}