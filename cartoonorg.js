  var img = new Array();

  var intToon = 0;

  img[0] = "20060601"; 
  img[1] = "20070206";
  img[2] = "20070322"; 
  img[3] = "20070329"; 
  img[4] = "20070403";
  img[5] = "20070412";
  img[6] = "20070419";
  img[7] = "20070513";
  img[8] = "20070517";
  img[9] = "20070524";
  img[10] = "20070531";
  img[11] = "20070615"; 
  img[12] = "20070622"; 
  img[13] = "20070726"; 
  img[13] = "20070802"; 
  img[14] = "20070816"; 
  img[15] = "20070824"; 
  img[16] = "20070830";
  img[17] = "20070906";
  img[18] = "20070907";
  img[19] = "20070920";
  img[20] = "20070927";
  img[21] = "20071017";
  img[22] = "20071024";
  img[23] = "20071101";
  img[24] = "20071108";
  img[25] = "20071114";
  img[26] = "20071130";

  function first()
  {
	intToon = 0;
	document.getElementById('cartoon').innerHTML = '<img src="images/cartoon/' + img[intToon] + '.jpg" alt="cartoon strip" />';
	//document.getElementById('oldest').style.display = 'none';
	//document.getElementById('prev').style.display = 'none';
  }
 
  function next()
  {
	intToon++;
	if (intToon == img.length) intToon = img.length-1;
	document.getElementById('cartoon').innerHTML = '<img src="images/cartoon/' + img[intToon] + '.jpg" alt="cartoon strip" />';
  }

  function prev()
  {
	intToon--;
	if (intToon < 0) intToon = 0;
	document.getElementById('cartoon').innerHTML = '<img src="images/cartoon/' + img[intToon] + '.jpg" alt="cartoon strip" />';
  }

  function last()
  {
	intToon = img.length-1;
	document.getElementById('cartoon').innerHTML = '<img src="images/cartoon/' + img[intToon] + '.jpg" alt="cartoon strip" />';
  }

 
