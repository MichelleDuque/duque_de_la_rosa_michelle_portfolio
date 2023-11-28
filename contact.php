<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"> 
    <script src="https://kit.fontawesome.com/2436fc0b94.js" crossorigin="anonymous"></script>
    <title>Michelle Duque</title>
    <link href="css/grid.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
</head>
<body>
    <h1 class="hidden">Portfolio</h1>
    <header id="main-header" class="grid-con">

        <nav class="box m-col-start-2 m-col-end-10 l-col-start-2 l-col-end-9 xl-col-start-1 xl-col-end-8" id="main-nav">
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="aboutme.html">ABOUT</a></li>
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
            <input type="checkbox" id="hamburger">
            <label for="hamburger">
                <img src="images/burger.svg" alt="hamburger menu icon">
            </label>
            <div id="burger-con">
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="projects.html">PROJECTS</a></li>
                    <li><a href="reel.html">REEL</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
        </div>
    </header>

    <main>
        <section class="grid-con">
            <h2 class="hidden">Contact - Michelle Duque</h2>

            <div class="box col-span-full m-col-start-2 m-col-end-12 l-col-start-2 l-col-end-12 xl-col-start-1 xl-col-end-13" id="contact-title">
                <h2>SHOOT ME AN EMAIL</h2>
            </div>

            <div class="box col-span-full m-col-start-2 m-col-end-12 l-col-start-6 l-col-end-13 xl-col-start-7 xl-col-end-13" id="contact-form">
                <div id="form-boxes">
                    <form method="post" action="sendmail.php">

                        <label for="firstname"  class="hidden">First Name:</label>
                        <input type="text" name="firstname" id="firstname" placeholder="First Name">
                    
                    <br><br>
                    
                        <label for="lastname"  class="hidden">Last Name: </label>
                        <input type="text" name="lastname" id="lastname" placeholder="Last Name">
                    
                        <br><br>
                    
                        <label for="email" class="hidden">Email: </label>
                        <input type="text" name="email" id="email" placeholder="Email">
                    
                        <br><br>
                    
                        <label for="comments" class="hidden">Comments: </label>
                        <textarea name="comments" id="comments" placeholder="Your Message"></textarea>
                    
                        <br><br>
                    
                        <button type="submit" value="send" class="button-principles" id="button-contact">SEND MESSAGE</button>
                    </form>
                </div>
            </div>

            <div class="box col-span-full m-col-start-3 m-col-end-11 l-col-start-2 l-col-end-6 xl-col-start-1 xl-col-end-7" id="contact-info"> 
                <div>
                    <p>I guess you have enjoyed some of my work or you would like to talk to me about how Liverpool is the best football team in the world, here we don't accept Manchester United fans, I'm JK. Anyway, feel free to contact me and I will reply within three business days. 
                    <br><br>
                    Meanwhile, you can check out my social media:
                    </p>
                </div>
                <div id="social-media">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>

    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/EasePack.min.js"></script>
    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"></script>
</body>
</html>