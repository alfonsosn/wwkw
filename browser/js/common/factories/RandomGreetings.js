app.factory('RandomGreetings', function () {

    var getRandomFromArray = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    var greetings = [
        '"We all selfconscious I’m just the first to admit it."',
        '"We buy a lot of clothes when we don\'t really need them."',
        '"Would you believe in what you what believe if you were the only one?"',
        '"I think  Kanye West is something similar to what Steve Jobs means."',
        '"I hate when I\'m on a flight and I wake up with a water bottle next to me."',
        '"Oh great now I gotta be responsible for this water bottle."',
        '"Sometimes I get emotional about fonts."'
    ];

    return {
        greetings: greetings,
        getRandomGreeting: function () {
            return getRandomFromArray(greetings);
        }
    };

});
