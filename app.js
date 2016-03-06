/** Notes
- in order to use serial port stuff we have to use an older version of node.
  install and use the "n" command which switches between different versions
  of node. Use 0.12.0
  node -v
  npm install n -g
  n 0.12.0 //or just "n"
- don't rely on "npm install" to install the node serial module or the firmata
  module. explicity install these node modules after running npm install.
  npm install serialport --save
  npm install firmata --save
- Upload the StandardFirmata code to the Arduino from the Arduino Examples menu.
- The Express web server looks for files in a folder called "public" in the
  root directory even though we don't specify "public" in the path in our
  Node or HTML or Javascript code.
  "sounds/sound.wav" in Javascript and HTML points to public/sounds/sound.wav
**/


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
// comment out these two variables when running the code
// without an Arduino
//Import J5 module
var five = require("johnny-five");
//set up a new j5 board
var board = new five.Board();


// comment out these button press functions
// to run the code without an Arduino
board.on("ready", function() {

  var button1 = new five.Button({
      pin: 1
      });
      button1.on("press", function() {
          console.log("button pressed: " + 1);
          io.sockets.emit('data', 1);
      });

  var button2 = new five.Button({
      pin: 2
      });
      button2.on("press", function() {
          console.log("button pressed: " + 2);
          io.sockets.emit('data', 2);
      });

  var button3 = new five.Button({
      pin: 3
      });
      button3.on("press", function() {
          console.log("button pressed: " + 3);
          io.sockets.emit('data', 3);
      });

  var button4 = new five.Button({
      pin: 4
      });
      button4.on("press", function() {
          console.log("button pressed: " + 4);
          io.sockets.emit('data', 4);
      });

  var button5 = new five.Button({
      pin: 5
      });
      button5.on("press", function() {
          console.log("button pressed: " + 5);
          io.sockets.emit('data', 5);
      });

  var button6 = new five.Button({
      pin: 6
      });
      button6.on("press", function() {
          console.log("button pressed: " + 6);
          io.sockets.emit('data', 6);
      });

  var button7 = new five.Button({
        pin: 7
        });
        button7.on("press", function() {
            console.log("button pressed: " + 7);
            io.sockets.emit('data', 7);
        });

  var button8 = new five.Button({
        pin: 8
        });
        button8.on("press", function() {
            console.log("button pressed: " + 8);
            io.sockets.emit('data', 8);
        });

  var button9 = new five.Button({
        pin: 9
        });
        button9.on("press", function() {
            console.log("button pressed: " + 9);
            io.sockets.emit('data', 9);
        });

  var button10 = new five.Button({
        pin: 10
        });
        button10.on("press", function() {
            console.log("button pressed: " + 10);
            io.sockets.emit('data', 10);
        });

  var button11 = new five.Button({
        pin: 11
        });
        button11.on("press", function() {
            console.log("button pressed: " + 11);
            io.sockets.emit('data', 11);
        });

});

// Use this to simulate button presses since the johnny-five
// code stops this app from running without an Arduino plugged in.
// setInterval(function() {
//       var i = Math.floor(Math.random() * 5);
//       //      io.sockets.emit('data', "socket works: " + i);
//       io.sockets.emit('data', i);
//       console.log("socket works: " + i);
// }, 1000);

// a nice date format function (not used for the sound board)
// function getDate() {
//     var date = new Date();
//     var month = date.getMonth() + 1;
//     var day = date.getDate();
//     var hour = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
//
//     month = (month < 10 ? "0" : "") + month;
//     day = (day < 10 ? "0" : "") + day;
//     hour = (hour < 10 ? "0" : "") + hour;
//     min = (min < 10 ? "0" : "") + min;
//     sec = (sec < 10 ? "0" : "") + sec;
//
//     var str = date.getFullYear() + "-" + month + "-" + day + "_" + hour + ":" + min + ":" + sec;
//
//     return str;
// }
