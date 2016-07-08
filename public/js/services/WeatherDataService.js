angular.module('WeatherApp')
    .factory('WeatherDataService', ['$http',function($http) {

        return {
            get: function() {
                return $http.get('/api/weather/');
            }
        };
    }]);