import { burgerMenu } from "./modules/burgermenu.js";
import { gsapanimation } from "./modules/gsapanimation.js";
import { words } from "./modules/words.js";
import { model } from "./modules/model.js";
import { reel } from "./modules/reel.js";
import { projects_hover_php } from "./modules/projects_hover_php.js";
import { projects_hover_html } from "./modules/projects_hover_html.js";
import { wireframe_html } from "./modules/wireframe_html.js";
import { wireframe_php } from "./modules/wireframe_php.js";
import { details_html } from "./modules/details_html.js";
import { details_php } from "./modules/details_php.js";
import { gallery } from "./modules/gallery.js";
import { hover_aboutme } from "./modules/hover_aboutme.js";
import { scrollmenu } from "./modules/scrollmenu.js";
import { contact } from "./modules/contact.js";
import { add_contact } from "./modules/add_contact.js";

 //Call burger and Gsap  as it is used on all pages
 burgerMenu();
 gsapanimation();

//Depending of the page

 if (document.body.dataset.page === "home"){
    words();
    model();
   } else if (document.body.dataset.page === "reel"){
      reel();
   } else if (document.body.dataset.page === "projects-php"){
      projects_hover_php();
   } else if (document.body.dataset.page === "projects-html"){
      projects_hover_html();
   }else if (document.body.dataset.page === "projects-details-html"){
      gallery();
      details_html();
      wireframe_html();
   }else if (document.body.dataset.page === "projects-details-php"){
      gallery();
      details_php();
      wireframe_php();
   }else if (document.body.dataset.page === "about-me"){
      hover_aboutme();
      scrollmenu();
   }else if (document.body.dataset.page === "contact"){
      contact();
   }else if (document.body.dataset.page === "contact-ajax"){
      add_contact();
   }

