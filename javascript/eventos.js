$(document).ready(function() {
alert("eventos.js cargado");
//mouseOver y mouseOut 
var caja = $('#cajaQ');
caja.mouseover(function(){
    $(this).css("background","green");
});
caja.mouseout(function(){
    $(this).css("background","pink");
});
//como usar el Hover
var caja2 = $('#cajaR');

function yellow(){
    $(this).css("background","yellow");
}

function red(){
    $(this).css("background","red");
}

caja2.hover(yellow,red);

/*
//Click, doble click
caja2.click(function () {
    $(this).css("background", "black").css("color","cyan");
})
//focus y blur
$("#nombre").focus(function(){
    $(this).css("border","2px solid green");
})

//SELECTORES 
console.log("listo");
     //selector de ID
     $("#titulo").css("background", "yellow")
     .css("color", "white");
 console.log(titulo);
 //selector de clases
 var clase = $('#card-title');
 $('.sin_borde').click(function() {
     $(this).addClass('card-title');
 });

 //selectores de etiquetas
 var parrafos = $('p');
 parrafos.click(function() {
     var that = $(this);
     if (!that.hasClass('')) {
         that.addClass('');
     } else {
         that.removeClass('grande');
     }

 });
 //selectores de atributos
 $('[title="Google"]').css('background', '#ccc');
 $('[title="Wikipedia"]').css('background', 'blue');

 //find y parent
 //$('p,a,h1,h5').addClass('margen-superior');
 //var busqueda = $("#caja").find('.resaltado');
 //var busqueda = $('#caja.resaltado').eq(0).parent().parent().parent().find(' [title = "Google"]');
 var resaltado2 = $('#resaltado2').parent().parent().find('.resaltado'); //metodo para seleccionar elementos saliendo
 console.log(resaltado2);
*/
});