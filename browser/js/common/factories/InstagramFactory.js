app.factory('Instagram', ['$http',
    function($http) {
        var base = "https://api.instagram.com/v1";
    var clientId = '864a4203f3764244a8378dd6a2443b87'
        return {
            'get': function(count, hashtag) {
                var request = '/tags/' + hashtag + '/media/recent';
                var url = base + request;
                var config = {
                    'params': {
                    'client_id': clientId,
                        'count': count,
                        'callback': 'JSON_CALLBACK'
                    }
                };
                return $http.jsonp(url, config)
            }
        }
    }
])
