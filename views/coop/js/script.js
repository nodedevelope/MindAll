// Vendor
jQuery(document).ready(function($){

    // Hamburger menu
    $("#gnb-hamburger > a").click(function(event) {
        event.preventDefault();
        $("#gnb-hamburger > ul").slideToggle();
    });

    $("#technologies-left-arrow").click(function() {
        moveTechnology("left");
    });

    $("#technologies-right-arrow").click(function() {
        moveTechnology("right");
    });

    // LNB (Local Navigation Bar)
    $("#lnb > .container > ul > li > a").click(function(event) {
        event.preventDefault();
        $("#lnb > .container > ul > li").removeClass("active");
        $(this).parent().addClass("active");
        var category = $(this).text();
    });

    // GNB (Global Navigation Bar)
    var navigationBarColor = "#333";
    var upperNavigationBarColor = "rgba(0, 0, 0, .5)";
    $("#lnb, #sectors, #checkpoint").waypoint({
        handler: function(direction) {
            if(direction === "down") {
                $("nav#gnb").css({
                    backgroundColor: navigationBarColor
                });
            }
            else {
                $("nav#gnb").css({
                    backgroundColor: upperNavigationBarColor
                });
            }
        }
    });

    
});