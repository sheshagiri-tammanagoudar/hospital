/**
 * Created by sheshat on 13-09-2017.
 */
'use strict';
(function(){
    var clientWebModule = angular.module('hospital-client-web');
    clientWebModule.controller('AppLaunchController',['$scope','$rootScope','$location','$anchorScroll','$timeout','$http','$route',function($scope,$rootScope,$location,$anchorScroll,$timeout,$http,$route){
        $http.get("/common/data/main.json")
            .success(function(data) {
                $rootScope.hospitalName = data.hospitalName;
                $rootScope.hospitalTagLine = data.hospitalTagLine;
            });

        $scope.jumpToAnchor = function($event,id) {
            $event.preventDefault();
            if(id === 'none'){
                $rootScope.currentSelection = 'none'
                $location.path('/');
                $timeout(
                    function( $scope ) {
                        $rootScope.$broadcast('showUnderlineOverActiveLink',{'target':id,'from':'/'});
                    },100
                );
            }else if($location.path() === '/'){
                $rootScope.$broadcast('jQueryAnchorScroll',{'target':id,'from':'/'});
            }else {
                $location.path('/');
                $timeout(
                    function( $scope ) {
                        $rootScope.$broadcast('jQueryAnchorScroll',{'target':id});
                    },1200
                );
            }
        };

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
