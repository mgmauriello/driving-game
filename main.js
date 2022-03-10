/* global require */
require(['esri/config', 'esri/Map', 'esri/views/MapView'], function (esriConfig, Map, MapView) {

  esriConfig.apiKey = 'AAPK3480a78e4f134cf88ef097abb200eb1eQR9IP6Sv5iSTgbzlt3yhDJ3vIVwSkDJlcnTbcIJ0iWaNCu_L4blv6qKOXbjQrwF5';

  const map = new Map({
    basemap: 'arcgis-topographic' // Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [-118.494530, 34.011430], // Longitude, latitude
    zoom: 13, // Zoom level
    container: 'view-div' // Div element
  });

  return view;
});

var $vehicle = document.querySelector('.vehicle');
var intervalID = null;
var play = false;
var audio = document.querySelector('audio#furious');

var data = {
  direction: 'right',
  location: {
    top: 0,
    left: 0
  },
  isCarMoving: false
};

document.addEventListener('click', function (event) {
  if (event.target.matches('.vehicle')) {
    $vehicle.setAttribute('src', 'images/helicopter.png');
  }
});

document.addEventListener('keydown', function (event) {
  var key = event.keyCode;
  if (key === 39) {
    $vehicle.className = 'right';
    data.direction = 'right';
  } else if (key === 37) {
    $vehicle.className = 'left';
    data.direction = 'left';
  } else if (key === 38) {
    $vehicle.className = 'up';
    data.direction = 'up';
  } else if (key === 40) {
    $vehicle.className = 'down';
    data.direction = 'down';
  } else if (key === 32) {
    if (data.isCarMoving === false) {
      intervalID = setInterval(driveCar, 16);
      data.isCarMoving = true;
      audio.play();
      play = true;
    } else {
      clearInterval(intervalID);
      data.isCarMoving = false;
      audio.pause();
      play = false;
    }
  }
  return play;
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

  $vehicle.style.top = `${data.location.top}px`;
  $vehicle.style.left = `${data.location.left}px`;
}
