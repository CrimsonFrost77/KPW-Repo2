<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Kaliakair Pourashava</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="general.css">
        <link rel="stylesheet" href="navBar.css">
        <link rel="stylesheet" href="forms.css">
        <title>Simple Slideshow</title>
        <style>
            .slideshow-container {
                max-width: 800px;
                position: relative;
                margin: auto;
            }
            .slide {
                display: none;
            }
            .slide img {
                width: 100%;
                height: auto;
            }
            .prev, .next {
                cursor: pointer;
                position: absolute;
                top: 50%;
                width: auto;
                padding: 16px;
                margin-top: -22px;
                color: white;
                font-weight: bold;
                font-size: 18px;
                transition: 0.6s ease;
                border-radius: 0 3px 3px 0;
                user-select: none;
                background-color: rgba(0,0,0,0.8);
            }
            .next {
                right: 0;
                border-radius: 3px 0 0 3px;
            }
            .prev:hover, .next:hover {
                background-color: rgba(0,0,0,0.9);
            }
        </style>
    </head>
    <body>
        
        <!--adding navbar stuff using php-->
        <!--note: add navbar.js before body end to make navbar.html function right-->
        <?php include 'navbar.html'; ?>

        <div class = "body-section">
            <div class="slideshow-container">
                <!--Giving image a class-->
                <div class="slide">
                    <img class="slideImg" src="Assets\Maps\Map_1_1.jpg" alt="Slide 1">
                </div>
                <div class="slide">
                    <img class="slideImg" src="Assets\Maps\Map_2_1.jpg" alt="Slide 2">
                </div>
                <div class="slide">
                    <img class="slideImg" src="/api/placeholder/800/600" alt="Slide 3">
                </div>
                <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
                <a class="next" onclick="changeSlide(1)">&#10095;</a>
            </div>
        </div>
        
        <script src="location_maps.js"></script>
        <script src="navbar.js"></script>
    </body>
</html>