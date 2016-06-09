var inputTextArea = document.getElementById("textAreaHome");
var inputTextAreaBtn = document.getElementById("textAreaSubmit");
var languageSelect = document.getElementById("languageChooser");
var textAreaValue = "";
var selectedLanguage = "";

inputTextAreaBtn.addEventListener("click", function() {
	textAreaValue = inputTextArea.value;
	console.log(textAreaValue);
});

languageSelect.addEventListener("change", function(e) {
	selectedLanguage = this.value;
	console.log(selectedLanguage);
});