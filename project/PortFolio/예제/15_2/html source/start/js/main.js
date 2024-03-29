$(document).ready(function(){
	// tooltip
	$(".social a").mouseover(function(){
		// var attr_title=$(this).attr("data-title");
		// if(attr_title == undefined || attr_title == "") return false;

		$(this).after('<span class="tooltip"></span>');
		var $tooltip=$(".tooltip");
		$tooltip.append($(this).data('title'));
		var tipwidth=$tooltip.outerWidth();
		var a_width=$(this).width();
		var a_height=$(this).height()+8;

		// if the tooltip width is smaller than the a/link/parent width
		if(tipwidth < a_width){
			tipwidth=a_width;
			$tooltip.outerWidth(tipwidth);
		}

		var tipwidth="-"+(tipwidth-a_width)/2;
		$tooltip.css({
			"left" : tipwidth+"px",
			"bottom" : a_height+"px"
			}).stop().animate({
				opacity : 1
			}, 200);
		});
	$(".social a").mouseout(function(){
		var $tooltip=$(".tooltip");
		$tooltip.remove();
	});
	// mobile menu toggling
	$("#menu_icon").click(function(){
		$("header nav ul").toggleClass("show_menu");
		$("#menu_icon").toggleClass("close_menu");
		return false;
	});
});