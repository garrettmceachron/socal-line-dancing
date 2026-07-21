
var srcDirectory = "";
var hrefDirectory = "";

var currentLink = window.location.href;
if (currentLink.includes('/articles/')) {
   srcDirectory = '../';
   hrefDirectory = '../';
}
//if (currentLink.includes('/locationsCopy/')) {
//   
//}	

document.getElementById("homeText").innerHTML = '<a class="dropdown-item" id="homeText" href="' + hrefDirectory + 'index"><img id="homeImage" src="' + srcDirectory + 'images/Logo.png" class="homeIcon">&nbsp&nbsp&nbsp&nbsp Home</a></img>';
document.getElementById("locationsMapText").innerHTML = '<a class="dropdown-item" href="' + hrefDirectory + 'linedancelocations"><img src="' + srcDirectory + 'images/SaloonDoor.png" class="homeIcon">&nbsp&nbsp&nbsp&nbsp Locations Map</a></img>';
document.getElementById("locationsInfoText").innerHTML = '<a class="dropdown-item" href="' + hrefDirectory + 'calendar"><img src="' + srcDirectory + 'images/WantedPosterLargerWanted.png" class="homeIcon">&nbsp&nbsp&nbsp&nbsp Calendar</a>';
document.getElementById("guidesText").innerHTML = '<a class="dropdown-item" href="' + hrefDirectory + 'guides"><img src="' + srcDirectory + 'images/WesternStar.png" class="homeIcon">&nbsp&nbsp&nbsp&nbsp Guides</a>';
document.getElementById("articlesText").innerHTML = '<a class="dropdown-item" href="' + hrefDirectory + 'articles"><img src="' + srcDirectory + 'images/HorseshoeMerged.png" class="homeIcon">&nbsp&nbsp&nbsp&nbsp Articles</a>';
document.getElementById("aboutText").innerHTML = '<a class="dropdown-item" href="' + hrefDirectory + 'about"><img src="' + srcDirectory + 'images/CowboyHat.png" class="homeIcon">&nbsp&nbsp&nbsp&nbsp About</a>';

