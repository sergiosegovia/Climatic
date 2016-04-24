angular.module('climatic.directives', [])

.directive('wheaterReport', [function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/wheater-report.html',
    replace: true,
    scope: {
      wheaterCity: '=',
    }
  }
}]);
