export function contact(){  

    //Variables
    const buttonContact = document.querySelector("#button-contact");
    const received = document.querySelector("#received-html");
    const receivedclose = document.querySelector("#close-received-html");
    const main = document.querySelector("main");


  //Functions 
  function showModel() {
    main.style.removeProperty('transform');
      received.style.display = 'block';
    }

  function hideModel() {
      received.style.display = 'none';
    }

   //Event Listener
    buttonContact.addEventListener("click", showModel);
    receivedclose.addEventListener("click", hideModel);

      
    
}
