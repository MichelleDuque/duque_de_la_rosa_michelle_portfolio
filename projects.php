<!DOCTYPE html>
<?php

require_once('connect.php');


$stmt = $connection->prepare("SELECT * FROM project ORDER BY name ASC");
$stmt->execute();

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"> 
    <title>Michelle Duque</title>
    <link rel="Michelle Duque fav icon" type="image/svg" href="images/logo.svg"/>
    <link href="css/grid.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script type="module" src="js/main.js"></script>
</head>
<body data-page="projects-php">
    <h1 class="hidden">Portfolio</h1>
    <header id="main-header" class="grid-con">
       
        <nav class="box m-col-start-2 m-col-end-10 l-col-start-2 l-col-end-8 xl-col-start-1 xl-col-end-7" id="main-nav">
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="projects.php">PROJECTS</a></li>
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
            <li><a href="projects.php">PROJECTS</a></li>
            <li><a href="reel.html">REEL</a></li>
            <li><a href="contact.html">CONTACT</a></li>
            </ul>
        </nav>
    </header>

    <main id="main-project">
        <section class="grid-con" id="project-section">
            <h2 class="hidden">Project Section - Michelle Duque</h2>
            <div class="box col-span-full m-col-start-3 m-col-end-11 l-col-start-4 l-col-end-10 xl-col-start-3 xl-col-end-11 title-project">
                <h2>ALL MY PROJECTS</h2>
            </div>
            <div class="box col-span-full m-col-start-1 m-col-end-13 l-col-start-2 l-col-end-12 xl-col-start-2 xl-col-end-12" id="projects-group">
            <?php

            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

            
            echo '<div class="image-box-project" > 
                    <img class="image-project" sizes="100vw" src="images/'.    
                            $row['principalimage'].   
                            '" alt="'.$row['name'].'" srcset="'.$row['imagesrcset'].'">
                    <h3 class="project-image-text"> '.$row['name'].'</h3>
                    <h3 class="project-image-text-off hidden"> '.$row['description'].'</h3>
                    <a href="project_details.php?id='.
                    $row['id'].
                    '"><button class ="project-image-button-inactive button-project">CLICK HERE</button></a>
                </div>';

            }

            $stmt = null;

            ?> 
            </div>
        </section>

    </main>
</body>
</html>