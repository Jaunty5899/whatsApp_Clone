const nav_btn = document.querySelectorAll(".nav-btn");
const nav_btn_active = document.querySelector(".nav-btn-active");
const menu_btn = document.querySelector(".menu");
const chats_menu = document.querySelector(".chats-sub-menu");
const status_menu = document.querySelector(".status-sub-menu");
const calls_menu = document.querySelector(".calls-sub-menu");
const modal = document.querySelectorAll(".modal");

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
    console.log(selected);
  });
}

// toggle for chats,status,calls&groups sub-menu
const menu_toggle = () => {
  let current_tab;
  if (selected.classList.contains("chats")) {
    modal.forEach((e) => {
      if (e.classList.contains("chats")) e.showModal();
    });
  }
  if (selected.classList.contains("status")) {
    modal.forEach((e) => {
      if (e.classList.contains("status")) e.showModal();
    });
  }
  if (
    selected.classList.contains("calls") ||
    selected.classList.contains("groups")
  ) {
    modal.forEach((e) => {
      if (e.classList.contains("calls") || e.classList.contains("groups"))
        e.showModal();
    });
  }
};

// adding listener to nav menu button for chats tab
menu_btn.addEventListener("click", () => {
  menu_toggle();
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".main-nav-menu") || e.target.closest(".main-nav-btn"))
    return;
  else {
    modal.forEach((e) => {
      e.close();
    });
  }
});
