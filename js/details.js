(() => {
const menu = document.querySelectorAll(".menu-title div");
const title = document.querySelector("#title-text-details");
const pdetails = document.querySelector("#p-text-details");
const problem = document.querySelector("#problem-menu");
const solution = document.querySelector("#solution-menu");
const process = document.querySelector("#process-menu");
const audience = document.querySelector("#audience-menu");
    
  const details = [
    {name: "PROBLEM", description: "The purpose of this project was to make an earbuds promotional page with creative methods, using a software to create the necessary elements which will used on the website. Those resources are an X-ray where the client would be able to observe the interior aspects, an animation showing the charging case, a 3D model and still images of the earbuds."},
    {name: "SOLUTION", description: "The earphones and case were modelled, sculpted, and animated in Cinema 4D; the materials were then processed in Photoshop and After Effects. Model Viewer was used to generate the 3D Earbuds, and Javascript was used to fill in the hotspots. Furthermore, Sass and Javascript were employed to add the animation and X-ray. At last, GSAP was used to create a more dynamic website, where elements would fade or slide."},
    {name: "PROCESS", description: "1. Define the the concept of the brand, target audience and purposes. \n2. Make sketches of logo, case and earbuds. \n3. Create low fidelity wireframes. \n4. Build elements on Cinema 4D, edit them on After Effects and Photoshop \n5. Create high fidelity wireframes. \n6. Create static HTML and CSS \n7. Add JS to populate website and add GSAP to make it dynamic."},
    {name: "AUDIENCE", description: "The target audience for Rock Evolution Earbuds is comprised of passionate people who share a profound appreciation for rock music, from fans to musicians. Individuals who need dependable headphones that can match the intensity of their performances and provide the highest level of precision in hearing every note and drumming."},
];

function deleteActive(){
  problem.classList.remove("active");
  solution.classList.remove("active");
  process.classList.remove("active");
  audience.classList.remove("active");
}


function loadTextProblem(){
  title.textContent = details[0].name;
  pdetails.textContent = details[0].description;
  deleteActive();
  problem.classList.add("active");
}

function loadTextSolution(){
  title.textContent = details[1].name;
  pdetails.textContent = details[1].description;
  deleteActive();
  solution.classList.add("active");
}

function loadTextProcess(){
  title.textContent = details[2].name;
  pdetails.textContent = details[2].description;
  deleteActive();
  process.classList.add("active");
}

function loadTextAudience(){
  title.textContent = details[3].name;
  pdetails.textContent = details[3].description;
  deleteActive();
  audience.classList.add("active");
}


audience.addEventListener("click", loadTextAudience);
problem.addEventListener("click", loadTextProblem);
solution.addEventListener("click", loadTextSolution);
process.addEventListener("click", loadTextProcess);





})();