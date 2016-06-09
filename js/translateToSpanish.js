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

translatorFunction.translateToSpanish = function(){
	var Translate.inputStringArray = Translate.inputString.toLowerCase().split(' ');

	for(let engKey in lexicon){
		for (let i = 0; i < Translate.inputStringArray.length; i++){
			if(engKey === Translate.inputStringArray[i]){
				Translate.inputStringArray[i] = lexicon[engKey];
				console.log(Translate.inputStringArray[i]);
			}
		}	
	}
	Translate.inputString = Translate.inputStringArray.join(' ');
	console.log(Translate.inputString);
	return Translate.inputString;
};

translatorFunction.translateToSpanish();
	return translatorFunction;

})(Translate);