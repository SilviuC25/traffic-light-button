let light = document.getElementById("traffic-light")
let colorClasses = ["btn-danger", "btn-warning", "btn-success"]
let currentColorIndex = 0

function changeTrafficLightColor() {
    light.classList.remove(colorClasses[currentColorIndex]) // remove the existing color
    currentColorIndex = (currentColorIndex + 1) % colorClasses.length
    light.classList.add(colorClasses[currentColorIndex]) // add the next color
}

window.setInterval(function(){
    changeTrafficLightColor();
  }, 1e4); // change the traffic light color every 10 seconds