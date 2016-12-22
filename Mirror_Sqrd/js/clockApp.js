var datetime = null,
date = null;

var update = function () {
    date = moment(new Date())
    var html = '<p>' + date.format('dddd, MMMM Do') + '</p>';
    html += '<p id="time">' + date.format('HH:mm') + '</p>';
    datetime.html(html);

    if(date.format('MMMM Do') == ('March 22nd')){
    	$('.bday').text("It's almost your birthday bubs!");
    }else if(date.format('MMMM Do') == ('March 23rd')){
        $('.bday').text("Happy Birthday!");
    }else{
        $('.bday').text("");
    }

};

$(document).ready(function() {
    datetime = $('#date');
    update();
    setInterval(update, 10000);
});

