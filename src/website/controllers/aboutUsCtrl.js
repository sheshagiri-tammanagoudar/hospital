/**
 * Created by sheshat on 13-09-2017.
 */

'use strict';
(function(){

    var clientWebModule = angular.module('hospital-client-web');
    clientWebModule.controller('AboutUsController',['$scope','$rootScope','$location','$modal',function($scope,$rootScope,$location,$modal){
       $scope.swipeleft = function($event, show){
            $("#aboutTeamCarousel").carousel('next');
        }
        $scope.swiperight = function($event, show){
            $("#aboutTeamCarousel").carousel('prev');
        }
        $scope.team1=[
            {index:1,name:'DR. SUSHMA A SAWKAR',title:'MBBS, MD(OBG)',song:'Fly Me To The Moon',book:'National Geographic',movie:'',charity:'Tech Treehouse'},
            {index:2,name:'DR. ABHINANDAN H SAWKAR',title:'MBBS, MS(OBG)',song:'Imagine',book:'Real Simple',movie:'',charity:'American Lung Association'}
        ];
        $scope.team2=[
            {index:3,name:'SHESHAGIRI TAMMANAGOUDAR',title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:4,name:'SHRUTHI K MANKANI', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:5,name:'SURAJ K MANKANI', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:6,name:'DARSH A SAWKAR', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:7,name:'KRISHNA L MANKANI', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:8,name:'RATNA L MANKANI', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'}
        ];
        $scope.team3=[
            {index:9,name:'SHESHAGIRI TAMMANAGOUDAR',title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:10,name:'SHRUTHI K MANKANI', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:11,name:'SURAJ K MANKANI', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:12,name:'DARSH A SAWKAR', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:13,name:'KRISHNA L MANKANI', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:14,name:'RATNA L MANKANI', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'}
        ];

        $scope.advisors=[
            {index:15,name:'DARSH A SAWKAR', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:16,name:'KRISHNA L MANKANI', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'},
            {index:17,name:'RATNA L MANKANI', title:'Sr. Manager, Web Development',song:'Skyfall',book:'India Today',movie:'',charity:'CRY'}
        ];

        $scope.advisorBio = function(member_index,group_index){
            var member_details;
            for(var i=0;i<$scope.advisors.length;i++){
                if(member_index == $scope.advisors[i].index){
                    member_details = $scope.advisors[i];
                }
            }
            var modalInstance = $modal.open({
                templateUrl: 'AdvisorsBioModal.tpl.html',
                controller: 'AdvisorBioModalCtrl',
                resolve: {
                    member_details : function(){
                        return member_details;
                    }
                }
            });
        }
    }])
        .controller('AdvisorBioModalCtrl',['$modal','$modalInstance','$scope','member_details',function($modal, $modalInstance,$scope,member_details){
            $scope.member_details = member_details;
            $scope.cancel = function(){
                $modalInstance.close(true);
            }
        }]);
})()
