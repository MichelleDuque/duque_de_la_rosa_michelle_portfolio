li<!DOCTYPE html>

<?php
require_once('connect.php');
$query = 'SELECT GROUP_CONCAT(DISTINCT media.image_filename) AS images, project.description, project.name AS nameProject, project.problem, project.solution, project.audience, project.process, project.introduction, project.linkwebsite, project.detail_image_top, project.linkgithub, project.image_down, GROUP_CONCAT(DISTINCT category.title) AS category_titles, GROUP_CONCAT(DISTINCT languagelist.name) AS language_name, GROUP_CONCAT(DISTINCT wireframe.wireframe_filename) AS wireframe_file 
          FROM project, project_category, languagelist, project_language, category, media, wireframe 
          WHERE project.id = project_category.project_id 
          AND project.id = project_language.project_id
          AND languagelist.id = project_language.language_id
          AND project.id = media.project_id 
          AND project.id = wireframe.project_id 
          AND category.id = project_category.category_id 
          AND project.id = :projectId';
$stmt = $connection->prepare($query);
$projectId = $_GET['id'];
$stmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);
$images = explode(",", $row['images']);
$category_titles = explode(",", $row['category_titles']);
$language_name = explode(",", $row['language_name']);
$wireframe_file = explode(",", $row['wireframe_file']);
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"> 
    <script src="https://kit.fontawesome.com/2436fc0b94.js" crossorigin="anonymous"></script>
    <title>Michelle Duque</title>
    <link rel="Michelle Duque fav icon" type="image/svg" href="images/logo.svg"/>
    <link href="css/grid.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
    <script defer  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script defer type="module" src="js/gsap.js"></script>
    <script defer src="js/wireframe_php.js"></script>
    <script defer src="js/detailsphp.js"></script>
    <script defer type="module" src="js/gallery.js"></script>
    <script defer type="module" src="js/burger.js"></script>
</head>
<body>
    <h1 class="hidden">Portfolio</h1>
    <header id="main-header" class="grid-con">

       
        <nav class="box m-col-start-2 m-col-end-10 l-col-start-2 l-col-end-8 xl-col-start-1 xl-col-end-7" id="main-nav">
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="projects.html">PROJECTS</a></li>
                <li><a href="reel.html">REEL</a></li>
                <li><a href="contact.html">CONTACT</a></li>
            </ul>
        </nav>

        <div class="box col-start-1 col-end-3 m-col-start-10 m-col-end-12 l-col-start-10 l-col-end-12 xl-col-start-11 xl-col-end-13" id="logo-section">
            <a href="index.html"><img id="image-logo" src="images/logo.svg" alt="Michelle Duque Logo"></a>
        </div>

        <div class="box col-start-4 col-end-5" id="burger-nav">
          <h2 class="hidden">Main Navigation</h2>
    <button class="hamburger">
      <img src="images/open_menu.svg" alt="Burger Menu" id="hamburger-image">
    </button>  
      </div>
      <nav class="burger_menu">
        <ul>
          <li><a href="index.html">HOME</a></li>
          <li><a href="about.html">ABOUT</a></li>
          <li><a href="projects.html">PROJECTS</a></li>
          <li><a href="reel.html">REEL</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>
      </nav>
    </header>

    <main>
    
        <div id="project-details">
            <section class="intro">
                    <div class="grid-con project-section" id="project-main-info">
                        <h2 class="hidden">Project Section - Michelle Duque</h2>
                        <div class="box col-span-full m-col-start-3 m-col-end-11 l-col-start-4 l-col-end-10 xl-col-start-3 xl-col-end-11 title-project">
                            <h2><?php echo $row['nameProject'];?></h2>
                        </div>
                        <div class="box col-span-full m-col-start-2 m-col-end-12 l-col-start-2 l-col-end-7 xl-col-start-1 xl-col-end-6" id="image-project">
                            <h3 class="hidden">Image of Project</h3>                   
                            <img src="images/<?php echo $row['detail_image_top'];?>" alt="">
                        </div>
                        <div class="box col-span-full m-col-start-2 m-col-end-12 l-col-start-7 l-col-end-12 xl-col-start-6 xl-col-end-13" id="box-info-principal">
                        <div ></div>
                        <div  id="buttons-project-box">
                            <h3 class="hidden">Buttons to Project</h3>
                            <button class="button-principles buttons-project" id="button-project1" onclick="location.href='<?php echo $row['linkwebsite']; ?>'">LIVE SITE</button>
                            <button onclick="location.href='<?php echo $row['linkgithub']; ?>'" class="button-principles buttons-project" id="button-project2">GITHUB</button>
                        </div>
                        <div id="text-project">
                          <h3 class="hidden">Text Of Project</h3>
                          <p id="paragraph-project"><?php echo $row['introduction']; ?>
                              </p>
                      </div>
                    </div>
                    </div>
            </section>
            </div>


            <section class="grid-con details-box" id="role-box">
              <div class="box col-span-full m-col-start-1 m-col-end-7 l-col-start-2 l-col-end-7 xl-col-start-2 xl-col-end-7 text-process">
                <h3>MY ROLE</h3>
                <ul>
                  <?php 
                        for($i =0; $i < count($category_titles); $i++) {

                        echo '<li>'.$category_titles[$i].'</li>';
                        }

                      ?>  
                </ul>
              </div>
              <div class="box col-span-full m-col-start-7 m-col-end-13 l-col-start-7 l-col-end-12 xl-col-start-7 xl-col-end-13 text-process">
                <h3>LANGUAGES</h3>
                <ul>
                                    <?php 
                        for($i =0; $i < count($language_name); $i++) {

                        echo '<li>'.$language_name[$i].'</li>';
                        }

                      ?>  
                </ul>

              </div>
            </section>

            <section  class="grid-con gallery-photos" >
              <h2 class="hidden">Sequence of Earbus photos</h2>
                <div class="box col-span-full m-col-span-full l-col-span-full xl-col-span-full" id="gallery-project">
                <section class='box-images'>
                    <h2 class="hidden">Images of Earbuds</h2>
                    <ul class='wrapper'>
                      <?php 
                        for($i =0; $i < 3; $i++) {

                        echo '<ul><img class="image-wrapper-gallery" src="images/'.$images[$i].'"></ul>';

                        }
                      ?>                          
                    </ul>
                  </section>
                  <section class='box-images'>
                    <h2 class="hidden">Images of Earbuds</h2>
                    <ul class='wrapper'>
                      <?php 
                        for($i =3; $i < 6; $i++) {

                        echo '<ul><img class="image-wrapper-gallery" src="images/'.$images[$i].'"></ul>';

                        }
                      ?>                          
                    </ul>
                  </section>
                </div>
                </section>
          
            <section class="grid-con" id="section-info-details">
              <div class="col-span-full m-col-start-2 m-col-end-12 l-col-start-2 l-col-end-12 xl-col-start-1 xl-col-end-13" id="box-info-details">
                <div id="details-mobile-view">
                  <div class="info-mobile-text">
                    <i class="fa-sharp fa-solid fa-circle-exclamation"></i> 
                    <h3>PROBLEM</h3>
                      <p><?php echo $row['problem']; ?></p>
                  </div>
                  <div class="info-mobile-text">
                    <i class="fa-solid fa-lightbulb"></i>
                    <h3>SOLUTION</h3>
                      <p><?php echo $row['solution']; ?></p>
                  </div>
                  <div class="info-mobile-text">
                    <i class="fa-solid fa-timeline"></i> 
                    <h3>PROCESS</h3>
                      <p><?php echo $row['process']; ?></p>
                  </div>
                  <div class="info-mobile-text">
                    <i class="fa-solid fa-user-group"></i> 
                    <h3>AUDIENCE</h3>
                      <p><?php echo $row['audience']; ?></p>
                  </div>
              </div>

                <div class="detail-box">
                  <div class="menu-title">
                    <div class="active" id="problem-menu">
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i> Problem
                    </div>
                    <div id="solution-menu">
                      <i class="fa-solid fa-lightbulb" class="category-link"></i> Solution
                    </div>
                    <div id="process-menu">
                      <i class="fa-solid fa-timeline" class="category-link"></i>Process
                    </div>
                    <div id="audience-menu">
                     <i class="fa-solid fa-user-group" class="category-link"></i> Audience
                    </div>
                  </div>
                  <div class="details-text">
                    
                    <div class="content-box problem box-text">
                      <h3 id="title-text-details">PROBLEM</h3>
                      <p id="p-text-details"><?php echo $row['problem']; ?></p>
                    </div> 
                    <div class="content-box solution box-text">
                      <h3 id="title-text-details">SOLUTION</h3>
                      <p id="p-text-details"><?php echo $row['solution']; ?></p>
                    </div> 
                    <div class="content-box process box-text">
                      <h3 id="title-text-details">PROCESS</h3>
                      <p id="p-text-details"><?php echo $row['process']; ?></p>
                    </div> 
                    <div class="content-box audience box-text">
                      <h3 id="title-text-details">AUDIENCE</h3>
                      <p id="p-text-details"><?php echo $row['audience']; ?></p>
                    </div>                  
                  </div>
                </div>
              </div>
            </section>

        <section class="grid-con" id="image-details">
            <h2 class="hidden">Promotional Earbuds Photo</h2>
          <div class="col-span-full m-col-span-full l-col-span-full xl-col-span-full" id="reveal-div">
            <div id="still-image">
                    <img src="images/<?php echo $row['image_down'];?>" alt="">
                </div>
           </div>
          </section>




            <section class="grid-con project-section" id="wireframes">
                <h2 class="hidden">Low and high fidelity wireframes</h2>

                 <div class="box col-span-full m-col-start-2 m-col-end-12 l-col-start-2 l-col-end-12 xl-col-start-1 xl-col-end-13 timeline-carousel" id="box-cards">
                    <div class="gallery-images" id="color-white">
                      <h2 class="hidden">Wireframes Photos</h2>


                      <?php 
                        for($i =0; $i < 5; $i++) {

                        echo '<div class="gallery" style="background-image: url('.$wireframe_file[$i].');"></div>';

                        }
                      ?>  
                    </div>

                    <div class="hidden" id="color-wireframe">
                      <h2 class="hidden">Wireframes Photos Color</h2>


                      <?php 
                        for($i =5; $i < 10; $i++) {

                        echo '<div class="gallery" style="background-image: url('.$wireframe_file[$i].');"></div>';

                        }
                      ?>  
                    </div>
                    
                    <div id="buttons-wireframes">
                        <button id="button_nocolor" class="button-principles">
                            Low Fidelity
                        </button>
                        <button id="button_color" class="button-principles">
                            High Fidelity
                        </button>
                    </div>
                  </div>
        </section>
    </main>
</body>
</html>