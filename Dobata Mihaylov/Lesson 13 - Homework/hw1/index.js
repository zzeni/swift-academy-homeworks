$('button').click(function () {

		// multiplied by 1 because it will makes string to number 
		var a = $('#a').val() * 1;
		var b = $('#b').val() * 1;
		var c = $('#c').val() * 1;
		var triangle = (a*(c-b)/2);
		var rectangle = a * b;
		
		$('#result').text("Площа на фигурата е:  " + (triangle + rectangle));
})
