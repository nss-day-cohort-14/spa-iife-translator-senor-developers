var Translate = (function(translateGerman) {
  var englishToGerman = {"christmas": "Weihnachten", 
  					   "new": "neu",
  					   "hanukkah": "Hanukkah",
  					   "year": "jahr",
  					   "merry": "frohlich",
  					   "happy": "glucklich",
  					   "yule": "julfest",
  					   "and": "und",
  					   "the": "das",
  					   "wish": "wunsch",
  					   "you": "sie",
  					   "a": "ein",
  					   "we": "wir"
};

  

translateGerman.translateToGerman= function (text){

	var inputStringArray = text.toLowerCase().split(/[.,:;!?\ ]/);

	for(let engKey in englishToGerman){ //this loop gets the key name
		for (let i = 0; i < inputStringArray.length; i++){ //this loop compares it to the translate string array
			if(engKey === inputStringArray[i]){ // if the key and the  array item are the same
				inputStringArray[i] = englishToGerman[engKey]; // set the array value to the vale from the key:value pair if the condition is true
			}
		}	
	}
	text = inputStringArray.join(' '); //join the array back into a string
	return text; //return the translated text
};




  return translateGerman; 
 


})(Translate);

