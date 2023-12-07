(() => {

    const phrases = ["Michelle", "a Developer", "Colombian"]

    gsap.to(".cursor", {opacity: 0, ease: "power2.inOut", repeat: -1})
    

    gsap.timeline()
    
    .from(".hola", {duration: 1, y:"10vw", ease:"power3.out", onComplete: ()=> mainTL.play()}) 
    
    let mainTL = gsap.timeline({repeat: -1}).pause()
    
    phrases.forEach(phrase =>{
        let tl = gsap.timeline({repeat: 1, yoyo:true, repeatDelay:1.2}) // yoyo allows the tween to go back and forth
        tl.to(".text", {duration: 1, text: phrase})
        mainTL.add(tl)
    })
    
    



})();
