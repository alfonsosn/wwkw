app.factory('Hashtag', ['$http',
    function($http) {
        var base = "https://api.instagram.com/v1";
    var clientId = '864a4203f3764244a8378dd6a2443b87'
        return {
            getHashTags: function(count) {
                var request = '/users/173766103/media/recent';
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
            // hitNextPage: function(pagination, max_id){
            //     var config = {
            //         'params': {
            //             'client_id': clientId,
            //             'callback': 'JSON_CALLBACK'
            //         }
            //         return $http.jsonp(url, config)
            //     };
            // }
        }
    }
])
