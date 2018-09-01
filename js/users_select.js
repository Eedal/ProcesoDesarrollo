$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: '../../php/cargar_departamentos.php'
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
          url: '../../php/cargar_municipios.php',
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

/*Select nivel de estudio AND modalidad*/
$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: '../../php/cargar_study_levels.php'
  })
  .done(function(listas_study_levels){
    $('#select_tipo_program').html(listas_study_levels)
	  $("#select_tipo_program").material_select();
	})
  .fail(function(){
    alert('Hubo un errror al cargar los niveles de estudio')
    console.log("Hubo un errror al cargar los niveles de estudio")
  })
})

$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: '../../php/cargar_study_levels_modalidad.php'
  })
  .done(function(listas_study_levels_modalidad){
    $('#select_tipo_program_modalidad').html(listas_study_levels_modalidad)
	  $("#select_tipo_program_modalidad").material_select();
	})
  .fail(function(){
    alert('Hubo un errror al cargar las modalidades de los niveles de estudio')
    console.log('Hubo un errror al cargar las modalidades de los niveles de estudio')
  })
})
