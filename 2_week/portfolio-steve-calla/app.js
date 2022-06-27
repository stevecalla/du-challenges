//query selector variables go here 👇

let hamburgerMenu = document.getElementById("hamburger-menu");
let navMenu = document.getElementById("nav-menu");

//global variables go here 👇

let intervalId = null;

//event listeners go here 👇

hamburgerMenu.addEventListener("click", displayMenu);
window.addEventListener("resize", screenWidthDisplay);

//functions and event handlers go here 👇

function displayMenu() {
  if (window.getComputedStyle(navMenu).display === "none") {
    navMenu.style.display = "flex";
    hamburgerMenu.style.color = "cornflowerblue";
    intervalId = setTimeout(() => {
      navMenu.style.display = "none";
      hamburgerMenu.style.color = "black";
    }, 10000);
  } else {
    navMenu.style.display = "none";
    hamburgerMenu.style.color = "black";
    clearTimeout(intervalId);
  }
}

// displayMenu function side effect = header nav menu will not display if screen width is changed durin the timeout; the function below ensures header nav menu displays >768 & clears the timeout from displayMenu if there is an overlap

function screenWidthDisplay() {
  if (window.innerWidth > 768) {
    clearTimeout(intervalId);
    navMenu.style.display = "flex";
  } else if (window.innerWidth <= 768) {
    clearTimeout(intervalId);
    navMenu.style.display = "none";
    hamburgerMenu.style.color = "black";
  }
}
