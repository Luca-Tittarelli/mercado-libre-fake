export const resultElement = (r) => {
    return `
        <div class="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <a href="${r.permalink}" target="_blank">
                <img src="${r.thumbnail}" alt="${r.title}" class="w-full h-44 object-contain border-[1px] border-solid border-gray-300">
                <div class="p-4">
                    <h2 class="text-base font-semibold text-gray-800 truncate">${r.title}</h2>
                    <div class="flex flex-col mx-2 mt-2">
                        <span class="text-xl font-bold text-gray-900">$${r.price.toLocaleString('es-AR')}</span>
                        ${r.shipping.free_shipping ? 
                            `<span class="text-sm text-green-500">Envío gratis</span>` : ''
                        }
                    </div>
                </div>
            </a>
        </div>
    `;
};
export const loadingElement = () => {
    return `
        <div class="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden animate-pulse z-10">
            <div class="w-full h-48 bg-gray-300"></div>
            <div class="p-4">
                <div class="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div class="flex items-center space-x-2 mt-2">
                    <div class="h-6 bg-gray-300 rounded w-1/3"></div>
                    <div class="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
            </div>
        </div>
    `;
};
export const notFoundElement = ()=>{
    return '<p class="text-center text-gray-500 col-span-full">No se encontraron productos.</p>';
}
export const errorElement = ()=>{
    return '<p class="text-center text-red-500 col-span-full">Hubo un error al obtener los productos. Intenta nuevamente.</p>';
}