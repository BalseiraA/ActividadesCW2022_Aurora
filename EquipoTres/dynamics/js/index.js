const menu = document.getElementById("menu");
const mostrar = document.getElementById("mostrar");
const titulo = document.getElementById("titulo");
const tit = document.getElementById("tit");
const apodo = document.getElementById("apodo");
const contrasena = document.getElementById("contrasena");

menu.addEventListener("click", (event) => {
    const eleccion = event.target;

    if(eleccion.id == 'perfil'){
        titulo.innerHTML = 'Perfil';
        tit.innerHTML = '<span class="navbar-brand" id="tit">INFORMACIÓN VISIBLE</span>';
        mostrar.innerHTML = '<div id="divPadre"><div id="infoGeneral"><div id="perfilNombre">Nombre</div><div id="nCuenta">Número de cuenta<!-- Esto va en la parte del perfil maestro, solo hay que sustituir --><!-- <button id="horarios">Horarios</button> --></div><div id="grupo">Grupo<!-- Esto va en la parte del perfil maestro, solo hay que sustituir --><!-- <button id="grupos">Grupos</button> --></div><div id="seccion">Sección<!-- Esto va en la parte del perfil maestro, solo hay que sustituir --><!-- <button id="materias">Materias</button> --></div><div id="correoElectronico">Correo electrónico institucional</div><div id="cambiarInfo"><a href="../templates/perfilUsuario.html"><strong>Cambiar información</strong></a></div></div><div id="infoCompleta"><div id="navBar"><img src="../../statics/media/images/Logo Coyoaulas.png" alt="logo" width="50"></div><div></div><div id="perfilNombre2">Nombre</div><div id="correoElectronico2">Correo electrónico</div><div id="correoElectronicoRecup">Correo electrónico de recuperación</div><div id="nCuenta2">Número de cuenta//desactivado<!-- RFC --></div><div><div id="grupo2">Grupo//desactivado<!-- Número de trabajador --></div><div id="seccion2">Sección//desactivado<!-- Número telefónico --></div></div><div id="telefono">Número telefónico</div><div><button id="guardar"><strong>Guardar cambios</strong></button> </div></div></div>';
        console.log("perfil");
    }
    if(eleccion.id == 'materias'){
        titulo.innerHTML = 'Materias';
        tit.innerHTML = '<span class="navbar-brand" id="tit">LISTA DE ASIGNATURAS</span>';
        mostrar.innerHTML = '<div id="materias"></div><div id="botones"> <button id="id">Agregar materias</button><button id="id">Eliminar materias</button></div>';
        console.log("materias");
    }
    if(eleccion.id == 'tablero'){
        titulo.innerHTML = 'Tablero';
        tit.innerHTML = '<span class="navbar-brand" id="tit">TABLERO</span>';
        mostrar.innerHTML = '<div id="botones"><div><button id="Materiales-boton"><strong>Materiales</strong></button></div><div><div id="anadir" style="display:block;"><strong>+</strong> </div></div><div><button id="Trabajos-boton"><strong>Trabajos</strong></button>  </div></div><div><div id="espacio-Trabajo"><!-- aqui va el formulario --></div></div>';
        const botonAnadir = document.getElementById("anadir");
        const espacio = document.getElementById("espacio-Trabajo");
        let formulario = document.createElement("form");
        let celda = document.createElement("fieldset");
        let input1 = document.createElement("input");
        let texto = document.createElement("textarea");
        let input2 = document.createElement("input");
        let fecha = document.createElement("input");



        botonAnadir.addEventListener("click",() =>
        {
            botonAnadir.style.display = "none";
            formulario.setAttribute("id", "añadirTareas");
            input1.setAttribute("type", "text");
            input1.setAttribute("placeholder", "Título del material");
            texto.setAttribute("rows", "10");
            texto.setAttribute("cols", "100");
            texto.setAttribute("placeholder", "Descripción");
            texto.setAttribute("id", "descripcion");
            input2.setAttribute("type", "file");
            input2.setAttribute("placeholder", "Archivos a compartir");
            input2.setAttribute("multiple", "");
            fecha.setAttribute("type", "date");

            console.log("Añadir tarea");
            celda.innerHTML += '<h2>AÑADIR NUEVO MATERIAL</h2>'
            espacio.append(formulario);
            formulario.append(celda);
            celda.append(input1);
            celda.innerHTML += '<br><br>';
            celda.append(texto);
            celda.innerHTML += '<br><br>';
            celda.append(input2);
            celda.innerHTML += '<br><br>Tipo de material: <select><option value="material">Material de estudio</option><option value="asignacion">Asignación</option></select><br><br>';
            celda.innerHTML += 'Fecha de entrega';
            celda.append(fecha);
            celda.innerHTML += '<br><br><button id="Publicar">Publicar</button>';
        });

        const publicar = document.getElementById("Publicar");
        publicar.addEventListener("click", ()=>
        {
            console.log("tarea publicada");
            botonAnadir.style.display = "block";
        });
        console.log("tablero");
    }
    if(eleccion.id == 'calendario'){
        titulo.innerHTML = 'Calendario';
        tit.innerHTML = '<div class="header">CALENDARIO DE ENTREGAS</div>';
        mostrar.innerHTML = '<div class="container"><div class="calendar-container"><div class="calendar-header"><div class="class-select"><select id="selectMaterias"></select></div><div class="months"><button id="button-previous-month"><</button><div style="width: 180px; text-align: center;"><span id="span-month"></span>, <span id="span-year"></span></div><button id="button-next-month">></button></div><div style="opacity: 0;">Test</div></div><div class="calendar-body "><div id="div-calendar" class="calendar"></div></div></div></div><!-- Modal de eventos --><div id="modal-events" class="modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 id="modal-title" class="modal-title"></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div id="modal-body" class="modal-body"><div id="div-add-event" class="add-event"><div class="mb-3"><label for="" class="form-label">Titulo</label><input type="text" class="form-control" id="input-titulo" aria-describedby="helpId" placeholder=""><small id="helpId" class="form-text text-muted">titulo del evento</small></div><div class="mb-3"><label for="" class="form-label">Materia</label><select class="form-control" id="select-materia"><option value="">Seleccione una materia</option></select></div><div class="mb-3"><label for="" class="form-label">Fecha</label><input type="date" class="form-control" id="input-fecha" aria-describedby="helpId" placeholder=""><small id="helpId" class="form-text text-muted">fecha del evento</small></div><div class="mb-3"><label for="" class="form-label">Hora Inicio</label><input type="time" class="form-control" id="input-hora-inicial" aria-describedby="helpId" placeholder=""><small id="helpId" class="form-text text-muted">hora inicial del evento</small></div><div class="mb-3"><label for="" class="form-label">Hora Fin</label><input type="time" class="form-control" id="input-hora-final" aria-describedby="helpId" placeholder=""><small id="helpId" class="form-text text-muted">hora final del evento</small></div><div class="mb-3"><label for="" class="form-label">Descripción</label><textarea class="form-control" id="input-descripcion" rows="3"></textarea></div></div><div id="div-list-events"></div></div><div class="modal-footer"><button id="button-save-event" type="button" class="btn btn-primary">Guardar evento</button>';
        mostrar.innerHTML += '<button id="button-add-event" type="button" class="btn btn-primary">Agregar evento</button></div></div></div></div>';
        // Se hace referencia a los elementos que están en el HTML
        const selectMaterias = document.getElementById('selectMaterias');
        const divCalendar = document.getElementById('div-calendar');
        const buttonPreviousMonth = document.getElementById('button-previous-month');
        const buttonNextMonth = document.getElementById('button-next-month');
        const spanMonth = document.getElementById('span-month');
        const spanYear = document.getElementById('span-year');
        const modalEvents = document.getElementById('modal-events');
        // Se crea un arreglo de los días de la semana
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
            // Se asignan variables para controlar el mes y año del calendario
        let currentMonth = new Date().getMonth() + 1;
        let currentYear = new Date().getFullYear();

        // Función que muestra el modal con los eventos del dia
        const showModalEvent = (info) => {
            // Se agrega la fecha al modal
            modalEvents.setAttribute('data-date', info.getAttribute('data-date'));
            // Se agrega el conteo al modal
            modalEvents.setAttribute('data-count', info.getAttribute('data-count'));
            // Usamos bootstrap para crear el modal
            const modal = new bootstrap.Modal(modalEvents);
            // Se muestra el modal
            modal.show();
        };

        // Función que agrega o quita días a una fecha
        const addDays = (date, days) => {
            const result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }

        // Función que crea y refresca el calendario
        const refreshCalendar = (month, year) => {
            // Limpia el calendario
            divCalendar.innerHTML = null;

            // Agrega los días de la semana como encabezado del calendario
            for (const day of days) {
                const div = document.createElement('div');
                div.classList.add('dayOfWeekHeader');
                div.innerHTML = day
                divCalendar.appendChild(div)
            }

            // Se calcula el primer y ultimo dia del calendario
            const currentDate = new Date();
            const currentCalendarDate = new Date(`${year}-${month}-15`);
            const firstDay = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), 1)
            const lastDay = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + 1, 0)

            // Pintar valores de mes y año en el HTML
            spanMonth.innerText = currentCalendarDate.toLocaleString('default', { month: 'long' }).toUpperCase();
            spanYear.innerText = year;

            // Se pintan los días del calendario 
            let calendarDay = 0;
            let calendarActiveDay = 0;
            for (let week = 0; week < 6; week++) {
                for (let day = 0; day < days.length; day++) {
                    const divDay = document.createElement('div');
                    // Se agrega la clase al día del calendario
                    divDay.classList.add('calendar-day');
                    // Se incrementa el contador de días del calendario
                    calendarDay++;
                    // Revisamos si el dia es del mes actual o de un mes anterior o siguiente 
                    if ((firstDay.getDay() === day || calendarActiveDay > 0) && calendarActiveDay < lastDay.getDate()) {
                        // Se incrementa el contador de días del mes
                        calendarActiveDay++;
                        // Se asigna el id con el numero de dias del mes
                        divDay.classList.add(`div-day-${calendarActiveDay}`);
                        // Se agrega la clase al dia de calendario activo
                        divDay.classList.add('active-calendar-day');
                        // Se agrega el dia al calendario
                        const span = document.createElement('span');
                        span.style.width = '100%';
                        span.innerHTML = `${calendarActiveDay}&nbsp;`;
                        span.classList.add(`div-day-${calendarActiveDay}`);
                        span.classList.add('calendar-day-number');
                        if (currentDate.getDate() === calendarActiveDay && currentDate.getMonth() + 1 === month && currentDate.getFullYear() === year) {
                            span.innerHTML = `<div class="today">${calendarActiveDay}&nbsp;</div>`;
                        }
                        divDay.appendChild(span);
                    } else {
                        // Se agrega la clase al dia de calendario inactivo
                        divDay.classList.add('disabled-calendar-day');
                        // Revisamos a partir del dia inicial del mes
                        let dayOffCurrentMonth = new Date(firstDay);
                        // Calculamos cuantos días se deben restar para pintar los días mes anterior o siguiente en el calendario actual
                        const daysCount = (dayOffCurrentMonth.getDay() * -1) + calendarDay - 1;
                        // Se agregan o quitamos días al dia del mes
                        dayOffCurrentMonth = addDays(dayOffCurrentMonth, daysCount);
                        // Se agrega el dia al calendario
                        divDay.innerHTML = `${dayOffCurrentMonth.getDate()}&nbsp;`;
                    }
                    divCalendar.appendChild(divDay)
                }
            }
        }

        // Eventos del modal
        modalEvents.addEventListener('show.bs.modal', (e) => {
            const date = new Date(e.target.getAttribute('data-date'));
            const count = e.target.getAttribute('data-count');
            const modalTitle = document.getElementById('modal-title');
            modalTitle.innerText = `${count | 0} evento(s) del día ${date.toLocaleDateString('es-MX')}`;
            const divListEvents = document.getElementById('div-list-events');
            const divAddEvent = document.getElementById('div-add-event');
            divAddEvent.classList.add('d-none');
            const buttonSaveEvent = document.getElementById('button-save-event');
            buttonSaveEvent.classList.add('d-none');
            // Guarda el evento en el calendario
            buttonSaveEvent.addEventListener('click', (e) => {
                const inputTitulo = document.getElementById('input-titulo');
                const usuario = 1; // Todo: obtener el usuario de la sesión
                const selectMateria = document.getElementById('select-materia');
                const inputFecha = document.getElementById('input-fecha');
                const inputHoraInicio = document.getElementById('input-hora-inicial');
                const inputHoraFin = document.getElementById('input-hora-final');
                const inputDescripcion = document.getElementById('input-descripcion');
                const evento = {
                    titulo: inputTitulo.value,
                    usuario: usuario,
                    materia: selectMateria.value,
                    fecha: inputFecha.value,
                    horaInicio: inputHoraInicio.value,
                    horaFin: inputHoraFin.value,
                    descripcion: inputDescripcion.value
                }
                const data = new FormData();
                data.append('evento', JSON.stringify(evento));
                // Se guarda el evento en la base de datos
                fetch(`dynamics/php/calendar/saveEvent.php`, {
                        method: 'POST',
                        body: data
                    })
                    .then((response) => {
                        return response;
                    })
                    .then(data => {
                        if (response === 'success') {
                            // Se agrega el evento al calendario
                            addEvent(evento);
                            // Se cierra el modal
                            modalEvents.modal('hide');
                        } else {
                            alert(data.message);
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            });
            const buttonAddEvent = document.getElementById('button-add-event');
            // Muestra la lista de los eventos o el formulario para agregar un evento
            buttonAddEvent.addEventListener('click', () => {
                divAddEvent.classList.toggle('d-none');
                divListEvents.classList.toggle('d-none');
                buttonSaveEvent.classList.toggle('d-none');
                buttonAddEvent.innerText = divAddEvent.classList.contains('d-none') ? 'Agregar evento' : 'Cancelar';
                if (buttonAddEvent.innerText == 'Agregar evento') {
                    buttonAddEvent.classList.add('btn-primary');
                    buttonAddEvent.classList.remove('btn-secondary');
                } else {
                    buttonAddEvent.classList.remove('btn-primary');
                    buttonAddEvent.classList.add('btn-secondary');
                    const selectMateria = document.getElementById('select-materia');
                    loadMaterias(selectMateria);
                }
            });
            // Se limpian los eventos del dia del modal
            divListEvents.innerHTML = null;
            // Se obtienen los eventos del día
            fetch(`dynamics/php/calendar/loadEvents.php?month=${date.getMonth() + 1}&year=${date.getFullYear()}&day=${date.getDate()}`)
                .then((response) => {
                    return response.json();
                })
                .then((datosJSON) => {
                    for (eventDay in datosJSON) {
                        let eventInfo = datosJSON[eventDay];
                        if (eventInfo) {
                            const div = document.createElement('div');
                            div.classList.add('event-day');
                            const buttonEventDayInfo = document.createElement('button');
                            buttonEventDayInfo.setAttribute('data-event-id', eventInfo.Evento_ID);
                            buttonEventDayInfo.classList.add('event-day-button');
                            buttonEventDayInfo.innerHTML = `${eventInfo.HoraInicial} - ${eventInfo.HoraFinal} - ${eventInfo.Titulo}`;
                            const buttonRemoveEvent = document.createElement('button');
                            // buttonRemoveEvent.id = `button-close-${eventInfo.Evento_ID}`;
                            buttonRemoveEvent.classList.add('btn-close');
                            buttonRemoveEvent.classList.add('event-day-remove');
                            const divEventInfo = document.createElement('div');
                            divEventInfo.id = `div-event-info-${eventInfo.Evento_ID}`;
                            divEventInfo.classList.add('event-day-info');
                            divEventInfo.innerHTML = `Materia: ${eventInfo.Materia} <br>${eventInfo.Descripcion}`;
                            div.appendChild(buttonEventDayInfo);
                            div.appendChild(divEventInfo);
                            div.appendChild(buttonRemoveEvent);
                            divListEvents.appendChild(div);
                            // Se agrega el evento al botón del evento para mostrar la información del evento
                            buttonEventDayInfo.addEventListener('click', function(e) {
                                const panel = this.nextElementSibling;
                                if (panel.style.maxHeight) {
                                    panel.style.maxHeight = null;
                                } else {
                                    panel.style.maxHeight = panel.scrollHeight + "px";
                                }
                            });
                            // Se agrega el evento al botón de eliminar el evento
                            buttonRemoveEvent.addEventListener('click', function(e) {
                                const eventId = this.parentElement.getAttribute('data-event-id');
                                fetch(`dynamics/php/calendar/removeEvent.php?eventId=${eventId}`)
                                    .then((response) => {
                                        return response;
                                    })
                                    .then((result) => {
                                        if (result == 'success') {
                                            this.parentElement.remove();
                                        } else {
                                            alert('Error al eliminar el evento');
                                        }
                                    });
                            });
                        }
                    }
                });
        });

        // Eventos de la navegación del calendario
        // Disminuye un mes
        buttonPreviousMonth.addEventListener('click', () => {
            currentYear = (currentMonth - 1 < 1) ? currentYear - 1 : currentYear;
            currentMonth = (currentMonth <= 1) ? 12 : currentMonth - 1;
            // Se ejecuta la función para pintar el calendario
            refreshCalendar(currentMonth, currentYear);
            // Se ejecuta la función para pintar los eventos del mes en el calendario
            loadEventsByMonth(currentMonth, currentYear);
        });
        // Aumenta un mes
        buttonNextMonth.addEventListener('click', () => {
            currentYear = (currentMonth + 1 > 12) ? currentYear + 1 : currentYear;
            currentMonth = (currentMonth >= 12) ? 1 : currentMonth + 1;
            // Se ejecuta la función para pintar el calendario
            refreshCalendar(currentMonth, currentYear);
            // Se ejecuta la función para pintar los eventos del mes en el calendario
            loadEventsByMonth(currentMonth, currentYear);
        });

        // Función que ejecuta la carga de las materias
        const loadMaterias = (element) => {
            fetch(`calendar/loadSubjects.php`)
                .then((response) => {
                    return response.json();
                })
                .then((datosJSON) => {
                    element.innerHTML = null;
                    if (datosJSON.length > 0) {
                        for (materia of datosJSON) {
                            element.appendChild(new Option(materia.Materia, materia.Materia_ID));
                        }
                    } else {
                        element.appendChild(new Option('No se encontraron resultados', 0));
                    }
                });
        };

        // Función que ejecuta la carga de los eventos del mes en el calendario
        const loadEventsByMonth = (month, year) => {
            fetch(`calendar/loadEvents.php?month=${month}&year=${year}&day=`)
                .then((response) => {
                    return response.json();
                })
                .then((datosJSON) => {
                    // Se limpian todos los eventos del calendario
                    const events = document.querySelectorAll('.events-by-date');
                    for (eventDate of events) {
                        eventDate.outerHTML = null;
                    }
                    // Se calcula el primer y ultimo dia del calendario
                    const currentCalendarDate = new Date(`${year}-${month}-15`);
                    const firstDay = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), 1);
                    const lastDay = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + 1, 0);
                    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
                        const divDay = document.getElementsByClassName(`div-day-${day}`);
                        if (divDay && datosJSON.length > 0) {
                            for (eventDay of datosJSON) {
                                // Variable para almacenar el conteo de eventos si existen
                                let countEvents = null;
                                if (parseInt(eventDay.Fecha.split('-')[2]) === day) {
                                    // Se agregan el conteo de eventos del dia al calendario
                                    const divEvents = document.createElement('div');
                                    // Se agrega la clase al conteo de eventos
                                    divEvents.classList.add('events-by-date');
                                    // Se agrega el conteo de eventos al calendario
                                    countEvents = eventDay.Conteo;
                                    divEvents.innerHTML = countEvents;
                                    divEvents.setAttribute('data-date', `${year}-${month}-${day}`);
                                    divEvents.setAttribute('data-count', countEvents);
                                    // Se agrega el evento al dia del calendario
                                    divDay[0].appendChild(divEvents);
                                }
                                // Se agrega atributo con el dia del calendario
                                divDay[0].setAttribute('data-date', `${year}-${month}-${day}`);
                                divDay[1].setAttribute('data-date', `${year}-${month}-${day}`);
                                // Se agrega atributo con el conteo de eventos al calendario
                                divDay[0].setAttribute('data-count', countEvents);
                                divDay[1].setAttribute('data-count', countEvents);
                                // Se agrega el event click al dia activo
                                divDay[0].addEventListener('click', (e) => {
                                    if (e.target.length) {
                                        showModalEvent(e.target[0]);
                                    } else {
                                        showModalEvent(e.target);
                                    }
                                });
                            }
                        }
                    }
                });
        };

        // Función que inicializa la pagina
        const init = () => {
            // Se cargan las materias
            loadMaterias(selectMaterias);
            // Se ejecuta la función para pintar el calendario
            refreshCalendar(currentMonth, currentYear);
            // Se ejecuta la función para pintar los eventos del mes en el calendario
            loadEventsByMonth(currentMonth, currentYear);
        }

        // Se ejecuta la función inicial
        init();
        console.log("calendario");
    }
    if(eleccion.id == 'juegos'){
        titulo.innerHTML = 'Juegos';
        tit.innerHTML = '<span class="navbar-brand" id="tit">JUEGOS</span>';
        mostrar.innerHTML = "<section class='SOPITAS'><h3><span>Sopita de Letras</span></h3><img src='../../statics/img/sopitas.png' alt='sopita' width='400vw'><h4><span><a id='jugarSopitas' href='./sopa.php'>Jugar</a></section>";
        console.log("juegos");
    }
});