socket.on('setDirection', function (data) {
  console.log('Nouvelle direction à appliquer !');
  console.log('Données reçues :');
  console.log(data);

  if (data.direction == 'left') {
    $('#player').animate({'left': '-=100px'}, 200);
  }

  if (data.direction == 'right') {
    $('#player').animate({'left': '+=100px'}, 200);
  }

  if (data.direction == 'top') {
    $('#player').animate({'top': '-=100px'}, 200);
  }

  if (data.direction == 'down') {
    $('#player').animate({'top': '+=100px'}, 200);
  }
});
