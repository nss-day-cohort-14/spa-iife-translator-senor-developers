	var englishToFrench = {"christmas": "Noël", "hanukkah": "Hanukkah", "new": "nouveau", "year": "an", "merry": "joyeux", "happy": "content", "yule": "Noël", "and": "et", "the": "la", "wish": "souhait", "you": "tu", "a": "un", "we": "nous"};


var Translate = (function(translate) {

	translate.translateToFrench = function(textToTranslate) {
		var splitText = textToTranslate.toLowerCase().split(" ");
		for (var i = 0; i < splitText.length; i++) {
			splitText[i] = englishToFrench[splitText[i]]
		};
		var translatedText = splitText.join(" ");
		return translatedText;
	};
	return translate
})(Translate);