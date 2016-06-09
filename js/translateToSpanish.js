var Translate = (function(translatorFunction){

INPUTSTRING = "Happy Christmas Hanukkah Year to you and you and you!";

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
	var INPUTSTRINGArray = INPUTSTRING.toLowerCase().split(' ');

	for(let engKey in lexicon){
		for (let i = 0; i < INPUTSTRINGArray.length; i++){
			if(engKey === INPUTSTRINGArray[i]){
				INPUTSTRINGArray[i] = lexicon[engKey];
				console.log(INPUTSTRINGArray[i]);
			}
		}	
	}
	INPUTSTRING = INPUTSTRINGArray.join(' ');
	console.log(INPUTSTRING);
	return INPUTSTRING;
};

translatorFunction.translateToSpanish();
	return translatorFunction;

})(Translate);