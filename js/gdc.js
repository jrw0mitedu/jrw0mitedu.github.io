var gdc = {};
gdc.navigation_links = '';
gdc.navigation_links += '        <li class="nav-item">';
gdc.navigation_links += '          <a class="nav-link" href="index.html">Home</a>';
gdc.navigation_links += '        </li>';
gdc.navigation_links += '        <li class="nav-item">';
gdc.navigation_links += '          <a class="nav-link" href="fashion.html">Fashion</a>';
gdc.navigation_links += '        </li>';
gdc.navigation_links += '        <li class="nav-item">';
gdc.navigation_links += '          <a class="nav-link" href="costs.html">Costs/Contact</a>';
gdc.navigation_links += '        </li>';
gdc.navigation_links += '        <li class="nav-item">';
gdc.navigation_links += '          <a class="nav-link" href="wellness.html">Wellness</a>';
gdc.navigation_links += '        </li>';  
gdc.navigation_links += '        <li class="nav-item dropdown">';
gdc.navigation_links += '          <a class="nav-link dropdown-toggle" href="team.html" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Team</a>';
gdc.navigation_links += '          <div class="dropdown-menu" aria-labelledby="dropdown08">';
gdc.navigation_links += '          <a class="dropdown-item" href="advisors_media.html">Advisors - Media</a>';
gdc.navigation_links += '             </div>';
gdc.navigation_links += '        </li>';

gdc.advisorsDescription = '<p>The Oxford Design Advisory Board: Select link below.</p>';
gdc.advisors = [];
gdc.advisors.push({
	url : 'advisors_media.html',
	label : 'Advisors - Media'
});


gdc.advisorsButtons = '';
gdc.advisors.forEach(function(advisor){
	gdc.advisorsButtons += '<a href="' + advisor.url + '" class="badge badge-primary">' + advisor.label + '</a> ';
});

gdc.advisorsList = '<ul>';
gdc.advisors.forEach(function(advisor){
	gdc.advisorsList += '<li><a href="' + advisor.url + '">' + advisor.label + '</a></li>';
});
gdc.advisorsList += '</ul>';









