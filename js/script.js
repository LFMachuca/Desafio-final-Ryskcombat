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

// Función para alternar visibilidad del dropdown
function toggleDropdown() {
    let dropdownContent = document.getElementById('dropdown-categorias');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Filtrar peleadores basado en la categoría seleccionada
function filtrarPeleadores() {
    const peleadores = document.querySelectorAll('.tarjeta-peleador');

    peleadores.forEach(peleador => {
        const categoriaPeleador = peleador.getAttribute('data-category');

        if (categoriaSeleccionada === "" || categoriaPeleador === categoriaSeleccionada) {
            peleador.style.display = 'block';
        } else {
            peleador.style.display = 'none';
        }
    });
}

// Evento para seleccionar categorías y filtrar peleadores
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita la propagación del evento

        if (this.getAttribute('data-category') !== null) {
            // Actualiza la categoría seleccionada solo si se hace clic en una categoría
            categoriaSeleccionada = this.getAttribute('data-category');
            document.getElementById('dropdown-btn').textContent = this.textContent;

            // Aplica la clase activa al botón seleccionado
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            filtrarPeleadores(); // Filtra los peleadores según la categoría seleccionada

            // Ocultar el dropdown después de seleccionar una categoría
            document.getElementById('dropdown-categorias').style.display = 'none';
        }
    });
});

// Evento para mostrar/ocultar el menú dropdown sin filtrar
document.getElementById('dropdown-btn').addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el evento se propague a otros elementos
    toggleDropdown(); // Llama a la función para alternar el dropdown
});

// Evento para cerrar el dropdown al hacer clic fuera del área
document.addEventListener('click', function(event) {
    let dropdownContent = document.getElementById('dropdown-categorias');
    if (event.target !== dropdownContent && !dropdownContent.contains(event.target) && event.target.id !== 'dropdown-btn') {
        dropdownContent.style.display = 'none';
    }
});
