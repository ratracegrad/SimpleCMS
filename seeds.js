var Post = require("./models/post.js");

var data = [
	{
		title: "Man must explore, and this is exploration at its finest",
		subtitle: "Problems look small from 150 miles up",
		user: {
			username: "admin"
		}
	},
	{
		title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
		subtitle: "Time is better spent having fun",
		user: {
			username: "admin"
		}
	},
	{
		title: "Failure is not an option",
		subtitle: "Many say exploration is not our problem, but it's actually our duty for future generations.",
		user: {
			username: "admin"
		}
	}
];

function seedDB(){
	removePosts();
	createPosts();
}

function removePosts(){
	Post.remove({}, function(err){
		if(err){
			console.error(err);
		} else {
			console.log("Removed all Posts");
		}
	});
}

function createPosts(){
	data.forEach(function(seed){
		Post.create(seed, function(err, post){
			if(err){
				console.error(err);
			} else {
				console.log("Created Post");
			}
		});
	});
}

module.exports = seedDB;