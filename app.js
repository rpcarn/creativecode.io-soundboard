/** Web Socket **/
//import express
var express = require('express');
//create express object named app
var app = express();
//instantiate a server on port 3000
var server = app.listen(3000);
var io = require('socket.io')(server);
//expose the local public folder for inluding files js, css etc..
app.use(express.static('public'));
//on a request to / serve index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


/** Hardware interaction **/
//Import J5 module
var five = require("johnny-five");
//set up a new j5 board
var board = new five.Board();



board.on("ready", function() {

  var button = new five.Button({
      pin: 1
      });
      button.on("press", function() {
          console.log("button pressed: " + 1);
          io.sockets.emit('data', 1);
      });

  var button = new five.Button({
      pin: 2
      });
      button.on("press", function() {
          console.log("button pressed: " + 2);
          io.sockets.emit('data', 2);
      });

  var button = new five.Button({
      pin: 3
      });
      button.on("press", function() {
          console.log("button pressed: " + 3);
          io.sockets.emit('data', 3);
      });

  var button = new five.Button({
      pin: 4
      });
      button.on("press", function() {
          console.log("button pressed: " + 4);
          io.sockets.emit('data', 4);
      });

  var button = new five.Button({
      pin: 5
      });
      button.on("press", function() {
          console.log("button pressed: " + 5);
          io.sockets.emit('data', 5);
      });

  var button = new five.Button({
      pin: 6
      });
      button.on("press", function() {
          console.log("button pressed: " + 6);
          io.sockets.emit('data', 6);
      });


  var button = new five.Button({
        pin: 7
        });
        button.on("press", function() {
            console.log("button pressed: " + 7);
            io.sockets.emit('data', 7);
        });

  var button = new five.Button({
        pin: 8
        });
        button.on("press", function() {
            console.log("button pressed: " + 8);
            io.sockets.emit('data', 8);
        });

  var button = new five.Button({
        pin: 9
        });
        button.on("press", function() {
            console.log("button pressed: " + 9);
            io.sockets.emit('data', 9);
        });

  var button = new five.Button({
        pin: 10
        });
        button.on("press", function() {
            console.log("button pressed: " + 10);
            io.sockets.emit('data', 10);
        });

});

// console.log(tweet.text);
// io.sockets.emit('data', tweet.text);

//var sound_array[5];

// setInterval(function() {
//       var i = Math.floor(Math.random() * 5);
//       //      io.sockets.emit('data', "socket works: " + i);
//       io.sockets.emit('data', i);
//       console.log("socket works: " + i);
// }, 1000);

//nice date format function
function getDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = date.getFullYear() + "-" + month + "-" + day + "_" + hour + ":" + min + ":" + sec;

    return str;
}
