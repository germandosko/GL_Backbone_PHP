var ContactView = Backbone.View.extend({
	
	template: Handlebars.compile($('#contact_template').text()),

	renderContent: function () {
		this.$el.html(this.template());
		return this;
	},

});