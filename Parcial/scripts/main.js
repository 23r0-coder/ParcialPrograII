function obtenerdatos(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = parseFloat(document.getElementById('telefono').value);
    var hora = document.getElementById('hora').value;
    var tratamiento = document.getElementById('tratamiento').value;
    
    document.citas.Nombreobtenido.value = nombre;
    document.citas.Apellidoobtenido.value = apellido;
    document.citas.Telefonoobtenido.value = telefono;
    document.citas.Horaobtenido.value = hora;
    document.citas.Trataobtenido.value = tratamiento;
}