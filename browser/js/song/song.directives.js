'use strict';

juke.directive('songView', function (PlayerFactory) {
	return {
		restrict: 'E',
		scope: {
			songs: '='
		},
		templateUrl: '/js/song/templates/songview.html',
		link: function (scope, element, attrs) {
			scope.getCurrentSong = PlayerFactory.getCurrentSong;
			console.log(scope.getCurrentSong(), "current song");
		  	scope.isPlaying = PlayerFactory.isPlaying;
			scope.toggle = function (song) {
		    	if ( PlayerFactory.isPlaying() && song ===scope.getCurrentSong() ) PlayerFactory.pause();
		    	else if ( !PlayerFactory.isPlaying() && song === scope.getCurrentSong()) PlayerFactory.resume();
		    	else PlayerFactory.start(song);
		    }
		}
	};
});
