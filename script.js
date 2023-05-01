const nav_btn = document.querySelectorAll(".nav-btn");
const nav_btn_active = document.querySelector(".nav-btn-active");
const menu_btn = document.querySelector(".menu");
const chats_menu = document.querySelector(".chats-sub-menu");
const status_menu = document.querySelector(".status-sub-menu");
const calls_menu = document.querySelector(".calls-sub-menu");

let distanceObj = [];
let selected = nav_btn[1];

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
    if (nav_btn[e].classList.contains("highlight")) selected = nav_btn[e];
  });
}

// toggle for chats,status,calls&groups sub-menu
const menu_toggle = () => {
  if (selected.classList.contains("chats")) {
    if (chats_menu.classList.contains("hide"))
      chats_menu.classList.remove("hide");
    else chats_menu.classList.add("hide");
  }

  if (selected.classList.contains("status")) {
    if (status_menu.classList.contains("hide"))
      status_menu.classList.remove("hide");
    else status_menu.classList.add("hide");
  }

  if (
    selected.classList.contains("calls") ||
    selected.classList.contains("groups")
  ) {
    if (calls_menu.classList.contains("hide"))
      calls_menu.classList.remove("hide");
    else calls_menu.classList.add("hide");
  }
};

// adding listener to nav menu button for chats tab
menu_btn.addEventListener("click", () => {
  menu_toggle();
});
