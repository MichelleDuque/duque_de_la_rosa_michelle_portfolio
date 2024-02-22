(() => {
    

    function loadText(){

          let selectedTexts = document.querySelectorAll(".image-box-project");


          selectedTexts.forEach(selectedText => {

            let selectedTextOn = selectedText.querySelector(".project-image-text");
            let selectedTextOff = selectedText.querySelector(".project-image-text-off");
            let buttonItem = selectedText.querySelector(".button-project");


          function hoverProject() {

            selectedTextOff.style.display = 'block';
            selectedTextOn.style.display = 'none';
            buttonItem.classList.remove("project-image-button-inactive");
            buttonItem.classList.add("project-image-button-active");
          };

           function infoProject(){
            selectedTextOff.style.display = 'none';
            selectedTextOn.style.display = 'block';
            buttonItem.classList.remove("project-image-button-active");
            buttonItem.classList.add("project-image-button-inactive");
          };

          selectedText.addEventListener("mouseleave", infoProject);
          selectedText.addEventListener("mouseenter", hoverProject);
          
        });
    }

    loadText();



})();