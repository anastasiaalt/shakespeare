console.log('Hello World')

var $promptInput = $('#prompt');
var $log = $('#log');
var $prompt = $('.prompt')
var ducats = 10000;

var addPrompt = function(event) {
	var $promptInput = $('#prompt').val();
	if (event.true) {};
	if (event.keyCode===13) {
		console.log('pressed enter')
		console.log($promptInput);
	if ($promptInput==='purse') {
		$('li').text('Shylock Bot pulls out his purse containing')
	};}
	$promptInput.val('');
};	


$(document).on('keypress',addPrompt);
$('#submit').on('click',addPrompt);
