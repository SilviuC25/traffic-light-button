let light = document.getElementById("traffic-light");
let colorClasses = ["btn-danger", "btn-warning", "btn-success"];
let currentColorIndex = 0;

function changeTrafficLightColor() {
    light.classList.remove(colorClasses[currentColorIndex]); // remove the existing color
    currentColorIndex = (currentColorIndex + 1) % colorClasses.length;
    light.classList.add(colorClasses[currentColorIndex]); // add the next color
}

const timeInterval = 10000;
window.setInterval(function() {
    changeTrafficLightColor();
}, timeInterval); // change the traffic light color every 10 seconds