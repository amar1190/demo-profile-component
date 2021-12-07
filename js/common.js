/*
This file is used for loading js that will be common and needed throughout the website. 
Example - JS for navigation bar functionality
*/

var nods = document.getElementsByClassName("NO-CACHE");
for (var i = 0; i < nods.length; i++) {
    nods[i].attributes["src"].value =
        nods[i].attributes["data-src"].value + "?a=" + Math.random();
}

//$( document ).ready() block.
$(document).ready(function () {
    console.log("Document is ready");
    $(".dropdown-trigger").dropdown();
    // override brower cache
});
