const sidenav = document.querySelector(".sidenav");
const sidenavbutton = document.querySelector("#new_i");
sidenavbutton.addEventListener("click", () => {
  if (sidenav.style.left === "-3000px") {
    sidenav.style.left = "0px";
  } else {
    sidenav.style.left = "-3000px";
  }
});
