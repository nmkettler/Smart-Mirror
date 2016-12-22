function updateCompliments() {
	var greetings = ["1", "2", "3","4", "5", "6"];

	var i = 0;

	setInterval(function() {
		$.get('http://numbersapi.com/random/date', function(data) {
		    $('#greeting').text(data);
		});
			}, 1000 * 60) //occurs every hour
		}

updateCompliments();


