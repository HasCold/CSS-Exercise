// We are executing a throttling function to limit the mouse event on every mouse call.
// Throttling - To reduce the number of execution of mouse events on a particular area. 

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();

        if(now - prev > delay){
            prev = now;
            return func(...args);
        }
    }
}

document.getElementById("center")
.addEventListener("mousemove", throttleFunction((details) => {
    // Less Repeatition Code
    const div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.top = details.clientY+"px";
    div.style.left = details.clientX+"px";
    
    var img = document.createElement("img");
    img.setAttribute("src", "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: .2
    });

    gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power2,
    });

    setTimeout(() => {
        div.remove();
    }, 1500);
}, 500)); 