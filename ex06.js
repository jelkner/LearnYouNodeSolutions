"use strict";
var listFiles = require('./ex06module');
var dirpath = process.argv[2];
var ext = process.argv[3];

listFiles(dirpath, ext, function (err, files) {
    if (err) {
        return console.error('ERROR: ', err);
    }

    files.forEach(function (file) {
        console.log(file);
    });
});
