$(function(){

  $('.button-direction').click(function() {

    let direction = $(this).data('direction');

    socket.emit('triggerDirection', {
      direction: direction
    });
  });

});
