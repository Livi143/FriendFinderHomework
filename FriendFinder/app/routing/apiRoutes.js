// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Dependencies
var path = require('path');

// Import friend list
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	// console.log('___ENTER apiRoutes.js___');

	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend entry
	app.post('/api/friends', function(req, res) {
		// Capture the user input object
		var userInput = req.body;
		console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.scores;
		console.log('userResponses = ' + userResponses);

		// Compute best friend match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all friends in list
		for (var i = 0; i < friends.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute each difference
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			console.log('diff = ' + diff);

			// If lowest difference, match friend
			if (diff < totalDifference) {
				console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};