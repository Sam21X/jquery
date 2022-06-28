//$(document).ready----metodo ready hace referencia a un evento y ejecutamos una funcion de callback

async function getData(params) {
  // console.log(params)
  try {
    const result = await $.ajax({
      url: "http://localhost/jquery/datos.json",
      type: "POST",
      dataType: "JSON",
    });
    processData(params, result);
  } catch (error) {
    // console.log(error);
  }
}

function processData(params, result) {
  var process = result.find((arr) => arr.name == params.name);
  var dataChildren = process.children;

  var elementTitle = $(".div_texto");
  elementTitle.find("#titulo").html(process.name); 
  elementTitle.find("#card-text").html(process.description);

  if (dataChildren.length > 0) {
    for (let index = 0; index < dataChildren.length; index++) {
      const element = dataChildren[index];
      var concat = index == 0 ? "" : index;
      var elementNode = $("#tarjeta" + concat);
      elementNode.find("#card-title").html(element.name);
      elementNode.find(".image").prop("src", element.img);
      elementNode.find("p").text(element.description);
      if (index + 1 < dataChildren.length) {
        var clone = elementNode.clone();
        clone.prop("id", "tarjeta" + (index + 1));
        clone.appendTo("#parents");
      }
    }   
  }
}
