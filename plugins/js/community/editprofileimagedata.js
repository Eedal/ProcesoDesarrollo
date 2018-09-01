/*$(function() {
    $('#imgprofile').on('change', onChangeImageProfile);
  
$('#usuarioimgprofile').attr("src", newpicture);
    event.preventDefault();
  
});

function onChangeImageProfile() {
    var newpicture = $(this).val();
    //alert(newpicture);
    //$('#usuarioimgprofile').attr("src", newpicture);
    //event.preventDefault();
    console.log(newpicture);
    $.ajax({
            method: 'POST',
            url: '/home/profile/image',
            data: {
                newpicture: newpicture
            },
            success: function(data) {
                console.log(' Mira:  ' + data);
                location.href = "home/profile";
            },
            error: function(data) {
                var errors = data.responseJSON;
                console.log(errors);
                $.each(data.responseJSON, function(indice, valor) {
                        console.log(indice + ' - ' + valor);
                    }
                });
            swal("Oops", mensaje, "error");
        }
    });
}
*/
/*
<script>
            function previewFile() {
              var preview = document.getElementById("usuarioimgprofile");
              var file    = document.querySelector('input[type=file]').files[0];
              var reader  = new FileReader();

              reader.onloadend = function () {
                preview.src = reader.result;
              }

              if (file) {
                reader.readAsDataURL(file);
              } else {
                preview.src = "";
              }
            }
        </script>
*/