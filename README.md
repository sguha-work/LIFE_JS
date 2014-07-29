LIFE_JS
=======

Fron end javascript framework influenced by anguler js and bacbone js

Documentation

Model : 
declaration of model : 

var sampleModel2 = LIFE.Model.inherit({
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
		// console.log(sampleModel2);
		sampleModel2.getData();

properties :
1> url : holds the url which will be called if this.ajax method is initiated without url.
2> settings : 1> cache :  if true then data will be cached
                       2> cacheTimeOut : after the specified time the cached data will be emptied.
	           3> repeat : default false useful for live streaming data if true then the provided url will be hitted again and again
                       4> interval : time interval between two simultaneous hit.
3> change : default empty array, if provided then as soon as the model changed the view will be initiated.

4> model.get(‘key’) : the value from model having specified key will be plucked.

5> model.set(‘key’, value) : value will be set to given key.

6>onchange :  default empty array, holds the controller’s method name to be fired when the model changes occur.

7> model.fireEvent :  function by which user can fire a custom made event from model.

8> model.ajax : function to make all ajax call. receives an attribute that hold all ajax calling required attributes in jquery. in success method it returns an instance of model, rawData, and then other elements which $.ajax returns. If url is specified in the attribute then the global set url attribute will be skipped. If url is not specified then global url will be called.
