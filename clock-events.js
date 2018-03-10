$('document').ready(() => {

  setTimeout(function(){
      location.reload();
    },1000);
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

});


/*  location.reload();
     const rgbHours = {
      00: 255,
      01: 254,
      02: 252,
      03: 251,
      04: 250,
      05: 230,
      06: 191,
      07: 128,
      08: 64,
      09: 01,
      10: 00,
      12: 00,
      13: 00,
      14: 00,
      15: 00,
      16: 01,
      17: 02,
      18: 64,
      19: 128,
      20: 191,
      21: 230,
      22: 252,
      23: 255,
      };

    function hourNow(hour) {
        return rgbHours['hour'];
      };

     let red = hourNow();

    const rgbMin = {
      00: 64,
      01: 89,
      02: 99,
      03: 106,
      04: 111,
      05: 116,
      06: 151,
      07: 191,
      08: 200,
      09: 230,
      10: 255,
      11: 255,
      12: 255,
      13: 255,
      14: 255,
      15: 255,
      16: 255,
      17: 255,
      18: 255,
      19: 255,
      20: 255,
      21: 255,
      22: 255,
      23: 255,
      24: 255,
      25: 255,
      26: 255,
      27: 255,
      28: 255,
      29: 255,
      30: 255,
      31: 255,
      32: 191,
      33: 156,
      34: 137,
      35: 116,
      36: 99,
      37: 89,
      38: 44,
      39: 39,
      40: 00,
      41: 00,
      42: 00,
      43: 00,
      44: 00,
      45: 00,
      46: 00,
      47: 00,
      48: 00,
      49: 00,
      50: 00,
      51: 00,
      52: 00,
      53: 00,
      54: 00,
      55: 00,
      56: 00,
      57: 00,
      58: 00,
      59: 00,
      60: 00,
      };

      function minuteNow(minute) {
        return rgbMin['minute'];
      };

      let green = minuteNow();

      const rgbSec = {
        00: 00,
        01: 00,
        02: 00,
        03: 00,
        04: 00,
        05: 00,
        06: 00,
        07: 00,
        08: 00,
        09: 00,
        10: 00,
        11: 00,
        12: 00,
        13: 00,
        14: 00,
        15: 00,
        16: 00,
        17: 00,
        18: 39,
        19: 42,
        20: 55,
        21: 64,
        22: 77,
        23: 89,
        24: 99,
        25: 111,
        26: 122,
        27: 139,
        28: 151,
        29: 189,
        30: 191,
        31: 250,
        32: 255,
        33: 255,
        34: 255,
        35: 255,
        36: 255,
        37: 255,
        38: 255,
        39: 255,
        40: 255,
        41: 255,
        42: 255,
        43: 255,
        44: 255,
        45: 255,
        46: 255,
        47: 255,
        48: 255,
        49: 255,
        50: 255,
        51: 230,
        52: 200,
        53: 191,
        54: 128,
        55: 99,
        56: 89,
        57: 64,
        58: 42,
        59: 39,
        60: 00,
        };

      function secondNow(second) {
        return rgbSec['second'];
      }

       let blue = secondNow();

      let hexColor = rgb(red, green, blue);  */
