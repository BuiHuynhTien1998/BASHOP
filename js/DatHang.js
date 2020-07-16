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

var btnDatHang = document.getElementById("btnDathang");
var overlate = document.getElementById("overlate");
var btnClose = document.getElementById("btnClose");
function openForm() {
  overlate.style.display = "flex";
}

btnDatHang.onclick = function () {
  openForm();
};

function closeForm() {
  overlate.style.display = "none";
}

btnClose.onclick = function () {
  closeForm();
};
