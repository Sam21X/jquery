$(document).ready(function () {

    //load

    //  $("#datos").load("https://reqres.in/");
    // Get 
    $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
        response.data.forEach((element, index) => {
            $("#datos").append("<p>" + element.first_name + "" + element.last_name + "</p>");

        }); console.log(response.data);
    });
    //Metodo POST
    $("#formulario").submit(function (e) {
        e.preventDefault();
        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        console.log(usuario);
        $.post($(this).attr("action"), usuario, function (response) {
            console.log(response);
        }).done(function () {
            alert("usuario añadido correctamente");
        });
        return false;
    });

});