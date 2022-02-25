var $racecar = document.querySelector('#racecar');
var intervalID = null;

var data = {
  location: {
    top: 0,
    left: 0
  },
  isCarMoving: false
};

document.addEventListener('keydown', function (event) {
  var key = event.keyCode;
  if (key === 39) {
    $racecar.className = 'right';
  } else if (key === 37) {
    $racecar.className = 'left';
  } else if (key === 38) {
    $racecar.className = 'up';
  } else if (key === 40) {
    $racecar.className = 'down';
  } else if (key === 32) {
    if (data.isCarMoving === false) {
      intervalID = setInterval(startCar, 16);
      data.isCarMoving = true;
    } else {
      clearInterval(intervalID);
      data.isCarMoving = false;
    }
  }
});

var start = 0;
function startCar(event) {
  start += 5;
  $racecar.style.left = start + 'px';
  data.location.left = start;
}
