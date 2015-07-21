"use strict";
var fs = require('fs');

module.exports =  function (dirname, ext, callback) {
    fs.readdir(dirname, function (err, files) {
        if (err) {
            callback(err, null);
        } else {
            var selected = [], i;

            for (i = 0; i < files.length; i += 1) {
                if (files[i].slice(-(ext.length + 1)) === '.' + ext) {
                    selected.push(files[i]);
                }
            }

            callback(null, selected);
        }
    });
};
