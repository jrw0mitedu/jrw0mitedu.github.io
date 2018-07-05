(function(){

    // to change color edit, background-color: rgba(0,0,0,0.75);
    // to remove color remove, background-color: rgba(0,0,0,0.75);
    // color to consider, rgba(41,43,44,0.75)

    var html = '';
    html += '<!-- Navigation -->';
    html += '<nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: rgba(0,0,0,0.75);">'; 
    html += '<div class="container">';
    html += '    <a class="navbar-brand" href="index.html">Lora Design</a>';
    html += '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">';
    html += '      <span class="navbar-toggler-icon"></span>';
    html += '    </button>';
    html += '    <div class="collapse navbar-collapse" id="navbarsExample07">'; // to align center, justify-content-md-center
    html += '      <ul class="navbar-nav">';
    html +=  gdc.navigation_links; // navigation links from gdc.js
    html += '      </ul>';
    html += '    </div>';
    html += '  </div>'
    html += '</nav>';
    document.getElementById('headernavbar').innerHTML = html;    

    html = '';
    html += '<!-- Navigation -->';
    html += '<nav class="navbar fixed-bottom" style="background-color:rgba(0,0,0,0.75)">'; 
    html += '  <a class="navbar-brand"></a>';
    html += '  <form class="form-inline">';
    html += '    <a href="#">';    
    html += '      <img src="images/mit.png">';
    html += '    </a>';
    html += '  </form>';    
    html += '</nav>';
    document.getElementById('footernavbar').innerHTML = html;    
    
})();

/*




*/