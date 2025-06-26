/************* JS QUE REGULA LA SECCIÓN DE CAMISETAS *************/

const camisetas = [
    [
        './images/one_piece1.jpg',
        './images/one_piece2.jpg'
    ],
    [
        './images/dragon_ball1.jpg',
        './images/dragon_ball2.jpg'
    ],
    [
        './images/solo_leveling1.jpg',
        './images/solo_leveling2.jpg'
    ]
];

// Selecciona todas las imágenes de las cards de camiseta
const imgElements = document.querySelectorAll('.grid-camisetas .card img');

// Llevamos el índice de la imagen actual por cada camiseta
let indices = [0, 0, 0];

setInterval(() => {
    imgElements.forEach((img, i) => {
        // Cambia al siguiente índice, vuelve a 0 si llega al final
        indices[i] = (indices[i] + 1) % camisetas[i].length;
        img.src = camisetas[i][indices[i]];
    });
}, 3000); // 3 segundos