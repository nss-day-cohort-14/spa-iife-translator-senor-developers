var Translate = (function() {

	var inputTextArea = document.getElementById("textAreaHome");
	var inputTextAreaBtn = document.getElementById("textAreaSubmit");
	var languageSelect = document.getElementById("languageChooser");
	var outputText = document.getElementById("translatedText");
	var textAreaValue = "";
	var selectedLanguage = "";
	var translation = "";

	inputTextAreaBtn.addEventListener("click", function() { //listener for the button
		textAreaValue = inputTextArea.value;
		Translate.translateInputString(textAreaValue);
	});

	languageSelect.addEventListener("change", function(e) { //listener for the drop down menu
		selectedLanguage = this.value;
	});

	return {
		getInputString: function(){ //return the get input string.
			return textAreaValue;
		},
		translateInputString: function(textToTranslate){ // translate the strings.
			if (selectedLanguage === "spanish"){ //translate to spanish
				translation = Translate.translateToSpanish(textToTranslate);
				outputText.innerHTML = translation;

			} else if (selectedLanguage === "french") {
				translation = Translate.translateToFrench(textToTranslate);
				outputText.innerHTML = translation;

			} else if (selectedLanguage === "german"){

			} else {
				outputText.innerHTML = "Please select your language first!"
			}
		}
	};
})();