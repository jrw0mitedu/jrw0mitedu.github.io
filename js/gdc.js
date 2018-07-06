var gdc = {};
gdc.navigation_links = '';
gdc.navigation_links += '        <li class="nav-item">';
gdc.navigation_links += '          <a class="nav-link" href="fashion.html">Fashion</a>';
gdc.navigation_links += '        </li>';
gdc.navigation_links += '        <li class="nav-item">';
gdc.navigation_links += '          <a class="nav-link" href="wellness.html">Wellness</a>';
gdc.navigation_links += '        </li>';  
gdc.navigation_links += '        <li class="nav-item">';
gdc.navigation_links += '          <a class="nav-link" href="newsletter.html">Newsletter</a>';
gdc.navigation_links += '        </li>';
gdc.navigation_links += '        <li class="nav-item">';
gdc.navigation_links += '          <a class="nav-link" href="costs.html">Costs/Contact</a>';
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









