(() => {
    //Projects Info Hover

    const boxImage = document.querySelector(".image-box-project")
    const ImageText = document.querySelector(".project-image-text")
    const buttonImage = document.querySelector(".project-image-button")
    
    const projects = [
        {name: "MOKEPON", description: "Web game created using HTML, CSS, JavaScript and Node.js. Choose your favorite pet and face other Mokepones in epic water, fire and earth fights.", image:"images/mokepon_mobile_project.jpg"},
        {name: "DR NUT", description: "Dynamic website of Dr Nut drink from the New Orleans based World Bottling Company. Created by using HTML, Javascript and HTML.", image:"images/dr_nut_mobile_project.jpg"},
        {name: "BACK OF THE NET", description: "Back of The Net is a soccer store focused on European and national football teams. CSS and HTML were used.", image:"images/back_of_the_net_mobile_project.jpg"},
        {name: "CARNIVAL", description: "The following game represents the most popular carnival in Colombia, you're going to be able to listen one their songs, also this drag and drop game was build with HTML, CSS and Javascript.", image:"images/barranquilla_mobile_project.jpg"},
        {name: "EARBUDS", description: "Promotional Site of Rock Revolution Earbuds which features interactive information, the earbuds were created using Cinema 4D to model, texture, light, and animate the design.", image:"images/earbuds.png"},
        {name: "LOPEZ FARM", description: "Inventory website created for the company Lopez Farm, It was created using React, Javascript, CSS and HTML.", image:"images/lopez_farm__mobile_project.jpg"},

    ];

    function loadText(){
  
        projects.forEach((project, index) => {

          let selectedText = document.querySelector(`#text-${index+1}`);
          // console.log(selected);
          const imageContent = document.createElement("img");
          const h3Item = document.createElement("h3");
          const linkItem = document.createElement("a");
          const buttonItem = document.createElement("button");
          imageContent.src = project.image;
          h3Item.textContent = project.name;
          linkItem.href = "project_details.html";
          buttonItem.textContent = "CLICK HERE";
    
          selectedText.appendChild(imageContent)
          selectedText.appendChild(h3Item);
          imageContent.classList.add("image-project");
          h3Item.classList.add("project-image-text");

          selectedText.addEventListener('mouseenter', e => {
            h3Item.textContent = project.description;
            selectedText.appendChild(linkItem);
            linkItem.appendChild(buttonItem);
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