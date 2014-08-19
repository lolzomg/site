//$(window).load(function() {
$(document).ready(function(){
	
	var currentPage = null;
	
	var emptyBox = $(".emptyBox");
	
	var backLink = $(".tileMenuBack");
	
	$(".tileMenuItem").each(
		 		function(i) {
		 			$(this).delay(250*i).animate({top: 0}, 850);
		 		}
		 	);
	
	/*$(".centralMenuItem").each(function(){
		$(".menuItemContent", this).centerThis();
		$(".descr", this).centerThis("horizontal");
		$("i", this).centerThis("horizontal");
	});*/
	

	/*$(".centralMenuItem").click(function() {
		
		currentPage = $(this);
		
		var elementPosIndex = $(this).index();
		var elementWidthOrig = parseFloat($(this).css("width"));
		
		$(this).css({"position":"absolute", "z-index" : "999", "left" : elementPosIndex*elementWidthOrig}).addClass("activePage").animate({
			left: "10%",
  			width: "90%"  			
		}, 600, function() {
			
			$(".centralMenuBacklink").addClass("shown").animate({
				width: "10%"
			},300);
		});
	});*/
	
	$(".tileMenuItem").click(function(){
		currentPage = $(this);
		
		
		//emptyBox.insertBefore(currentPage).css({"display":"table"});
		
		//
		
		var elementPosIndex = currentPage.index();
		var elementWidthOrig = parseFloat(currentPage.css("width"));
		
		currentPage.css({"z-index" : "9"});		
		
		currentPage.animate({width: "100%", left: 0},700, function(){
			backLink.removeClass("hidden").animate({bottom : 0},550);
			currentPage.removeClass("collapsed");
			
			
			currentPage.children(".tileIcon").animate({top : "0%", height : "50%"},600,function(){
				//$(this).removeClass("collapsed")
			});
			
			
			currentPage.children(".tileContent").removeClass("hidden");
			
			currentPage.children(".tileContent").children(".tileSubMenu").children("li").each(function(i){
				$(this).delay(i*150).animate({bottom : "0%"},350);
			});
		});
		
		
	});
	
	backLink.click(function(){
		
		
		var elementPosIndex = currentPage.index();
		
		currentPage.children(".tileContent").children(".tileSubMenu").children("li").each(function(i){
				$(this).delay(i*150).animate({bottom : "-100%"},350, function(){
					
					if(i === 1) {
						//currentPage.children(".tileIcon").addClass("collapsed");
					}
					
					if(i === 3) {
						
						//currentPage.children(".tileIcon").addClass("collapsed");
						
						currentPage.css({"display":"table"});
						
						currentPage.children(".tileContent").addClass("hidden");
						
						currentPage.animate({width: 196, left: 196*elementPosIndex},700, function(){
							currentPage.removeAttr("style");
							currentPage.css({top : 0});
							currentPage.addClass("collapsed");
							currentPage.css({"z-index" : "1"});
						});
					}
				});
		});
		
		backLink.animate({bottom : -201},550, function(){
				backLink.addClass("hidden");
				
		});
		
		
	});
	
});