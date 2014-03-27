var CustomerView = Backbone.View.extend({
	//el: $("#content"),

	results: Handlebars.compile($('#customers_results').text()),
	
	template: Handlebars.compile($('#customers_template').text()),

	newForm: Handlebars.compile($('#customer_newForm').text()),

    events: {
        "click .toBack": "renderContent",
        "click #search": "renderResults",
        "click #newCustomer": "newCustForm",
        "click #saveCustomer": "save",
      	"click .deleteCustomer": "delete"          
    },
	
	initialize:function () {
	    console.log('initialize');
	    _.bindAll(this);
    },

	renderContent: function () {	
		console.log('renderContent');
		this.$el.html(this.template());		
		$('#content').html(this.$el);
	},
		

	newCustForm: function (event) {	
		event.preventDefault();
		this.$el.html(this.newForm());		
		$('#content').html(this.$el);	
	},

	delete: function (event) {	
		event.preventDefault();
		var url = 'Backend/Api/customerDelete.php';
		var customerId = {'id': event.currentTarget.parentNode.parentNode.firstElementChild.innerText};
		event.currentTarget.parentNode.parentNode.remove();
		that = this;
		/*
		$.ajax({
            data: customerId,
            url: url,
            type: 'POST',
            success: function (data) {
                console.log(data);
            },
		});
		*/
		window.location.replace('#admin_customers');

	},

	save: function (event) {	
		event.preventDefault();
		console.log('ingreso save');
			/*
		var url = 'Backend/Api/customerSave.php';
		var formValues = {
			'cuit': $('#cuit').val(),
			'numIncome': $('#numIncome').val(),
			'initDate': $('#initDate').val(),
			'name': $('#name').val(),
			'lastName': $('#lastName').val(),
			'businessName': $('#businessName').val(),
			'address': $('#address').val(),
			'city': $('#city').val(),
			'email': $('#email').val(),
			'phone': $('#phone').val(),
			'cellPhone': $('#cellPhone').val(),						
		};
		that = this;
		$.ajax({
            data: formValues,
            url: url,
            type: 'POST',
            success: function (data) {
                
            },
		});
		*/
	},

	renderResults: function (event) {	
		event.preventDefault();
		console.log('renderResults');
		var url = 'Backend/Api/customerSearch.php';
		var formValues = {
			'customerName': $('#customerName').val()
		};
		that = this;
		$.ajax({
            data: formValues,
            url: url,
            type: 'POST',
            success: function (data) {
                if(data){
                	jsonObject = JSON.parse(data);
					console.log(that.results({"items":jsonObject}));
					//that.$el.html(that.results({"items":jsonObject}));		
					//$('#customers').html(that.$el);					
					$('#customers').html(that.results({"items":jsonObject}));
                } else {
                	console.log('ERROR');
                }
            },
		});
	},
});