//Funcion que permite que cargue el documento antes del js
$(document).ready(function(){
    //Funcion para capturar el evento Click
    $("#Click").on("click", function(){
        //Funcion para cambiar el css basado en el evento anterior
        $("#cambiar").css("background-color", "violet");
        //Funcion para cambiar el css basado en el evento anterior
        $("#cambiar").css("font-size", "65px");

    });
});