// the domain banner 
// ----------------------------------
/*
'GDC is always looking for strong students and researchers. A strong preference is given to students who have been admitted to MIT. Similarly, research assistant positions are typically filled internally by graduate students.<br><a href="#join" class="badge badge-primary">Join The Team</a>'
*/


var banner = {
    title       : 'People',
    description : 'Meet Lora<div><a href="join.html" class="badge badge-info">Join GDC</a> <a href="#gdcadvisors" class="badge badge-info">Advisory Board</a> <a href="#gdcteam" class="badge badge-info">Meet The Team</a></div>',
    image       : 'img/data/bokeh.jpg'
};


// the domain thumbnails - use by album.js 
// ----------------------------------------
var students = [];

students.push({
    name : 'John R. Williams',
    img  : 'img/people/JohnWilliams.jpg'
});

var thumbnails = [];
students.forEach(function(student){
    var name = student.name;

    // shorten if longer than 11
    if (name.length > 11) name = name.substring(0,13);

    thumbnails.push({
        description : name,
        image       : student.img
    });
});

