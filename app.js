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
//var five = require("johnny-five");
//set up a new j5 board
//var board = new five.Board();

// board.on("ready", function() {
//     var button = new five.Button({
//         pin: 2,
//     });
//
//     button.on("press", function() {
//         var time = Date.now();
//         console.log("button pressed at ".time);
//         io.sockets.emit('data', "button pressed at ".time);
//     });
// });

// console.log(tweet.text);
// io.sockets.emit('data', tweet.text);

//var sound_array[5];

setInterval(function() {
      var i = Math.floor(Math.random() * 5);
      //      io.sockets.emit('data', "socket works: " + i);
      io.sockets.emit('data', i);
      console.log("socket works: " + i);
}, 1000);

//nice date format function
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
