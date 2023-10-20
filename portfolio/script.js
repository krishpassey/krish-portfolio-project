


gsap.from(".contant", {
    y: 200,
    durstion: 1,
    delay: 1,
    opacity: 0,
})

// {opacity} mean pic phele nahi dikhegi time ke accouding dikhegi
// {stagger} is use to animate line by line
// {yoyo (true)(false)} is use to animate go/return position

gsap.from("#yellow,#red,#blue ", {
    y: 100,
    durstion: 1,
    opacity: 0,
    stagger: 0.4,
scrollTrigger:{
    trigger:"#yellow,#red,#blue",
    scroller:"body",
    start:"top 120%",
}
})
gsap.from(".name,.nav-item", {
    y: -100,
    durstion: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.5
})
gsap.from(".container", {
    y: 100,
    durstion: 1,
    delay: 1.5,
    opacity: 0,

})
gsap.from(".btn", {
    y: 100,
    duration: 1,
    delay: 2,
    opacity: 0,
    scrollTrigger:{
        trigger:".btn",
        scroller:"body",
        start:"top 145%",
    }
    
})

gsap.from(".tital", {
    y: 100,
    duration: 1,
    delay: .5,
    opacity: 0
})
gsap.from(".projects-data", {
    y: 100,
    duration: .5,
    delay: .9,
    opacity: 0
})
gsap.from(".projects-img", {
    y: 100,
    duration: .7,
    delay: 1,
    opacity: 0,
    scrollTrigger:{
        trigger:".projects-img",
        scroller:"body",
        start:"top 140%",
    }
})

gsap.from(".resume", {
    y: 100,
    duration: .5,
    delay: .9,
    opacity: 0
})



//contact page js

