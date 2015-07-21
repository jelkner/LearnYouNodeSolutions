"use strict";
var fs = require('fs');
var fname = process.argv[2];
var count = 0;
var i;
var text;

text = fs.readFileSync(fname).toString();

for (i in text) {
    if (text[i] === '\n') {
        count += 1;
    }
}

console.log(count);
