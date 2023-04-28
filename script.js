const nav_btn = document.querySelectorAll(".nav-btn");
const nav_btn_active = document.querySelector(".nav-btn-active");
let distanceObj = [];

// pushing {left & width} into array at Load
nav_btn.forEach((e) => {
  distanceObj.push({
    left: Math.ceil(
      (e.offsetLeft / document.querySelector("html").clientWidth) * 100
    ),
    width: Math.ceil(
      (e.offsetWidth / document.querySelector("html").clientWidth) * 100
    ),
  });
});

// setting starting width for highlighter
const startSetter = () => {
  nav_btn_active.style.width = `${distanceObj[0].width}%`;
};
startSetter();

// adding listeners to nav buttons on load
for (let e in distanceObj) {
  nav_btn[e].addEventListener("click", () => {
    nav_btn_active.style.left = `${distanceObj[e].left}%`;
    nav_btn_active.style.width = `${distanceObj[e].width}%`;
  });
}
