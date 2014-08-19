$(document).ready(function() {
	
	var currentPage = null;
	
	/*$(".greetingsText").click(function() {
		 
		 $(this).animate({
		 	opacity: 0
		 }, 700, function() {
		 	$(this).addClass("removed");
		 
		 	$(".centralMenuItem").each(
		 		function(i) {
		 			$(this).delay(200*i).animate({top: 0}, 500);
		 		}
		 	);
		 	
		 } );
	});*/
	
	$(".centralMenuItem").each(
		 		function(i) {
		 			$(this).delay(200*i).animate({top: 0}, 500);
		 		}
		 	);
	
	$(".centralMenuItem").each(function(){
		//$("i", this).centerThis();
		$("span", this).centerThis();
	});
	
	//$(".centralMenuItem").children("i").centerThis();
	
/*	$(".menuItemContent").each(function(){
		
	});*/
	
	$(".centralMenuItem").click(function() {
		
		currentPage = $(this);
		
		var elementPosIndex = $(this).index();
		var elementWidthOrig = parseFloat($(this).css("width"));
		var elementHeightOrig = parseFloat($(this).css("height"));
		//var menuItemHeight = parseFloat($(this).find(".menuItemContent").css("height"));
		
		//alert($(this).find(".menuItemContent"));
		
		
		
		//$(this).find(".descr").css({fontSize: "2em"});
		$(this).css({"position":"absolute", "z-index" : "999", "left" : elementPosIndex*elementWidthOrig}).animate({
			left: "10%",
  			width: "90%"  			
		}, 600, function() {
			$(".centralMenuBacklink").addClass("shown").animate({
				width: "10%"
			},300);
			
			$(this).find(".menuItemContent").animate({
				"margin-left" : 0,
				"margin-right" : 0,
				"padding-top" : 0,
				fontSize: "0.75em"
			}, 300, function() {
				//$(this).find("i").css({"position" : "relative", top : 0, left : -100});
			});
		});
		//$(this).addClass("opened");
	});
	
	
	/*$(".centralMenuItem").click(function() {
		
		currentPage = $(this);
		
		$(".centralMenuBacklink").addClass("shown")
		
		$(this).find(".menuItemContent").css({"text-align" : "left", "padding-left" : "10%"});
		$(this).find(".descr").css({fontSize: "2em"});
		$(this).css({"position" : "absolute", "z-index" : "999"}).animate({
			//position: 'absolute',			
			left: "10%",
			top: 0,
			fontSize: "0.5em",
  			width: "90%"  			
		}, 600, function() {
			
		});
		//$(this).addClass("opened");
	});*/
	
	/*
	$(".centralMenuBacklink").click(function() {
		$(this).removeClass("shown");
		
		currentPage.find(".menuItemContent").css({"text-align" : "center"}).animate({padding: 0}, 300, function(){});
		currentPage.find(".descr").css({fontSize: "1em"});
		currentPage.css({"position" : "relative", "z-index" : "1"}).animate({			
			left: 0,
			top: 0,
			fontSize: "1em",
  			width: 196.25 			
		}, 600, function() {
			//$(this)
			//$(this)
		});
		
		
	});
	*/
});


$.fn.extend({
	centerThis: function(how) {
		
		
			$(this).css({"display" : "inline-block"});

			var objWidth = $(this).width()+1;
			var objHeight = $(this).height();
						
			$(this).css({"display" : "block", "width" : objWidth, "height" : objHeight});

			var objHalfWidth = objWidth / 2;
			var objHalfHeight = objHeight / 2;
			
			var parentWidth = $(this).parent().width();
			var parentHeight = $(this).parent().height();
			var parentHalfWidth = parentWidth / 2;
			var parentHalfHeight = parentHeight / 2;
			
			$(this).css({"position" : "relative"});
			$(this).parent().css({"position" : "relative"});
			
			if(how === undefined) {
				$(this).css({"top" : (parentHeight/2 - objHeight/2), "left" : (parentWidth/2 - objWidth/2)});	
			} else if(how === "horizontal") {
				$(this).css({"left" : (parentWidth/2 - objWidth/2)});
			}  else if(how === "vertical") {
				$(this).css({"top" : (parentHeight/2 - objHeight/2)});
			}
					
	}
});
