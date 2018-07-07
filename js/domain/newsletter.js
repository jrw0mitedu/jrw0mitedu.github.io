// the domain banner 
// ----------------------------------

var banner = {
    title       : 'Newsletter',
    description : 'The latest fashions',
    image       : 'images/Fashion/latest1.jpg'
};


// the domain videos
// ----------------------------------
// before deploying restric URL access
// https://console.developers.google.com/apis/credentials/wizard?api=youtube.googleapis.com&project=api-project-837099048967
var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCepVy23t8l-CEaASZzfo9Jg&maxResults=10&order=date&type=video&key=AIzaSyCUDPY8zV5jfjqiVDwTMUUDMn7jrHi8nQo';
var request = new XMLHttpRequest();
request.open('GET', url, false);  // `false` makes the request synchronous
request.send(null);

var boxes = [];

boxes.push({
    title       : 'Fashion',
    subtitle    : '',
    description : '',
    thumbnail   : 'images/Fashion/latest1.jpg'    
});
boxes.push({
    title       : 'Fun in blue',
    subtitle    : '',
    description : '',
    thumbnail   : 'images/Fashion/blue1.jpg'    
});


// videos from youtube
if (request.status === 200) {
    console.log(request.responseText);
    var youtube = JSON.parse(request.responseText);
    youtube.items.forEach(function(video){
        console.log('video.id.videoId: ' + video.id.videoId);
        console.log('video.snippet.title: ' + video.snippet.title);
        boxes.push({
            title       : video.snippet.title,
            subtitle    : '',
            description : '',
            url         : 'https://www.youtube.com/embed/' + video.id.videoId,
            video       : true,
            thumbnail   : video.snippet.thumbnails.medium.url
        });

    });
}
