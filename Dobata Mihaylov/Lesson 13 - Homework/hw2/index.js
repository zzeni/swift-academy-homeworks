// Първи начин с input полета

$('button').click (function () {
		//values comes like a string , so made them Number and converted them do HEX
		var arg1Hex = ($('#a').val() * 1).toString(16);
		var arg2Hex = ($('#b').val() * 1).toString(16);
		var arg3Hex = ($('#c').val() * 1).toString(16);
		var result =  arg1Hex + arg2Hex + arg3Hex;
		
		//If all fields are fill then it will display the result
		if ($('.rgb')[0].value !== '' && $('.rgb')[1].value !== '' && $('.rgb')[2].value !== '') {
			$('#result').text("#" + result);
		}
})



// Втори начин с готова функция

function convert(arg1 , arg2 , arg3) {
	var arg1Hex = arg1.toString(16);
	var arg2Hex = arg2.toString(16);
	var arg3Hex = arg3.toString(16);
	return	arg1Hex + arg2Hex + arg3Hex;
}
