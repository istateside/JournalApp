JournalApp.Views.PostsShow = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
	},

	events: {
		"click .back-link": "back",
		"click .edit-link": "edit"
	},

  template: JST['posts/show'],

	render: function() {
		var postTemp = this.template({
			post: this.model.toJSON()
		});

		this.$el.html(postTemp);
		return this;
	},

	back: function (event) {
		event.preventDefault();
		JournalApp.postsRouter.postsIndex();
		JournalApp.postsRouter.navigate('')
	},

	edit: function (event) {
		event.preventDefault();
		JournalApp.postsRouter.postsEdit(this.model.id);
		JournalApp.postsRouter.navigate(Backbone.history.fragment + "/edit")
	}

});