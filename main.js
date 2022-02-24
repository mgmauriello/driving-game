var $racecar = document.querySelector('#racecar');

var data = {
  location: {
    top: 0,
    left: 0
  }
};

// users can turn the car
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
  }
  if (key === 32) {
    setInterval(startCar, 16);
  }
});

// users can start car
var start = 0;
function startCar(event) {
  start += 5;
  $racecar.style.left = start + 'px';
  data.location.left = start;
}
