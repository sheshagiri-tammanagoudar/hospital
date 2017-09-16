/**
 * Created by sheshat on 16-09-2017.
 */

'use strict';
(function(){

    var clientWebModule = angular.module('hospital-client-web');
    clientWebModule.controller('TermsController',['$scope','$rootScope','$location','$modal','$http',function($scope,$rootScope,$location,$modal,$http){
        $http.get("/common/data/terms.json")
            .success(function(data) {
                $scope.backgroundImage = data.backgroundImage;
            });
    }])

})()
