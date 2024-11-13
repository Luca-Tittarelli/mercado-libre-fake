import { loadingElement, notFoundElement, resultElement } from "./DOMelements.js";

const form = document.querySelector('#search-form');
const results = document.querySelector('#results');
const container = document.querySelector('#inicio')

// Función para buscar productos en Mercado Libre
async function searchProducts(query) {
    try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
        const data = await response.json();
        return data.results.slice(0, 12); // Limitar los primeros 12 resultados
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return null; // En caso de error, retornamos null
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const text = form.querySelector('#search-input').value; // Obtener el valor del input
    results.innerHTML = ''; // Limpiar resultados anteriores
    
    const existingH3 = container.querySelector('h3');
    if (existingH3) {
        existingH3.remove();
    }

    // Crear título de búsqueda
    const h3 = document.createElement('h3');
    h3.className = 'text-black font-semibold text-xl text-center';
    h3.innerHTML = `Resultados para "${text}"`;
    results.insertAdjacentElement('beforebegin', h3); // Insertar el título antes de los resultados
    
    form.reset(); // Limpiar el formulario

    // Mostrar los elementos de carga mientras se espera la respuesta
    results.innerHTML = '';
    for (let i = 0; i < 12; i++) {
        results.innerHTML += loadingElement(); // Agregar un "loading" por cada producto en espera
    }

    // Buscar productos
    const res = await searchProducts(text);

    // Una vez que se obtiene la respuesta, cambiamos el estado
    if (res) {
        results.innerHTML = ''; // Limpiar los elementos de carga

        if (res.length === 0) {
            results.innerHTML = notFoundElement()
        } else {
            res.forEach(r => {
                results.innerHTML += resultElement(r); // Mostrar los resultados
            });
        }
    } else {
        results.innerHTML = errorElement()
    }
});
