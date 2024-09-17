//1) smooth scrolling using loco Motive js
// attach loco scroll CSS
// attach locomotive scroll min JS
// some code from loco github for js

//2) gsap
//3) scrolltrigger

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

 circleMouseFollower();