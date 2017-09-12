'use strict';

var grunt = require('grunt');

module.exports = {
    package: {
        pkg: grunt.file.readJSON('package.json')
    },
    accman: require('./portal.js'),
    webapp: require('./website.js')
};