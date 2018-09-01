$(document).ready(function(){
  var parem =  $("#input_search_institucion").val()
    
  $.ajax({
    type: 'POST',
    url: '../../php/get_institucion_criterio.php',
    data: {"criterio": parem},
  })
    .done(function(listar_instituciones){
      $('#list_instituciones').html(listar_instituciones)
    })
    .fail(function(){
      alert('Operacion fallida')
      console.log("Operacion fallida")
    })
    
  
})