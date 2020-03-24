const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Navigation
    nav.classList.toggle("nav-active");

    //Animation Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 1 ease forwards ${index / 2 +
          1.5}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
