angular.module('ngTouch', [])
.factory('$swipe', [function () {
	function getCoordinates(event) {
		var e = event.changedPointers[0];
		return {
			x: e.clientX,
			y: e.clientY
		};
	}

	return {
		bind: function (element, eventHandlers, pointerTypes) {
			var hammertime = new Hammer(element[0]);
			hammertime.on('panstart', function (event) {
				eventHandlers['start'] && eventHandlers['start'](getCoordinates(event), event);
			});
			hammertime.on('panmove', function (event) {
				eventHandlers['move'] && eventHandlers['move'](getCoordinates(event), event);
			});
			hammertime.on('pancancel', function (event) {
				eventHandlers['cancel'] && eventHandlers['cancel'](getCoordinates(event), event);
			});
			hammertime.on('panend', function (event) {
				eventHandlers['end'] && eventHandlers['end'](getCoordinates(event), event);
			});
		}
	};
}]);