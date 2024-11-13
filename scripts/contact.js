const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();  // Evitar el comportamiento por defecto del formulario

    // Acceder a los elementos del formulario a través de e.target (el formulario)
    const formElements = e.target.elements;

    // Crear un objeto para almacenar los datos
    const data = {};

    // Iterar sobre los elementos y extraer los valores
    for (let element of formElements) {
        if (element.name) {  // Solo procesar elementos que tengan un atributo "name"
            data[element.name] = element.value;
        }
    }

    // Mostrar los datos obtenidos en la consola
    console.log(data);
    form.reset()
});
