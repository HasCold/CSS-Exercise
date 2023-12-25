window.addEventListener("mousemove", (details) => {
  // ClientX and ClientY are the coordiates of my mouse

    let rect = document.querySelector("#rect");
//   mapRange(inMin, inMax, outMin, outMax, valueToMap
    var valX = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width/2,  // Through the getBoundingClientRect() you will get the total width of rect element
        window.innerWidth - (100 + rect.getBoundingClientRect().width/2),
        details.clientX);

        gsap.to('#rect', {
        left: valX+"px",
        ease: 'power3'
    });
});
