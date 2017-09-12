'use strict';

var _ = require('lodash');
var cfg = require('./grunt/target.js');

module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);

    grunt.initConfig(_.merge.apply({}, _.values(cfg)));

    var config = grunt.file.readJSON('./grunt/config.json');
    grunt.config('config',config);
    grunt.config('portal_styles', ["thirdparty/font-awesome-4.3.0/css/font-awesome.min.css", config.portal.webMinCSS]);
    grunt.config('portal_scripts', [config.portal.vendorJS, config.portal.angularJS, config.portal.webJS]);

    grunt.config('website_styles',  ["./common/font-awesome-4.3.0/css/font-awesome.min.css", "website.min.css"]);
    grunt.config('website_scripts', ["./common/vendor.all.min.js","./common/pdf.js","./common/pdf.worker.js", "./common/angular.all.min.js", "./common/common.min.js", "website.min.js"]);

    function alias (name, tasks) {
        grunt.registerTask(name, tasks.split(' '));
    }

    // build tasks
    alias('portal', 'uglify:portalWebJS uglify:portalAngularJS uglify:portalVendorJS copy:portal copy:portal_index concat:portal cssmin:portal');
    alias('website', 'uglify:websiteGlobalCommonJS uglify:websiteJS uglify:websiteVendorJS uglify:websiteAngularJS copy:website copy:website_index concat:website cssmin:website');
    alias('build', 'portal website');

};
