var CustomerView = Backbone.View.extend({

	results: Handlebars.compile($('#customers_results').text()),
	
	template: Handlebars.compile($('#customers_template').text()),

	newForm: Handlebars.compile($('#customer_newForm').text()),

    events: {
        "click #search": "renderResults",
        "click #newCustomer": "formNew",
        "click #saveCustomer": "save",
      	"click .deleteCustomer": "delete"          
    },
	
	initialize:function () {
        _.bindAll(this);
    },

	renderContent: function () {	
		this.$el.html(this.template());		
		$('#content').html(this.$el);
	},
	
	formNew: function (event) {	
		event.preventDefault();
		this.$el.html(this.newForm());		
		$('#content').html(this.$el);
	},

	delete: function (event) {	
		event.preventDefault();
		
		console.log('deleteo???');
	},

	save: function (event) {	
		event.preventDefault();
		console.log('funco?');
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
					$('#customers').html(that.results({"items":jsonObject}));
                } else {
                	console.log('ERROR');
                }
            },
		});
	},
});