angular.module('climatic.services', [])

.factory('cityFactory', [function(){

  cityFactory = {};
  cityFactory.city = 'Bogota';
  return cityFactory

}])

.service('wheaterService', ['$resource', function($resource){

  wheaterService = {};

  wheaterService.getWheater = function(city, days, units, appid) {

    var wheaterAPI =
    $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
      callback: 'JSON_CALLBACK'}, { get: { method: 'JSONP' }});

    return wheaterAPI.get({
      q: city,
      cnt: days,
      units: 'metric',
      appid: '16615daef4ccd84096efbc30a9386a1a'
    })

  };

  return wheaterService;

}]);
