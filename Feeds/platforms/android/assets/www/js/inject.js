// $(document).ready(function() {
$(document).on('pageinit', '#one', function(){
	$("#appTitle").html(settings.app[0].appTitle);

	$("#mainPageTitle").html(settings.app[0].mainPageTitle);
	$("#mainPageContent").html(settings.app[0].mainPageContent);

	$("#mainPageTitleN1").html(settings.app[0].mainPageTitle);
	$("#secondPageTitleN1").html(settings.app[0].secondPageTitle);
	$("#thirdPageTitleN1").html(settings.app[0].thirdPageTitle);
});

$(document).on('pageinit', '#two', function(){
	$("h1#appTitle").html(settings.app[0].appTitle);

	$("#secondPageTitle").html(settings.app[0].secondPageTitle);
	$("#secondPageContent").html(settings.app[0].secondPageContent);

	$("#mainPageTitleN2").html(settings.app[0].mainPageTitle);
	$("#secondPageTitleN2").html(settings.app[0].secondPageTitle);
	$("#thirdPageTitleN2").html(settings.app[0].thirdPageTitle);
});

$(document).on('pageinit', '#three', function(){
	$("#appTitle").html(settings.app[0].appTitle);

	$("#thirdPageTitle").html(settings.app[0].thirdPageTitle);
	$("#thirdPageContent").html(settings.app[0].thirdPageContent);

	$("#mainPageTitleN3").html(settings.app[0].mainPageTitle);
	$("#secondPageTitleN3").html(settings.app[0].secondPageTitle);
	$("#thirdPageTitleN3").html(settings.app[0].thirdPageTitle);
});