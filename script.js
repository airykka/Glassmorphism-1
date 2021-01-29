"use strict";

const glass = document.getElementById("glass");

const tl = gsap.timeline({
  defaults: { ease: "power2inOut", duration: 1.5 },
});

tl.from("img", { x: "-10%", opacity: 0 })
  .from(glass, { opacity: 0, delay: 0.5, duration: 1 }, "-=1.5")
  .from(glass, { x: "-20%", backdropFilter: "blur(0px)" })
  .from(
    ".sequence",
    { y: -30, opacity: 0, stagger: 0.2, duration: 0.5 },
    "-=.5"
  )
  .from("h1", { y: 20, clipPath: "inset(0 0 100% 0)" }, "-=.8");
