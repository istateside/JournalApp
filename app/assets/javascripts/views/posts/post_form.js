JournalApp.Views.PostsForm = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
		// this.listenTo(this.model, "error", this.errors)
	},

	template: JST['posts/post_form'],

	render: function(){
		var postTemp = this.template({
			post: this.model
		});

		this.$el.html(postTemp);
		return this;
	},

	events: {
		"submit .post-form": "handleForm"
	},

	handleForm: function (event) {
		console.log("Handling form!");
		var formData = $(event.currentTarget).serializeJSON();
		if (this.model.isNew()) {
			this.collection.create(formData);
			Backbone.history.navigate('#', {trigger: true});
		} else {
			if (this.model.save(formData)) {
				Backbone.history.navigate('#', {trigger: true});
			} else {
				this.render();
				this.$el.prepend(this.model.validationError);
			}
		}
	}



});