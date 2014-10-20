JournalApp.Views.PostsIndex = Backbone.View.extend({
	initialize: function(options) {
		this.listenTo(this.collection, "reset change remove", this.render);
		this.listenTo(this.collection, "add", this.addPost);
	},

	tagName: "ul",

  template: JST['posts/index'],

	render: function() {
		header = $("<h3>").text("Posts");
		this.$el.html(header)
		this.collection.each(this.addPost.bind(this));
		this.$el.append("<a href='javascript:void(0)' class='new-post'>New</a>")
		return this;
	},

	events: {
		"click .post-delete": "destroyPost",
		"click .new-post": "newPost"
	},

	addPost: function (post) {
		var $a = $("<a>").attr('href', '#/posts/' + post.id);
		$a.text(post.escape('title'));
		var $li = $("<li>").append($a);
		var $deleteBtn = $('<button>');
		$deleteBtn.addClass('post-delete');
		$deleteBtn.data("id", post.id);
		$deleteBtn.text("Delete post!!");

		$li.append($deleteBtn);

		this.$el.append($li);
	},

	destroyPost: function (event) {
		var $btn = $(event.currentTarget);
		var modelId = $btn.data('id');
		var model = JournalApp.Collections.posts.getOrFetch(modelId);
		model.destroy();
	},

	newPost: function(event) {
		console.log("Entering #newPost")
		event.preventDefault();
		JournalApp.postsRouter.postsNew();
		JournalApp.postsRouter.navigate("#/posts/new");
	}

});