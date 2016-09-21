
function MostrarError()
{
	/*
	//var funcionAjax=$.ajax({url:"nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}});
	//funcionAjax.done(function(retorno){
	//	$("#principal").html(retorno);
	//	$("#informe").html("Correcto!!!");
	//});
	//funcionAjax.fail(function(retorno){
	//		$("#principal").html("error :(");
	//	$("#informe").html(retorno.responseText);		
	//});
	//funcionAjax.always(function(retorno){
		///alert("siempre "+retorno.statusText);
	//});
*/
	$.ajax({url:"nexoNoExiste.php"})
	.then(function(datosCorrectos){
		alert("primero");
	},
	function(datos){
		//alert("segundo");
		console.log("segundo",datos);
	})//url: donde va a ir. then: recibe una funcion. Callback: funciones que se van a disparar
}
function MostrarSinParametros()
{
	/*
	var funcionAjax=$.ajax({url:"nexoTexto.php"});

	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});*/
	
	$.ajax({url: "nexoTexto.php"})
	.then(function ok(respuesta)
	{
		//alert(respuesta);
		$("#principal").html(respuesta);
	},
	function mal(error)
	{
		alert(error);
	});

}

function Mostrar(queMostrar)
{
	/*
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});*/

	$.ajax(
		{
		url : "nexo.php",
		type : "post",
		data: { queHacer:queMostrar }//los datos que voy a pasar para el otro lado.

		})
	.then(function(exito)
	{
		$("#principal").html(exito);
	},
	function(error)
	{

	});



}

function MostarLogin()
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});

	//$.ajax({url :})
}