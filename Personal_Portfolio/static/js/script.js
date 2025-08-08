gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  smoothTouch: 0.1,
  effects: true,
});

ScrollTrigger.create(
  {
    trigger: "header",
    start: "top top", // When the top of the element hits the top of the viewport
    endTrigger: "#myStickyContainer", // Optional: define a container to limit the sticky behavior
    end: "bottom top", // Optional: define when the element unpins
    pin: true, // This makes the element sticky
    pinSpacing: false, // Prevents ScrollTrigger from adding extra spacing for the pinned element
  },
  gsap.from(" header #logo", {
    y: -100,
    opacity: 0,
    duration: 1.5,
    scrub: 3,
    scale: 0.7,
  }),
  gsap.from("header li", {
    y: -100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    scrub: 2,
    scale: 0.7,
  })
);

ScrollTrigger.create(
  {
    trigger: ".hero .left .stager",
    toggleActions: "restart",
  },
  gsap.from(".hero .left .stager", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
  })
);
ScrollTrigger.create(
  {
    trigger: ".hero .right",
    toggleActions: "restart",
  },
  gsap.from(".hero .right", {
    y: 100,
    opacity: 0,
    duration: 1,
  })
);

ScrollTrigger.create(
  {
    trigger: "#about",
    toggleActions: "restart",
  },
  gsap.from("#about", {
    y: 100,
    opacity: 0,
    duration: 1,
  })
);
ScrollTrigger.create(
  {
    trigger: "#about .stager",
    toggleActions: "restart",
  },
  gsap.from("#about .stager", {
    y: 100,
    scale: 0.5,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
  })
);

ScrollTrigger.create(
  {
    trigger: ".contact .stager",
    toggleActions: "restart",
  },
  gsap.from(".contact .stager", {
    y: 100,
    scale: 0.8,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
  })
);

let home = document.querySelector("#home-btn");
let about = document.querySelector("#about-btn");
let project = document.querySelector("#project-btn");
let contact = document.querySelector("#contact-btn");

home.addEventListener("click", (e) => {
  smoother.scrollTo("#home", true, "center 40%");
});
about.addEventListener("click", (e) => {
  smoother.scrollTo("#about", true, "center 40%");
});
project.addEventListener("click", (e) => {
  smoother.scrollTo("#project", true, "center 40%");
});
contact.addEventListener("click", (e) => {
  smoother.scrollTo("#contact", true, "center 40%");
});

// Navbar toggle logic
function toggleNavbar(open) {
  const header = document.querySelector("header");
  const navList = document.querySelector("header .responsive-navbar ul");
  if (open) {
    header.classList.add("navbar-open");
    header.style.height = "70vh";
    document.body.style.overflow = "hidden"; // Prevent background scroll
  } else {
    header.classList.remove("navbar-open");
    document.body.style.overflow = ""; // Restore scroll
  }
}

// Event listeners for bar and cross
document.addEventListener("DOMContentLoaded", function () {
  const bar = document.querySelector(".bar");
  const cross = document.querySelector(".cross");
  const navLinks = document.querySelectorAll(".responsive-navbar ul li a");

  if (bar) {
    bar.addEventListener("click", function () {
      toggleNavbar(true);
    });
  }
  if (cross) {
    cross.addEventListener("click", function () {
      toggleNavbar(false);
    });
  }
  // Close navbar when any nav link is clicked (on mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 600) {
        toggleNavbar(false);
      }
    });
  });
});
