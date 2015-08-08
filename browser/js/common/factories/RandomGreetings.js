app.factory('RandomGreetings', function () {

    var getRandomFromArray = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    var greetings = [
        '"We all selfconscious I’m just the first to admit it."',
        '"We buy a lot of clothes when we don\'t really need them."',
        '"I am God\'s vessel."',
        '"I think  Kanye West is something similar to what Steve Jobs means."',
        '"I hate when I\'m on a flight and I wake up with a water bottle next to me."'
    ];

    return {
        greetings: greetings,
        getRandomGreeting: function () {
            return getRandomFromArray(greetings);
        }
    };

});
