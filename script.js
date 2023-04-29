const nav_btn = document.querySelectorAll(".nav-btn");
const nav_btn_active = document.querySelector(".nav-btn-active");
let distanceObj = [];

// pushing {left & width} into array at Load
nav_btn.forEach((e) => {
  distanceObj.push({
    left: e.offsetLeft,
    width: e.offsetWidth,
  });
});

// setting starting width for highlighter
const startSetter = () => {
  nav_btn_active.style.width = `${distanceObj[1].width}px`;
  nav_btn_active.style.left = `${distanceObj[1].left}px`;
};
startSetter();

// adding listeners to nav buttons on load
for (let e in distanceObj) {
  nav_btn[e].addEventListener("click", () => {
    nav_btn_active.style.left = `${distanceObj[e].left}px`;
    nav_btn_active.style.width = `${distanceObj[e].width}px`;
    nav_btn[e].classList.add("highlight");
    for (let i in distanceObj) {
      if (i != e) {
        nav_btn[i].classList.remove("highlight");
      }
    }
  });
}
