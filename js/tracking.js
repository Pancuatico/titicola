//Escuchar: blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup
//mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error
$(document).ready(function(){
  loadTracking();
});

function loadTracking(){
  $.post("../php/requests/tracking/get_todo.php",function(data){
    console.log(data);
  });
}

function trickToFilterLatinDate(){    //Permite que datatables filtre bien las fechas latinas. Se aplica despu�s de set_dataTables()
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
function putBtnExcel(){   //a�ade al datatables un bot�n para descargar excel custom
  var btnExcel = '<button class="btn btn-success btnExcel" tabindex="0" aria-controls="pagos" type="button"><span>Excel</span></button>';
  //$("#pagos_wrapper .dt-buttons").append(btnExcel);
}
function set_dataTables(){        //Aplica datatables. Esta funci�n debe aplicarse despu�s de cargar y mostrar los datos de las tablas
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
  var table = $('#pagos').DataTable({   //Asegurar que el excel exportado se vea correctamente, investigar si se pueden a�adir datos a lo importado.
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
      { "sType": "date-uk" }    //Filtramos formato dd/mm/yyyy en la columna de fecha pago, esto gracias a funci�n trickToFilterLatinDate()
    ],
    "order": [],                //Evitamos que se ordene seg�n la primera columna de la tabla
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
        "collection": "Colecci�n",
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
        "add": "A�adir condici�n",
        "button": {
            "0": "Constructor de b�squeda",
            "_": "Constructor de b�squeda (%d)"
        },
        "clearAll": "Borrar todo",
        "condition": "Condici�n",
        "conditions": {
          "date": {
            "after": "Despues",
            "before": "Antes",
            "between": "Entre",
            "empty": "Vac�o",
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
            "notEmpty": "No vac�o",
            "not": "Diferente de"
          },
          "string": {
            "contains": "Contiene",
            "empty": "Vac�o",
            "endsWith": "Termina en",
            "equals": "Igual a",
            "notEmpty": "No Vacio",
            "startsWith": "Empieza con",
            "not": "Diferente de"
          },
          "array": {
            "not": "Diferente de",
            "equals": "Igual",
            "empty": "Vac�o",
            "contains": "Contiene",
            "notEmpty": "No Vac�o",
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