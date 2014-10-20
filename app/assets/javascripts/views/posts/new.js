JournalApp.Views.PostsNew = Backbone.View.extend({
	initialize: function() {

	},

	events: {

	},

  template: JST['posts/post_form'],

	render: function() {
		var postTemp = this.template({
			post: this.model.toJSON()
		});

		this.$el.html(postTemp);
		return this;
	}
});