function getHbsTmp(page){
	var retVal = '';
	$.ajax({
		async: false,
		url: 'pages/'+page+'.hbs',
		success: function(data){
			retVal = data;
		}
	});
	return retVal;
}