export const Front_End = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="🤖 Welcome to Chiku AI! ✨ A Smart Artificial Intelligence Bot Designed with Love by Murali ❤️">
  <meta itemprop="name" content="Chiku AI">
  <meta itemprop="description" content="Discover Chiku AI – Your Friendly AI Companion, Created by Murali 🌟. Explore the future of AI with this innovative project! 🚀">
  <meta itemprop="image" content="https://i.imgur.com/8nMNz4E.jpeg">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <title>Chiku AI</title>
  <link rel="icon" href="https://i.imgur.com/8nMNz4E.jpeg" type="image/x-icon">

  <meta content="Chiku AI" property="og:site_name">
  <meta property="og:type" content="website">
  <meta content="https://yourwebsite.com/" property="og:url">
  <meta content="Chiku AI" property="og:title">
  <meta content="https://i.imgur.com/8nMNz4E.jpeg" property="og:image">
  <meta content="🤖 Welcome to Chiku AI! ✨ A Smart Artificial Intelligence Bot Designed with Love by Murali ❤️" property="og:description">
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    
  
  <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  
    <style>
    
        body {
            margin: 0;
            padding: 0;
            font-family: serif;
            background: radial-gradient(circle, #141E30, #243B55);
            background-size: 100%;
            overflow: auto;
            animation: background 10s infinite alternate;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            min-height: auto;
            width: 100%;
            overflow-x: hidden;
        }
        #gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
}

        .glitch {
            position: relative;
            text-align: center;
            transform: translate(-50%, -50%);
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            color: #fff;
            top: 20px;
            letter-spacing: 5px;
            z-index: 1;
            animation: shift 1s ease-in-out infinite alternate, fadeIn 1s ease-in-out;
            text-decoration: underline;
            text-decoration-color: cyan;
            
        }

        .glitch:before, .glitch:after {
            display: block;
            content: ""; 
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0.8;
        }

        .glitch:before {
            animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
            color: black;
            z-index: -1;
            text-align: center;
        }

        .glitch:after {
            animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
            color: cyan;
            z-index: -2;
            text-align: center;
        }

        @keyframes glitch {
            0% {
                transform: translate(0);
            }
            20% {
                transform: translate(-3px, 3px);
            }
            40% {
                transform: translate(-3px, -3px);
            }
            60% {
                transform: translate(3px, 3px);
            }
            80% {
                transform: translate(3px, -3px);
            }
            to {
                transform: translate(0);
            }
        }

        @keyframes shift {
            0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
                transform: skewX(0deg);
            }
            41% {
                transform: skewX(10deg);
            }
            42% {
                transform: skewX(-10deg);
            }
            59% {
                transform: skewX(40deg) skewY(10deg);
            }
            60% {
                transform: skewX(-40deg) skewY(-10deg);
            }
            63% {
                transform: skewX(10deg) skewY(-5deg);
            }
            70% {
                transform: skewX(-50deg) skewY(-20deg);
            }
            71% {
                transform: skewX(10deg) skewY(-10deg);
            }
        }

        

    
@keyframes pulse {
    0% {
        transform: scale(1.1);
    }
    50% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1.1);
    }
}

        .button-container {
            display: flex;
            justify-content: space-between;
            width: 97%;
            padding: 0 10px;
        }
    

        h1 {
            margin-top: 15px;
            font-size: 48px;
            text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
            animation: fadeIn 2s;
        }

        .about-section {
            width: 98%;
            max-width: 97%;
            text-align: left;
            margin: 20px 0;
            animation: zoomIn 1s ease-in-out;
            margin-top: 40px;
            
        }

        h2 {
            font-size: 1.5rem;
            margin-bottom: 30px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            text-decoration: underline;
            text-decoration-color: cyan;
        }
        .button-container a {
            text-decoration: none;
        }

        .Developer {
    font-size: 1.8em;
    text-align: center;
    color: cyan;
    margin-bottom: 30px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 10px white; /* Added white glow effect */
    text-decoration: underline;
    text-decoration-color: orange;
    font-weight: bold; 
            animation: wobble 1s ease-in-out;
}

    
    .image-container {
    margin-top: 80px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
          animation: Scale 1.4s ease forwards; 
    scale: 0; 
    animation-delay: 1.4s; 
}

    @keyframes Scale {
    to {
        scale: 1;
    }
}
.image-container img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #fff;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 
                0 0 40px rgba(255, 255, 255, 0.6);
    animation: glow 2s infinite alternate;
    transition: transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;
}

.image-container img:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(255, 255, 255, 1), 
                0 0 60px rgba(255, 255, 255, 0.8);
}

.image-container img.visible {
    opacity: 1;
    transition: opacity 0.5s ease;
}

@keyframes glow {
    from {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 
                    0 0 40px rgba(255, 255, 255, 0.6);
    }
    to {
        box-shadow: 0 0 30px rgba(255, 255, 255, 1), 
                    0 0 60px rgba(255, 255, 255, 0.8);
    }
}
        

.profile-box {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 90%;
            max-width: 600px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            animation: slideLeft 2s ease-in-out;
   
    margin-bottom: 10px; 
}
@keyframes slideLeft {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

        
.profile-box:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out; 
}


.profile-circle {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
    border: 2px solid #fff;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
}

.profile-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-text {
    display: flex;
    flex-direction: column;
}

.profile-text h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #fff;
}

.profile-text h4 {
    margin: 5px 0 0;
    font-size: 1rem;
    color: #aaa;
}

.profile-text p {
    margin: 5px 0 0;
    font-size: 0.9rem;
    color: #ddd;
}

.hover-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;

    
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out; 
}

.hover-modal.active {
    opacity: 1; 
    pointer-events: auto;
}
.modal-content {
    width: 90%;
    max-width: 400px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
}


.modal-image {
    width: 100px;
    height: 100px;
    margin: 0 auto 10px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
}

.modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.modal-content h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
}

.modal-content h4 {
    margin: 10px 0 0;
    font-size: 1.2rem;
    color: #aaa;
}

.modal-content p {
    margin: 10px 0 0;
    font-size: 1rem;
    color: #ddd;
}
    
    .footer {
  background: transparent;
  color: #f0f0f0;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;

  font-family: serif;
}

.footer-content {
  animation: fadeIn 2s ease-in-out;
}

.footer .highlight {
  color: cyan;
  font-weight: bold;
}

.footer .heart {
  color: #ff6b6b;
  animation: pulse 1.5s infinite;
}

.footer .quote {
  font-style: italic;
  font-size: 1rem;
  margin: 10px 0;
  color: #d3d3d3;
}




@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes zoomIn {
    0% {
        transform: scale(0.5);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes slideBottom {
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slideRight {
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes wobble {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(-10deg);
    }
    50% {
        transform: rotate(10deg);
    }
    75% {
        transform: rotate(-10deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
    
    


.green-button {
  position: relative;
  padding: 25px 30px;
  margin: 40px 0;
  color: #00ff00;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;

  transform: translateY(-20px); 

  letter-spacing: 4px;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.green-button:hover {
  background: #00ff00;
  color: #050801;
  box-shadow: 0 0 5px #00ff00,
              0 0 25px #00ff00,
              0 0 50px #00ff00,
              0 0 200px #00ff00;
}

.green-button span {
  position: absolute;
  display: block;
}

.green-button span:nth-child(1) {
  top: 0;
  left: 100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00);
  animation: animate1-reverse 1s linear infinite;
}

@keyframes animate1-reverse {
  0% { left: 100%; }
  50%, 100% { left: -100%; }
}

.green-button span:nth-child(2) {
  top: 100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #00ff00);
  animation: animate2-reverse 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes animate2-reverse {
  0% { top: 100%; }
  50%, 100% { top: -100%; }
}

.green-button span:nth-child(3) {
  bottom: 0;
  right: 100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #00ff00);
  animation: animate3-reverse 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes animate3-reverse {
  0% { right: 100%; }
  50%, 100% { right: -100%; }
}

.green-button span:nth-child(4) {
  bottom: 100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent, #00ff00);
  animation: animate4-reverse 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes animate4-reverse {
  0% { bottom: 100%; }
  50%, 100% { bottom: -100%; }
}



@keyframes animate1 {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}


@keyframes animate2 {
  0% { top: -100%; }
  50%, 100% { top: 100%; }
}



@keyframes animate3 {
  0% { right: -100%; }
  50%, 100% { right: 100%; }
}



@keyframes animate4 {
  0% { bottom: -100%; }
  50%, 100% { bottom: 100%; }
}


.cyan-button {
  position: relative;
  padding: 15px 20px;
  margin: 60px 0;
  color: #00ffff;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;

  transform: translateY(-20px);

  letter-spacing: 4px;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.cyan-button:hover {
  background: #00ffff;
  color: #050801;
  box-shadow: 0 0 5px #00ffff,
              0 0 25px #00ffff,
              0 0 50px #00ffff,
              0 0 200px #00ffff;
}

.cyan-button span {
  position: absolute;
  display: block;
}

.cyan-button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff);
  animation: animate1 1s linear infinite;
}



.cyan-button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #00ffff);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}



.cyan-button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #00ffff);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}


.cyan-button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent, #00ffff);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}



.red-button {
  position: relative;
  padding: 15px 20px;
  margin: 60px 0;
  color: #ff0000; 
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;

  transform: translateY(-20px); 

  letter-spacing: 4px;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.red-button:hover {
  background: #ff0000; 
  color: #050801;
  box-shadow: 0 0 5px #ff0000,
              0 0 25px #ff0000,
              0 0 50px #ff0000,
              0 0 200px #ff0000;
}

.red-button span {
  position: absolute;
  display: block;
}

.red-button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff0000); 
  animation: animate1 1s linear infinite;
}



.red-button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #ff0000);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}



.red-button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #ff0000); /* Red gradient */
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}



.red-button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent, #ff0000); /* Red gradient */
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}



    
    </style>
</head>


<body>
<div id="gradient"></div>
    <div class="image-container">
        <img id="nekos-image" src="https://i.imgur.com/DUZZoAO.jpeg" alt="Chiku">
    </div>
    <div class="glitch" data-glitch="Chiku Ai">Chiku Ai</div>
    <div class="about-section">
        <h2>About Chiku</h2>
        <p>
            Chiku AI is a unique bot built with the elegance of TypeScript by Murali, featuring a collection of beautiful and powerful commands.  
            It represents the boundless possibilities that artificial intelligence brings to the world, symbolizing innovation, creativity, and the future.  
            AI has the power to transform industries, empower individuals, and create solutions that were once thought impossible.  
            With Chiku, we take a step closer to unlocking the extraordinary potential of intelligent technology.
        </p>
        <h2>Control Chiku</h2>
        <div class="button-container">
            <a href="/chikuon" class="cyan-button">
                Chiku On
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </a>
            <a href="/chikuoff" class="red-button">
                Chiku Off
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
    </div>
    <div class="Developer">Developer & Credits</div>
    <div class="profile-box" id="profileBox1">
        <div class="profile-circle">
            <img src="https://i.imgur.com/BCVwgBq.jpeg" alt="Profile Picture">
        </div>
        <div class="profile-text">
            <h3>Name - Murali</h3>
            <h4>About</h4>
            <p>The visionary developer behind every line of code</p>
        </div>
    </div>
    <div class="hover-modal" id="hoverModal1">
        <div class="modal-content">
            <div class="modal-image">
                <img src="https://i.imgur.com/BCVwgBq.jpeg" alt="Profile Picture">
            </div>
            <h3>Name - Murali</h3>
            <h4>About</h4>
            <p>The visionary developer behind every line of code</p>
        </div>
    </div>
    <div class="profile-box" id="profileBox2" style="margin-top: 10px;">
        <div class="profile-circle">
            <img src="https://i.imgur.com/eXuZECu.jpeg" alt="Profile Picture">
        </div>
        <div class="profile-text">
            <h3>Name - Mr Hazex</h3>
            <h4>About</h4>
            <p>API provider and owner of some exclusive APIs</p>
        </div>
    </div>
    <div class="hover-modal" id="hoverModal2">
        <div class="modal-content">
            <div class="modal-image">
                <img src="https://i.imgur.com/eXuZECu.jpeg" alt="Profile Picture">
            </div>
            <h3>Name - Mr Hazex</h3>
            <h4>About</h4>
            <p>API provider and owner of some exclusive APIs</p>
        </div>
    </div>
    <div class="profile-box" id="profileBox3" style="margin-top: 10px;">
        <div class="profile-circle">
            <img src="https://i.imgur.com/Hw3eL3c.jpeg" alt="Profile Picture">
        </div>
        <div class="profile-text">
            <h3>Name - Ashlynn Repository</h3>
            <h4>About</h4>
            <p>Owner of some exclusive APIs</p>
        </div>
    </div>
    <div class="hover-modal" id="hoverModal3">
        <div class="modal-content">
            <div class="modal-image">
                <img src="https://i.imgur.com/Hw3eL3c.jpeg" alt="Profile Picture">
            </div>
            <h3>Name - Ashlynn Repository</h3>
            <h4>About</h4>
            <p>Owner of some exclusive APIs</p>
        </div>
    </div>
    
    <div class="Developer">Chiku Ai Source Code</div>
    
    <a href="https://github.com/Itz-Murali/Chiku-Ai" class="green-button">
        Click Me
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </a>
    
    <footer class="footer">
        <div class="footer-content">
            <p>Crafted with Magic by <span class="highlight">Murali</span></p>
            <p class="quote">"Coding is the art of turning imagination into reality."</p>
            <p>&copy; 2024 Murali. All rights reserved.</p>
        </div>
    </footer>
    

    <script>


var gradientColorsArray = new Array(
    "#1b1b2f", "#16213e", "#0f3460", "#53354a", "#2e2e3a",
  "#0d1b2a", "#1c2541", "#1e2022", "#222831", "#393e46",
  "#232931", "#141414", "#101820", "#181818", "#0a0a0a",
  "#202040", "#191d32", "#1f1f1f", "#2c2c34", "#11151c",
);

var gradientTransitionStep = 0;


var gradientColorIndices = [0, 1, 2, 3];


var gradientTransitionSpeed = 0.009;

function updateGradientBackground() {
    if (typeof jQuery === 'undefined') return; 

    
    var currentLeftColorIndex = gradientColorIndices[0];
    var nextLeftColorIndex = gradientColorIndices[1];
    var currentRightColorIndex = gradientColorIndices[2];
    var nextRightColorIndex = gradientColorIndices[3];

    var currentLeftColorHex = gradientColorsArray[currentLeftColorIndex];
    var nextLeftColorHex = gradientColorsArray[nextLeftColorIndex];
    var currentRightColorHex = gradientColorsArray[currentRightColorIndex];
    var nextRightColorHex = gradientColorsArray[nextRightColorIndex];

    var inverseGradientStep = 1 - gradientTransitionStep;

    function hexToRgb(hex) {
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
    }

    var [rLeftStart, gLeftStart, bLeftStart] = hexToRgb(currentLeftColorHex);
    var [rLeftEnd, gLeftEnd, bLeftEnd] = hexToRgb(nextLeftColorHex);
    var [rRightStart, gRightStart, bRightStart] = hexToRgb(currentRightColorHex);
    var [rRightEnd, gRightEnd, bRightEnd] = hexToRgb(nextRightColorHex);

    var redLeft = Math.round(inverseGradientStep * rLeftStart + gradientTransitionStep * rLeftEnd);
    var greenLeft = Math.round(inverseGradientStep * gLeftStart + gradientTransitionStep * gLeftEnd);
    var blueLeft = Math.round(inverseGradientStep * bLeftStart + gradientTransitionStep * bLeftEnd);
    var leftGradientColor = "rgb(" + redLeft + "," + greenLeft + "," + blueLeft + ")";

    var redRight = Math.round(inverseGradientStep * rRightStart + gradientTransitionStep * rRightEnd);
    var greenRight = Math.round(inverseGradientStep * gRightStart + gradientTransitionStep * gRightEnd);
    var blueRight = Math.round(inverseGradientStep * bRightStart + gradientTransitionStep * bRightEnd);
    var rightGradientColor = "rgb(" + redRight + "," + greenRight + "," + blueRight + ")";

    
    $('#gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + leftGradientColor + "), to(" + rightGradientColor + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + leftGradientColor + " 0%, " + rightGradientColor + " 100%)"
    });

    gradientTransitionStep += gradientTransitionSpeed;
    if (gradientTransitionStep >= 1) {
        gradientTransitionStep %= 1;
        gradientColorIndices[0] = gradientColorIndices[1];
        gradientColorIndices[2] = gradientColorIndices[3];

        gradientColorIndices[1] = (gradientColorIndices[1] + Math.floor(1 + Math.random() * (gradientColorsArray.length - 1))) % gradientColorsArray.length;
        gradientColorIndices[3] = (gradientColorIndices[3] + Math.floor(1 + Math.random() * (gradientColorsArray.length - 1))) % gradientColorsArray.length;
    }
}


setInterval(updateGradientBackground, 50);  


document.addEventListener("DOMContentLoaded", () => {
  const imageElement = document.getElementById("nekos-image");
  const apiUrl = "https://nekos.life/api/v2/img/neko";

  async function fetchAndSetImage() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.url) {
        imageElement.classList.remove("visible");
        setTimeout(() => {
          imageElement.src = data.url;
          imageElement.classList.add("visible");
        }, 500);
      } else {
        console.error("Invalid response structure: No URL found");
      }
    } catch (error) {
      console.error("Failed to fetch image from Nekos.life API:", error);
    }
  }

  fetchAndSetImage();
  setInterval(fetchAndSetImage, 4000);
});
    

const profileBox1 = document.getElementById("profileBox1");
const hoverModal1 = document.getElementById("hoverModal1");
profileBox1.addEventListener("click", () => {
    hoverModal1.classList.add("active");
});
hoverModal1.addEventListener("click", () => {
    hoverModal1.classList.remove("active");
});

const profileBox2 = document.getElementById("profileBox2");
const hoverModal2 = document.getElementById("hoverModal2");
profileBox2.addEventListener("click", () => {
    hoverModal2.classList.add("active");
});
hoverModal2.addEventListener("click", () => {
    hoverModal2.classList.remove("active");
});

const profileBox3 = document.getElementById("profileBox3");
const hoverModal3 = document.getElementById("hoverModal3");
profileBox3.addEventListener("click", () => {
    hoverModal3.classList.add("active");
});
hoverModal3.addEventListener("click", () => {
    hoverModal3.classList.remove("active");
});
</script>
</body>
</html>





            
`;
  
        



export const ChikuOnPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="🚀 Chiku AI is now online and ready to chat! 🤖 Let's connect and experience the power of artificial intelligence! 🌐">
  <meta itemprop="name" content="Chiku AI Online Page">
  <meta itemprop="description" content="Chiku AI is live! 🤖 Ready to chat, assist, and entertain. Explore the world of AI in real-time with Chiku! ✨">
  <meta itemprop="image" content="https://i.imgur.com/t5V92tj.jpeg">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <title>Chiku AI</title>
  <link rel="icon" href="https://i.imgur.com/t5V92tj.jpeg" type="image/x-icon">

  <meta content="Chiku AI Online Page" property="og:site_name">
  <meta property="og:type" content="website">
  <meta content="https://yourwebsite.com/" property="og:url">
  <meta content="Chiku AI Online Page" property="og:title">
  <meta content="https://i.imgur.com/t5V92tj.jpeg" property="og:image">
  <meta content="🚀 Chiku AI is now online and ready to chat! 🤖 Let's connect and experience the power of artificial intelligence! 🌐" property="og:description">

  
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    
  
  <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  
  <title>ChikuAi - Awake</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-height: 100vh;
      background: radial-gradient(circle, #0f0c29, #302b63, #24243e);
      font-family: serif;
      overflow: auto;
    }

    .image-container {
      position: relative;
      margin-top: 50px;
      width: 202px;
      height: 202px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow: hidden;
      animation: Scale 2s ease forwards; 
    scale: 0; 
    animation-delay: 2s; 
      
    }
  

    

    .image-container span {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(120deg, #ff00cc, #3333ff, #33ffcc, #ffcc33, #ff3333, #00ff99, #9933ff, #33ccff);
  background-size: 300% 300%;
  animation: border-move 5s infinite linear;
}

    @keyframes border-move {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .image-container img {
      width: 190px;
      height: 190px;
      border-radius: 50%;
      position: relative;
      z-index: 1;
      background: #000;
    }

    .chiku-txt {
      margin-top: 20px;
      font-size: 2.4rem;
      color: #00eaff;
      text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
      text-decoration: underline;
      font-weight: bold;
      animation: slideLeft 2s ease forwards;
  animation-delay: calc(.2s * var(--i));
    }



.status-box {
  margin-top: 30px;
  width: 80%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(40px);
  padding: 20px;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  animation: slideLeft 2s ease forwards;
  animation-delay: calc(.2s * var(--i));
}

.status-box h2 {
  margin: 0;
  font-size: 1.5rem;
  text-decoration: underline;
  color: #00eaff;
}

.status-box p {
  margin: 10px 0 0 0;
  font-size: 1.2rem;
  color: #e0f7fa;
}

.status-box .live {
  color: #0f0;
  font-weight: bold;
  font-size: 1.5rem;
  position: relative;
}

.status-box .live::after {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #0f0;
  border-radius: 50%;
  margin-left: 8px;
  position: relative;
  top: -3px; 
}
  
    .creator-text {
      margin-top: 20px;
      font-size: 2.4rem;
      color: #00eaff;
      text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
      text-decoration: underline;
      animation: slideTop 3s ease forwards;
  animation-delay: calc(.2s * var(--i));
    }
@keyframes Scale {
    to {
        scale: 1;
    }
}
    .creator-box {
      margin-top: 20px;
      width: 80%;
      max-width: 600px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      backdrop-filter: blur(40px);
      padding: 20px;
      color: white;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
      text-align: center;
      animation: slideTop 2s ease forwards;
  animation-delay: calc(.2s * var(--i));
    }
  
  @keyframes slideTop {
    0% {
        transform: translateY(100px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slideLeft {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
  
  @keyframes slideLeft {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

  
  

    .creator-image-container {
      position: relative;
      margin: 20px auto;
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .creator-image-container span {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(45deg, #ff0000, #ff7300, #ffeb00, #47ff00, #00ffee, #2b65ff, #8000ff, #ff0080);
      background-size: 400% 400%;
      animation: border-move 6s infinite;
    }

    .creator-image-container img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      position: relative;
      z-index: 1;
      background: #000;
    }

    .creator-box p {
      margin: 10px 0;
      font-size: 1.2rem;
    }

    .creator-box .name {
      font-weight: bold;
      color: white;
      text-decoration: underline;
      text-decoration-color: cyan;
    }

    .creator-box .role {
      
      color: white;
    }
  .cyan-button {
  position: relative;
  display: inline-block;
  padding: 15px 20px;
  margin: 60px 0;
  color: #00ffff;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  border: none;
  cursor: pointer;
}

.cyan-button:hover {
  background: #00ffff;
  color: #050801;
  box-shadow: 0 0 5px #00ffff, 0 0 25px #00ffff, 0 0 50px #00ffff, 0 0 200px #00ffff;
}

.cyan-button span {
  position: absolute;
  display: block;
}

.cyan-button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff);
  animation: animate1 1s linear infinite;
}

.cyan-button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #00ffff);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}

.cyan-button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #00ffff);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}

.cyan-button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent, #00ffff);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
  
   .green-button {
  position: relative;
  display: inline-block;
  padding: 15px 20px;
  margin: 60px 0;
  color: #39FF14;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  border: none;
  cursor: pointer;
}

.green-button:hover {
  background: #39FF14;
  color: white;
  box-shadow: 0 0 5px #39FF14, 0 0 25px #39FF14, 0 0 50px #39FF14, 0 0 200px #39FF14;
}

.green-button span {
  position: absolute;
  display: block;
}

.green-button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #39FF14);
  animation: animate1 1s linear infinite;
}

.green-button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #39FF14);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}

.green-button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #39FF14);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}

.green-button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent, #39FF14);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
  

@keyframes animate1 {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}

@keyframes animate2 {
  0% { top: -100%; }
  50%, 100% { top: 100%; }
}

@keyframes animate3 {
  0% { right: -100%; }
  50%, 100% { right: 100%; }
}

@keyframes animate4 {
  0% { bottom: -100%; }
  50%, 100% { bottom: 100%; }
}
  
  #gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
}
  
  

.footer {
  margin-top: auto;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 1rem;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
}

.footer h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  animation: fadeIn 3s ease-in-out;
}

.footer p {
  margin: 5px 0 0;
  font-size: 1rem;
  font-style: italic;
  animation: slideUp 3s ease-in-out;
}

.footer .creator {
  font-size: 1rem;
  margin-top: 10px;
  font-weight: bold;
}

.footer .creator span {
  color: #ffe100;
  font-style: italic;
  text-shadow: 0 0 5px #ffe100, 0 0 10px #ff7300;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
  
  </style>
</head>
<body>
  <div id="gradient"></div>
  <div class="image-container">
    <span></span>
    <img id="chiku-image" src="" alt="Chiku Image">
  </div>
  <div class="chiku-txt">Chiku AI</div>
<div class="status-box">
  <h2>Chiku AI Status</h2>
  <p class="live">Live</p>
  <p>Chiku AI is now active and ready to assist. Start your conversation now and explore endless possibilities!</p>
</div>

  <div class="creator-text">Creator</div>
  
<div class="creator-box">
  <div class="creator-image-container">
    <span></span>
    <img src="https://i.imgur.com/dnCKkp2.jpeg" alt="Creator Image">
  </div>
  <p class="name"><strong>Name:</strong> Murali</p>
  <p class="role"><strong>Role:</strong> Lead Developer</p>
  <p class="bio">
    <strong>Bio:</strong> Greetings! I'm Murali, the mastermind behind this bot. What started as a fun experiment during my waste time has grown into something truly exciting and enjoyable.
  </p>
  <p class="message">
    <strong>Message:</strong> Be a part of our journey! Join us on Telegram at @ChikuBots.
  </p>
  <a href="https://t.me/ChikuBots" class="cyan-button">
    Join Us
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </a>
  <a href="https://Itz-Murali.github.io" class="green-button">
    Visit My Portfolio
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </a>
</div>

  <div class="footer">
  <h2>Murali</h2>
  <p>"Code is like poetry; every line tells a story of creation."</p>
  <p> &copy 2024 Murali &middot; All rights reserved</p>
  <p class="creator">Crafted with passion by <span>Murali</span></p>
</div>
  <script>
  var gradientColorsArray = new Array(
  "#0d1b2a",
  "#1b263b",
  "#2c3e50",
  "#34495e",
  "#212121",
  "#263238",
  "#37474f",
  "#3a506b",
  "#2d3436",
  "#1c1c1c",
  "#171717",
  "#3e2723",
  "#4a4a4a",
  "#2b2d42",
  "#2e4053",
  "#283747",
  "#1a1a2e",
  "#0f3460",
);



var gradientTransitionStep = 0;


var gradientColorIndices = [0, 1, 2, 3];


var gradientTransitionSpeed = 0.009;

function updateGradientBackground() {
    if (typeof jQuery === 'undefined') return; 

    
    var currentLeftColorIndex = gradientColorIndices[0];
    var nextLeftColorIndex = gradientColorIndices[1];
    var currentRightColorIndex = gradientColorIndices[2];
    var nextRightColorIndex = gradientColorIndices[3];

    var currentLeftColorHex = gradientColorsArray[currentLeftColorIndex];
    var nextLeftColorHex = gradientColorsArray[nextLeftColorIndex];
    var currentRightColorHex = gradientColorsArray[currentRightColorIndex];
    var nextRightColorHex = gradientColorsArray[nextRightColorIndex];

    var inverseGradientStep = 1 - gradientTransitionStep;

    function hexToRgb(hex) {
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
    }

    var [rLeftStart, gLeftStart, bLeftStart] = hexToRgb(currentLeftColorHex);
    var [rLeftEnd, gLeftEnd, bLeftEnd] = hexToRgb(nextLeftColorHex);
    var [rRightStart, gRightStart, bRightStart] = hexToRgb(currentRightColorHex);
    var [rRightEnd, gRightEnd, bRightEnd] = hexToRgb(nextRightColorHex);

    var redLeft = Math.round(inverseGradientStep * rLeftStart + gradientTransitionStep * rLeftEnd);
    var greenLeft = Math.round(inverseGradientStep * gLeftStart + gradientTransitionStep * gLeftEnd);
    var blueLeft = Math.round(inverseGradientStep * bLeftStart + gradientTransitionStep * bLeftEnd);
    var leftGradientColor = "rgb(" + redLeft + "," + greenLeft + "," + blueLeft + ")";

    var redRight = Math.round(inverseGradientStep * rRightStart + gradientTransitionStep * rRightEnd);
    var greenRight = Math.round(inverseGradientStep * gRightStart + gradientTransitionStep * gRightEnd);
    var blueRight = Math.round(inverseGradientStep * bRightStart + gradientTransitionStep * bRightEnd);
    var rightGradientColor = "rgb(" + redRight + "," + greenRight + "," + blueRight + ")";

    
    $('#gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + leftGradientColor + "), to(" + rightGradientColor + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + leftGradientColor + " 0%, " + rightGradientColor + " 100%)"
    });

    gradientTransitionStep += gradientTransitionSpeed;
    if (gradientTransitionStep >= 1) {
        gradientTransitionStep %= 1;
        gradientColorIndices[0] = gradientColorIndices[1];
        gradientColorIndices[2] = gradientColorIndices[3];

        gradientColorIndices[1] = (gradientColorIndices[1] + Math.floor(1 + Math.random() * (gradientColorsArray.length - 1))) % gradientColorsArray.length;
        gradientColorIndices[3] = (gradientColorIndices[3] + Math.floor(1 + Math.random() * (gradientColorsArray.length - 1))) % gradientColorsArray.length;
    }
}


setInterval(updateGradientBackground, 50);  

    
async function fetchImage() {
  try {
    const response = await fetch("https://nekos.life/api/v2/img/neko");
    const data = await response.json();
    const imageUrl = data.url;

    
    document.getElementById("chiku-image").src = imageUrl;
  } catch (error) {
    document.getElementById("chiku-image").src = "https://i.imgur.com/Wp2uh69.jpeg";
    console.error("Error fetching image:", error);
  }
}


fetchImage();
setInterval(fetchImage, 4000);
  
  
  </script>
</body>
</html>





`;


export const ChikuOffPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="🚫 Chiku AI is currently offline. Stay tuned for updates! 🔧 A Smart Artificial Intelligence Bot Made by Murali ❤️">
  <meta itemprop="name" content="Chiku AI">
  <meta itemprop="description" content="Chiku AI is offline for maintenance. We'll be back soon! 💫 Designed with love by Murali 🌟">
  <meta itemprop="image" content="https://i.imgur.com/Rztzqfm.jpeg">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <title>Chiku AI </title>
  <link rel="icon" href="https://i.imgur.com/Rztzqfm.jpeg" type="image/x-icon">

  <meta content="Chiku AI" property="og:site_name">
  <meta property="og:type" content="website">
  <meta content="https://yourwebsite.com/" property="og:url">
  <meta content="Chiku AI" property="og:title">
  <meta content="https://i.imgur.com/Rztzqfm.jpeg" property="og:image">
  <meta content="🚫 Chiku AI is currently offline. Stay tuned for updates! 🔧 A Smart Artificial Intelligence Bot Made by Murali ❤️" property="og:description">

  
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    
  
  <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  
  <title>Chiku-AI</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-height: 100vh;
      background: radial-gradient(circle, #0f0c29, #302b63, #24243e);
      font-family: serif;
      overflow: auto;
    }

    .image-container {
      position: relative;
      margin-top: 50px;
      width: 202px;
      height: 202px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow: hidden;
      animation: Scale 2s ease forwards; 
    scale: 0; 
    animation-delay: 2s; 
      
    }
  

    

    .image-container span {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(120deg, #ff00cc, #3333ff, #33ffcc, #ffcc33, #ff3333, #00ff99, #9933ff, #33ccff);
  background-size: 300% 300%;
  animation: border-move 5s infinite linear;
}

    @keyframes border-move {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .image-container img {
      width: 190px;
      height: 190px;
      border-radius: 50%;
      position: relative;
      z-index: 1;
      background: #000;
    }

    .chiku-txt {
      margin-top: 20px;
      font-size: 2.4rem;
      color: #00eaff;
      text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
      text-decoration: underline;
      font-weight: bold;
      animation: slideLeft 2s ease forwards;
  animation-delay: calc(.2s * var(--i));
    }



.status-box {
  margin-top: 30px;
  width: 80%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(40px);
  padding: 20px;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  animation: slideLeft 2s ease forwards;
  animation-delay: calc(.2s * var(--i));
}

.status-box h2 {
  margin: 0;
  font-size: 1.5rem;
  text-decoration: underline;
  color: #00eaff;
}

.status-box p {
  margin: 10px 0 0 0;
  font-size: 1.2rem;
  color: #e0f7fa;
}

.status-box .live {
  color: red;
  font-weight: bold;
  font-size: 1rem;
  position: relative;
}

.status-box .live::after {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  margin-left: 8px;
  position: relative;
  top: -3px; 
}
  
    .creator-text {
      margin-top: 20px;
      font-size: 2.4rem;
      color: #00eaff;
      text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
      text-decoration: underline;
      animation: slideTop 3s ease forwards;
  animation-delay: calc(.2s * var(--i));
    }
@keyframes Scale {
    to {
        scale: 1;
    }
}
    .creator-box {
      margin-top: 20px;
      width: 80%;
      max-width: 600px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      backdrop-filter: blur(40px);
      padding: 20px;
      color: white;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
      text-align: center;
      animation: slideTop 2s ease forwards;
  animation-delay: calc(.2s * var(--i));
    }
  
  @keyframes slideTop {
    0% {
        transform: translateY(100px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slideLeft {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
  
  @keyframes slideLeft {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

  
  

    .creator-image-container {
      position: relative;
      margin: 20px auto;
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .creator-image-container span {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(45deg, #ff0000, #ff7300, #ffeb00, #47ff00, #00ffee, #2b65ff, #8000ff, #ff0080);
      background-size: 400% 400%;
      animation: border-move 6s infinite;
    }

    .creator-image-container img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      position: relative;
      z-index: 1;
      background: #000;
    }

    .creator-box p {
      margin: 10px 0;
      font-size: 1.2rem;
    }

    .creator-box .name {
      font-weight: bold;
      color: white;
      text-decoration: underline;
      text-decoration-color: cyan;
    }

    .creator-box .role {
      
      color: white;
    }
  .cyan-button {
  position: relative;
  display: inline-block;
  padding: 15px 20px;
  margin: 60px 0;
  color: #00ffff;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  border: none;
  cursor: pointer;
}

.cyan-button:hover {
  background: #00ffff;
  color: #050801;
  box-shadow: 0 0 5px #00ffff, 0 0 25px #00ffff, 0 0 50px #00ffff, 0 0 200px #00ffff;
}

.cyan-button span {
  position: absolute;
  display: block;
}

.cyan-button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff);
  animation: animate1 1s linear infinite;
}

.cyan-button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #00ffff);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}

.cyan-button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #00ffff);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}

.cyan-button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent, #00ffff);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
  
   .green-button {
  position: relative;
  display: inline-block;
  padding: 15px 20px;
  margin: 60px 0;
  color: #39FF14;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  border: none;
  cursor: pointer;
}

.green-button:hover {
  background: #39FF14;
  color: white;
  box-shadow: 0 0 5px #39FF14, 0 0 25px #39FF14, 0 0 50px #39FF14, 0 0 200px #39FF14;
}

.green-button span {
  position: absolute;
  display: block;
}

.green-button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #39FF14);
  animation: animate1 1s linear infinite;
}

.green-button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #39FF14);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}

.green-button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #39FF14);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}

.green-button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent, #39FF14);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
  

@keyframes animate1 {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}

@keyframes animate2 {
  0% { top: -100%; }
  50%, 100% { top: 100%; }
}

@keyframes animate3 {
  0% { right: -100%; }
  50%, 100% { right: 100%; }
}

@keyframes animate4 {
  0% { bottom: -100%; }
  50%, 100% { bottom: 100%; }
}
  
  #gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
}
  
  

.footer {
  margin-top: auto;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 1rem;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
}

.footer h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  animation: fadeIn 3s ease-in-out;
}

.footer p {
  margin: 5px 0 0;
  font-size: 1rem;
  font-style: italic;
  animation: slideUp 3s ease-in-out;
}

.footer .creator-name {
  font-size: 1rem;
  margin-top: 10px;
  font-weight: bold;
  text-shadow: 0 0 5px #ffe100, 0 0 10px #ff7300;
}

.footer .creator-name span {
  color: #ffe100;
  font-style: italic;
  text-shadow: 0 0 5px #ffe100, 0 0 10px #ff7300;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
  
  </style>
</head>
<body>
  <div id="gradient"></div>
  <div class="image-container">
    <span></span>
    <img id="chiku-image" src="" alt="Chiku Image">
  </div>
  <div class="chiku-txt">Chiku AI</div>
<div class="status-box">
  <h2>Chiku AI Status</h2>
  <p class="live">OFFLINE...</p>
  <p>Chiku AI is currently resting. Please check back soon to unlock its boundless knowledge and creativity.</p>
</div>

  <div class="creator-text">Creator</div>
  
<div class="creator-box">
  <div class="creator-image-container">
    <span></span>
    <img src="https://i.imgur.com/dnCKkp2.jpeg" alt="Creator Image">
  </div>
  <p class="name"><strong>Name:</strong> Murali</p>
  <p class="role"><strong>Role:</strong> Lead Developer</p>
  <p class="bio">
    <strong>Bio:</strong> Greetings! I'm Murali, the mastermind behind this bot. What started as a fun experiment during my waste time has grown into something truly exciting and enjoyable.
  </p>
  <p class="message">
    <strong>Message:</strong> Be a part of our journey! Join us on Telegram at @ChikuBots.
  </p>
  <a href="https://t.me/ChikuBots" class="cyan-button">
    Join Us
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </a>
  <a href="https://Itz-Murali.github.io" class="green-button">
    Visit My Portfolio
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </a>
</div>

 

<div class="footer">
  <h2 class="footer-title">Murali</h2>
  <p class="footer-quote">"Coding is an art where every line shows a tale of imagination."</p>
  <p class="footer-copyright">&copy; 2024 Murali &middot; All Rights Reserved</p>
  <p class="footer-creator">Lovingly crafted by <span class="creator-name">Murali</span></p>
</div>
  <script>
  var gradientColorsArray = new Array(
  "#ff4d4d",
  "#40ff00",
  "#1a1aff",
  "#ff00ff",
  "#ff9900",
  "#00ffff",
  "#ff3399",
  "#33ff66",
  "#ff0066",
  "#66ff33",
  "#ff5050",
  "#33ccff",
  "#ffff66",
  "#ff66ff",
  "#ffcc33",
  "#33ffcc",
  "#66ccff",
  "#ff3366",
  "#33ff99",
  "#ff6600"
);



var gradientTransitionStep = 0;


var gradientColorIndices = [0, 1, 2, 3];


var gradientTransitionSpeed = 0.009;

function updateGradientBackground() {
    if (typeof jQuery === 'undefined') return; 

    
    var currentLeftColorIndex = gradientColorIndices[0];
    var nextLeftColorIndex = gradientColorIndices[1];
    var currentRightColorIndex = gradientColorIndices[2];
    var nextRightColorIndex = gradientColorIndices[3];

    var currentLeftColorHex = gradientColorsArray[currentLeftColorIndex];
    var nextLeftColorHex = gradientColorsArray[nextLeftColorIndex];
    var currentRightColorHex = gradientColorsArray[currentRightColorIndex];
    var nextRightColorHex = gradientColorsArray[nextRightColorIndex];

    var inverseGradientStep = 1 - gradientTransitionStep;

    function hexToRgb(hex) {
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
    }

    var [rLeftStart, gLeftStart, bLeftStart] = hexToRgb(currentLeftColorHex);
    var [rLeftEnd, gLeftEnd, bLeftEnd] = hexToRgb(nextLeftColorHex);
    var [rRightStart, gRightStart, bRightStart] = hexToRgb(currentRightColorHex);
    var [rRightEnd, gRightEnd, bRightEnd] = hexToRgb(nextRightColorHex);

    var redLeft = Math.round(inverseGradientStep * rLeftStart + gradientTransitionStep * rLeftEnd);
    var greenLeft = Math.round(inverseGradientStep * gLeftStart + gradientTransitionStep * gLeftEnd);
    var blueLeft = Math.round(inverseGradientStep * bLeftStart + gradientTransitionStep * bLeftEnd);
    var leftGradientColor = "rgb(" + redLeft + "," + greenLeft + "," + blueLeft + ")";

    var redRight = Math.round(inverseGradientStep * rRightStart + gradientTransitionStep * rRightEnd);
    var greenRight = Math.round(inverseGradientStep * gRightStart + gradientTransitionStep * gRightEnd);
    var blueRight = Math.round(inverseGradientStep * bRightStart + gradientTransitionStep * bRightEnd);
    var rightGradientColor = "rgb(" + redRight + "," + greenRight + "," + blueRight + ")";

    
    $('#gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + leftGradientColor + "), to(" + rightGradientColor + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + leftGradientColor + " 0%, " + rightGradientColor + " 100%)"
    });

    gradientTransitionStep += gradientTransitionSpeed;
    if (gradientTransitionStep >= 1) {
        gradientTransitionStep %= 1;
        gradientColorIndices[0] = gradientColorIndices[1];
        gradientColorIndices[2] = gradientColorIndices[3];

        gradientColorIndices[1] = (gradientColorIndices[1] + Math.floor(1 + Math.random() * (gradientColorsArray.length - 1))) % gradientColorsArray.length;
        gradientColorIndices[3] = (gradientColorIndices[3] + Math.floor(1 + Math.random() * (gradientColorsArray.length - 1))) % gradientColorsArray.length;
    }
}


setInterval(updateGradientBackground, 50);  

    async function fetchImage() {
  try {
    const response = await fetch("https://nekos.life/api/v2/img/neko");
    const data = await response.json();
    const imageUrl = data.url;

    
    document.getElementById("chiku-image").src = imageUrl;
  } catch (error) {
    document.getElementById("chiku-image").src = "https://i.imgur.com/Wp2uh69.jpeg";
    console.error("Error fetching image:", error);
  }
}


fetchImage();
setInterval(fetchImage, 4000);
  
  
  </script>
</body>
</html>

`;

export const ErrorPage2 = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 Page</title>
  <style>
    
    .page_404 {
      padding: 40px 0;
      background: #fff;
      font-family: "Arvo", serif;
    }

    .page_404 img {
      width: 100%;
    }

    .four_zero_four_bg {
      background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
      height: 400px;
      background-position: center;
    }

    .four_zero_four_bg h1 {
      font-size: 80px;
    }

    .four_zero_four_bg h3 {
      font-size: 80px;
    }

    .link_404 {
      color: #fff !important;
      padding: 10px 20px;
      background: #39ac31;
      margin: 20px 0;
      display: inline-block;
      text-decoration: none;
    }

    .contant_box_404 {
      margin-top: -50px;
    }

    .text-center {
      text-align: center;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .row {
      display: flex;
      justify-content: center;
    }

    .col-sm-12 {
      width: 100%;
    }

    .col-sm-10 {
      width: 83.33%;
    }

    .col-sm-offset-1 {
      margin-left: 8.33%;
    }
  </style>
</head>
<body>
  <section class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">404</h1>
            </div>
            <div class="contant_box_404">
              <h3 class="h2">Look like you're lost</h3>
              <p>The page you are looking for is not available!</p>
              <a href="" class="link_404">Go to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
</html>
`;


export const ErrorPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="🚨 Oops! Page Not Found! 😱 Something went wrong. Let’s get back on track soon! ⚡">
  <meta itemprop="name" content="Error - Page Not Found">
  <meta itemprop="description" content="Oops! Looks like you've landed on a page that doesn’t exist. Don’t worry, we’re working on it! 🔧">
  <meta itemprop="image" content="https://i.imgur.com/Re3KkOj.jpeg">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <title>Error - Page Not Found</title>
  <link rel="icon" href="https://i.imgur.com/Re3KkOj.jpeg" type="image/x-icon">

  <meta content="Error - Page Not Found" property="og:site_name">
  <meta property="og:type" content="website">
  <meta content="https://yourwebsite.com/" property="og:url">
  <meta content="Error - Page Not Found" property="og:title">
  <meta content="https://i.imgur.com/Re3KkOj.jpeg" property="og:image">
  <meta content="🚨 Oops! Page Not Found! 😱 Something went wrong. Let’s get back on track soon! ⚡" property="og:description">
  <link href="https://fonts.googleapis.com/css?family=Tomorrow&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Tomorrow', sans-serif;
      height: 100vh;
      background-image: linear-gradient(to top, #2e1753, #1f1746, #131537, #0d1028, #050819);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .text {
      position: absolute;
      top: 10%;
      color: #fff;
      text-align: center;
    }
    h1 {
      font-size: 50px;
    }
    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      background: #fff;
      right: 0;
      animation: starTwinkle 3s infinite linear;
    }
    .astronaut img {
      width: 100px;
      position: absolute;
      top: 55%;
      animation: astronautFly 6s infinite linear;
    }
    @keyframes astronautFly {
      0% {
        left: -100px;
      }
      25% {
        top: 50%;
        transform: rotate(30deg);
      }
      50% {
        transform: rotate(45deg);
        top: 55%;
      }
      75% {
        top: 60%;
        transform: rotate(30deg);
      }
      100% {
        left: 110%;
        transform: rotate(45deg);
      }
    }
    @keyframes starTwinkle {
      0% {
        background: rgba(255, 255, 255, 0.4);
      }
      25% {
        background: rgba(255, 255, 255, 0.8);
      }
      50% {
        background: rgba(255, 255, 255, 1);
      }
      75% {
        background: rgba(255, 255, 255, 0.8);
      }
      100% {
        background: rgba(255, 255, 255, 0.4);
      }
    }
  </style>
</head>
<body>
  <div class="text">
    <div>ERROR</div>
    <h1>404</h1>
    <hr>
    <div>Something Error Occured See Your Logs</div>
  </div>

  <div class="astronaut">
    <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="Astronaut">
  </div>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      var body = document.body;
      setInterval(createStar, 100);

      function createStar() {
        var right = Math.random() * 500;
        var top = Math.random() * screen.height;
        var star = document.createElement("div");
        star.classList.add("star");
        body.appendChild(star);
        setInterval(runStar, 10);
        star.style.top = top + "px";

        function runStar() {
          if (right >= screen.width) {
            star.remove();
          }
          right += 3;
          star.style.right = right + "px";
        }
      }
    });
  </script>
</body>
</html>

`;
