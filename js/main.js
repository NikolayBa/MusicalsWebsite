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

//GALLERY
$(document).ready(function(){
    $('.link-gallery').click(function(){
		var galleryId = $(this).attr('data-target');
		var currentLinkIndex = $(this).index('a[data-target="'+ galleryId +'"]');

		createGallery(galleryId, currentLinkIndex);
		createPagination(galleryId, currentLinkIndex);

		$(galleryId).on('hidden.bs.modal', function (){
			destroyGallry(galleryId);
			destroyPagination(galleryId);
		});

		$(galleryId +' .carousel').on('slid.bs.carousel', function (){
			var currentSlide = $(galleryId +' .carousel .item.active');
			var currentSlideIndex = currentSlide.index(galleryId +' .carousel .item');

			setTitle(galleryId, currentSlideIndex);
			setPagination(++currentSlideIndex, true);
		})
	});

	function createGallery(galleryId, currentSlideIndex){
		var galleryBox = $(galleryId + ' .carousel-inner');

		$('a[data-target="'+ galleryId +'"]').each(function(){
			var img = $(this).html();
			var galleryItem = $('<div class="item">'+ img +'</div>');

			galleryItem.appendTo(galleryBox);
		});

		galleryBox.children('.item').eq(currentSlideIndex).addClass('active');
		setTitle(galleryId, currentSlideIndex);
	}

	function destroyGallry(galleryId){
		$(galleryId + ' .carousel-inner').html("");
	}

	function createPagination(galleryId, currentSlideIndex){
		var pagination = $(galleryId + ' .pagination');
		var carouselId = $(galleryId).find('.carousel').attr('id');
		var prevLink = $('<li><a href="#'+ carouselId +'" data-slide="prev">«</a></li>');
		var nextLink = $('<li><a href="#'+ carouselId +'" data-slide="next">»</a></li>');

		prevLink.appendTo(pagination);
		nextLink.appendTo(pagination);

		$('a[data-target="'+ galleryId +'"]').each(function(){
			var linkIndex = $(this).index('a[data-target="'+ galleryId +'"]');
			var paginationLink = $('<li><a data-target="#carouselGallery" data-slide-to="'+ linkIndex +'">'+ (linkIndex+1) +'</a></li>');

			paginationLink.insertBefore('.pagination li:last-child');
		});

		setPagination(++currentSlideIndex);
	}

	function setPagination(currentSlideIndex, reset = false){
		if (reset){
			$('.pagination li').removeClass('active');
		}

		$('.pagination li').eq(currentSlideIndex).addClass('active');
	}

	function destroyPagination(galleryId){
		$(galleryId + ' .pagination').html("");
	}

	function setTitle(galleryId, currentSlideIndex){
		var imgAlt = $(galleryId + ' .item').eq(currentSlideIndex).find('img').attr('alt');

		$('.modal-title').text(imgAlt);
	}
});
