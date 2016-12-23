date = null;

var special_dates = function() {
	date = moment(new Date())

	switch(date.format('MMMM Do')){
		case 'November 25th':
			$('.special-dates').text("Happy Thanksgiving!");
		break;
		case 'December 24th':
			$('.special-dates').text("Merry Christmas Eve, ya thilthy animal");
		break;
		case 'December 25th':
			$('.special-dates').text("Merry Christmas!");
		break;
		case 'January 1st':
			$('.special-dates').text("Make this new year a great one!");
		break;
		case 'Febuary 14th':
			$('.special-dates').text("HAPPPY Valentine's Day");
		break; 
		case 'March 22nd':
			$('.special-dates').text("It's almost your birthday!");
		break; 
		case 'March 23rd':
			$('.special-dates').text("HAPPPY BIRTHDAY!!!");
		break; 
		case 'June 13th':
			$('.special-dates').text("Happy Anniversary!!! You're my favorite Knight");
		break; 
		default:
			$('.special-dates').text("");
	}
}

$(document).ready(function() {
	special_dates();
});