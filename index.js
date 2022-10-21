// There is an ID called root
// The PNGs are stored like this physics/physics_ (1).png

// Get a list of how many PNGs are in the folder
var pngs = [];
for (var i = 1; i < 117; i++) {
    pngs.push("subjects/physics/physics_ (" + i + ").png");
}

// Pick a random one
var randomPng = pngs[Math.floor(Math.random() * pngs.length)];

// Set the image
document.getElementById("root").src = randomPng;

// Set the image to be the same size as the window using CSS
document.getElementById("root").style.width = window.innerWidth + "px";
document.getElementById("root").style.height = window.innerHeight + "px";

// Set the image to be a random one every 5 seconds
setInterval(function() {
    var randomPng = pngs[Math.floor(Math.random() * pngs.length)];
    document.getElementById("root").src = randomPng;
}, 5000);