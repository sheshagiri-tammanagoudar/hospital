var grunt = require('grunt');

module.exports = {
    uglify: {
        portalWebJS: {
            options: {
                sourceMap: false
            },
            src: [
                '<%= config.global.common %>/key.js',
                '<%= config.global.common %>/hospital/*.js',
                '<%= config.portal.root %>/app.js',
                '<%= config.portal.root %>/controllers/*.js',
                '<%= config.portal.root %>/services/*.js',
                '<%= config.portal.root %>/directives/*.js'
            ],
            dest: '<%= config.portal.build %>/<%= config.portal.webJS %>'
        },
        portalVendorJS: {
            options: {
                sourceMap: false
            },
            src: [
                '<%= config.global.common_lib %>/jquery/dist/jquery.js',
                '<%= config.global.common_lib %>/bootstrap24/js/bootstrap.js',
                '<%= config.global.common_lib %>/nicescroll/jquery.nicescroll.min.js',
                '<%= config.global.common_lib %>/nicescroll/jquery.scrollTo.min.js',
                '<%= config.global.common_lib %>/jqueryvalidation/jquery.validate.min.js',
                '<%= config.global.common_lib %>/owl-carousel/owl.carousel.js'
            ],
            dest: '<%= config.portal.build %>/<%= config.portal.vendorJS %>'
        },
        portalAngularJS: {
            options: {
                sourceMap: false
            },
            src: [
                "<%= config.global.common_lib %>/angular/angular/angular.js",
                "<%= config.global.common_lib %>/angular/angular-route/angular-route.js",
                "<%= config.global.common_lib %>/angular/angular-resource/angular-resource.js",
                "<%= config.global.common_lib %>/angular/angular/angular-sanitize.js",
                "<%= config.global.common_lib %>/angular/angular-facebook/lib/angular-facebook.js",
                "<%= config.global.common_lib %>/angular/angular-bootstrap/ui-bootstrap-tpls.min.js",
                "<%= config.global.common_lib %>/angular/angular-google-plus/dist/angular-google-plus.js",
                "<%= config.global.common_lib %>/angular/angular-local-storage/dist/angular-local-storage.js",
                "<%= config.global.common_lib %>/angular/angular-loading-bar/dist/loading-bar.js",
                "<%= config.global.common_lib %>/angular/angular-touch/angular-touch.js",
                '<%= config.global.common_lib %>/angular/angularjs-stellar/jquery.stellar.min.js'
            ],
            dest: '<%= config.portal.build %>/<%= config.portal.angularJS %>'
        }
    },
    copy: {
        portal: {
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: ['<%= config.portal.root %>/assets/img/favicon/*'],
                    dest: '<%= config.portal.build %>/'
                },
                {
                    expand: true,
                    cwd: '<%= config.portal.root %>/assets/',
                    src: ['font/**'],
                    dest: '<%= config.portal.build %>/assets/'
                },
                {
                    expand: true,
                    cwd: '<%= config.portal.root %>/assets/',
                    src: ['img/**'],
                    dest: '<%= config.portal.build %>/assets/'
                },
                {
                    expand: true,
                    cwd: '<%= config.portal.root %>/data/',
                    src: ['**/*'],
                    dest: '<%= config.portal.build %>/data/'
                },
                {
                    expand: true,
                    cwd: '<%= config.global.common %>/config/',
                    src: ['**/*'],
                    dest: '<%= config.portal.build %>/config/'
                },
                {
                    expand: true,
                    cwd: '<%= config.portal.root %>',
                    src: ['partials/**'],
                    dest: '<%= config.portal.build %>/'
                },
                {
                    expand: true,
                    cwd: '<%= config.portal.root %>',
                    src: ['*.html'],
                    dest: '<%= config.portal.build %>/'
                },
                {
                    expand: true,
                    cwd: '<%= config.global.common_lib %>/font-awesome-4.3.0/',
                    src: ['fonts/**'],
                    dest: '<%= config.portal.build %>/lib/font-awesome-4.3.0/'
                },
                {
                    expand: true,
                    cwd: '<%= config.global.common_lib %>/font-awesome-4.3.0/',
                    src: ['css/*.css'],
                    dest: '<%= config.portal.build %>/lib/font-awesome-4.3.0/'
                }
            ]
        },
        portal_index: {
            src: '<%= config.portal.root %>/index.build.html',
            dest: '<%= config.portal.build %>/index.html',
            options: {
                process: function (content, path) {
                    return grunt.template.process(content);
                }
            }
        }
    },
    concat: {
        options: {
            stripBanners: true
        },
        portal: {
            src: [
                '<%= config.global.common_lib %>/bootstrap24/css/bootstrap.css',
                '<%= config.global.common_lib %>/owl-carousel/owl.carousel.css',
                '<%= config.global.common_lib %>/owl-carousel/owl.theme.css',
                '<%= config.global.common_lib %>/animate/animate.css',
                '<%= config.global.common_lib %>/angular-loading-bar/build/loading-bar.css',
                '<%= config.portal.root %>/assets/css/app.css',
                '<%= config.portal.root %>/assets/css/main.css'
            ],
            dest: '<%= config.portal.build %>/<%= config.portal.webCSS %>'
        }
    },
    cssmin: {
        portal: {
            src: '<%= config.portal.build %>/<%= config.portal.webCSS %>',
            dest: '<%= config.portal.build %>/<%= config.portal.webMinCSS %>'
        }
    },
    jshint: {
        webapp: {
            options: {
                reporter: require('jshint-stylish')
            },
            src: ['<%= config.portal.root %>/**/*.js']
        }
    }
}
