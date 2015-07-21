"use strict";
var doit = require('./ex06module');
var dirpath = process.argv[2];
var ext = process.argv[3];

doit(dirpath, ext, function (err, files) {
    var i;

    for (i = 0; i < files.length; i += 1) {
        console.log(files[i]);
    }
});
