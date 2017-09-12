var grunt = require('grunt');

module.exports = {
    uglify: {
        websiteVendorJS: {
            options: {
                sourceMap: true
            },
            src: [
                '<%= config.global.common_lib %>/jquery/dist/jquery.js',
                '<%= config.global.common_lib %>/nicescroll/jquery.nicescroll.min.js',
                '<%= config.global.common_lib %>/owl-carousel/owl.carousel.js',
                '<%= config.global.common_lib %>/jQuery-UI/jquery-ui.min.js'
            ],
            dest: '<%= config.website.build %>/common/vendor.all.min.js'
        },
        websiteAngularJS: {
            options: {
                sourceMap: true,
                mangle: false,
                beautify: true
            },
            src: [
                "<%= config.global.common_lib %>/angular/angular/angular.js",
                "<%= config.global.common_lib %>/angular/angular-bootstrap/ui-bootstrap-tpls.js",
                "<%= config.global.common_lib %>/angular/angular-ui-router/release/angular-ui-router.js",
                "<%= config.global.common_lib %>/angular/angular-facebook/lib/angular-facebook.js",
                "<%= config.global.common_lib %>/angular/angular-google-plus/dist/angular-google-plus.js",
                "<%= config.global.common_lib %>/angular/angular-local-storage/dist/angular-local-storage.js",
                "<%= config.global.common_lib %>/angular/angular-animate/angular-animate.min.js",
                '<%= config.global.common_lib %>/angular/angular-ui-slider/angular-ui-slider.js',
                '<%= config.global.common_lib %>/angular/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js'
            ],
            dest: '<%= config.website.build %>/common/angular.all.min.js'
        },
        /*Uglify all js files in global common folder*/
        websiteGlobalCommonJS: {
            options: {
                sourceMap: true
            },
            src: [
                '<%= config.global.common %>/key.js',
                '<%= config.global.common %>/hospital/*.js'
            ],
            dest: '<%= config.website.build %>/common/common.min.js'
        },
        /*Uglify all js files in webapp folder*/
        websiteJS: {
            options: {
                sourceMap: true,
                ASCIIOnly: true
            },
            src: [
                '<%= config.website.root %>/website.js',
                '<%= config.website.root %>/**/*.js',
                '!<%= config.website.root %>/common/proxima/**/*.js'
            ],
            dest: '<%= config.website.build %>/website.min.js'
        }
    },
    copy: {
        website: {
            files: [
                //Copy images
                {
                    expand: true,
                    cwd: '<%= config.website.root %>/',
                    src: ['common/img/*'],
                    dest: '<%= config.website.build %>/'
                },
                //Copy Proxima fonts
                {
                    expand: true,
                    cwd: '<%= config.website.root %>/',
                    src: ['common/proxima/**/*.*'],
                    dest: '<%= config.website.build %>/'
                },
                //Copy Font-awesome fonts
                {
                    expand: true,
                    cwd: '<%= config.global.common %>/lib/font-awesome-4.3.0/',
                    src: ['fonts/**'],
                    dest: '<%= config.website.build %>/common/font-awesome-4.3.0/'
                },
                {
                    expand: true,
                    cwd: '<%= config.global.common %>/lib/font-awesome-4.3.0/',
                    src: ['css/*.css'],
                    dest: '<%= config.website.build %>/common/font-awesome-4.3.0/'
                },
                //Copy web app non js files
                {
                    expand: true,
                    cwd: '<%= config.website.root %>',
                    src: ['**/!(*.js|*.css)'],
                    dest: '<%= config.website.build %>'
                },
                {
                    expand: true,
                    flatten: true,
                    src: ['<%= config.website.root %>/common/img/favicon/*'],
                    dest: '<%= config.website.build %>/'
                },
                {
                    expand: true,
                    cwd: '<%= config.global.common %>/config/',
                    src: ['**/*'],
                    dest: '<%= config.website.build %>/common/js/'
                }
            ]
        },
        website_index: {
            src: '<%= config.website.root %>/index.build.html',
            dest: '<%= config.website.build %>/index.html',
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
        website: {
            src: [
                '<%= config.global.common_lib %>/bootstrap24/css/bootstrap.css',
                '<%= config.global.common_lib %>/font-awesome-4.3.0/css/font-awesome.min.css',
                '<%= config.global.common_lib %>/owl-carousel/owl.carousel.css',
                '<%= config.global.common_lib %>/owl-carousel/owl.theme.css',
                '<%= config.global.common_lib %>/jQuery-UI/jquery-ui.css',
                '<%= config.website.root %>/**/*.css',
                '!<%= config.global.common_lib.root %>/common/proxima/**/*.css'
            ],
            dest: '<%= config.website.build %>/website.css'
        }
    },
    cssmin: {
        website: {
            src: '<%= config.website.build %>/website.css',
            dest: '<%= config.website.build %>/website.min.css'
        }
    },
    jshint: {
        website: {
            options: {
                reporter: require('jshint-stylish')
            },
            src: ['<%= config.website.root %>/**/*.js']
        }
    }
}
