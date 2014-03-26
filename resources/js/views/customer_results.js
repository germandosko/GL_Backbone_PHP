var CustomerResultsView = Backbone.View.extend({

	admin_customers_results: Handlebars.compile($('#admin_customers_results').text()),
	

    events: {
        "click #search": "renderCustomersResults",
    },
	
	initialize:function () {
        _.bindAll(this);
    },

	renderCustomersResults: function (event) {	
		event.preventDefault();
		url = 'Backend/Api/customerSearch.php';
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
                	var jsonObject = JSON.parse(data);
					console.log(jsonObject);
					//that.$el.html(that.admin_customers_results(data));
					//$('#customers').append(that.$el);
                } else {
                	console.log('ERROR');
                }
            },
		});
	},
});