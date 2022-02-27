//Funcion que permite que cargue el documento antes del js
$(document).ready(function(){
    //Funcion para capturar el evento Click
    $("#mouseSobre").on("mouseover", function(){
        //Funcion para cambiar los colores basado en el evento anterior
        $("ul > li:nth-child(even)").css("background-color", "blue");
        $("ul > li:nth-child(odd)").css("background-color", "lightblue");

    });
    $("#mouseSobre").on("mouseleave", function(){
        //Funcion para devolver el color original al elemento
        $("ul > li").css("background-color", "#CBD5E0");

    });
});