	var englishToFrench = {"christmas": "Noël", "hanukkah": "Hanukkah", "new": "nouveau", "year": "an", "merry": "joyeux", "happy": "content", "yule": "Noël", "and": "et", "the": "la", "wish": "souhait", "you": "tu", "a": "un", "we": "nous"};


var Translate = (function(translate) {

	translate.translateToFrench = function(word) {
		var splitText = textAreaValue.split(" ");
		console.log("splitText", splitText);
		for (var i = 0; i < splitText.length; i++) {
			console.log("englishToFrench", englishToFrench[splitText[i]]);
			splitText[i] = englishToFrench[splitText[i]]
		}
		console.log("splitText", splitText);
		var translatedText = splitText.join(" ")
		console.log("translatedText", translatedText);
	};
	return translate
})(Translate);