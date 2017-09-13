/**
 * Created by sheshat on 13-09-2017.
 */
'use strict';
(function(){
    var clientWebModule = angular.module('hospital-client-web');
    clientWebModule.controller('AppLaunchController',['$scope','$rootScope','$location','$anchorScroll','$timeout','$http','$route',function($scope,$rootScope,$location,$anchorScroll,$timeout,$http,$route){
        $scope.checkcollapsable = function($event)
        {
            if(angular.element('.navbar-collapse').attr('aria-expanded') != "true" )
            {
                angular.element('#navigation').addClass('removetransprant');
            }else{
                $timeout(
                    function( $scope ) {
                        angular.element('#navigation').removeClass('removetransprant');
                    },300
                );

            }
        };
        angular.element('.side-arrow').on('click',function(){
            angular.element('.row.row-offcanvas').toggleClass('active');
            angular.element('.side-arrow').toggleClass('side-arrow-open');
        });

    }])
        .controller('TermsCtrl',[,
            function(){
                document.title = 'HOSPITAL - Terms and Conditions';
            }])
        .controller('PrivacyCtrl',[,
            function(){
                document.title = 'HOSPITAL - Privacy Policy';
            }]);
})()
