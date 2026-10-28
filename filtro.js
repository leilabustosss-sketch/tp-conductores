const div_estudiante = document.getElementById("resultados_ed");
const div_docente = document.getElementById("resultados_db");

function filtrarPorCarnet(tipoCarnet) {
    let estudiantes = JSON.parse(localStorage.getItem("lista_ed")) || [];
    let docentes = JSON.parse(localStorage.getItem("lista_db")) || [];


    div_estudiante.innerHTML = "";
    let conductoresFiltrados = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        let conductor = estudiantes[i];

        if (conductor.curso === tipoCarnet) {
            conductoresFiltrados++;
            div_estudiante.innerHTML += "<h2>Nombre: " + conductor.nombre + "</h2>";
            div_estudiante.innerHTML += "<h3>Edad: " + conductor.edad + "</h3>";
            div_estudiante.innerHTML += "<h3>Carnet: " + conductor.curso + "</h3>";
            div_estudiante.innerHTML += "<h3>Seguro: " + (conductor.seguro || "No") + "</h3><hr>";
        }
    }

    if (conductoresFiltrados === 0) {
        div_estudiante.innerHTML = "<p>No hay conductores con carnet " + tipoCarnet + "</p>";
    }


    div_docente.innerHTML = "";
    let vehiculosFiltrados = 0;

    for (let i = 0; i < docentes.length; i++) {
        let vehiculo = docentes[i];

        if (vehiculo.especialidad === tipoCarnet) {
            vehiculosFiltrados++;
            div_docente.innerHTML += "<h2>Modelo: " + vehiculo.nombre + "</h2>";
            div_docente.innerHTML += "<h3>Año: " + vehiculo.edad + "</h3>";
            div_docente.innerHTML += "<h3>Carnet Requerido: " + vehiculo.especialidad + "</h3>";
            div_docente.innerHTML += "<h3>Seguro: " + (vehiculo.seguro || "No") + "</h3><hr>";
        }
    }

    if (vehiculosFiltrados === 0) {
        div_docente.innerHTML = "<p>No hay vehículos para carnet " + tipoCarnet + "</p>";
    }
}
