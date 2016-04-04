var album1 = $('.album1'), album2 = $('.album2'), album3 = $('.album3'), album4 = $('.album4'), album5 = $('.album5'), album6 = $('.album6');
var album1Overview = $('.album1Overview'), album2Overview = $('.album2Overview'), album3Overview = $('.album3Overview'), album4Overview = $('.album4Overview'), album5Overview = $('.album5Overview'), album6Overview = $('.album6Overview');
var albumThumbnails = $('.albumThumbnails'), imageThumbnails = $('.imageThumbnails');
var selectedAlbum, albumNumber;

var album1Contents = [{
	url: './images/spideymeme-1.jpg'
}, {
	url: './images/spideymeme-2.jpg'
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

albumThumbnails.click(function(e) {
	$('.myAlbums').addClass('inactive');
	$('.albumOverview').addClass('inactive');
	$('.albumList').removeClass('inactive');
});

album1.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album1Overview.removeClass('inactive');
	selectedAlbum = album1Contents;
	albumNumber = 1;
	$('.enlargedImage').hide();
});

album2.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album2Overview.removeClass('inactive');
	selectedAlbum = album2Contents;
	albumNumber = 2;
	$('.enlargedImage').hide();
});

album3.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album3Overview.removeClass('inactive');
	selectedAlbum = album3Contents;
	albumNumber = 3;
	$('.enlargedImage').hide();
});

album4.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album4Overview.removeClass('inactive');
	selectedAlbum = album4Contents;
	albumNumber = 4;
	$('.enlargedImage').hide();
});

album5.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album5Overview.removeClass('inactive');
	selectedAlbum = album5Contents;
	albumNumber = 5;
	$('.enlargedImage').hide();
});

album6.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	album6Overview.removeClass('inactive');
	selectedAlbum = album6Contents;
	albumNumber = 6;
	$('.enlargedImage').hide();
});

imageThumbnails.click(function(e) {
	$('.imagesOverview').removeClass('inactive');
	$('.imagesOverview').addClass('inactive');
	$('.albumList').addClass('inactive');
	$('.enlargedImage').removeClass('inactive').show();
});

$('.photo1').click(function(e) {
	$('.returnAlbum').html('Back to Album '+albumNumber);
	$('.chosenImageNumber').html('Image 1');
	$('.chosenImage').attr('src', selectedAlbum[0].url);
});

$('.photo2').click(function(e) {
	$('.returnAlbum').html('Back to Album '+albumNumber);
	$('.chosenImageNumber').html('Image 2');
	$('.chosenImage').attr('src', selectedAlbum[1].url);
});

$('.photo3').click(function(e) {
	$('.returnAlbum').html('Back to Album '+albumNumber);
	$('.chosenImageNumber').html('Image 3');
	$('.chosenImage').attr('src', selectedAlbum[2].url);
});

$('.photo4').click(function(e) {
	$('.returnAlbum').html('Back to Album '+albumNumber);
	$('.chosenImageNumber').html('Image 4');
	$('.chosenImage').attr('src', selectedAlbum[3].url);
});

$('.photo5').click(function(e) {
	$('.returnAlbum').html('Back to Album '+albumNumber);
	$('.chosenImageNumber').html('Image 5');
	$('.chosenImage').attr('src', selectedAlbum[4].url);
});

$('.photo6').click(function(e) {
	$('.returnAlbum').html('Back to Album '+albumNumber);
	$('.chosenImageNumber').html('Image 6');
	$('.chosenImage').attr('src', selectedAlbum[5].url);
});

$('.photo7').click(function(e) {
	$('.returnAlbum').html('Back to Album '+albumNumber);
	$('.chosenImageNumber').html('Image 7');
	$('.chosenImage').attr('src', selectedAlbum[6].url);
});

$('.photo8').click(function(e) {
	$('.returnAlbum').html('Back to Album '+albumNumber);
	$('.chosenImageNumber').html('Image 8');
	$('.chosenImage').attr('src', selectedAlbum[7].url);
});

$('.photo9').click(function(e) {
	$('.returnAlbum').html('Back to Album '+albumNumber);
	$('.chosenImageNumber').html('Image 9');
	$('.chosenImage').attr('src', selectedAlbum[8].url);
});

$('.returnAlbum').click(function(e) {
	if(albumNumber === 1) {
		album1Overview.removeClass('inactive');
	} else if (albumNumber === 2) {
		album2Overview.removeClass('inactive');
	} else if (albumNumber === 3) {
		album3Overview.removeClass('inactive');
	} else if (albumNumber === 4) {
		album4Overview.removeClass('inactive');
	} else if (albumNumber === 5) {
		album5Overview.removeClass('inactive');
	} else if (albumNumber === 6) {
		album6Overview.removeClass('inactive');
	}
	$('.albumList').removeClass('inactive');
	$('.enlargedImage').addClass('inactive');
});