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
  img[14] = "20070802"; 
  img[15] = "20070816"; 
  img[16] = "20070824"; 
  img[17] = "20070830";
  img[18] = "20070906";
  img[19] = "20070907";
  img[20] = "20070920";
  img[21] = "20070927";
  img[22] = "20071017";
  img[23] = "20071024";
  img[24] = "20071101";
  img[25] = "20071108";
  img[26] = "20071114";
  img[27] = "20071130";
  img[28] = "20071206";
  img[29] = "20071214";
  img[30] = "20071220";
  img[31] = "20071228";
  img[32] = "20080110";
  img[33] = "20080116";
  img[34] = "20080126";
  img[35] = "20080130";
  img[36] = "20080208";
  img[37] = "20080215";
  img[38] = "20080223";
  img[39] = "20080302";
  img[40] = "20080307";
  img[41] = "20080315";
  img[42] = "20080322";
  img[43] = "20080327";
  img[44] = "20080404";
  img[45] = "20080412";
  img[46] = "20080418";
  img[47] = "20080502";
  img[48] = "20080523";
  img[49] = "20080531";
  img[50] = "20080606";
  img[51] = "20080612";
  img[52] = "20080622";
  img[53] = "20080629";

  function display()
  {
	document.getElementById('cartoon').innerHTML = '<img src="images/cartoon/' + img[intToon] + '.jpg" alt="cartoon strip" />';
	document.getElementById('count').innerHTML = (intToon+1) + ' of ' + img.length
	document.getElementById('date').innerHTML = '<p>Date: ' + img[intToon] + '</p>';
  }

  function first()
  {
	intToon = 0;
	display();
  }
 
  function next()
  {
	intToon++;
	if (intToon == img.length) intToon = img.length-1;
	display();
  }

  function prev()
  {
	intToon--;
	if (intToon < 0) intToon = 0;
	display();
  }

  function last()
  {
	intToon = img.length-1;
	display();
  }

 
