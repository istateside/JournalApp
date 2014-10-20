JournalApp.Models.Post = Backbone.Model.extend({
	urlRoot: '/posts',
	validate: function(attrs) {
		console.log("validating...");
		console.log("Title: ", attrs.title);
		console.log("Title Length: ", attrs.title.length);
		// if (attrs.title.length < 1) {
		// 	return "Must have a title!";
		// }
	}



});