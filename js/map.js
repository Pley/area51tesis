;(function($, undefined){

	function map_load() {
		var myLatlng = new google.maps.LatLng(-12.0842171,-77.0516141);
		var mapOptions = {
			zoom: 16,
			draggable: false,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map
		});
	}

	function init(){
		// map resize
		var $_content_map = $('#map-canvas');
		var $_content = $_content_map.closest('.content');
		var $_content_header = $_content.find('.content-header');
		var margin = 5;
		
		$_content_map.css({
			height: ($_content.height() - $_content_header.outerHeight() - (margin * 2)) + 'px',
			width: ($_content.width() - (margin * 2)) + 'px',
			left: margin + 'px',
			top: margin + 'px'
		});
		//$_content_map.

		// --

		google.maps.event.addDomListener(window, 'load', map_load);

		if(window.fix) window.fix();
	}

	$(document).one('ready', init);

})(jQuery);
