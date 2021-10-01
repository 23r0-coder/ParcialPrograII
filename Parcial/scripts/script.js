$(document).ready(function () {
    $("#remove").on("click", function () {
        
        if ($('#hora option').length > 1) {
            $("#hora option:selected").remove();
            alert('Su cita ha sido agendada.');
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("telefono").value = "";     
        } else {
                alert("Lo sentimos, por el momento no tenemos disponibilidad");
            }
        });});
