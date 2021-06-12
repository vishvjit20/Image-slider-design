const btn = document.querySelectorAll(".btn");
const banner = document.querySelector("#banner");
const size = 3;

function addAnimation() {
  banner.classList.add("zoom");
  setTimeout(function () {
    banner.classList.remove("zoom");
  }, 500);

  for (b of btn) {
    b.classList.remove("active");
  }
}

for (let i = 0; i < size; i++) {
  btn[i].addEventListener("click", function () {
    banner.src = `images/pic${i + 1}.png`;
    addAnimation();
    this.classList.add("active");
  });
}
