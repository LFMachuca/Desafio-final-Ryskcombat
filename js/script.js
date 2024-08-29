let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let titleVideo = document.querySelector('.main-video .title-video');

listVideo.forEach(video => {
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            titleVideo.innerHTML = text;
        };
    };
});

// TIMER
let fecha = new Date("09/28/2024");
let msFecha = fecha.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoSegundos = document.querySelector("#segundos");
let parrafoMinutos = document.querySelector("#minutos");

setInterval(() => {
    let hoy = new Date().getTime();
    let distacia = msFecha - hoy;

    let msPorDia = 1000 * 60 * 60 * 24 ;
    let msPorHora = 1000 * 60 * 60;
    let msPorMinutos = 1000 * 60;
    let msPorSegundos = 1000;

    let dias = Math.floor(distacia / msPorDia);
    let horas = Math.floor((distacia % msPorDia) / msPorHora);
    let minutos = Math.floor((distacia % msPorHora) / msPorMinutos);
    let segundos = Math.floor((distacia % msPorMinutos) / msPorSegundos);

    parrafoDias.innerHTML = dias;
    parrafoHoras.innerHTML = horas < 10 ? "0" + horas:horas;
    parrafoMinutos.innerHTML = minutos < 10 ? "0" + minutos:minutos;
    parrafoSegundos.innerHTML = segundos < 10 ? "0" + segundos:segundos;

}, 1000);


// filtro peleadores
let categoriaSeleccionada = "";

// Filtrar peleadores basado en la categoría seleccionada
function filtrarPeleadores() {
    const peleadores = document.querySelectorAll('.tarjeta-peleador');

    peleadores.forEach(peleador => {
        const categoriaPeleador = peleador.getAttribute('category').toLowerCase();
        
        if (categoriaSeleccionada === "" || categoriaPeleador === categoriaSeleccionada) {
            peleador.style.display = 'block';
        } else {
            peleador.style.display = 'none';
        }
    });
}

// Eventos para los botones de categoría
// document.querySelectorAll('.filter-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
//         this.classList.add('active');
//         categoriaSeleccionada = this.getAttribute('data-categoria');
//         filtrarPeleadores();
//     });
// });

// Filtrar peleadores al seleccionar una categoría
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        categoriaSeleccionada = button.getAttribute('data-category');
        filtrarPeleadores();

        // Actualizar el texto del botón con la categoría seleccionada
        document.getElementById('dropdown-btn').textContent = button.textContent;

        // Cerrar el dropdown después de seleccionar una categoría
        document.getElementById('dropdown-content').classList.remove('show');
    });
});

// Mostrar/Ocultar el contenido del dropdown al hacer clic en el botón
document.getElementById('dropdown-btn').addEventListener('click', () => {
    document.getElementById('dropdown-content').classList.toggle('show');
});
// no andan estos scripts revisar 