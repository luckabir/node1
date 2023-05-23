//HTTP Module
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){ // localhost:3000
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses'){ //localhost:3000/api/courses
        res.write(JSON.stringify([1, 2, 3 ]));
        res.end();
    }
})



//const server = http.createServer();

/*
server.on('connection', (socket) => {
    console.log('New connection... ');
})
*/

server.listen(3000);
console.log('Listening on port 3000');


//Extending EventEmitter
/*
const EventEmitter = require('events');
const emitter = new EventEmitter();


const Logger = require('./logger.js');
const logger = new Logger

logger.on('messageLogged', (arg) => { 
    console.log('Listener called', arg);
})

logger.log('zprava'); */






//events arguments
/*
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', (arg) => { 
    console.log('Listener called', arg);
})

emitter.emit('messageLogged', {id: 1, url: 'http://'})
*/

//events module
/*
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(){
    console.log('Listener called');
})

emitter.emit('messageLogged')
*/

//file system module
/*
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err, files) {
    if (err) {
        console.log('Chyba: ', err);
    } else {
        console.log('vysledek: ', files);
    }
})
fs.readdir('$', function(err, files) {
    if (err) {
        console.log('Chyba: ', err);
    } else {
        console.log('vysledek: ', files);
    }
})
*/
 

//OS module
/*
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Celkova pamet: ' + totalMemory);
console.log(`Celkova pamet: ${totalMemory} `);
console.log('Volna pamet: ' + freeMemory);
console.log(`Volna pamet: ${freeMemory} `); */

//path module
/*
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
*/

//loading a module - 2 + module wrapper 
/*
const log = require('./logger.js');
log('message');
*/

//loading a module - 1
/*
const logger = require('./logger.js');
var logger = require('./logger.js');
console.log(logger);
logger.log('message');
*/

//console.log(module);


