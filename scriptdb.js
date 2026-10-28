let lista_db = JSON.parse(localStorage.getItem("lista_db")) || [];

const div_resultado_db = document.getElementById("resultados_db");
if (div_resultado_db) {
    mostrar_lista_db(lista_db);
}

function guardar_db() {
    const input_nombre = document.getElementById("nombre_docente");
    const input_edad = document.getElementById("edad_docente");
    const input_especialidad = document.getElementById("asignatura");
    const input_seguro = document.getElementById("seguro_vehiculo");

    if (!input_nombre || !input_edad || !input_especialidad) {
        return;
    }

    let nombre = input_nombre.value.trim();
    let edad = input_edad.value.trim();
    let especialidad = input_especialidad.value.trim();
    let seguro = input_seguro ? (input_seguro.checked ? "Sí" : "No") : "No";

    if (nombre === "" || edad === "" || especialidad === "") {
        alert("Completa todos los campos");
        return;
    }

    let vehiculo = {
        nombre: nombre,
        edad: edad,
        especialidad: especialidad,
        seguro: seguro
    };

    lista_db.push(vehiculo);
    localStorage.setItem("lista_db", JSON.stringify(lista_db));

    alert("GUARDADO CORRECTAMENTE");

    input_nombre.value = "";
    input_edad.value = "";
    input_especialidad.value = "";
    if (input_seguro) input_seguro.checked = false;

    if (div_resultado_db) {
        mostrar_lista_db(lista_db);
    }
}

function mostrar_lista_db(lista) {
    if (!div_resultado_db) return;

    div_resultado_db.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let vehiculo = lista[i];

        div_resultado_db.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
        div_resultado_db.innerHTML += "<h2>Modelo: " + vehiculo.nombre + "</h2>";
        div_resultado_db.innerHTML += "<h3> Año: " + vehiculo.edad + "</h3>";
        div_resultado_db.innerHTML += "<h3>Carnet Requerido: " + vehiculo.especialidad + "</h3>";
        div_resultado_db.innerHTML += "<h3>Seguro: " + (vehiculo.seguro || "No") + "</h3>";
        div_resultado_db.innerHTML += "<hr>";
    }
}

function borrar_db() {
    lista_db = [];
    localStorage.removeItem("lista_db");

    if (div_resultado_db) {
        div_resultado_db.innerHTML = "";
    }

    alert("LISTA BORRADA");
}