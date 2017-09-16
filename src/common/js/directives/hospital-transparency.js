/**
 * Created by sheshat on 16-09-2017.
 */
'use strict';
(function(){

    var clientWebModule = angular.module('hospital.common.hospital-transparency',[]);
    clientWebModule.directive('hospitalTransparency',['$location','$anchorScroll','$log','$window','$rootScope',function($location,$anchorScroll,$log,$window,$rootScope) {

        var routeEligibleForUnderlineStyle = ['/','/about','/contact'];
        function showUnderlineOverActiveLink(selectedActiveElement){
            if((!(selectedActiveElement === 'none')) && (!angular.isUndefined(selectedActiveElement))){
                if(routeEligibleForUnderlineStyle.indexOf($location.path()) >= 0){
                    $rootScope.currentSelection = selectedActiveElement;
                    var activeElement = selectedActiveElement.replace('section-','');
                    if(routeEligibleForUnderlineStyle.indexOf($location.path())>0){
                        angular.element('#navigation a.current').removeClass('current');
                        var activeElement = selectedActiveElement.replace('/','');
                    }
                    var mar;
                    if(!(angular.isUndefined(angular.element('.navbar-nav #'+activeElement).offset()))){
                        mar = angular.element('.navbar-nav #'+activeElement).offset().left;
                        var underlineWidth = angular.element('#navigation #'+activeElement).width();
                        angular.element('.navbar-nav .navbar-underline-animination').css('margin-left',(mar+22)+'px');
                        angular.element('.navbar-nav .navbar-underline-animination').css('width',(underlineWidth-18)+'px');
                        angular.element('.navbar-nav .navbar-underline-animination').css('display','block');
                        if(routeEligibleForUnderlineStyle.indexOf($location.path()) === 4){
                            angular.element('.navbar-nav .navbar-underline-animination').css('display','none');
                        }

                    }
                    if(!($(window).width() > 1080)){
                        angular.element('.navbar-nav .navbar-underline-animination').css('display','none');
                    }
                }else{
                    angular.element('.navbar-nav .navbar-underline-animination').css('margin-left','0px');
                    angular.element('.navbar-nav .navbar-underline-animination').css('width','0px');
                    angular.element('#navigation a.current').removeClass('current');
                    $rootScope.currentSelection = 'none';
                }
            }else{
                angular.element('.navbar-nav .navbar-underline-animination').css('margin-left','0px');
                angular.element('.navbar-nav .navbar-underline-animination').css('width','0px');
                angular.element('#navigation a.current').removeClass('current');
            }
        }

        return {
            scope:{},
            restrict: 'A',
            link: function(scope, element, attrs) {

                angular.element($window).bind('load', function(event) {
                    if(!($location.path() === '/')) {
                        showUnderlineOverActiveLink($location.path().replace('/',''));
                    }else{
                        angular.element('#navigation').removeClass('remove-transparent');
                    }
                });

                angular.element($window).bind('resize', function(event) {
                    if(angular.element('.navbar-nav #'+$rootScope.currentSelection).length > 0){
                        showUnderlineOverActiveLink($rootScope.currentSelection);
                    }
                });

                angular.element($window).on('scroll', function(event){
                    if($location.path() === '/'){
                        var windowScrollTop = $window.scrollY;
                        if(angular.isUndefined(windowScrollTop)){
                            windowScrollTop = document.documentElement.scrollTop;
                        }
                        //angular.element('.template-body').css('margin','0px');
                        var sectionSpecialisations   = angular.element('#section-specialisations').position().top - 100;

                        if(windowScrollTop < 30){
                            angular.element('#navigation').removeClass('remove-transparent');
                        }else{
                            angular.element('#navigation').addClass('remove-transparent');
                        }
                        angular.element('#navigation a.current').removeClass('current');

                        if(windowScrollTop < sectionSpecialisations){
                            $rootScope.currentSelection = 'none';
                        }else if(windowScrollTop > sectionSpecialisations){
                            angular.element('#navigation #specialisations').addClass('current');
                            $rootScope.currentSelection = 'section-specialisations';
                        }
                        showUnderlineOverActiveLink($rootScope.currentSelection);
                    }else{
                        angular.element('#navigation').addClass('remove-transparent');
                    }
                });



                scope.$on('jQueryAnchorScroll',function(event,args){
                    if($location.path() === '/' && args.from === '/'){
                        $('body').scrollTo(('#'+args.target), 1000,{offset:-60});
                    }else{
                        if($location.path() === '/privacy-policy')
                            $('body').scrollTo(('#'+args.target), 1000,{offset:-60});
                        else
                            $('body').scrollTo(('#'+args.target), 1000,{offset:-60});
                    }
                    showUnderlineOverActiveLink(args.target);
                });

                scope.$on('showUnderlineOverActiveLink',function(event,args){
                    showUnderlineOverActiveLink(args.target);
                    $('body').scrollTo(0);

                });

                scope.$on('scrollTop',function(){
                    $('body').scrollTo(0);

                });

                scope.$on('chkTransparencyCondition', function(event,args){
                    if(!(angular.isUndefined(args))){
                        $location.hash(args.scrollTo);
                        $anchorScroll();
                    }
                });
                $.stellar({
                    horizontalScrolling: false,
                    verticalOffset: 40
                });

                // --------------------------------------------------------
                //  Wow Effect
                // --------------------------------------------------------
                var wow = new WOW(
                    {
                        animateClass: 'animated',
                        offset:       100
                    }
                );
                wow.init();


            }
        };
    }]);

})()