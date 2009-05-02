function loadPage()
{
	var ua = navigator.userAgent.toLowerCase(); 
	if ( ua.indexOf( "msie" ) != -1 ) 
	{
		window.document.body.scroll = "auto";
	}
}
