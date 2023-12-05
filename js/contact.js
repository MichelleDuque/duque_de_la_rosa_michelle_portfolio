(() => {

  //Variables
  const buttonContact = document.querySelector("#button-contact");
  const received = document.querySelector("#received-html");
  const receivedclose = document.querySelector("#close-received-html");


  //Functions 
  function showModel() {
      received.style.display = 'block';
    }

  function hideModel() {
      received.style.display = 'none';
    }

   //Event Listener
    buttonContact.addEventListener("click", showModel);
    receivedclose.addEventListener("click", hideModel);

})();