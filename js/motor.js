var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora() {
    if(estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        Ruidos();
        licuadora.classList.add("active");
        
        console.log("Me has encendido!");
    } else {
        estadoLicuadora = "apagada";
        licuadora.classList.remove("active");
        Ruidos();
        console.log("Me apagaste...");
    }
}

function Ruidos() {
    if(sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;    
    }
}

 