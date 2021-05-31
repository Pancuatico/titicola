//Configuraci�n y eventos de firebase

//Configuraci�n
var config = {
    apiKey: "AIzaSyC7U52TVcqgpZFToJmXuyClSaibctrbPYw",
    authDomain: "para-realtime.firebaseapp.com",
    projectId: "para-realtime",
    databaseURL: "https://para-realtime-default-rtdb.firebaseio.com/",
    storageBucket: "para-realtime.appspot.com",
    messagingSenderId: "5337878045",
    appId: "1:5337878045:web:42eebdf4afa24d562640f4"
  };
  
  firebase.initializeApp(config);                                 //Inicializaci�n de firebase
  const banderas = firebase.database().ref().child('flags');      //Referencia al objeto "flags" en la base de datos de firebase
  const proy1 = banderas.child('proy1');                          //Objeto proy1
  const chats = proy1.child('chats');
  const room = chats.child('room');

  proy1.on('child_changed',snap => {
    console.log("A child changed to: ");
    console.log(snap.val());
  });

  chats.on('value',snap => {
    console.log("Pomped value:");
    console.log(snap.val());
  });

  room.on('child_changed',snap => {
    console.log("A child changed to: ");
    console.log(snap.val());
  });