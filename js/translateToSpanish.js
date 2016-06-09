var Translate = (function(translatorFunction){

var lexicon = {
	"christmas": "Navidad",
	"hanukkah": "Hannkah",
	"new": "nuevo",
	"year": "ano",
	"merry":  "alegre",
	"happy": "contento",
	"yule": "Navidad",
	"and": "y",
	"the": "el/la",
	"wish": "deseo" ,
	"you": "tu",
	"a": "un/una",
	"we": "nosotros"};

translatorFunction.translateToSpanish = function(text){
	var inputStringArray = text.toLowerCase().split(/[.,:;!?\ ]/);

	for(let engKey in lexicon){ //this loop gets the key name
		for (let i = 0; i < inputStringArray.length; i++){ //this loop compares it to the translate string array
			currentArrayWord = inputStringArray[i];
			if(engKey === currentArrayWord){ // if the key and the  array item are the same
				inputStringArray[i] = lexicon[engKey]; // set the array value to the vale from the key:value pair if the condition is true
			}
		}	
	}
	text = inputStringArray.join(' '); //join the array back into a string
	return text; //return the translated text
};

return translatorFunction; //return the public methods.

})(Translate);