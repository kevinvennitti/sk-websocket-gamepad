var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/admin', function (req, res) {
  res.render('admin');
});


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });

  socket.on('updateColor', function (data) {
    console.log('Le serveur a reçu une nouvelle couleur !');
    console.log('Données reçues :');
    console.log(data);

    console.log('On transmet cette couleur à toutes les pages connectées');
    io.sockets.emit('setColor', {
      color: data.color
    })
  });
});
