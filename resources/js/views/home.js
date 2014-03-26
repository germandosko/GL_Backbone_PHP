var HomeView = Backbone.View.extend({
	
	template_head: _.template($('#home_head_template').text()),

	template_content: _.template($('#home_content_template').text()),
	
	renderHead: function () {
		this.$el.html(this.template_head());		
		$('#head').html(this.$el);
	},

	renderContent: function () {
		this.$el.html(this.template_content());
		$('#content').html(this.$el);		
	},

});