//Escuchar: blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup
//mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error

//Eventos de inicio
$(document).ready(function(){
  //loadTracking();
});

//Globals
const streaming = proy1.child('streaming');

//Firebase events
proy1.on('child_changed',snap => {      //child_changed ocurre solo cuando hay cambios
  console.log("A child changed to: ");
  console.log(snap.val());
});

streaming.on('value',snap => {              //value ocurre una vez inicialmente y también cuando hay cambios
  console.log("Pomped value:");
  console.log(snap.val());
  loadTracking();           //Esto hará cargar de inicio el loadTracking y además cuando hayan cambios en firebase
});


//Functions
function loadTracking(){
  $.ajax({
    url:"../requests/tracking/get_todo.php",
    type: "post",
    dataType: "json",
    success: function(datos){
      //console.log(datos);
      var trs = "";
      for(var i in datos){
        console.log(datos[i]);
        trs += "<tr class='trClick'>";
        trs += "<td class='tdUser'>"+datos[i]["nombres"]+" "+datos[i]["apellido1"]+"</td>";
        trs += "<td class='tdEvent'>"+datos[i]["evento"]+"</td>";
        trs += "<td class='tdMoment'>"+datos[i]["momento"]+"</td>";
        trs += "</tr>";
      }
      $(".tableClicks tbody").html(trs);
    }
  });
}

function trickToFilterLatinDate(){    //Permite que datatables filtre bien las fechas latinas. Se aplica después de set_dataTables()
  jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "date-uk-pre": function ( a ) {
      var ukDatea = a.split('/');
      return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
    },
    
    "date-uk-asc": function ( a, b ) {
      return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
    
    "date-uk-desc": function ( a, b ) {
      return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
  } );
}
function putBtnExcel(){   //a�ade al datatables un botón para descargar excel custom
  var btnExcel = '<button class="btn btn-success btnExcel" tabindex="0" aria-controls="pagos" type="button"><span>Excel</span></button>';
  //$("#pagos_wrapper .dt-buttons").append(btnExcel);
}
function set_dataTables(){        //Aplica datatables. Esta función debe aplicarse después de cargar y mostrar los datos de las tablas
  $('.tableClicks thead tr').clone(true).appendTo( '.tableClicks thead' );    //Se crea una copia del tr del thead y se a�ade al thead
  $('.tableLogIO thead tr').clone(true).appendTo( '.tableLogIO thead' );      //Se crea una copia del tr del thead y se a�ade al thead
  $('.tableOthers thead tr').clone(true).appendTo( '.tableOthers thead' );    //Se crea una copia del tr del thead y se a�ade al thead
  $('.tableClicks thead tr:eq(1) th, .tableLogIO thead tr:eq(1) th, .tableOthers thead tr:eq(1) th').each( function (i) {   //por cada th del tr copiado del thead
    var title = $(this).text();
    $(this).html( '<input type="text" placeholder="Buscar '+title+'" />' );   //reemplazo el nombre de columna por un input con placeholder indicativo
    $('input',this).on('keyup change',function(){                             //bindeo para cada input un evento on keyup u on change
      if(table.column(i).search() !== this.value){                            //
        table.column(i).search( this.value ).draw();
      }
    });
  });
  var table = $('#pagos').DataTable({   //Asegurar que el excel exportado se vea correctamente, investigar si se pueden añadir datos a lo importado.
    orderCellsTop: true,
    fixedHeader: true,
    paging: false,
    //scrollY: "500px",
    dom: 'Bfrtip',
    buttons: [
      'copyHtml5',
      'csvHtml5',
      'pdfHtml5'
    ],
    "aoColumns": [
      null,
      null,
      { "sType": "date-uk" }    //Filtramos formato dd/mm/yyyy en la columna de fecha pago, esto gracias a funcién trickToFilterLatinDate()
    ],
    "order": [],                //Evitamos que se ordene según la primera columna de la tabla
    language: {
      "processing": "Procesando...",
      "lengthMenu": "Mostrar _MENU_ registros",
      "zeroRecords": "No se encontraron resultados",
      "emptyTable": "Ning�n dato disponible en esta tabla",
      "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
      "infoFiltered": "(filtrado de un total de <span class='infoMax'>_MAX_</span> registros)",
      "search": "",
      "searchPlaceholder": "Buscar",
      "infoThousands": ",",
      "loadingRecords": "Cargando...",
      "paginate": {
        "first": "Primero",
        "last": "�ltimo",
        "next": "Siguiente",
        "previous": "Anterior"
      },
      "aria": {
        "sortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sortDescending": ": Activar para ordenar la columna de manera descendente"
      },
      "buttons": {
        "copy": "Copiar",
        "colvis": "Visibilidad",
        "collection": "Colección",
        "colvisRestore": "Restaurar visibilidad",
        "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
        "copySuccess": {
          "1": "Copiada 1 fila al portapapeles",
          "_": "Copiadas %d fila al portapapeles"
        },
        "copyTitle": "Copiar al portapapeles",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
          "-1": "Mostrar todas las filas",
          "1": "Mostrar 1 fila",
          "_": "Mostrar %d filas"
        },
        "pdf": "PDF",
        "print": "Imprimir"
      },
      "autoFill": {
        "cancel": "Cancelar",
        "fill": "Rellene todas las celdas con <i>%d<\/i>",
        "fillHorizontal": "Rellenar celdas horizontalmente",
        "fillVertical": "Rellenar celdas verticalmentemente"
      },
      "decimal": ",", //ESTO PERMITE FILTRAR FORMATO MONEDA $1.111
      "searchBuilder": {
        "add": "Añadir condición",
        "button": {
            "0": "Constructor de búsqueda",
            "_": "Constructor de búsqueda (%d)"
        },
        "clearAll": "Borrar todo",
        "condition": "Condición",
        "conditions": {
          "date": {
            "after": "Despues",
            "before": "Antes",
            "between": "Entre",
            "empty": "Vacío",
            "equals": "Igual a",
            "notBetween": "No entre",
            "notEmpty": "No Vacio",
            "not": "Diferente de"
          },
          "number": {
            "between": "Entre",
            "empty": "Vacio",
            "equals": "Igual a",
            "gt": "Mayor a",
            "gte": "Mayor o igual a",
            "lt": "Menor que",
            "lte": "Menor o igual que",
            "notBetween": "No entre",
            "notEmpty": "No vacío",
            "not": "Diferente de"
          },
          "string": {
            "contains": "Contiene",
            "empty": "Vacío",
            "endsWith": "Termina en",
            "equals": "Igual a",
            "notEmpty": "No Vacio",
            "startsWith": "Empieza con",
            "not": "Diferente de"
          },
          "array": {
            "not": "Diferente de",
            "equals": "Igual",
            "empty": "Vacío",
            "contains": "Contiene",
            "notEmpty": "No Vacío",
            "without": "Sin"
          }
        },
        "data": "Data",
        "deleteTitle": "Eliminar regla de filtrado",
        "leftTitle": "Criterios anulados",
        "logicAnd": "Y",
        "logicOr": "O",
        "rightTitle": "Criterios de sangr�a",
        "title": {
          "0": "Constructor de b�squeda",
          "_": "Constructor de b�squeda (%d)"
        },
        "value": "Valor"
      },
      "searchPanes": {
        "clearMessage": "Borrar todo",
        "collapse": {
          "0": "Paneles de b�squeda",
          "_": "Paneles de b�squeda (%d)"
        },
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Sin paneles de b�squeda",
        "loadMessage": "Cargando paneles de b�squeda",
        "title": "Filtros Activos - %d"
      },
      "select": {
        "1": "%d fila seleccionada",
        "_": "%d filas seleccionadas",
        "cells": {
          "1": "1 celda seleccionada",
          "_": "$d celdas seleccionadas"
        },
        "columns": {
          "1": "1 columna seleccionada",
          "_": "%d columnas seleccionadas"
        }
      },
      "thousands": ".",
      "datetime": {
        "previous": "Anterior",
        "next": "Proximo",
        "hours": "Horas",
        "minutes": "Minutos",
        "seconds": "Segundos",
        "unknown": "-",
        "amPm": [
          "am",
          "pm"
        ]
      },
      "editor": {
        "close": "Cerrar",
        "create": {
          "button": "Nuevo",
          "title": "Crear Nuevo Registro",
          "submit": "Crear"
        },
        "edit": {
          "button": "Editar",
          "title": "Editar Registro",
          "submit": "Actualizar"
        },
        "remove": {
          "button": "Eliminar",
          "title": "Eliminar Registro",
          "submit": "Eliminar",
          "confirm": {
            "_": "�Est� seguro que desea eliminar %d filas?",
            "1": "�Est� seguro que desea eliminar 1 fila?"
          }
        },
        "error": {
          "system": "Ha ocurrido un error en el sistema (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">M�s informaci�n&lt;\\\/a&gt;).<\/a>"
        },
        "multi": {
          "title": "M�ltiples Valores",
          "info": "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aqu�, de lo contrario conservar�n sus valores individuales.",
          "restore": "Deshacer Cambios",
          "noMulti": "Este registro puede ser editado individualmente, pero no como parte de un grupo."
        }
      },
      "info": "Mostrando de <span class='infoStart'>_START_</span> a <span class='infoEnd'>_END_</span> en un total de <span class='infoTotal'>_TOTAL_</span> registros"
    }
  });
}