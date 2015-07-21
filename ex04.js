"use strict";
var fs = require('fs');
var fname = process.argv[2];

fs.readFile(fname, 'utf8', function (err, fname) {
    var count = 0, i;

    for (i in fname) {
        if (fname[i] === '\n') {
            count += 1;
        }
    }

    console.log(count);
});
