
var globalSimulationParameters = {
    light : 100,
    water : 100,
    ground : 0,
    fertilizer : false,

    maxPlantSize : 100,
    lifeDuration : 30,
    leavesColor : 0xff00ff00,
    deathType : 0
};

function updateSimulationParameters() {
    // TODO: check for undefined document.getElementById
    globalSimulationParameters.light = parseInt(document.getElementById("lightSlider").value);
    //alert(document.getElementById("lightSlider").value);
    //globalSimulationParameters.light = (int)document.getElementById("lightSlider").value;
    //alert(typeof(document.getElementById("lightSlider").value));

    updateParametersFunction();
}

function playSimulation(timeScale) {
    // TODO: check for undefined
    playFunction(timeScale);
}

function restartSimulation(timeScale) {
    // TODO: check for undefined
    restartFunction(timeScale);
}
