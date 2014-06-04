var name = ""
var target = ""

$('form').submit(function(){


	info = "request=login&"+$(this).serialize();
	
    	var user = $(this).serializeArray()[0].value;


	$.ajax({
		type: 'POST',
		url: 'http://nick-add-this.com',
		data: info,
		success: function(data){
			if (data == "yes"){
				name = user;
				alert('you are logged in');
			}
			if (data == "no"){
				alert('you are not logged in');
			}
		},
		error: function(){
			alert('error - probably server hasnt been made yet');
			
		}
	});
	
	return false;
});

var register = function(username,password, name){

	var info = {request:"register", username:username, password:password, name:name};

	$.ajax({
		type: 'POST',
		url: 'http://nick-add-this.com',
		data: info,
		success: function(data){
			if (data == "yes"){
				alert("registration sucessful");
			}
			if (data == "no"){
				alert("registration failed");
			}
		},
		error: function(){
			alert('error - probably server hasnt been made yet');
			
		}
	});
}

var get_target = function(){





	var info = {request:"get_target", name:name};

	$.ajax({
		type: 'POST',
		url: 'http://nick-add-this.com',
		data: info,
		success: function(data){
			target = data;
		},
		error: function(){
			alert('error - probably server hasnt been made yet');
			
		}
	});
}

var kill = function(){

	var latitude;
	var longitude;
	var altitude;

	var GPSonSuccess = function(position) {
		longitude = position.coords.longitude;
		latitude = position.coords.latitude;
		altitude = position.coords.altitude;
   		
	}


	function GPSonError(error) {
    		alert('code: '    + error.code    + '\n' +
          	'message: ' + error.message + '\n');
	}	

	navigator.geolocation.getCurrentPosition(GPSonSuccess, GPSonError);


	var info = {request:"kill", latitude:latitude, longitude:longitude, altitude:altitude};

	$.ajax({
		type: 'POST',
		url: 'http://nick-add-this.com',
		data: info,
		success: function(data){
			alert(data);
		},
		error: function(){
			alert('error - probably server hasnt been made yet');
			
		}
	});
}