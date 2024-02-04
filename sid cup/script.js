
gsap.to("#nav", {
    backgroundColor: "#856824",
    duration: 0.5,
    height: 100,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -10%",
        scrub: 1
    }
})


gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -100%",
        scrub: 2
    }

})


gsap.from("#about-us img, #about-us-in",{
    y: 90,
    opacity:0,
    duration: 1,
    // stagger:0.1,
    scrollTrigger:{
        trigger : "#about-us",
        scroller : "body",
        // markers : true,
        start : "top 70%",
        end : " top 65%",
        scrub:1
    }
})

gsap.from(".cards",{
    scale :0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub: 1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub : 4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub : 4
    }
})
