/**
 * Created by sheshat on 14-09-2017.
 */
/*Custom wrapper for nicescroll*/
'use strict';
(function(){

    var clientWebModule = angular.module('hospital.common.hospital-scroll',[]);
    clientWebModule.directive('hospitalScroll',['$timeout',function($timeout) {
        return {
            scope:{
                config:'=hospitalScroll'
            },
            restrict: 'A',
            link: function(scope, element, attrs,ngModel) {
                //Defaults
                var config = scope.config || {};
                var cursorcolor  = config.cursorcolor  || "#444";
                var cursorborder = config.cursorborder || "none";
                var cursoropacitymin  = config.cursoropacitymin || 0.5;
                var autohidemode = config.autohidemode || true;

                var niceScrollProperties = {"cursorcolor":cursorcolor,"cursorborder":cursorborder,"cursoropacitymin":cursoropacitymin};

                if (config.cursorfixedheight != undefined)
                    niceScrollProperties.cursorfixedheight = config.cursorfixedheight;
                if (config.railpadding != undefined)
                    niceScrollProperties.railpadding = config.railpadding;
                if (config.horizrailenabled != undefined)
                    niceScrollProperties.horizrailenabled = config.horizrailenabled;

                $(element).niceScroll(niceScrollProperties);
                $timeout(function(){
                    $(element).getNiceScroll().resize();
                },100);
                $timeout(function(){
                    $(element).getNiceScroll().resize();
                },200);
                $timeout(function(){
                    $(element).getNiceScroll().resize();
                },300);
                $timeout(function(){
                    $(element).getNiceScroll().resize();
                },400);

                $(element).hover(function(){
                    $(this).toggleClass('active');
                });
            }
        };
    }]);
})();
