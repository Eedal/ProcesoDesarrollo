$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: '../php/cargar_study_levels.php'
  })
  .done(function(listas_study_levels){
    $('#select_tipo_program').html(listas_study_levels)
	  $("#select_tipo_program").material_select();
	})
  .fail(function(){
    alert('Hubo un errror al cargar los niveles de estudio')

  })
})
