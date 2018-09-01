$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: '../php/get_ciudades.php'
  })
  .done(function(listas_ciudades){
    $('#ciudadeslista').html(listas_ciudades)
    $('#ciudadeslista').tabs();
     
	})
  .fail(function(){
    alert("Operación fallida:")
  })
  
  $('#ciudadeslista').click(function(e){
	  var id = e.target.id;
    
    $.ajax({
          type: 'POST',
          url: '../php/postUniversidades.php',
        data: {'id': id}
        })
        .done(function(listas_post){
          $('#postUniversidades').html(listas_post)   
        })
        .fail(function(){
          alert('No se pudo cargar post')
      })
  })
  
})