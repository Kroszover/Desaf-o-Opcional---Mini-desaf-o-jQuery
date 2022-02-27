//Funcion que permite que cargue el documento antes del js
$(document).ready(function(){
    //Funcion para capturar el evento Click
    $("#botonnav").on("click", function(){
        //Funcion para añadir la animacion basado en el evento anterior
        $(".animate").toggle("slow");

    });
});