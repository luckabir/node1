
//Extending EventEmitter
/*const EventEmitter = require('events');
const emitter = new EventEmitter;

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = Logger;
*/


//module wrapper function
/*
    var url = 'http://mylogger.io/log';
    
    console.log(__filename);
    console.log(__dirname);

    function log(message){
        console.log(message);
    }
    
    module.exports = log;
    */

//loading a module - 2
/*
var url = 'http://mylogger.io/log';
var x=;

function log(message){
    console.log(message);
}

module.exports = log;
*/

//loading a module - 2
/* 
var url = 'http://mylogger.io/log';
var x=;

function log(message){
    console.log(message);
}
module.exports.log = log;
module.exports.endPoint = url;
*/