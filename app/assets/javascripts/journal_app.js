window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	initialize: function(){
		this.postsRouter = new JournalApp.Routers.PostsRouter("div.posts-space");
		Backbone.history.start();
	}
};

$(document).ready(function(){
  JournalApp.initialize();
});
