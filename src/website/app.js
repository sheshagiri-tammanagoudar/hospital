/**
 * Created by sheshat on 13-09-2017.
 */

'use strict';
(function(){

    var clientWebModule = angular.module('hospital-client-web',['ngRoute'
        ,'ngResource'
        ,'ngSanitize'
        ,'ui.bootstrap'
        ,'LocalStorageModule'
        ,'angular-loading-bar'
        ,'ngTouch'
        ,'hospital.common.hospital-scroll'
        ,'hospital.common.hospital-carousel'
    ]);
    clientWebModule.config(['$httpProvider'
        ,'$routeProvider'
        ,'$logProvider'
        ,function($httpProvider
            ,$routeProvider
            ,$logProvider
            )
        {

            $logProvider.debugEnabled(true);

            $routeProvider.when('/',{
                templateUrl:'partials/main.tpl.html'
                ,controller:'MainCtrl'
            });
            $routeProvider.when('/terms-and-conditions',{
                templateUrl:'partials/terms-and-conditions-tpl.html'
            }).when('/about',{
                templateUrl:'partials/about.tpl.html'
                ,resolve:{
                    initCarousel:['$rootScope',function($rootScope){

                        $rootScope.$broadcast('initCarousel');
                    }]
                }
            }).when('/privacy-policy',{
                templateUrl:'partials/privacy-policy-tpl.html'
            }).when('/press-release',{
                templateUrl:'partials/public/press-releases-tpl.html'
            }).when('/contact',{
                templateUrl:'partials/public/contactus-tpl.html'
            });

            $routeProvider.otherwise({redirectTo: '/'});
        }
    ]);



    clientWebModule.run(['$rootScope','$http','$log','$location','$timeout','localStorageService','$modal',function($rootScope,$http,$log,$location, $timeout, localStorageService,$modal){

        $rootScope.onAppInit = function(){

        };

        $rootScope.navigateTo = function (section){
            $(document.body).animate({ scrollTop: $("#"+section).offset().top-90 });
        };

    }]).factory('popup',['$rootScope','$location',function($rootScope){
        var popup = {};
        popup.show = function(line1,line2,popupType){
            if(!line1 || !line2) return;

            line2 = line2.toUpperCase();

            popupType =  popupType || "plus";
            $('.popup').remove();
            //show popup
            setTimeout(function(){
                var popup = $('[ng-view]').append('<div class="popup disabled"><div class="info-container"><div class="info"><div class="icon '+popupType+'"></div><span class="line1">'+line1+'</span><br><span class="line2">'+line2+'</span></div></div></div>');
                $rootScope.$broadcast('popup.animation.start');
                $('.popup').toggleClass('disabled');
            },10);

            //hide popup
            setTimeout(function(){
                $('.popup').toggleClass('disabled');
                document.getElementsByClassName('popup')[0].addEventListener("transitionend", function(){
                    $rootScope.$broadcast('popup.animation.end');
                    $('.popup').remove();
                }, false);
            },1600);
        };

        return popup;
    }])
})()

