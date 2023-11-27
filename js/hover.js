(() => {
    //Projects Info Hover

    const boxImage = document.querySelector(".image-box-project")
    const ImageText = document.querySelector(".project-image-text")
    const buttonImage = document.querySelector(".project-image-button")
    
    const projects = [
        {name: "MOKEPON", description: "On this game ", image:"images/mokepon_mobile_project.jpg"},
        {name: "DR NUT", description: "HOVER DR NUT", image:"images/dr_nut_mobile_project.jpg"},
        {name: "BACK OF THE NET", description: "HOVER BACK OF THE NER", image:"images/back_of_the_net_mobile_project.jpg"},
        {name: "BARRANQUILLA CARNIVAL", description: "HOVER BARRANQUILLA", image:"images/barranquilla_mobile_project.jpg"},
        {name: "STAR WARS", description: "HOVER STAR WARS", image:"images/star_wars__mobile_project.jpg"},
        {name: "LOPEZ FARM", description: "HOVER LOPEZ FARM", image:"images/lopez_farm__mobile_project.jpg"},

    ];

    function loadText(){
  
        projects.forEach((project, index) => {

          let selectedText = document.querySelector(`#text-${index+1}`);
          // console.log(selected);
          const imageContent = document.createElement("img");
          const h3Item = document.createElement("h3");
          const buttonItem = document.createElement("button");
          imageContent.src = project.image;
          h3Item.textContent = project.name;
          buttonItem.textContent = "CLICK HERE"
    
          selectedText.appendChild(imageContent)
          selectedText.appendChild(h3Item);
          imageContent.classList.add("image-project");
          h3Item.classList.add("project-image-text");

          selectedText.addEventListener('mouseenter', e => {
            h3Item.textContent = project.description;
            selectedText.appendChild(buttonItem);
            h3Item.classList.remove("project-image-text");
            h3Item.classList.add("project-image-text-off");
            buttonItem.classList.remove("project-image-button-inactive");
            buttonItem.classList.add("project-image-button-active");
            // console.log(pItem.textContent)
          });

          selectedText.addEventListener('mouseleave', e => {
            h3Item.textContent = project.name;
            h3Item.classList.remove("project-image-text-off");
            h3Item.classList.add("project-image-text");
            buttonItem.classList.remove("project-image-button-active");
            buttonItem.classList.add("project-image-button-inactive");
            // console.log(pItem.textContent)
          });
          
        })
    }

    loadText();


    

    // projectImageText.addEventListener("mouseout", function() {
    //     projectImageText.textContent = "cat"
    //   })


})();