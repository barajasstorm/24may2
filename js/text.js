$(document).ready(init);

function init() {
	$("h1").click(changeLink);
}

function changeLink() {
	//$(this).text("This is the new text for Paragraph!");
	//$("a").attr("href", "http://www.google.es");
	
	// Remove Attr
	$("h1").removeAttr("class")
	console.log($("h1").attr("href"));

	//$("h1").text("This is the new title!");
	
}