/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($){
	$(function(){
		var $window=$(window),
		$body=$("body"),
		$wrapper=$("#page-wrapper"),
		$banner=$("#banner"),
		$header=$("#header");

		// �������� �ε� �Ϸ�� ������ animation�� transition�� ��Ȱ���մϴ�.
		$body.addClass("is-loading");

		$window.on("load", function(){
			window.setTimeout(function(){
				$body.removeClass("is-loading");
			}, 100);
		});

		// menu JavaScript
		$("#menu").append('<a href="#menu" class="close"></a>').appendTo($body);
		$("#nav .menuToggle").on("click", function(){
			if($body.hasClass("is-menu-visible") == false){
				$body.addClass("is-menu-visible");
			}
		});
		$("#menu .close").on("click", function(){
			if($body.hasClass("is-menu-visible") == true){
				$body.removeClass("is-menu-visible");
			}
		});
	});
})(jQuery);