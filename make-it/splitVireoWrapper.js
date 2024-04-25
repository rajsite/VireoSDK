// Copyright (c) 2020 National Instruments
// SPDX-License-Identifier: MIT

(function () {
    'use strict';

    var fs = require('fs');
    var path = require('path');
    var wrapperFile = process.argv[2];
    var prejsFileIn = process.argv[3];
    var postjsFileIn = process.argv[4];
    var prejsFile = path.resolve(__dirname + 'make-it', prejsFileIn);
    var postjsFile = path.resolve(__dirname + 'make-it', postjsFileIn);
    console.log('Splitting wrapper file ', wrapperFile, 'into prejs file', prejsFile, 'and postjs file', postjsFile);

    var wrapper = fs.readFileSync(wrapperFile, {
        encoding: 'utf8'
    });

    var parts = wrapper.split(/^[\s/]*{{insert_vireojs_here}}$/m);

    fs.writeFileSync(prejsFile, parts[0], {
        encoding: 'utf8'
    });

    fs.writeFileSync(postjsFile, parts[1], {
        encoding: 'utf8'
    });
}());
