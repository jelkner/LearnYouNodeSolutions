"use strict";
var fs = require('fs');
var dirpath = process.argv[2];

fs.readdir(dirpath, function (err, files) {
    var ext = process.argv[3], i;

    if (err) {
        return console.error('ERROR: ', err);
    }

    for (i = 0; i < files.length; i += 1) {
        if (files[i].slice(-(ext.length + 1)) === '.' + ext) {
            console.log(files[i]);
        }
    }
});
