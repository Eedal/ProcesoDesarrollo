$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: '../php/cargar_study_levels_modalidad.php'
  })
  .done(function(listas_study_levels_modalidad){
    $('#select_tipo_program_modalidad').html(listas_study_levels_modalidad)
	  $("#select_tipo_program_modalidad").material_select();
	})
  .fail(function(){
    alert('Hubo un errror al cargar las modalidades de los niveles de estudio')
  })
})
