export function add_contact(){  

    const form = document.querySelector("#contactForm");
    const feedBack = document.querySelector("#feedback");
    const received = document.querySelector("#received-html");
    const main = document.querySelector("main");
    const receivedclose = document.querySelector("#close-received-html");


    function regForm(event) {
        event.preventDefault();
        const url = "adduser.php";
        const thisform = event.currentTarget;
        //console.log(thisform.elements.lname.value);
        const formdata = 
        "firstname=" + thisform.elements.firstname.value +
        "&lastname=" + thisform.elements.lastname.value +
        "&email=" + thisform.elements.email.value +
        "&comments=" + thisform.elements.comments.value;
        //console.log(formdata);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formdata
        })
        .then(response => response.json())
        .then(responseText => {
            console.log(responseText);
            feedBack.innerHTML = "";

            if(responseText.errors) {
                responseText.errors.forEach(error => {
                    const errorElement = document.createElement("p");
                    errorElement.textContent = error;
                    feedBack.appendChild(errorElement);
                })
            } else {
                form.reset();
                const messageElement = document.createElement("p");
                messageElement.textContent = responseText.message;
                feedBack.appendChild(messageElement);
                main.style.removeProperty('transform');
                received.style.display = 'block';
            }
        })
        .catch(error => {
            console.log(error);
            feedBack.innerHTML = "";
            const messageElement = document.createElement("p");
            messageElement.textContent = "Sorry, you must be using an older browser, that does not support AJAX";
            feedBack.appendChild(messageElement);
        })
    }

    function hideModel() {
        received.style.display = 'none';
      }

    form.addEventListener("submit", regForm);

    receivedclose.addEventListener("click", hideModel);


}