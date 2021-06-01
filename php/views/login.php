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
  <link href="../../css/login.css" rel="stylesheet">
</head>
<body>

<div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="email" id="inputEmail" name="correo" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputEmail">Correo</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" name="clave" class="form-control" placeholder="Password" required>
                <label for="inputPassword">Clave</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Recordar clave</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Entrar</button>
              <hr class="my-4">
              <!-- <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
              <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- Scripts -->
<script src="../../libs/jQuery-3.4.1.min.js" type="text/javascript"></script>							          <!-- jQuery -->
<script src="../../libs/popper/popper-1.16.min.js" type="text/javascript"></script>				          <!-- Popper -->
<script src="../../libs/bootstrap-4.5.0-dist/js/bootstrap.min.js" type="text/javascript"></script>	<!-- Bootstrap4 -->
<script src="../../js/commons.js" type="text/javascript"></script>										              <!-- common settings and tooltips-->
<script src="../../js/login.js" type="text/javascript"></script>										                <!-- custom -->
</body>
</html>