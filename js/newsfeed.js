$(document).ready(function() {

    var url = 'http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml';
    
    feednami.load(url,function(result){
        if(result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            for(var i = 0; i < entries.length; i++){
                var entry = entries[i];
                $('#newsfeed p').text(entry.title);
                
            }
        }
    });

});
