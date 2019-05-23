'use strict';
const fs = require('fs');
const ioHook = require('iohook');

ioHook.on("mousemove", event => {
  console.log(event);
  // result: {type: 'mousemove',x: 700,y: 400}
});
ioHook.on("keypress", event => {
  console.log(event);

fs.appendFile('message.txt', String.fromCharCode(event.keychar), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
  // result: {keychar: 'f', keycode: 19, rawcode: 15, type: 'keypress'}
});
//Register and stark hook 
ioHook.start();