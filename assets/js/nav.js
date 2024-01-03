// this is logic by si tampan

const hamburger = document.querySelector(".Hamburger");

hamburger.onclick = function () {
    const navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
};

function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);