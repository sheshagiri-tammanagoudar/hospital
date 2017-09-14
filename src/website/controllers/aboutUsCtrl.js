/**
 * Created by sheshat on 13-09-2017.
 */

'use strict';
(function(){

    var clientWebModule = angular.module('hospital-client-web');
    clientWebModule.controller('AboutUsController',['$scope','$rootScope','$location','$modal','$http',function($scope,$rootScope,$location,$modal,$http){
        $scope.swipeleft = function($event, show){
            $("#aboutTeamCarousel").carousel('next');
        }
        $scope.swiperight = function($event, show){
            $("#aboutTeamCarousel").carousel('prev');
        }
        $http.get("/common/data/about.json")
            .success(function(data) {
                $scope.introduction = data.introduction;
                $scope.subHeadings = data.subHeadings;
                $scope.missionIntroduction = data.mission.introduction;
                $scope.missions = data.mission.missions;
                $scope.team1 = data.team1;
                $scope.team2 = data.team2;
                $scope.team3 = data.team3;
            });
    }])

})()
