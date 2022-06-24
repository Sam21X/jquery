//metodo ready hace referencia a un evento y ejecutamos una funcion de callback
 
  async function getData(params) {
    console.log(params)
   try {
    const result = await $.ajax({
        url: "http://localhost/jquery/datos.json",
        type: 'POST',
        dataType: "JSON"
      })
      processData(params, result);
   } catch (error) {
        console.log(error);
   }
}

function processData(params, result){
   var process = result.find(arr => arr.name == params.name);
   
        $(".tarjeta").clone().appendTo("#parents");
        console.log(result);
}



