<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>error_404</title>

    <style>.container{margin-top: 175px;}</style>

    <?php require_once("Plantillas/plantillas_bootstrap.html") ?>
</head>
<body>
    <div class="container">
        <div class="row d-flex">
            <div class="col-3">
                <img src="Imgs/logo_google.jpg" class="d-flex w-50">
                <div class="info_404 d-flex flex-wrap">
                    <h2 class="w-25"><b>404.</b></h2><p class="w-75 d-flex align-items-end">That's an error.</p>
                    <p>The requested URL was not found in this server. That's all we now</p>
                    <a href="home.php" class="w-50 text-end">Go Home</a>
                </div>
            </div>
            <div class="col-6">
                <img src="Imgs/robot.png" class="d-flex w-50">
            </div>
        </div>
    </div>
    
</body>
</html>