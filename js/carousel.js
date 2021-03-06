(function(){

    var carousel = [];


    carousel.push({
        title       : 'Lora Fashion Consulting',
        subtitle    : 'London and Oxford',
        description : '',
        video       : '',
        image       : 'images/Fashion/cover1.jpg',
        isactive    : true        
    });


carousel.push({
        title       : 'Building your wardrobe',
        subtitle    : 'Keeping the good and moving out the not so good',
        description : 'A typical fashion consultation starts with a half to full day reviewing your wardrobe and developing a plan for building a new one to fit your image.',
        video       : '',
        image       : 'images/Fashion/fireplace.jpg'
    });

    carousel.push({
        title       : 'Shopping for your new image',
        subtitle    : 'This is typically a full day in London to get you started',
        description : "Lora has her own unique image. She will show you how to build yours. Lora will tell you what you should and shouldn't buy. She will shop to your budget.",
        video       : '',
        image       : 'images/Fashion/travel.jpg'
    });

    carousel.push({
        title       : 'Health and Wellness',
        subtitle    : 'Understanding your body and its needs and how it influences your image and your self esteem.',
        description : 'Lora will work with you to develop a wellness program that fits into your schedule. She was once one of the top body-builders in Russia. She knows how to design a program that will change you body and your self-control.',
        video       : '',
        image       : 'images/Fashion/fitness.jpg'
    });
    carousel.push({
        title       : 'Cost of 2 Step Plan',
        subtitle    : 'Step 1 -Planning the Wardrobe (half day) £350<br>Step 2 - Full day Shopping £600',
        description : 'Lora will guide you to meet your goals and stay within your budget...<br>Your new image awaits you.',
        video       : '',
        image       : 'images/Fashion/yourImage.jpg'
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
          interval: 8000
        });

    });

    
})();


