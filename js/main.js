(() => {

    // Home Text Animation

    //List of words that will be added
    const phrases = ["Michelle", "a Developer", "Colombian"]

    //This allow the cursor to blink, the -1 means that it will repeat infinitely
    gsap.to(".cursor", {opacity: 0, ease: "power2.inOut", repeat: -1})
    
    //create timeline for the text "hola"
    gsap.timeline()
    
    //animate the text so it starts bellow
    .from(".hola", {duration: 1, y:"10vw", ease:"power3.out", onComplete: ()=> mainTL.play()}) // The function Oncomplete allows the second part of the text to start to play
    
    // create a timeline for the rest of the text and -1 to repeat infinitely, pause so it doesnt play right away
    let mainTL = gsap.timeline({repeat: -1}).pause()
    
    //Create a timeline for each phrase and then add the child
    phrases.forEach(phrase =>{
        let tl = gsap.timeline({repeat: 1, yoyo:true, repeatDelay:1.2}) // yoyo allows the tween to go back and forth
        tl.to(".text", {duration: 1, text: phrase})
        mainTL.add(tl)
    })
    
    



})();
