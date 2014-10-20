JournalApp.Routers.PostsRouter = Backbone.Router.extend({
	routes: {
		"": "postsIndex",
		"posts/new": "postsNew",
		"posts/:id": "postsShow",
		"posts/:id/edit": "postsEdit"
	},

	postsIndex: function() {
		JournalApp.Collections.posts.fetch();
		var postsIndexView = new JournalApp.Views.PostsIndex({
			collection: JournalApp.Collections.posts
		});
		$("div.posts-space").html(postsIndexView.render().$el);
	},

	postsShow: function(id) {
		var post = JournalApp.Collections.posts.getOrFetch(id);
		var showView = new JournalApp.Views.PostsShow({ model: post });
		$("div.posts-space").html(showView.render().$el);
	},

	postsEdit: function(id) {
		var post = JournalApp.Collections.posts.getOrFetch(id);
		var editView = new JournalApp.Views.PostsForm({ model: post });
		$("div.posts-space").html(editView.render().$el);
	},

	postsNew: function () {
		var post = new JournalApp.Models.Post();

		var newView = new JournalApp.Views.PostsForm({
			model: post,
			collection: JournalApp.Collections.posts
		});

		$("div.posts-space").html(newView.render().$el);
	}
});