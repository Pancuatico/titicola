//events
$(document).ready(function(){
  $("#chatRoomInput").change(function(){generalMessage($(this).val())});
  $("#btn1").click(function(){registerClick("Opción 1")});
  $("#btn2").click(function(){registerClick("Opción 2")});
  $("#btn3").click(function(){registerClick("Opción 3")});
  $(".makeAsk").click(function(){makeAsk()});
  $(".rmAsk").click(function(){rmAsk()});
  
});
  
//globals
const streaming = proy1.child('streaming');

//Firebase events
streaming.on('value',snap => {
  console.log("streaming value: ");
  console.log(snap.val());
  console.log(snap.val()["ask"]);
  if(snap.val()["ask"]==1){
    $("#btn1,#btn2,#btn3").show();
  }else if(snap.val()["ask"]==0){
    $("#btn1,#btn2,#btn3").hide();
  }
});

//Functions
function makeAsk(){
  registerClick("Se preguntó por el nombre del autor de papelucho");
  streaming.update({'ask': 1});
}
function rmAsk(){
  registerClick("Terminó la pregunta sobre el nombre del autor de papelucho");
  streaming.update({'ask': 0});
}

function registerClick(evento){
  $.post("../requests/streaming/set_click.php",{evento:evento},function(data){
    console.log(data);
    streaming.update({'btn': Math.floor(Math.random() * (9999 - 999 + 1)) + 999});  //updateo el btn de firebase para que se actualice la tabla de tracking
  });
}