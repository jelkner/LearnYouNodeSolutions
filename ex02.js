"use strict";
var sum = 0;
var i;

for (i = 2; i < process.argv.length; i += 1) {
    sum += Number(process.argv[i]);
}

console.log(sum);
