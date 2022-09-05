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
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
function getSkillDescription(evt, id) {
    var tablinks = document.getElementsByClassName("skills__block__box--active");
    var description = document.getElementsByClassName("skills__description")[0];

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = " skills__block__box";
    }
    evt.currentTarget.className = "skills__block__box--active";

    const xmlhttp = new XMLHttpRequest();

    try {
      xmlhttp.onload = function() {
        description.innerHTML = this.responseText;
      }
  
      xmlhttp.open("GET", "./shared/skillsData.php?q=" + id);
      xmlhttp.send();
    } catch(error) {
      console.error(error);
    };
}


var TIMEOUT = 6000;


var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);


  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);

  }

}
