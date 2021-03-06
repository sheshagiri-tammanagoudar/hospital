/**
 * Created by sheshat on 13-09-2017.
 */
'use strict';
(function(){
    var clientWebModule = angular.module('hospital-client-web');
    clientWebModule.controller('MainCtrl',['$scope','$rootScope','$location','$window','$http',
        function ($scope,$rootScope,$location,$window,$http) {
            $scope.specialisationIndex = 1;
            $http.get("/client-data/data/specialisations.json")
                .success(function(data) {
                    $scope.introduction = $scope.introduction;
                    $scope.specialisationslist = data.list;
                });
            $http.get("/client-data/data/home.json")
                .success(function(data) {
                    $scope.heroImages = data.heroImages;
                });
            $scope.swipeleft = function($event, show){

                $("#myCarousel").carousel('next');
            }
            $scope.swiperight = function($event, show){
                $("#myCarousel").carousel('prev');
            }
        }]);
})();

