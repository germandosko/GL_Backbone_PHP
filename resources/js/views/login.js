var LoginView = Backbone.View.extend({     

    events: {
        "click .loginButton": "login"
    },
	
	initialize:function () {
        _.bindAll(this);
    },
	
	template: Handlebars.compile($('#login_template').text()),

	renderContent: function () {
		this.$el.html(this.template());		
		$('#content').html(this.$el);
	},

	login: function(event){
		event.preventDefault();
		
		url = 'Backend/Api/login.php';
		
		
		var formValues = {
			'nick': $('#nick').val(),
			'password': $('#password').val()
		}

		
		$.ajax({
            data: formValues,
            url:url,
            type:'GET',
            success:function (data) {
                if(data){
                	window.location.replace('#admin');
                } else {
                	console.log('usuario INCORRECTO');
                }

            }
		});
		
				
	}
});