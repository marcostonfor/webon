document.addEventListener('DOMContentLoaded', (event) => {
    function loadMarkdownContent() {
        const preview = document.getElementById("preview");

        // Función para cargar y renderizar el contenido Markdown
        // const loadMarkdown = (filePath) => {
        //     fetch(filePath)
        //         .then((response) => response.text())
        //         .then((markdownContent) => {
        //             // Renderiza el contenido Markdown
        //             preview.innerHTML = marked.parse(markdownContent);

        //             // Ejecuta el scroll al tope de la página después de cargar el contenido
        //             scrollToTop();

        //             // Agrega el evento a los enlaces
        //             const links = preview.querySelectorAll("a");
        //             links.forEach((link) => {
        //                 link.addEventListener("click", (e) => {
        //                     const href = link.getAttribute("href");

        //                     // Verifica si el enlace es externo
        //                     const isExternal = href.startsWith("http") || href.startsWith("https");

        //                     if (isExternal) {
        //                         // Abre el enlace externo en una nueva pestaña
        //                         link.setAttribute("target", "_blank");
        //                     } else {
        //                         e.preventDefault(); // Previene el comportamiento por defecto del enlace
        //                         // Cargar el nuevo contenido del archivo Markdown
        //                         loadMarkdown(href);
        //                     }
        //                 });
        //             });
        //         })
        //         .catch((error) =>
        //             console.error("Error al cargar el archivo Markdown:", error)
        //         );
        // };




        // Función para cargar y renderizar Markdown
        const loadMarkdown = (filePath) => {
            fetch(filePath)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Error al cargar el archivo Markdown: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then((markdownContent) => {
                    // Renderiza el contenido Markdown
                    preview.innerHTML = marked.parse(markdownContent);

                    // Agregar eventos a los enlaces dentro del contenido cargado
                    const links = preview.querySelectorAll("a");
                    links.forEach((link) => {
                        link.addEventListener("click", (e) => {
                            const href = link.getAttribute("href");

                            // Evitar el comportamiento por defecto solo para enlaces internos
                            if (!href.startsWith("http")) {
                                e.preventDefault(); 

                                // Verifica si es un archivo Markdown y lo carga
                                if (href.endsWith('.md')) {
                                    loadMarkdown(href);
                                }
                            }
                        });
                    });
                })
                .catch((error) => {
                    console.error("Error al cargar el archivo Markdown:", error);
                });
        };
 
        // Cargar y renderizar el archivo Markdown inicial
        loadMarkdown('./README.md');
        // loadMarkdown('./fundamentosInternet/conceptosBasicos.md'); // Asegúrate de que este archivo exista en tu servidor
    }

    // function scrollToTop() {
    //     const topon = document.getElementById('onTop');
    //     if (topon) {
    //         const topPosition = topon.offsetTop;
    //         window.scrollTo({
    //             top: topPosition,
    //             behavior: 'smooth'
    //         });
    //     }
    // }

    function scrollToTop() {
        const topon = document.getElementsByTagName('body');
        if (topon) {
            const topPosition = topon.getBoundingClientRect().top + window.scrollY; // Calcula la posición absoluta
            window.scrollTo({
                top: topPosition,
                behavior: 'smooth'
            });
        }
    }



    // Cargar el contenido de Markdown y desplazar hacia arriba una vez que esté cargado
    loadMarkdownContent();
});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Fuerza la posición de scroll al inicio de la página
window.scrollTo(0, 0);