/**
 * Created by sheshat on 16-09-2017.
 */

'use strict';
(function(){

    var clientWebModule = angular.module('hospital-client-web');
    clientWebModule.controller('PressController',['$scope','$rootScope','$location','$modal','$http',function($scope,$rootScope,$location,$modal,$http){
        $http.get("/common/data/press.json")
            .success(function(data) {
                $scope.backgroundImage = data.backgroundImage;
            });
    }])

})()
