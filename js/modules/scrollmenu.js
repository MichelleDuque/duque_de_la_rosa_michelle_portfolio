export function scrollmenu(){ 

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
   
    const buttonsScroll = document.querySelectorAll(".button-scroll");
   
    function scrollLink(e) {    
      e.preventDefault(); 
      console.log(e.currentTarget.hash);
      let selectedLink = e.currentTarget.hash;
      gsap.to(window, {duration: 1, scrollTo:{y:`${selectedLink}`, offsetY:50 }});
    }
   
    buttonsScroll.forEach((button) => {
      button.addEventListener("click", scrollLink);
    });

}