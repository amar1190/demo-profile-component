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
    if ($("#tabs_swipe").length) {
        $("#tabs_swipe").tabs({ swipeable: true });
    }
    $("ul.tabs").tabs();
    // $(".dropdown-trigger").dropdown();
    // override brower cache
});

function show_profile_card() {
    console.log("Profile icon clicked");
    let ele = $("#profile-card");
    let visible = ele.css("display");
    if (visible == "block") {
        ele.css("display", "none");
    } else {
        ele.css("display", "block");
    }
}
