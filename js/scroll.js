(() => {

    //GENERAL SCROLL 

    gsap.registerPlugin(ScrollTrigger);
    

    document.addEventListener('DOMContentLoaded', () => {
    
        const sections = gsap.utils.toArray('section');
    
        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: '.scroll',
                pin: true,
                scrub: 0.5,
                snap: 1 / (sections.length - 1),
                start: 'top top',
                end: 3000,
            }
        })
    
    })

    //WIREFRAMES

    const wireframes = [
        {name: "Wireframe 1",  background:'url("images/wireframe1.png")', background_color:'url("images/wireframe_color_1.webp")'},
        {name: "Wireframe 2", background:'url("images/wireframe2.jpeg")', background_color:'url("images/wireframe_color_2.png")'},
        {name: "Wireframe 3", background:'url("images/wireframe3.png")', background_color:'url("images/wireframe_color_3.webp")'},
        {name: "Wireframe 4", background:'url("images/wireframe4.png")', background_color:'url("images/wireframe_color_4.png")'},
        {name: "Wireframe 5", background:'url("images/wireframe5.png")', background_color:'url("images/wireframe_color_5.JPG")'},

    ];

    function loadBackgroundImage(){
  
        wireframes.forEach((wireframe, index) => {

          let selectedPhoto = document.querySelector(`.image-${index+1}`);
          let buttonColor = document.querySelector("#button_color")
          let button = document.querySelector("#button_nocolor")
          console.log(selectedPhoto)
          console.log(wireframe.background)

          selectedPhoto.style.backgroundImage = wireframe.background;

           buttonColor.addEventListener('click', e => {
            selectedPhoto.style.backgroundImage = wireframe.background_color;
          });

          button.addEventListener('click', e => {
            selectedPhoto.style.backgroundImage = wireframe.background;
          });

        })
    }

    loadBackgroundImage();



    

})();