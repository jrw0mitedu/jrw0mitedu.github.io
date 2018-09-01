// the domain banner 
// ----------------------------------

var banner = {
    title       : 'Wellness',
    description : 'Lora was one of the top body-builders in Russia. She understands what it takes to shape your body and keep it healthy. She can develop a plan with you that is realistic and will get the results you want.',
    image       : 'images/Fashion/fitness.jpg'
};


// the domain videos
// ----------------------------------
// before deploying restric URL access
// https://console.developers.google.com/apis/credentials/wizard?api=youtube.googleapis.com&project=api-project-837099048967
var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDMFLzLWCPZHxuelUGBnORQ&maxResults=10&order=date&type=video&key=AIzaSyCUDPY8zV5jfjqiVDwTMUUDMn7jrHi8nQo';
var request = new XMLHttpRequest();
request.open('GET', url, false);  // `false` makes the request synchronous
request.send(null);

var boxes = [];

boxes.push({
    title       : 'Fitness and Wellness',
    subtitle    : '',
    description : '',
    thumbnail   : 'images/Fashion/fitness.jpg'    
});



// videos from youtube
/*
if (request.status === 200) {
    var youtube = JSON.parse(request.responseText);
    youtube.items.forEach(function(video){
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
*/
