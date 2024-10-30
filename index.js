var express = require('express');
var app = express();
var path = require('path');

const pool = require('./db');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,"index.html"));
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})


//all new
app.get('/get_users', async (req, res) => {
   try {
     const result = await pool.query('SELECT * FROM users');
     res.json(result.rows);
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Error fetching data' });
   }
 });

 app.get('/get_users_id', async (req, res) => {
   try {
     const id = parseInt(request.params.id)
     pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
       if (error) {
         throw error
       }
       response.status(200).json(results.rows)
     })

   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Error fetching data' });
   }
 });

 app.post('/post_users', urlencodedParser, async (req, res) => {
   try {
      const { name, address } = request.body

      pool.query('INSERT INTO users (name, address) VALUES ($1, $2)', [name, address], (error, results) => {
        if (error) {
          throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
      })

   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Error fetching data' });
   }
 });

 app.put('/put_users', urlencodedParser, async (req, res) => {
   try {
      const id = parseInt(request.params.id)
      const { name, address } = request.body
    
      pool.query(
        'UPDATE users SET name = $1, address = $2 WHERE id = $3',
        [name, address, id],
        (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`User modified with ID: ${id}`)
        }
      )

   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Error fetching data' });
   }
 });

 app.put('/put_users', urlencodedParser, async (req, res) => {
   try {
      const id = parseInt(request.params.id)

      pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
      })

   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Error fetching data' });
   }
 });


var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})