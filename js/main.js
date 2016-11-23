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
