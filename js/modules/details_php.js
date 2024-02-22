export function details_php(){
    const menu = document.querySelectorAll(".menu-title div");
    const title = document.querySelector("#title-text-details");
    const pdetails = document.querySelector("#p-text-details");
    const problem = document.querySelector("#problem-menu");
    const solution = document.querySelector("#solution-menu");
    const process = document.querySelector("#process-menu");
    const audience = document.querySelector("#audience-menu");
    const problem_p = document.querySelector(".problem");
    const solution_p = document.querySelector(".solution");
    const process_p = document.querySelector(".process")
    const audience_p = document.querySelector(".audience")

        

    function deleteActive(){
    problem.classList.remove("active");
    solution.classList.remove("active");
    process.classList.remove("active");
    audience.classList.remove("active");
    }


    function loadTextProblem(){
    problem_p.style.display = 'block';
    deleteActive();
    problem.classList.add("active");
    solution_p.style.display = 'none';
    process_p.style.display = 'none';
    audience_p.style.display = 'none';
    }

    function loadTextSolution(){
    solution_p.style.display = 'block';
    deleteActive();
    solution.classList.add("active");
    problem_p.style.display = 'none';
    process_p.style.display = 'none';
    audience_p.style.display = 'none';
    }

    function loadTextProcess(){
    process_p.style.display = 'block';
    deleteActive();
    process.classList.add("active");
    problem_p.style.display = 'none';
    solution_p.style.display = 'none';
    audience_p.style.display = 'none';
    }

    function loadTextAudience(){
    audience_p.style.display = 'block';
    deleteActive();
    audience.classList.add("active");
    problem_p.style.display = 'none';
    solution_p.style.display = 'none';
    process_p.style.display = 'none';
    }


    audience.addEventListener("click", loadTextAudience);
    problem.addEventListener("click", loadTextProblem);
    solution.addEventListener("click", loadTextSolution);
    process.addEventListener("click", loadTextProcess);


}
