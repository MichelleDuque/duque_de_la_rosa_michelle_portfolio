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
    


    //Projects Info

    const projectParagraph = document.querySelector("#paragraph-project")

    const projects = [
        {name: "Mokepon", description: "Game created for platzi Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
        {name: "Star Wars", description: "Star wars characters Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
        {name: "Dr Nut", description: "Website for Dr Nut drink from the New Orleans based World Bottling Company characters Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
        {name: "Barranquilla Carnival", description: "The following game represents the most popular carnival in Colombia, named BARRANQUILLA'S CARNIVAL, which is one of the most popular traditions, matching cultural and folkloric celebrations. This carnival dates back to the colonial period when the Spanish conquest introduced Spanish and Portuguese traditions in America (Colombia Travel) During this carnival, the most important song is named 'La canción del Carnival' or the carnival's song played by Checo Acosta that you're going to be able to listen, also this drag and drop game was build with HTML, CSS and Javascript."}
    ];

    console.log(projects)

})();
