var album1 = $('.album1'), album2 = $('.album2'), album3 = $('.album3'), album4 = $('.album4'), album5 = $('.album5'), album6 = $('.album6');
var album1Overview = $('.album1Overview'), album2Overview = $('.album2Overview'), album3Overview = $('.album3Overview'), album4Overview = $('.album4Overview'), album5Overview = $('.album5Overview'), album6Overview = $('.album6Overview');
var albumThumbnails = $('.albumThumbnails'), imageThumbnails = $('.imageThumbnails');

albumThumbnails.click(function(e) {
	$('.myAlbums').addClass('inactive');
	$('.albumOverview').addClass('inactive');
	$('.albumList').removeClass('inactive');
});

album1.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album1Overview.removeClass('inactive');
});

album2.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album2Overview.removeClass('inactive');
});

album3.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album3Overview.removeClass('inactive');
});

album4.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album4Overview.removeClass('inactive');
});

album5.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album5Overview.removeClass('inactive');
});

album6.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album6Overview.removeClass('inactive');
});

