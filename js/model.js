(() => {

    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    const infoBoxes = [{
      title: "Python" ,
      text: "My first programming language was Python",
    }
    ,{
        title: "Always Studying",
        text: "I am currently learning TypeScript."
    },{
      title: "Front End Developer",
      text:"Coding and designing is the best mix"
    },{
      title: "Coding is so fun",
      text: "I only need some good music and I can do it all day"
    }
  ]
  
    //functions

    function modelLoaded() {
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function loadInfo(){
  
      infoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index+1}`);
        // console.log(selected);
        const titleItem = document.createElement("h2");
        const textItem = document.createElement("p");
  
        titleItem.textContent = infoBox.title;
        textItem.textContent = infoBox.text;
  
        selected.appendChild(titleItem);
        selected.appendChild(textItem);
  
    })
  }
  
    loadInfo();
  
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    //Event Listener
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();
  
