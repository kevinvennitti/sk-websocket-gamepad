socket.on('setColor', function (data) {
  console.log('Nouvelle couleur à appliquer !');
  console.log('Données reçues :');
  console.log(data);

  $('body').css('background', data.color);
});
