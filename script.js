const nav_btn = document.querySelectorAll(".nav-btn");
const nav_btn_active = document.querySelector(".nav-btn-active");
const menu_btn = document.querySelector(".menu");
const chats_menu = document.querySelector(".chats-sub-menu");
const status_menu = document.querySelector(".status-sub-menu");
const calls_menu = document.querySelector(".calls-sub-menu");
const modal = document.querySelectorAll(".modal");
const nav_input = document.querySelector(".search-container>.inputElement");
const clear_btn = document.querySelector(".clear");
const back_btn = document.querySelector(".back");
const search_btn = document.querySelector(".search");
const nav_search_container = document.querySelector(".nav-search-container");
const section_container = document.querySelector(".section-container");
const title_height_inc = document.querySelector(".main-nav-bar");

let distanceObj = [];
let selected = nav_btn[1];
let S_left = 0;

// pushing {left & width} into array at Load
nav_btn.forEach((e) => {
  distanceObj.push({
    left: e.offsetLeft,
    width: e.offsetWidth,
    scrollLeft: section_container.offsetWidth * S_left,
  });
  S_left++;
});
// setting starting width for highlighter
const startSetter = () => {
  nav_btn_active.style.width = `${distanceObj[1].width}px`;
  nav_btn_active.style.left = `${distanceObj[1].left}px`;
  section_container.scrollLeft = distanceObj[1].scrollLeft;
};
startSetter();

const active_state = (e) => {
  nav_btn_active.style.left = `${distanceObj[e].left}px`;
  nav_btn_active.style.width = `${distanceObj[e].width}px`;
  section_container.scrollLeft = distanceObj[e].scrollLeft;
  nav_btn[e].classList.add("highlight");
  for (let i in distanceObj) {
    if (i != e) {
      nav_btn[i].classList.remove("highlight");
    }
  }
  if (nav_btn[e].classList.contains("highlight")) selected = nav_btn[e];
};

// adding listeners to nav buttons on load
for (let e in distanceObj) {
  nav_btn[e].addEventListener("click", () => {
    active_state(e);
  });
}

// toggle for chats,status,calls&groups sub-menu
const menu_toggle = () => {
  if (selected.classList.contains("chats")) {
    modal.forEach((e) => {
      if (e.classList.contains("chats")) e.classList.add("clipPath");
    });
  }
  if (selected.classList.contains("status")) {
    modal.forEach((e) => {
      if (e.classList.contains("status")) e.classList.add("clipPath");
    });
  }
  if (
    selected.classList.contains("calls") ||
    selected.classList.contains("groups")
  ) {
    modal.forEach((e) => {
      if (e.classList.contains("calls") || e.classList.contains("groups"))
        e.classList.add("clipPath");
    });
  }
};

// adding listener to nav menu button for chats tab
menu_btn.addEventListener("click", () => {
  menu_toggle();
});

// search button to open search element
search_btn.addEventListener("click", () => {
  nav_search_container.classList.add("clipPath");
  title_height_inc.classList.add("title-height");
});

// back button for close search element
back_btn.addEventListener("click", () => {
  nav_search_container.classList.remove("clipPath");
  title_height_inc.classList.remove("title-height");
});

// clear button for nav's input
clear_btn.addEventListener("click", () => {
  nav_input.value = "";
});

section_container.addEventListener("scroll", () => {
  // for (let e in distanceObj) {
  //   if (
  //     section_container.scrollLeft == distanceObj[e].scrollLeft ||
  //     section_container.scrollLeft == 1126
  //   ) {
  //     active_state(e);
  //   }
  // }
  nav_btn_active.style.left = section_container.scrollLeft / 4 + "px";
  for (let i in distanceObj) {
    if (
      distanceObj[i].scrollLeft == section_container.scrollLeft ||
      distanceObj[i].scrollLeft + 1 == section_container.scrollLeft
    )
      active_state(i);
  }
  // console.log(section_container.scrollLeft);
});

// outside element detection
document.addEventListener("click", (e) => {
  if (
    e.target.closest(".modal") ||
    e.target.closest(".main-nav-btn") ||
    e.target.closest(".nav-search-container")
  )
    return;
  else {
    modal.forEach((e) => {
      e.classList.remove("clipPath");
    });
    nav_search_container.classList.remove("clipPath");
    title_height_inc.classList.remove("title-height");
  }
});
