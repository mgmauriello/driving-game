var $racecar = document.querySelector('#racecar');
var intervalID = null;

var data = {
  direction: 'right',
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
    data.direction = 'right';
  } else if (key === 37) {
    $racecar.className = 'left';
    data.direction = 'left';
  } else if (key === 38) {
    $racecar.className = 'up';
    data.direction = 'up';
  } else if (key === 40) {
    $racecar.className = 'down';
    data.direction = 'down';
  } else if (key === 32) {
    if (data.isCarMoving === false) {
      intervalID = setInterval(driveCar, 16);
      data.isCarMoving = true;
    } else {
      clearInterval(intervalID);
      data.isCarMoving = false;
    }
  }
});

// users can drive car
function driveCar(event) {
  if (data.direction === 'left') {
    data.location.left -= 5;
  } else if (data.direction === 'right') {
    data.location.left += 5;
  } else if (data.direction === 'up') {
    data.location.top -= 5;
  } else if (data.direction === 'down') {
    data.location.top += 5;
  }

  $racecar.style.top = `${data.location.top}px`;
  $racecar.style.left = `${data.location.left}px`;
}
