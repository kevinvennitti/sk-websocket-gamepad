$(function(){

  $('#send').click(function() {

    let color = $('#color').val();

    socket.emit('updateColor', {
      color: color
    });
  });

});
