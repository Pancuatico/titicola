//events
$(document).ready(function(){
  $("#chatRoomInput").change(function(){generalMessage($(this).val())});
});

//globals
const chats = proy1.child('chats');
const room = chats.child('room');

//Firebase events

room.on('value',snap => {              //value ocurre una vez inicialmente y también cuando hay cambios
  console.log("Chat value:");
  console.log(snap.val());
  get_chatRoom();
});

//functions
function generalMessage(texto){
  if(texto!=""){
    $("#chatRoomInput").val("");
    $.post("../requests/chat/set_roomMsg.php",{texto:texto},function(data){
      console.log(data);
      chats.update({'room': Math.floor(Math.random() * (9999 - 999 + 1)) + 999});  //updateo el chat de firebase para que se actualice la tabla de tracking
    });
  }
}

function get_chatRoom(){
  $.post("../requests/chat/get_chatRoom.php",function(data){
    console.log(data);
    var datos = JSON.parse(data);
    var msgs = "";
    for(var i in datos){
      msgs += "<div class='row aMsg'>";
        msgs += "<div class='col'>";
          msgs += "<span class='txtMsg'>"+datos[i]["texto"]+"</span>";
        msgs += "</div>";
      msgs += "</div>";
    }
    $(".chatRoomBody>div").html(msgs);
  });
}