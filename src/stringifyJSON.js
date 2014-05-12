// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
//Type checking null/number/boolean/string
 if (obj === null) {
	return 'null';
  }

 if (typeof obj === "number") {
	return obj.toString();
  }


 if (typeof obj === "boolean") {
	return (obj) ? 'true' : 'false';
  }

 if (typeof obj === "string") {
	return '"' + obj + '"';
  }

  //Typechecking if array and concatenating array into JSON array
  if (Array.isArray(obj)) {
		var arrResult = '[';
		_.each(obj, function(value, index){
			arrResult += stringifyJSON(obj[index]) + ',';
		});

		//sayonara trailing commas
	if (arrResult[arrResult.length-1] === ",") {
		arrResult = arrResult.slice(0,-1);
	}

		arrResult += ']';
		return arrResult;
  }

  //Typechecking if object (!== Array && null) and concatenating into JSON object
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
	var objResult = '{';

	_.each(obj, function(value, key, list){
		//ignore functions and undefineds
		if (typeof obj[key] !=="function" && typeof obj[key] !== "undefined"){
			objResult += '"' + key + '":' + stringifyJSON(obj[key]) + ",";
		}
	});

	//sayonara trailing commas
	if (objResult[objResult.length-1] === ",") {
		objResult = objResult.slice(0,-1);
	}

	objResult += '}';
	return objResult;
  }
  
};
