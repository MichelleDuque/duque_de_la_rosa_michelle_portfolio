(() => {

    // //WIREFRAMES



          let lowWireframe = document.querySelector("#color-white");
          let highWireframe = document.querySelector("#color-wireframe");
          let buttonColor = document.querySelector("#button_color");
          let button = document.querySelector("#button_nocolor");


          function backgroundHighFidelity() {
            lowWireframe.classList.remove("gallery-images");
            lowWireframe.classList.add("hidden");
            highWireframe.classList.remove("hidden");
            highWireframe.classList.add("gallery-images")
          };

          function backgroundLowFidelity() {
            highWireframe.classList.remove("gallery-images");
            highWireframe.classList.add("hidden");
            lowWireframe.classList.remove("hidden");
            lowWireframe.classList.add("gallery-images")
          };

          buttonColor.addEventListener("click", backgroundHighFidelity);
          button.addEventListener("click", backgroundLowFidelity);




    

})();