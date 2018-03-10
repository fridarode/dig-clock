let day = new Date();
let hour = day.getHours();
let minute = day.getMinutes();
let seconds = day.getSeconds();

class Hex {
  constructor(hour, minute, second) {
    this._hour = hour.now();
    this._minute = minute.now();
    this._second = second.now();
  }

  static convertHour(this._hour) {
    const hexHours = {
      00: 00,
      12: 77,
      20: dd,
      24: ff
      }

    const this.hourNow = hexHours['this._hour'];
    return this.hourNow;
    )

   get hour() {
    return this._hour;
    }

   static convertMinSec(this._minute, this._second) {
    const hexMinSec = {
      00: 00,
      30: 77,
      49: cc,
      60: ff
      }

    const this.minNow = hexMinSec['this._minute'];
    return  this.minNow;
   }

   get minute() {
    return this._minute;
   }

   get second(){
    return this._second;
   }
}

const red = Hex.this.hourNow;
const green = Hex.this.minNow;
const blue = Hex.this.secNow;
const hexColor = #red,green, blue; ?

$(document).ready(() => {
  $('#clock').css({
      color: var(--hexColor);
  });

  $('.hour').load('$.now()');
});
