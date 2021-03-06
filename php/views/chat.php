<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Chat Room</title>
  <link href="../../imgs/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="../../libs/bootstrap-4.5.0-dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">    <!-- Bootstrap4 -->
  <link href="../../libs/fa-icons/css/all.min.css" rel="stylesheet">                                      <!-- Icons -->
  <link href="../../css/chat.css" rel="stylesheet">
</head>
<body>

<div class="container-fluid mainContainer">
  <div class="row rowAdmins">
    <div class="col-4 col-lg-2">
      <div class="row">
        <div class="col-3">
          <span class="admCircle"></span>
        </div>
        <div class="col-9">
          <div class="admName"><h5>Nombre</h5></div>
          <div class="admAgend">Agendar reunión</div>
        </div>
      </div>
    </div>
    <div class="col-4 col-lg-2">
      <div class="row">
        <div class="col-3">
          <span class="admCircle"></span>
        </div>
        <div class="col-9">
          <div class="admName"><h5>Nombre</h5></div>
          <div class="admAgend">Agendar reunión</div>
        </div>
      </div>
    </div>
    <div class="col-4 col-lg-2">
      <div class="row">
        <div class="col-3">
          <span class="admCircle"></span>
        </div>
        <div class="col-9">
          <div class="admName"><h5>Nombre</h5></div>
          <div class="admAgend">Agendar reunión</div>
        </div>
      </div>
    </div>
  </div>
  <div class="row rowChat">
    <div class="col-4 col-md-3 chatUsers">
      <div class="row chatHead">
        <div class="col-12">Usuarios conectados</div>
      </div>
      <div class="row chatUser">
        <div class="col-12">
          <div class="admName"><h5>Nombre</h5></div>
          <div class="admAgend">Descripción</div>
          <div class="admAgend">Email</div>
        </div>
      </div>
      <div class="row chatUser">
        <div class="col-12">
          <div class="admName"><h5>Nombre</h5></div>
          <div class="admAgend">Descripción</div>
          <div class="admAgend">Email</div>
        </div>
      </div>
    </div>
    <div class="col-8 col-md-9 colChatRoom">
      <div class="row chatRoomBody">
        <div class="col-12">
        
        </div>
      </div>
      <div class="row chatRoomFooter">
        <div class="col-12">
          <input type="text" class="form-control w-100 h-100" id="chatRoomInput">
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Scripts -->
<script src="../../libs/jQuery-3.4.1.min.js" type="text/javascript"></script>					    <!-- jQuery -->
<script src="../../libs/popper/popper-1.16.min.js" type="text/javascript"></script>				    <!-- Popper -->
<script src="../../libs/bootstrap-4.5.0-dist/js/bootstrap.min.js" type="text/javascript"></script>	<!-- Bootstrap4 -->
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>      <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-database.js"></script> <!-- Firebase realtime database -->
<script src="../../js/commons.js" type="text/javascript"></script>								    <!-- common settings and tooltips-->
<script src="../../js/firebaseIni.js" type="text/javascript"></script>						    <!-- custom -->
<script src="../../js/chat.js" type="text/javascript"></script>						      <!-- custom -->

</body>
</html>