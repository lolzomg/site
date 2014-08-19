//$(window).load(function() {
$(document).ready(function(){
	
	var currentPage = null;
	
	var emptyBox = $(".emptyBox");
	
	var backLink = $(".tileMenuBack");
	
	$(".tileMenuItem").delay(268).each(
		 		function(i) {
		 			$(this).delay(250*i).animate({top: 0}, 750);
		 		}
		 	);
	

	
	$(".tileMenuItem").click(function(){
		currentPage = $(this);
		
		
		//emptyBox.insertBefore(currentPage).css({"display":"table"});
		
		//
		
		var elementPosIndex = currentPage.index();
		var elementWidthOrig = parseFloat(currentPage.css("width"));
		
		currentPage.css({"z-index" : "9"});		
		currentPage.children(".tileIcon").children().animate({opacity : "0"},600);
		currentPage.animate({width: "100%", left: 0},700, function(){
			
			
			
			backLink.removeClass("hidden").animate({bottom : 0},550);
			currentPage.removeClass("collapsed");
			
			//
			
			currentPage.children(".tileIcon").children().animate({top: "-25%", "font-size" : "1em", opacity : "0"},600,function(){
				//$(this).removeClass("collapsed")
				currentPage.children(".tileIcon").animate({width : "15%"},300);
				$(this).children("i").css({"display":"inline"});
				
				currentPage.children(".tileIcon").children().animate({opacity : "1"},600);
				
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
						$("span.descr").children("i").css({"display":"none"});
						
						//currentPage.children(".tileIcon").children().children("i").css({"display":"none"});
						currentPage.children(".tileIcon").children("i").animate({top: "-25%", "font-size" : "64px", opacity : "0"},600,function(){
							//$(this).removeClass("collapsed")
							currentPage.children(".tileIcon").animate({width : "100%"},300);
							
							
							currentPage.children(".tileIcon").children().animate({opacity : "1"},600);
				
						});
						
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