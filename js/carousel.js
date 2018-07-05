(function(){

    var carousel = [];


    carousel.push({
        title       : 'Larisa Vorontsova',
        subtitle    : 'Fashion Consulting Services',
        description : 'London, Oxford and St. Petersburg',
        video       : '',
        image       : 'images/restaurant/lora1.jpg',
        isactive    : true        
    });



    carousel.push({
        title       : 'Your Image',
        subtitle    : 'Building your own image',
        description : "Lora has built her own image. She will show you how to build yours.<div><a href='simulation.html' class='badge badge-info'>More Information ...</a></div>",
        video       : '',
        image       : 'images/travel.jpg'
    });


    carousel.push({
        title       : 'Building your wardrobe',
        subtitle    : '',
        description : 'Develop your style and live it',
        video       : '',
        image       : 'images/fireplace.jpg'
    });

    carousel.push({
        title       : 'Augmented Reality',
        subtitle    : 'Lora has teamed with an MIT Professor to use Augmented Reality to see your new self',
        description : 'The ICS <div><a href="ar.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/ar_06_low.jpg'
    });

    carousel.push({
        title       : 'Geospatial Analytics',
        subtitle    : 'Understand your local environment',
        description : 'We can develop a deep understanding of your local environment by applying data analytics.<div><a href="geospatial.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/lidar_02.jpg'
    });


    carousel.push({
        title       : 'Team',
        subtitle    : "Meet Lora's team",
        description : 'We are always looking for designers and architects with specialist skills<div><a href="team.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/team_17_low.jpg'
    });




    var html = '';
    html += '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">';
    html += '   <div class="carousel-inner" role="listbox">';

    // loop through carousel items, generate html, add to html variable
    carousel.forEach(function(item){ html += carouselItem(item); });

    html += '   </div>';
    html += '   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">';
    html += '       <span class="carousel-control-prev-icon" aria-hidden="true"></span>';
    html += '       <span class="sr-only">Previous</span>';
    html += '   </a>';
    html += '   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">';
    html += '       <span class="carousel-control-next-icon" aria-hidden="true"></span>';
    html += '       <span class="sr-only">Next</span>';
    html += '   </a>';
    html += '</div>';

    // set carousel content
    document.getElementById('carouselitems').innerHTML = html;    

    function carouselItem(item){
        var active = '';
        if (item.isactive) {active = ' active';}

        var html = '';        
        html += '<div class="carousel-item' + active + '" style="background-image: url(\'' + item.image + '\')">';

        html += '   <div class="carousel-caption d-md-block" style="top: 50%;transform: translateY(-50%);bottom: initial;-webkit-transform-style: preserve-3d;-moz-transform-style: preserve-3d;transform-style: preserve-3d;">';

        html += '       <div class="gdcTopic" style="background-color:rgba(0, 0, 0, 0.75); padding: 50px 50px 50px 50px;">';            
        html += '           <h1>' + item.title + '</h1>';
        html += '           <h3>' + item.subtitle + '</h3>';
        html += '           <p>' + item.description + '</p>';            
        html += '       </div>';            
        html += '       <div id="carouselButtons"></div>';
        html += '   </div>';
        html += '</div>';
        return html;
    }



    $(document).ready(function() {

        // carousel settings
        $('#playButton').click(function () {
            console.log('cycle clicked');                
            $('#homeCarousel').carousel('cycle');
        });
        $('#pauseButton').click(function () {
            console.log('pause clicked');
            $('#homeCarousel').carousel('pause');
        });

        $('.carousel').carousel({
          interval: 15000
        });

    });

    
})();


