$('document').ready(() => {
  $('*').blur();
  setTimeout(function(){
      location.reload();
    },999);
  let day = new Date();
  let hour = day.getHours();
  let minute = day.getMinutes();
  let second = day.getSeconds();

  $('.hours').text(hour).css({
      fontSize: '300px',
    });
  $('.minutes').text(minute).css({
      fontSize: '300px',
    });
  $('.seconds').text(second).css({
      fontSize: '300px',
    });

    if(second >= 00 && second <= 10) {
      $('.hours').css({ backgroundColor: '#ff0000'});
      $('.minutes').css({ backgroundColor: '#ffff00'});
      $('.seconds').css({ backgroundColor: '#0000ff'});
    } else if (second >= 10 && second <= 20) {
      $('.hours').css({ backgroundColor: '#ff8000'});
      $('.minutes').css({ backgroundColor: '#00ff00'});
      $('.seconds').css({ backgroundColor: '#8000ff'});
    } else if (second >= 20 && second <= 30) {
      $('.hours').css({ backgroundColor: '#ff0080'});
      $('.minutes').css({ backgroundColor: '#00ffff'});
      $('.seconds').css({ backgroundColor: '#bfff00'});
    } else if (second >= 30 && second <= 40) {
      $('.hours').css({ backgroundColor: '#00ff00'});
      $('.minutes').css({ backgroundColor: '#ff4000'});
      $('.seconds').css({ backgroundColor: '#00bfff'});
    } else if (second >= 40 && second <= 50) {
      $('.hours').css({ backgroundColor: '#ffbf00'});
      $('.minutes').css({ backgroundColor: '#8000ff'});
      $('.seconds').css({ backgroundColor: '#00ff80	'});
    } else if (second >= 50 && second <= 60) {
      $('.hours').css({ backgroundColor: '#4000ff'});
      $('.minutes').css({ backgroundColor: '#ff00bf'});
      $('.seconds').css({ backgroundColor: '#00ff00'});
    };

    if(hour >= 00 && hour <= 12) {
      $('.container').css({
        backgroundColor: 'yellow'
      });
      $('h2').text('Good Morning!');
    } else if (hour >= 12 && hour <= 18) {
      $('.container').css({
        backgroundColor: '#00ffff'
      });
      $('h2').text('Good Afternoon!');
    } else if (hour >= 18 && hour <= 24) {
      $('.container').css({
        backgroundColor: 'black'
      });
      $('h2').text('Good Evening!').css({
      color: 'white'
      });
    };

});
