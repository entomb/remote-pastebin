<html>
  <head>
    <style>
      body {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        padding: 20px;
        max-width: 800px;
      }
      h1{
        margin-bottom: 0px;
      }

      label {
        display: block;
        margin-top: 15px;
      }

      textarea {
        resize: none;
        display: block;
        margin-bottom: 10px;
        width: 100%;
        height: 200px;
      }

      button {
        padding: 10px;
        display: block;
        width: 100%;
      }
    </style> 
    <script type="text/javascript">
      function selectall(){
        document.getElementById('paster').focus();
        document.getElementById('paster').select();
      }
    </script>
  </head>
  <body>
    <div class="pm-container">
      <h1>Clipboard</h1>
      <small> check the console on the host machine </small>
      <form method="POST">

        <label for="paster">Paste your stuff here</label>
        <textarea name="paster" id="paster" onClick="selectall();"></textarea>
        <button id="btn" type="submit" >Submit</button>
      </form>
    </div>
  </body>
</html>