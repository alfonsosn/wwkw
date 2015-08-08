app.config(function ($stateProvider) {
    
    $stateProvider.state('select', {
        url: '/select',
        templateUrl: 'js/choosing/choosing.html',
        controller: 'HashtagCtrl'
    });
});

app.controller('HashtagCtrl', function ($scope, Hashtag){
	$scope.Hashtags = []

	Hashtag.getHashTags(50)
	.then(function(response){
		response.data.data.forEach(function(element){
			if (element.tags.length > 0) {
				element.tags.forEach(function(elm) {
					$scope.Hashtags.push(elm);
				})
			} 
		})

		$scope.Hashtags = _.uniq($scope.Hashtags)
		console.log($scope.Hashtags)
	})
});
