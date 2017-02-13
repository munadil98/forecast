//make BMI Calculator

$(document).ready(function(){

	// window.setTimeout(function, milliseconds);
var days;

	$("#btn").click(function(){
		var city_name = $("#cityname").val();
		var days = $("#days").val();
		getValue(city_name, days);
		$("#label-1,#label-2,#city,#country,#region,#temp,#unit,#update,#forecast").css("visibility", "visible");
		// $("#label-2").css("visibility", "visible");

	});

	function getValue(city, days){
		// alert(days);
		$.ajax({
			url: 'https://api.apixu.com/v1/forecast.json?key=7b195b0bdd35453ba6b54648171302&q='+city+'&days='+days,
			dataType: 'json',
			success: function(value){
				// console.log(data);

				$("#city").text(value.location.name);
				$("#country").text(value.location.country);
				$("#region").text(value.location.tz_id);

				$("#update").text(value.current.last_updated);

				for (var i = 0; i <days; i++) {

					var temp=value.forecast.forecastday[i].day.maxtemp_c;
					var date=value.forecast.forecastday[i].date;
					$("#forecast").append(date+": "+temp+"&#8451,<br>");
				}
				
				
				// $("#forecast").text(value.forecast.forecastday.day.maxtemp_c);
			}
		});
	}
	

	// function getValue(city){
	// 	$.ajax({
	// 	  dataType: 'json',
	// 	  url: 'https://api.apixu.com/v1/current.json?key=fd48aae7884d4ddcbf192605171202&q='+city,
	// 	  data: '',
	// 	  success: function(data){
		  			  		
	// 	  		if(data.error)
	// 	  		{
	// 	  			alert(data.error.message);
	// 	  		}
	// 	  		else
	// 	  		{
	// 	  			$("#city").text(data.location.name);
	// 	  			$("#country").text(data.location.country);
	// 	  			$("#temp").text(data.current.temp_c);
	// 	  		}


		  		
	// 	  },
	// 	  error: function(data){
	// 	  		console.log(data.error);
	// 	  }
	// 	});
	// }
});
