export function hover_aboutme(){

    const hobbies = [
        {name: "Anfield Stadium", description: "I'm a Liverpool and Junior de Barranquilla supporter, that's mainly what you will find on my social media."},
        {name: "Abbey Road", description: "You would think because I'm Colombian I would listen to Latin American music but my favorite music genre is British rock."},
        {name: "Minecraft", description: "Even though I am really bad at playing video games, I enjoy playing from FIFA to Minecraft."},
    ];
  
    function loadAboutMe(){
      hobbies.forEach((hobbie, index) => {
        let selected = document.querySelector(`#about-${index+1}`);
        const paboutme = document.createElement("p");

        function hoverPhotoAboutme() {

            paboutme.textContent = hobbie.description;
    
            selected.appendChild(paboutme);
    
            paboutme.classList.add("aboutme-p");
            paboutme.classList.remove("aboutme-p-inactive");
        };

        function onlyPhotoAboutme() {
            paboutme.classList.remove("aboutme-p");
            paboutme.classList.add("aboutme-p-inactive");
          };


        selected.addEventListener("mouseleave", onlyPhotoAboutme);
        selected.addEventListener("mouseenter", hoverPhotoAboutme);
  
      })
  
    }
  
  loadAboutMe()

}