document.getElementById('evidenciasBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const dropdown = document.getElementById('evidenciasDropdown');
    dropdown.classList.toggle('show');
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', function (e) {
    if (!e.target.matches('#evidenciasBtn')) {
        const dropdown = document.getElementById('evidenciasDropdown');
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});

// Datos de evidencias para cada integrante
const evidenceData = {
    maria: {
        name: "Mateo Bejarano Mejia",
        evidences: [
            {
                title: "Cuento: la sapa caramelo",
                description: "realizacion de un cuento atraves de palabras clave.",
                type: "Documento escrito",
                date: "10/08/2025",
                file: "src/assets/Mateo/Sapacaramelo.docx"
            },
            {
                title: "Taller tipos de comunicación",
                description: "taller sobre los tipos de comunicacion.",
                type: "Documento escrito",
                date: "12/08/2025",
                file: "src/assets/Mateo/taller.docx"
            },
            {
                title: "Presentación: Funciones del Lenguaje",
                description: "Exposición sobre la funcion emotiva y sus componentes.",
                type: "Presentación",
                date: "20/08/2025",
                file: "src/assets/Mateo/funcion-emotiva.pdf"
            },
            {
                title: "Investigacion: comunicacion no verbal",
                description: "investigacion sobre la kinesica y analisis de la pelicula el color del paraiso teniendo en cuenta la kinesica.",
                type: "Video",
                date: "11/09/2025",
                file: "src/assets/Mateo/Kinesica-El-Lenguaje-Corporal.pdf"
            }
        ]
    },
    juan: {
        name: "Brandon Alexis Quintero",
        evidences: [
            {
                title: "Cuento: la sapa caramelo",
                description: "realizacion de un cuento atraves de palabras clave.",
                type: "Documento escrito",
                date: "10/08/2025",
                file: "src/assets/Brandon/Cuento-Alexis.docx"
            },
            {
                title: "Taller tipos de comunicación",
                description: "taller sobre los tipos de comunicacion.",
                type: "Documento escrito",
                date: "12/08/2025",
                file: "src/assets/Brandon/comunicacion.docx"
            },
            {
                title: "Presentación: Funciones del Lenguaje",
                description: "Exposición sobre la funcion referencial y sus componentes.",
                type: "Presentación",
                date: "20/08/2025",
                file: "src/assets/Brandon/Función-referencial.pdf"
            },
            {
                title: "Investigacion: comunicacion no verbal",
                description: "investigacion sobre la kinesica y analisis de la pelicula el color del paraiso teniendo en cuenta la kinesica.",
                type: "Video",
                date: "11/09/2025",
                file: "src/assets/Brandon/Micropre-expresiones.pdf"
            }
        ]
    },
    ana: {
        name: "Anderson Alonso Arboleda Cano",
        evidences: [
            {
                title: "Cuento: la sapa caramelo",
                description: "realizacion de un cuento atraves de palabras clave.",
                type: "Documento escrito",
                date: "10/08/2025",
                file: "src/assets/Anderson/"
            },
            {
                title: "Taller tipos de comunicación",
                description: "taller sobre los tipos de comunicacion.",
                type: "Documento escrito",
                date: "12/08/2025",
                file: "src/assets/Anderson/Trabajoo.docx"
            },
            {
                title: "Presentación: Funciones del Lenguaje",
                description: "Exposición sobre la funcion fatica y sus componentes.",
                type: "Presentación",
                date: "20/08/2025",
                file: "src/assets/Anderson/Funcion Fatica.pdf"
            },
            {
                title: "Investigacion: comunicacion no verbal",
                description: "investigacion sobre el paralenguaje y analisis de la pelicula el color del paraiso teniendo en cuenta la kinesica.",
                type: "Video",
                date: "11/09/2025",
                file: "src/assets/Anderson/Paralenguaje.docx"
            }
        ]
    }
};

// Función para mostrar evidencias
function showEvidence(student) {
    const modal = document.getElementById('evidenceModal');
    const modalContent = document.getElementById('modalContent');
    const data = evidenceData[student];

    let html = `<h3>Evidencias de ${data.name}</h3>`;

    data.evidences.forEach((evidence, index) => {
        html += `
                    <div class="evidence-item">
                        <h4>${evidence.title}</h4>
                        <p><strong>Tipo:</strong> ${evidence.type}</p>
                        <p><strong>Fecha:</strong> ${evidence.date}</p>
                        <p><strong>Descripción:</strong> ${evidence.description}</p>
                        <a class="nav-link btn-evidencia" href=${evidence.file} download >Descargar Evidencia</a>
                    </div>
                `;
    });

    modalContent.innerHTML = html;
    modal.style.display = 'block';

    // Cerrar dropdown después de mostrar modal
    document.getElementById('evidenciasDropdown').classList.remove('show');
}

// Funcionalidad del modal
const modal = document.getElementById('evidenceModal');
const closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});