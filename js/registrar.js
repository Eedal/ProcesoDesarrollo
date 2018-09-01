$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: '../php/cargar_departamentos.php'
  })
  .done(function(listas_depar){
    $('#select-project').html(listas_depar)
	  $("#select-project").material_select();
	})
  .fail(function(){
    alert("Operación fallida:")
  })
  
  $('#select-project').on('change', function(){
	  var id = $('#select-project').val()
    $.ajax({
          type: 'POST',
          url: '../php/cargar_municipios.php',
        data: {'id': id}
        })
        .done(function(listas_depar){
          $('#select-muni').html(listas_depar)
        $("#select-muni").material_select();
        })
        .fail(function(){
          alert('Hubo un errror al cargar los municipios')
      })
  })
  
})
