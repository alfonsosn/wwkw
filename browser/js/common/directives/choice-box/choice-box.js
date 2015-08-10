app.directive('choiceBox', function () {
    return {
        restrict: 'E',
        scope: {
        	hashtag: '='
        },
        templateUrl: 'js/common/directives/choice-box/choice-box.html'
    };
});