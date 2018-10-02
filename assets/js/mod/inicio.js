$(document).ready(function () {
  $("#uploadForm > input.btn.btn-primary.file-button").click(function () {
    let archivo = $('input[type="file"]', "#uploadForm").val().split(".").reverse()[0];
    if (archivo == "xlsx") {
      $('#uploadForm').submit(function () {
        $("#uploadForm > input.btn.btn-primary.file-button").prop("disabled", true);
        $("#status").empty().text("Subiendo archivo...");
        $(this).ajaxSubmit({
          error: function (xhr) {
            status('Error: ' + xhr.status);
          },
          success: function (response) {
            $("#uploadForm > input.btn.btn-primary.file-button").prop("disabled", false)
            $("#status").empty().append(response);
          }
        });
        return false;

      });
    } else{
      $("#status").empty().append(`<div class="alert alert-dismissible alert-warning">
                                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                                    Favor de verificar que el archivo tenga extension XLSX
                                  </div>`).hide().fadeIn(400);
      return false;
    }
  });
});