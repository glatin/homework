window.addEventListener('load', function() {
    var form = document.querySelector('.form-horizontal');

    form.addEventListener('submit', function(alEvento) {
        alEvento.preventDefault(); //hace que el formulario no se envíe 
        if (!this.nombre.value) {
            alert('Falta el nombre');
        } else if (!this.apellido.value) {
            alert('Falta el apellido')
        } else if (!this.direccion.value) {
            alert('Falta la direccion')
        } else if (!this.dni.value) {
            alert('Falta el dni')
        } else if (!this.telefono.value) {
            alert('Falta el teléfono')
        } else {
            console.log('OK!')
        }
    })
});
