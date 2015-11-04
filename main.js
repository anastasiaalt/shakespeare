console.log('Hello World')

var $promptInput = $('#prompt');
var $log = $('#log');
var $prompt = $('.prompt')

var addPrompt = function() {
	console.log(event.target);
	var promptList = document.createElement('li');
	promptList = $promptInput.val();
	// $('#prompt').val();
	$prompt.append(promptList);
};	