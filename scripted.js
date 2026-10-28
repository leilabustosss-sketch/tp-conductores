let lista_ed = JSON.parse(localStorage.getItem("lista_ed")) || [];

// Se ejecuta al cargar la página si existe el contenedor de resultados
if (document.getElementById("resultados_ed")) {
    mostrar_lista_ed(lista_ed);
}

function guardar_ed() {
    const input_nombre = document.getElementById("nombre_estudiante");
    const input_edad = document.getElementById("edad_estudiante");
    const input_curso = document.getElementById("curso");
    const input_seguro = document.getElementById("seguro_conductor");

    if (!input_nombre || !input_edad || !input_curso) {
        return;
    }

    let nombre = input_nombre.value.trim();
    let edad = input_edad.value.trim();
    let curso = input_curso.value.trim();
    let seguro = input_seguro ? (input_seguro.checked ? "Sí" : "No") : "No";

    if (nombre === "" || edad === "" || curso === "") {
        alert("Completa todos los campos");
        return;
    }

    let conductor = {
        nombre: nombre,
        curso: curso,
        edad: edad,
        seguro: seguro
    };

    lista_ed.push(conductor);
    localStorage.setItem("lista_ed", JSON.stringify(lista_ed));

    alert("GUARDADO CORRECTAMENTE");

    input_nombre.value = "";
    input_edad.value = "";
    input_curso.value = "";
    if (input_seguro) input_seguro.checked = false;

    // Solo actualiza la vista si estamos en una pantalla con lista
    if (document.getElementById("resultados_ed")) {
        mostrar_lista_ed(lista_ed);
    }
}

function mostrar_lista_ed(lista) {
    const div_resultado_ed = document.getElementById("resultados_ed");
    if (!div_resultado_ed) return;

    div_resultado_ed.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let conductor = lista[i];

        div_resultado_ed.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
        div_resultado_ed.innerHTML += "<h2>Nombre: " + conductor.nombre + "</h2>";
        div_resultado_ed.innerHTML += "<h3>Edad: " + conductor.edad + "</h3>";
        div_resultado_ed.innerHTML += "<h3>Carnet: " + conductor.curso + "</h3>";
        div_resultado_ed.innerHTML += "<h3>Seguro: " + (conductor.seguro || "No") + "</h3>";
        div_resultado_ed.innerHTML += "<hr>";
    }
}

function borrar_ed() {
    lista_ed = [];
    localStorage.removeItem("lista_ed");

    const div_resultado_ed = document.getElementById("resultados_ed");
    if (div_resultado_ed) {
        div_resultado_ed.innerHTML = "";
    }

    alert("LISTA BORRADA");
}