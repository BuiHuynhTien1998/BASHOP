var slideIndex = 1;
var slides = document.getElementsByClassName("slideshows");
var btnNext = document.getElementById("next");
var btnPrev = document.getElementById("prev");

function HienSlides() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
HienSlides();

function HienSlideTiepTheo() {
  if (slideIndex >= slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  HienSlides();
}

function HienSlideTruoc() {
  if (slideIndex <= 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  HienSlides();
}

btnNext.onclick = function () {
  HienSlideTiepTheo();
};

btnPrev.onclick = function () {
  HienSlideTruoc();
};

setInterval(HienSlideTiepTheo, 3000);

var n1 = document.getElementById("n1");
var n11 = document.getElementById("n11");
var btn1 = document.getElementById("btn1");
var btn11 = document.getElementById("btn11");

function changeImgn1() {
  n1.style.display = "block";
  n11.style.display = "none";
}
function changeImgn11() {
  n11.style.display = "block";
  n1.style.display = "none";
}

btn1.onclick = function () {
  changeImgn1();
};

btn11.onclick = function () {
  changeImgn11();
};
/**/

var n2 = document.getElementById("n2");
var n22 = document.getElementById("n22");
var btn2 = document.getElementById("btn2");
var btn22 = document.getElementById("btn22");

function changeImgn2() {
  n2.style.display = "block";
  n22.style.display = "none";
}
function changeImgn22() {
  n22.style.display = "block";
  n2.style.display = "none";
}

btn2.onclick = function () {
  changeImgn2();
};

btn22.onclick = function () {
  changeImgn22();
};

/**/

var n3 = document.getElementById("n3");
var n33 = document.getElementById("n33");
var btn3 = document.getElementById("btn3");
var btn33 = document.getElementById("btn33");

function changeImgn3() {
  n3.style.display = "block";
  n33.style.display = "none";
}
function changeImgn33() {
  n33.style.display = "block";
  n3.style.display = "none";
}

btn3.onclick = function () {
  changeImgn3();
};

btn33.onclick = function () {
  changeImgn33();
};

/* */
var n4 = document.getElementById("n4");
var n44 = document.getElementById("n44");
var btn4 = document.getElementById("btn4");
var btn44 = document.getElementById("btn44");

function changeImgn4() {
  n4.style.display = "block";
  n44.style.display = "none";
}
function changeImgn44() {
  n44.style.display = "block";
  n4.style.display = "none";
}

btn4.onclick = function () {
  changeImgn4();
};

btn44.onclick = function () {
  changeImgn44();
};
/* */
var n5 = document.getElementById("n5");
var n55 = document.getElementById("n55");
var btn5 = document.getElementById("btn5");
var btn55 = document.getElementById("btn55");

function changeImgn5() {
  n5.style.display = "block";
  n55.style.display = "none";
}
function changeImgn55() {
  n55.style.display = "block";
  n5.style.display = "none";
}

btn5.onclick = function () {
  changeImgn5();
};

btn55.onclick = function () {
  changeImgn55();
};
/* */
var n6 = document.getElementById("n6");
var n66 = document.getElementById("n66");
var btn6 = document.getElementById("btn6");
var btn66 = document.getElementById("btn66");

function changeImgn6() {
  n6.style.display = "block";
  n66.style.display = "none";
}
function changeImgn66() {
  n66.style.display = "block";
  n6.style.display = "none";
}

btn6.onclick = function () {
  changeImgn6();
};

btn66.onclick = function () {
  changeImgn66();
};
/* */
var n7 = document.getElementById("n7");
var n77 = document.getElementById("n77");
var btn7 = document.getElementById("btn7");
var btn77 = document.getElementById("btn77");

function changeImgn7() {
  n7.style.display = "block";
  n77.style.display = "none";
}
function changeImgn77() {
  n77.style.display = "block";
  n7.style.display = "none";
}

btn7.onclick = function () {
  changeImgn7();
};

btn77.onclick = function () {
  changeImgn77();
};
/* */
var n8 = document.getElementById("n8");
var n88 = document.getElementById("n88");
var btn8 = document.getElementById("btn8");
var btn88 = document.getElementById("btn88");

function changeImgn8() {
  n8.style.display = "block";
  n88.style.display = "none";
}
function changeImgn88() {
  n88.style.display = "block";
  n8.style.display = "none";
}

btn8.onclick = function () {
  changeImgn8();
};

btn88.onclick = function () {
  changeImgn88();
};
/**/
var n9 = document.getElementById("n9");
var n99 = document.getElementById("n99");
var btn9 = document.getElementById("btn9");
var btn99 = document.getElementById("btn99");

function changeImgn9() {
  n9.style.display = "block";
  n99.style.display = "none";
}
function changeImgn99() {
  n99.style.display = "block";
  n9.style.display = "none";
}

btn9.onclick = function () {
  changeImgn9();
};

btn99.onclick = function () {
  changeImgn99();
};

/* */
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

var btnFilter = document.getElementById("btnFilter");
var filter = document.getElementById("filter");
var overlate = document.getElementById("overlate");
var btnCloseFilter = document.getElementById("btnCloseFilter");
function showFilter() {
  filter.style.display = "flex";
  overlate.style.display = "flex";
  filter.style.width = "300px";
  filter.style.opacity = "1";
}
function hideFilter() {
  overlate.style.display = "none";
  filter.style.width = "0%";
  filter.style.opacity = "0";
}
btnCloseFilter.onclick = function () {
  hideFilter();
};

btnFilter.onclick = function () {
  showFilter();
};
var scrollTemp = 0;
var header = document.getElementsByTagName("header");
window.addEventListener("scroll", function (e) {
  var scrollTop = document.documentElement.scrollTop;
  if (scrollTop > scrollTemp) {
    header[0].style.opacity = "0";
  } else {
    header[0].style.opacity = "1";
  }
  scrollTemp = scrollTop;
});
/* */

function myFunction() {
  var name, filter, i, txtValue;
  var search = document.getElementById("search");
  var cart = document.getElementsByClassName("cart");
  filter = search.value.toUpperCase();
  for (i = 0; i < cart.length; i++) {
    name = cart[i].getElementsByClassName("name")[0];
    if (name) {
      txtValue = name.textContent || name.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        cart[i].style.display = "";
      } else {
        cart[i].style.display = "none";
      }
    }
  }
}
