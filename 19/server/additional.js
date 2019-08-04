var fs = require('fs');

function additional() {
    console.log('Hello world!');
}

function read(path, cb) {
    fs.readFile(path, function(data) {
        cb(data);
    });
}

module.exports = {
    additional: additional,
    read: read
}