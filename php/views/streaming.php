<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link href="../../imgs/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="../../libs/bootstrap-4.5.0-dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">    <!-- Bootstrap4 -->
  <link href="../../libs/fa-icons/css/all.min.css" rel="stylesheet">                                      <!-- Icons -->
  <link href="../../css/commons.css" rel="stylesheet">
  <link href="../../css/streaming.css" rel="stylesheet">
</head>
<body>

<img src="../../imgs/fondo1.png" id="bg" alt="background">
<div class="container mainContainer">
  <div class="row">
    <div class="col-12 col-lg-9 colStScreen">
      <div class="stScreen">
        
      </div>
      <p class="userName">John Doe</p>
    </div>
    <div class="col-12 col-lg-3 colStScreen">
      <div class="stScreen">
        <div class="adminTools">
          <div class="toWriteAnAsk">
            <textarea name="askTxt" id="askTxt" placeholder="Redacta la pregunta"></textarea>
          </div>
          <div class="forAlternatives">
            
          </div>
          <div class="toLaunchOrStopAnAsk">
            <button class="btn btn-light makeAsk">Lanzar pregunta</button>
            <button class="btn btn-light rmAsk">Quitar pregunta</button>
          </div>
        </div>
      </div>
      <p class="userName">John Doe</p>
    </div>
  </div>
  <div class="row">
    <div class="col" id="btn1" title="Opción A"><img src="../../imgs/btn1.png" alt=""></div>
    <div class="col" id="btn2" title="Opción B"><img src="../../imgs/btn1.png" alt=""></div>
    <div class="col" id="btn3" title="Opción C"><img src="../../imgs/btn1.png" alt=""></div>  OK ACOMODAR ESTAS WEAS PARA QUE SEAN col Y SE VEAN BIEN SEAN CUANTAS SEAN
    <div class="col" id="btn4" title="Opción D"><img src="../../imgs/btn1.png" alt=""></div>
  </div>
  <div class="row rowCamino">
    <img class="bgCamino" src="../../imgs/camino.png" alt="camino">
    <div class="hasBtnsCamino">
      <div class="btnCamino btnCamino1" title="Visitar sitio web de CocaCola"> <img src="../../imgs/btn2.png" alt="img"></div>
      <div class="btnCamino btnCamino2" title="Visitar sitio web de CCU"> <img src="../../imgs/btn2.png" alt="img"></div>
      <div class="btnCamino btnCamino3" title="Explorar ofertas de Falabella.cl"> <img src="../../imgs/btn2.png" alt="img"></div>
      <div class="btnCamino btnCamino4" title="Ir a Disneyland"> <img src="../../imgs/btn2.png" alt="img"></div>
      <div class="btnCamino btnCamino5" title="Ver ofertas de Paris.cl"> <img src="../../imgs/btn2.png" alt="img"></div>
    </div>
  </div>
</div>


<!-- Scripts -->
<script src="../../libs/jQuery-3.4.1.min.js" type="text/javascript"></script>							          <!-- jQuery -->
<script src="../../libs/popper/popper-1.16.min.js" type="text/javascript"></script>				          <!-- Popper -->
<script src="../../libs/bootstrap-4.5.0-dist/js/bootstrap.min.js" type="text/javascript"></script>	<!-- Bootstrap4 -->
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>                    <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-database.js"></script>               <!-- Firebase realtime database -->
<script src="../../js/commons.js" type="text/javascript"></script>										              <!-- common settings and tooltips-->
<script src="../../js/firebaseIni.js" type="text/javascript"></script>						                  <!-- custom -->
<script src="../../js/streaming.js" type="text/javascript"></script>										            <!-- custom -->
</body>
</html>