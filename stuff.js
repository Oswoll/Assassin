// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
var onSuccess = function(position) {
    document.getElementById("info").innerHTML = 'Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n';
};

// onError Callback receives a PositionError object
//
function onError(error) {
    document.getElementById("info").innerHTML = 'code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n';
}

//navigator.geolocation.getCurrentPosition(onSuccess, onError);

//document.getElementById("info2").innerHTML = 'two';
//document.getElementById("info3").innerHTML = 'three';

function HelloWorld(){
    document.getElementById("info2").innerHTML = 'Hello World';
    //alert("Hello World");
}