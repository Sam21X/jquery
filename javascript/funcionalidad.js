//$(document).ready----metodo ready hace referencia a un evento y ejecutamos una funcion de callback

async function getData(params) {
  try {
    const result = await $.ajax({
      url: "http://localhost/jquery/datos.json",
      type: "POST",
      dataType: "JSON",
    });
    processData(params, result, '');
  } catch (error) {
  }
}
function processData(params, result, reload) {
  console.log(result);
  var process = (reload) ? result : result.find((arr) => arr.name == params.name);
  var dataChildren = process.children;

 loadTextParent(process);

  if (dataChildren.length > 0) {
    for (let index = 0; index < dataChildren.length; index++) {
      const element = dataChildren[index];
      var concat = index == 0 ? "" : index;
      var elementNode = $("#tarjeta" + concat);
      
      elementNode.find("#card-title").html(element.name);
      elementNode.find(".image").prop("src", element.img);
      elementNode.find("p").text(element.description);
      elementNode.find("#delete" + concat).click(function () {
        showOrDelete(element,2,process);
      })
      elementNode.find("#view" + concat).click(function() {
        showOrDelete(element,1,"");
      });

      if (index + 1 < dataChildren.length) {
        var clone = elementNode.clone();
        clone.prop("id", "tarjeta" + (index + 1));
        clone.find("#view"+concat).prop("id", "view" + (index + 1));
        clone.find("#delete"+concat).prop("id", "delete" + (index + 1));
        clone.appendTo("#parents");
      }
    }   
  }
}

function loadTextParent(process) {
  var elementTitle = $(".div_texto");
  elementTitle.find("#titulo").html(process.name); 
  elementTitle.find("#card-text").html(process.description);
}

function showOrDelete(element,action,data){
  if(action==1){
    $(".modal-title").html(element.name); 
    $(".modal-body").html(element.description);
  }
  if(action==2){
    const index = data.children.findIndex(children => children.name == element.name);
    if (index >= 0) {
        data.children.splice(index,1);
        //console.log(data);
        clearNodes(data.name, data);
    }
  }
}

function clearNodes(title, data) {
  var parent = $('#parents');
  console.log(parent.has('#tarjeta5'))
  for (let index = 0; index < parent.children().length; index++) {
    if (index>=1) {
      //$('div').remove('#tarjeta'+index);
    }
  } //console.log(parent.children());
  
  //processData(title, data, 1);
}
