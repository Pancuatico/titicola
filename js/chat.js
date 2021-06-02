//events
$(document).ready(function(){
  $("#chatRoomInput").change(function(){generalMessage($(this).val())});
});

//globals
const chats = proy1.child('chats');
const room = chats.child('room');

//Firebase events
proy1.on('child_changed',snap => {      //child_changed ocurre solo cuando hay cambios
  console.log("A child changed to: ");
  console.log(snap.val());
});

chats.on('value',snap => {              //value ocurre una vez inicialmente y también cuando hay cambios
  console.log("Pomped value:");
  console.log(snap.val());
});

room.on('child_changed',snap => {
  console.log("A child changed to: ");
  console.log(snap.val());
});

//functions
function generalMessage(txt){
  $.post("");
}
