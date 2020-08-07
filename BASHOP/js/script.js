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

var adv = document.getElementById("adv");
var closeADV = document.getElementById("closeADV");

function closeADV1() {
  adv.style.display = "none";
}
closeADV.onclick = function () {
  closeADV1();
};
