<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--general.css must be linked before other .css-->
    <link rel="stylesheet" href="general.css">
    <link rel="stylesheet" href="navbar.css">
    <link rel="stylesheet" href="footer.css">
		<title>Kaliakair Paurashava</title>
  </head>
  <body>

  <!--adding navbar stuff using php-->
  <!--note: add navbar.js before body end to make navbar.html function right-->
    <?php include 'navbar.html'; ?>

    <div class="body-section">
      <p>kotha</p><p>kotha</p><p>kotha</p><p>kotha</p><p>kotha</p>
      <p>kotha</p><p>kotha</p><p>kotha</p><p>kotha</p><p>kotha</p>
      <p id="hello-line">hello this is a test line</p>
    </div>
    
    <!--add footer-->
    <?php include 'footer.html'; ?>

    <script src="navbar.js"></script>
  </body>
</html>