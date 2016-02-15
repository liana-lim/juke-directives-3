'use strict';

juke.directive('audioPlayer', function (PlayerFactory) {
	return {
		restrict: 'E',
		templateUrl: '/js/player/templates/player.html',
		link: function (scope, element, attrs) {
			scope.getCurrentSong = PlayerFactory.getCurrentSong;
			console.log(scope.getCurrentSong, "getting song");
		  scope.isPlaying = PlayerFactory.isPlaying;
		  scope.next = PlayerFactory.next;
		  scope.previous = PlayerFactory.previous; 
		  scope.toggle = function () {
		    if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
		    else PlayerFactory.resume();
		  };

		  scope.getPercent = function () {
		    return PlayerFactory.getProgress() * 100;
		  };
		},
	};
});