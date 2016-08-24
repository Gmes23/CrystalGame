
$( document ).ready(function() {

	var counter = 0;

	var numberToGuess =  Math.floor((Math.random() * 120) + 19);

	var numbers = [Math.floor((Math.random() * 12) + 1),Math.floor((Math.random() * 12) + 1),Math.floor((Math.random() * 12) + 1),Math.floor((Math.random() * 12) + 1)];

	var winCounter = 0;

	var lostCounter = 0;

function restart (){
	counter = 0;
	numberToGuess = []
	number = []
}








	$('#number').text(numberToGuess);

	for (var i=0; i< 4; i++){

		var imageCrystal = $('<img>');

		imageCrystal.attr('data-num', numbers[i]);

		imageCrystal.attr('src', 'assets/images/button-holder-4.jpg');

		imageCrystal.attr('alt', 'crystals');

		imageCrystal.addClass('crystalImage');

		$('#crystals').append(imageCrystal);
	}



	$('.crystalImage').on('click', function(){
		counter = counter + parseInt($(this).data('num'));

		$('#yourNumber').text(counter);

		if (counter== numberToGuess){
			winCounter ++;

			document.getElementById("winCounter").innerHTML= winCounter;

			alert('You won!'); restart();
			
		}else if ( counter > numberToGuess) {

			lostCounter++;

			document.getElementById("lostCounter").innerHTML= lostCounter;

			alert('You have Lost'); restart();
			


		}











		


	});










});