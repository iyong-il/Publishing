$(document).ready(function(){
	// fake link
	$("a[href='#']").on("click", function(e){
		e.preventDefault();
	});

	// placeholder
	$("input[placeholder], textarea[placeholder]").placeholder();
});