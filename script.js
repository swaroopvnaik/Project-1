// gsap (green sock animation platform (it is a JS function))
// in gsap you can use from & to both !!!
var csr = document.querySelector("#cursor")
var blr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove" , function(dets){
    csr.style.left = dets.x+"px"
    csr.style.top = dets.y+"px"
    blr.style.left = dets.x-250 +"px"
    blr.style.top = dets.y- 250 +"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        csr.style.scale = 3
        csr.style.border = "1px solid #fff"
        csr.style.backgroundColor = "transparent"
    });

    elem.addEventListener("mouseleave", function(){
        csr.style.scale = 1
        csr.style.border = "0px solid #95c11e"
        csr.style.backgroundColor = "#95c11e"
    })

})
gsap.to("#nav",{
    //camel case (where we don't need to use - b/w bg & colr)
    backgroundColor : "#000", 
    height: "110px",
    duration : 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scrolller:"body",
        // markers :true,
        start :"top -25%",
        end : "top -70%",
        scrub:2
    }
})

gsap.from("#aboutus img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub: 4
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub: 3
    }
})
