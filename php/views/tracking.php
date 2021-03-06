<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Tracking</title>
  <link href="../../imgs/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="../../libs/bootstrap-4.5.0-dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">    <!-- Bootstrap4 -->
  <link href="../../libs/DataTables/jquery.dataTables.min.css" rel="stylesheet">                         <!-- Datatables -->
  <link href="../../libs/DataTables/buttons.dataTables.min.css" rel="stylesheet">                        <!-- Datatables buttons -->
  <link href="../../libs/DataTables/fixedHeader.dataTables.min.css" rel="stylesheet">                    <!-- Datatables fixHeader -->
  <link href="../../libs/fa-icons/css/all.min.css" rel="stylesheet">                                      <!-- Icons -->
  <link href="../../css/tracking.css" rel="stylesheet">
</head>
<body>
<!-- blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup
mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error -->
<div class="container">
  <div class="row rowPestanas">
    <div class="col-4 pestana pestana1 pestanaSelected"><div>Clicks</div></div>
    <div class="col-4 pestana pestana2"><div>Login / Logout</div></div>
    <div class="col-4 pestana pestana3"><div>Others</div></div>
  </div>
  <div class="row rowClicks">
    <div class="col-12">
      <div class="table-responsive">
        <table class="table table-bordered tableClicks table-sm">
          <thead>
            <tr><th>Usuario</th><th>Click en</th><th>Momento</th></tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="row rowLogIO" style="display:none">
    <div class="col-12">
      <div class="table-responsive table-bordered">
        <table class="table tableLogIO">
          <thead>
            <tr><th>Usuario</th><th>Evento</th><th>Momento</th></tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="row rowOthers" style="display:none">
    <div class="col-12">
      <div class="table-responsive table-bordered">
        <table class="table tableOthers">
          <thead>
            <tr><th>Usuario</th><th>Evento</th><th>Momento</th></tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<!-- Scripts -->
<script src="../../libs/jQuery-3.4.1.min.js" type="text/javascript"></script>							          <!-- jQuery -->
<script src="../../libs/popper/popper-1.16.min.js" type="text/javascript"></script>				          <!-- Popper -->
<script src="../../libs/bootstrap-4.5.0-dist/js/bootstrap.min.js" type="text/javascript"></script>	<!-- Bootstrap4 -->
<script src="../../libs/DataTables/jquery.dataTables.min.js" type="text/javascript"></script>        <!-- DataTables plugin -->
<script src="../../libs/DataTables/dataTables.buttons.min.js" type="text/javascript"></script>
<script src="../../libs/DataTables/jszip.min.js" type="text/javascript"></script>
<script src="../../libs/DataTables/pdfmake.min.js" type="text/javascript"></script>
<script src="../../libs/DataTables/vfs_fonts.js" type="text/javascript"></script>
<script src="../../libs/DataTables/buttons.html5.min.js" type="text/javascript"></script>
<script src="../../libs/DataTables/dataTables.fixedHeader.min.js" type="text/javascript"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>      <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-database.js"></script> <!-- Firebase realtime database -->
<script src="../../js/commons.js" type="text/javascript"></script>								    <!-- common settings and tooltips-->
<script src="../../js/firebaseIni.js" type="text/javascript"></script>						    <!-- custom -->
<script src="../../js/tracking.js" type="text/javascript"></script>							      <!-- custom -->
</body>
</html>