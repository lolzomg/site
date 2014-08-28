var menuGlob = null;
var openedPage = null;



$(document).ready(function() {
	//onLoadIntro();
	menuGlob = $(".menu");
	//var subMenu = $(".subMenu");
	
	$("#bg").animate({"opacity":"1"}, 500);
	
	Pace.on("done", function(){
		buildMenu(menuGlob, true);
		$(".backLink").animate({"opacity":"1"}, 500);
	});
	
	
		
	var item = menuGlob.children(".item");
	
	item.click(function(){
		openedPage = $(this);
		itemMenuClick($(this));
		buildMenu($(this).children(".subMenu"), false);
	});
	
	var backMenu = $(".backLink");
	backMenu.click(function(){
		backLinkClick();
	});
	
	$(".menu").find(".page-about, .page-links").children(".textBlock").css({opacity : 0});
	
});

function onLoadIntro() {
	var intro = $(".intro");
	var menu = $(".menu");
	
	intro.animate({"opacity" : "0"},1500, function(){
		$(this).css({"display" : "none"});
		menu.css({"display" : "block"});
		
	});
}

function buildMenu(menu, b) {
	//var menu = $(".menu");	
	
	var item = menu.children();
	var itemWidth = menu.width() / item.length;
	
	item.each(function(i){
		$(this).css({"width" : itemWidth, "left" : i*itemWidth});
	});
	
	if(b) animateMenuDrop(menu);
	if(!b) animateMenuPop(menu, false);
}

function animateMenuDrop(menu) {
	//var menu = $(".menu");
	var item = menu.children();
		
	item.each(function(i){
		$(this).delay((i+1)*300).animate({"top" : "0"},600)		
	});
}

function animateMenuPop(menu, reverse) {
	var item = menu.find(".subItem");		
	if(reverse===true) {
		
		item.each(function(i){
			$(this).delay((i+1)*300).animate({"bottom" : "-100%"},600)
		});
	};
		
	if(reverse===false) {
		item.each(function(i){
			$(this).delay((i+1)*300).animate({"bottom" : "0"},600)
		});
	};
	
	
	
	//if(menu.parent().hasClass("page-about")===true)	enlargeYourMenu(menuGlob);
}

function enlargeYourMenu(menu) {
	menu.animate({"height" : 800},600);
	backLinkUpdate(800);
}

function decreaseYourMenu(menu) {
	menu.animate({"height" : 400},600);
	backLinkUpdate(400);
}

function itemMenuClick(owner){
	
	owner.find(".textBlock, .subMenu").css({opacity : 1});
	
	owner.css({"z-index" : "99"}).animate({"left" : 0, "width" : "100%"}, function() {
		squezeLabel();
		if(owner.hasClass("page-about")===true)	enlargeYourMenu(menuGlob);
		//backLinkUpdate();
	});
	
	function squezeLabel() {
		owner.children(".label").children(".labelContent").children("i").animate({"font-size" : "3em"}, 400);
		owner.children(".label").animate({"height" : "20%", "font-size" : "3.5em"}, 400);
	}
}

function backLinkUpdate(amount) {
	var backLink = $(".backLink");
	
	backLink.animate({height : amount},600);
}

function backLinkClick() {
	
	openedPage.find(".textBlock, .subMenu").animate({opacity : 0},300, function(){
		
		decreaseYourMenu(menuGlob);
		
		
		var indexItem = openedPage.index();
		openedPage.css({"z-index" : ""}).animate({"width" : 200, left : indexItem * 200}, function(){
			deSquezeLabel(openedPage);
		});
	});
	
	animateMenuPop(openedPage, true);
	//closeMenuItem(openedPage);
		
	
	
	function deSquezeLabel(owner) {
		owner.children(".label").children(".labelContent").children("i").animate({"font-size" : "4em"}, 400);
		owner.children(".label").animate({"height" : "100%", "font-size" : "5em"}, 400);
	}
	
	
	
	
}

function closeMenuItem(item) {
	
}
