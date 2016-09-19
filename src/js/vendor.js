$(document).ready(function(){
	var nav = getHbsTmp('nav');
	var template = Handlebars.compile(nav); 
	$('.nav').html(template());
})