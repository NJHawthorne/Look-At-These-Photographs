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

var album1Contents = [{
	url: './images/spideymeme-1.jpg'
}, {
	url:'./images/spideyeme-2.jpg'
}, {
	url: './images/spideymeme-3.jpg'
}, {
	url: './images/spideymeme-4.jpg'
}, {
	url: './images/spideymeme-5.jpg'
}, {
	url: './images/spideymeme-6.png'
}, {
	url: './images/spideymeme-7.jpg'
}, {
	url: './images/spideymeme-8.jpg'
}];

var album2Contents = [{
	url: './images/cat-bread-1.jpg'
}, {
	url: './images/cat-bread-2.jpg'
}, {
	url: './images/cat-bread-3.jpg'
}, {
	url: './images/cat-bread-4.jpg'
}, {
	url: './images/cat-bread-5.jpg'
}, {
	url: './images/cat-bread-6.jpg'
}, {
	url: './images/cat-bread-7.jpg'
}, {
	url: './images/cat-bread-8.jpg'
}];

var album3Contents = [{
	url: './images/bad-charmander-1.jpg'
}, {
	url: './images/bad-charmander-2.jpg'
}, {
	url: './images/bad-charmander-3.png'
}, {
	url: './images/bad-charmander-4.jpg'
}, {
	url: './images/bad-charmander-5.jpg'
}, {
	url: './images/bad-charmander-6.png'
}];

var album4Contents = [{
	url: './images/animal-names-1.png'
}, {
	url: './images/animal-names-2.png'
}, {
	url: './images/animal-names-3.png'
}, {
	url: './images/animal-names-4.png'
}, {
	url: './images/animal-names-5.png'
}, {
	url: './images/animal-names-6.png'
}, {
	url: './images/animal-names-7.png'
}, {
	url: './images/animal-names-8.png'
}, {
	url: './images/animal-names-9.png'
}];

var album5Contents = [{
	url: './images/dumb-trump-1.jpg'
}, {
	url: './images/dumb-trump-2.jpg'
}, {
	url: './images/dumb-trump-3.jpg'
}, {
	url: './images/dumb-trump-4.jpg'
}, {
	url: './images/dumb-trump-5.jpg'
}, {
	url: './images/dumb-trump-6.jpg'
}, {
	url: './images/dumb-trump-7.jpg'
}, {
	url: './images/dumb-trump-8.jpg'
}];

var album6Contents = [{
	url: './images/my-shows-1.jpg'
}, {
	url: './images/my-shows-2.jpg'
}, {
	url: './images/my-shows-3.jpg'
}, {
	url: './images/my-shows-4.jpg'
}, {
	url: './images/my-shows-5.jpg'
}, {
	url: './images/my-shows-6.png'
}];















