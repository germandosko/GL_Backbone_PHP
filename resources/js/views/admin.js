var AdminView = Backbone.View.extend({
	
	admin_head: Handlebars.compile($('#admin_head').text()),

	admin_template: Handlebars.compile($('#admin_template').text()),

    events: {
        "click #admin_customers": "renderCustomersContent",
    },
	
	initialize:function () {
        _.bindAll(this);
    },

	renderHead: function () {		
		$('head').append(this.admin_head());
	},

	renderContent: function () {	
		this.$el.html(this.admin_template());		
		$('#content').html(this.$el);
	},

	renderCustomersContent: function () {	
		window.location.replace('#admin_customers');
	},
});