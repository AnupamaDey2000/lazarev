function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

locomotiveAnimation();

function lodingAnimation(){
 
    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })





}


lodingAnimation();







function navAnimation(){
    var nav = document.querySelector(".nav-part2 ");

nav.addEventListener("mouseenter",function(){
 let tl=gsap.timeline()
   tl.to("#nav-bottom",{
    height:"22vh"
   })
   tl.to(".nav-part2 h5",{
      display:"block",
      duration:0.2    
 
   })
   tl.to(".nav-part2 h5 span",{
       y:0,
       stagger:{
        amount:0.5
       }

 })
})




nav.addEventListener("mouseleave",function(){
  let tl=gsap.timeline()

   tl.to(".nav-part2 h5 span",{
       y:25,
       stagger:{
        amount:0.2
       }

 })
 tl.to(".nav-part2 h5",{
    display:"none",
    duration:0.1
 })
 tl.to("#nav-bottom",{
     height:0,
     duration:0.1
 })
})
}
navAnimation();

function page2Animation(){
    var rightElems= document.querySelectorAll(".right-elem")

    rightElems.forEach(function(elem){
    
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
             })
    })
    
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
         })
    })
    
    elem.addEventListener("mousemove",function(dets){
             gsap.to(elem.childNodes[3],{
                x:dets.x-elem.getBoundingClientRect().x-50,
                y:dets.y-elem.getBoundingClientRect().y-150
             })
    })
    })
}

page2Animation();

function page3videoAnimation(){
    var page3Center=document.querySelector(".page3-center")
    var video=document.querySelector("#page3 video")
    
    page3Center.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
        })
    })
    video.addEventListener("click",function(){
    
        video.pause()
        gsap.to(video,{
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        })
    })
    
}
page3videoAnimation();


function videoPlay(){
    var sections=document.querySelectorAll(".sec-right")

    sections.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        
            elem.addEventListener("mouseleave",function(){
                elem.childNodes[3].style.opacity = 0
                elem.childNodes[3].load()
            })
    })
    
}
videoPlay();

function video2Play(){
    var sections=document.querySelectorAll(".sec-right1")

    sections.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        
            elem.addEventListener("mouseleave",function(){
                elem.childNodes[3].style.opacity = 0
                elem.childNodes[3].load()
            })
    })
    
}
video2Play();

function videoAnimation() {
    var videocon = document.querySelector(" .sec-right video")
    var playbtn = document.querySelector(".cir")
    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
        });

    });
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
        });

    });
    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x-40,
            top: dets.y-20,
        });

    });
}
videoAnimation();

function video2Animation() {
    var videocon = document.querySelector(" .sec-right1 video")
    var playbtn = document.querySelector(".cir1")
    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
        });

    });
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
        });

    });
    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x-40,
            top: dets.y-20,
        });

    });
}
video2Animation();



function page6Animations() {

    gsap.from(".btm6-parts h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })

}
page6Animations();