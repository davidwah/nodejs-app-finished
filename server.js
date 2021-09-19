const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Belajar Docker!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
  <!doctype html>
  <html lang='en'>
    <head>
      <!-- Required meta tags -->
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
  
      <!-- Bootstrap CSS -->
      <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU' crossorigin='anonymous'>
  
      <title>DWP</title>
    </head>

    <body>
      <div class='positon-relative'>
        <div class='position-absolute top-50 start-50 translate-middle'>
          <section>
            <div class='shadow p-3 mb-5 bg-body rounded'>
              <strong class='d-block h2 my-2 pb-2 border-bottom'>My Course Goal</strong>
              <h3>${userGoal}</h3>
            </div>
              
          </section>
          <div class='d-flex p-2 bd-highlight shadow p-3 mb-5 bg-body rounded'>
          <form action='/store-goal' method='POST'>
            <div class='mb-3'>
              <label class='form-label h4'>Course Goal</label>
              <input class='form-control' aria-describedby='text' type='text' name='goal'>
            </div>
            <div class='d-grid'>
              <button type='submit' class='btn btn-primary'>Set Course Goal</button>
            </div>
            
          </form>
          </div>
          
        </div>
      </div>
      
  
      <!-- Optional JavaScript; choose one of the two! -->
      <!-- Option 1: Bootstrap Bundle with Popper -->
      <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js' integrity='sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ' crossorigin='anonymous'></script>
  
      <!-- Option 2: Separate Popper and Bootstrap JS -->
      <!--
      <script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js' integrity='sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN' crossorigin='anonymous'></script>
      <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js' integrity='sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/' crossorigin='anonymous'></script>
      -->
    </body>
  </html>
  
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect('/');
});

app.listen(8080);
