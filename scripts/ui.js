
function setLightAmount() {
    var lightSlider = document.getElementById("lightSlider");
    var lightAmount = lightSlider.value / 100.0;

    setLightFunction(lightAmount);
}

function setWaterAmount() {
    var waterSlider = document.getElementById("waterSlider");
    var waterAmount = waterSlider.value / 100.0;

    setWaterFunction(waterAmount);
}

function setGroundType(groundType) {
    setGroundFunction(groundType);
}

function restartSimulation() {
    restartFunction();
}
