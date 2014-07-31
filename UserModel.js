var UserModel = LIFE.Model.inherit({
	url : "google.com",
	settings : {
		repeat : false,
		interval : 3000
	},
	getData : function() {
		this.ajax({
			url : "http://api.openweathermap.org/data/2.5/forecast/daily?q=Delhi&cnt=14&APPID=b35e5e51128992747a9393ab8ba53b8b",
			success : function(model, rawData) {
				console.log(model.get('message'));
				model.fireEvent("data received");		
			}
		});
	}
});