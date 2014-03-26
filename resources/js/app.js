var AppRouter = Backbone.Router.extend({	
	routes: {
		"": "home",
		"index": "home",
		"contact": "contact",
		"login": "login",
		"admin": "admin",
		"admin_customers": "admin_customers"
	},
	
	initialize: function  () {		
		this.homeView = new HomeView();
		this.contactView = new ContactView();
		this.loginView = new LoginView();
		this.adminView = new AdminView();
		this.customerModel = new CustomerModel();
		this.customerView = new CustomerView({
			model: this.customerModel
		});
	},

	home: function () {
		this.homeView.renderHead();
		this.homeView.renderContent();
	},

	contact: function () {
		$('#content').html(this.contactView.renderContent().el.innerHTML);
	},

	login: function () {
		this.loginView.renderContent();
	},

	admin: function () {
		this.adminView.renderHead();
		this.adminView.renderContent();
	},
	
	admin_customers: function () {
		this.adminView.renderHead();
		this.customerView.renderContent();
	}

});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});