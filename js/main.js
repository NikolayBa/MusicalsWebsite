/* Fading Navbar*/

// window.addEventListener("scroll", function() {
//     if (window.scrollY > 768) {
//         $('.navbar').fadeIn();
//     }
//     else {
//         $('.navbar').fadeOut();
//     }
// },false);

// END Fading Navbar


// When the window has finished loading create our google map below

function initMap() {
  var uluru = {lat: 42.4662471, lng: 23.5069981};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  //
  // var selo = new google.maps.Map(document.getElementById('selo'), {
  //   center: uluru
  // }
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
// ========== END GOOGLE MAP ========== //

// READ MORE //
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";


    $('.moren').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
