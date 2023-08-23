(function($){
	$(function(){
		/* IE 7~8를 위한 PIE 라이브러리 활용
		* border-radius | box-shadow | linear-gradient
		*/
		// alert("$.browser.msie : "+$.browser.msie);
		// alert("$.browser.version : "+$.browser.version);

		if($.browser.msie && $.browser.version>6 && $.browser.version<9){
			$.getScript("js/PIE.js", function(){
				$(".tooltip").each(function(){
					PIE.attach(this);
				});
			});
		};

		// CSS 트렌지션을 지원하지 않는 브라우저 판별
		// alert("Modernizr.csstransitions : "+Modernizr.csstransitions);

		if(!Modernizr.csstransitions){
			$(".tooltip-box").fadeTo(10, 0);

			$("a.tooltip").hover(
				function(){
					$(this).stop().animate({"border-color":"#fff"}, 400)
					.find(".tooltip-box").stop().animate({"opacity":1, "bottom":"90px"}, 400);
				},
				function(){
					$(this).stop().animate({"border-color":"#4b4b4b"}, 400)
					.find(".tooltip-box").stop().animate({"opacity":0, "bottom":"100px"}, 400);
				}
			);
		}
	});
})(jQuery);