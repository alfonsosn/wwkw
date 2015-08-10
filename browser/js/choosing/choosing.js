app.config(function ($stateProvider) {
    
    $stateProvider.state('select', {
        url: '/select/:profileID',
        templateUrl: 'js/choosing/choosing.html',
        controller: 'HashtagCtrl',
        resolve: {
        	profileID : function($stateParams){
        		return $stateParams.profileID;
        	}
        }
    });
});

app.controller('HashtagCtrl', function ($scope, Hashtag, profileID){
	var arrOfInsta = [];
	$scope.Images = [];

	Hashtag.getHashTags(100, profileID)
	.then(function(response){
		response.data.data.forEach(function(element){
			if (element.tags.length > 0) {
				var insta = {}
				insta.hash = element.tags[0]
				insta.img = element.images.thumbnail.url
				insta.link = element.link
				arrOfInsta.push(insta)
			} 
		})
		return arrOfInsta
	})
	.then(function(res){
		$scope.Images = _.uniq((res), 'hash')
			.sort(function() {return .5 - Math.random()})
			.slice(0, 5);
	})
});
