$(function(){
	var carouselList = $("#carousel ul");
	var t = setInterval(function(changeSlides){
		carouselList.animate({'marginLeft':-400}, 500, function(moveFirstSlide){
			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last");
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		})
	},3000);
});
