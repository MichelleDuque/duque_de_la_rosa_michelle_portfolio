(() => {

    //GENERAL SCROLL 

    gsap.registerPlugin(ScrollTrigger);
    


    //WIREFRAMES

    const wireframes = [
        {name: "Wireframe 1",  background:'url("images/wireframe_1.jpeg")', background_color:'url("images/wireframecolor_1.png")'},
        {name: "Wireframe 2", background:'url("images/wireframe_2.jpeg")', background_color:'url("images/wireframecolor_2.png")'},
        {name: "Wireframe 3", background:'url("images/wireframe_3.jpeg")', background_color:'url("images/wireframecolor_3.png")'},
        {name: "Wireframe 4", background:'url("images/wireframe_4.jpeg")', background_color:'url("images/wireframecolor_4.png")'},
        {name: "Wireframe 5", background:'url("images/wireframe_5.jpeg")', background_color:'url("images/wireframecolor_5.png")'},

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