/**
 * Created by sheshat on 13-09-2017.
 */
'use strict';
(function(){
    var clientWebModule = angular.module('hospital-client-web');
    clientWebModule.controller('MainCtrl',['$scope','$rootScope','$location','$window','$http',
        function ($scope,$rootScope,$location,$window,$http) {


            $scope.swipeleft = function($event, show){

                $("#myCarousel").carousel('next');
            }
            $scope.swiperight = function($event, show){
                $("#myCarousel").carousel('prev');
            }
        }]);
})();

