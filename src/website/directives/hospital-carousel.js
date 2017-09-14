/**
 * Created by sheshat on 13-09-2017.
 */
'use strict';
(function(){

    var clientWebModule = angular.module('hospital-client-web');
    clientWebModule.directive('hospitalCarousel',['$interval', function($interval) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var interval;
                if(!!attrs.hospitalInterval) {
                    interval=$interval(function () {
                        element.carousel('next');
                    }, attrs.hospitalInterval);
                }

                element.on('slid.bs.carousel',function(){
                    angular.element("#carousel-selector-0").removeClass('active');
                    angular.element("#carousel-selector-1").removeClass('active');
                    angular.element("#carousel-selector-2").removeClass('active');
                    angular.element("#carousel-selector-"+$("#"+element[0].id+" .item.active").data('slideno')).addClass('active');
                });
            }
        };
    }]);

})();