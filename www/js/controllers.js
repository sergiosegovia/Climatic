angular.module('climatic.controllers', [])

.controller('homeCtrl', function($scope, cityFactory) {

  $scope.location = {city: cityFactory.city}
  console.log($scope.location.city);

  $scope.$watch('location.city', function() {
    cityFactory.city = $scope.location.city;
  });

})

.controller('forecastCtrl', ['$scope', 'cityFactory', 'wheaterService', function($scope, cityFactory, wheaterService) {

  $scope.location = {city: cityFactory.city};
  console.log($scope.location.city);

  $scope.days = '3';

  $scope.wheaterResult = wheaterService.getWheater($scope.location.city, $scope.days);
  console.log($scope.wheaterResult);

}])
