
// scans an array of records 
// returns the key with a minimum value for given key
function minByKey(targetKey, records) {
	let lowScore = Infinity;
	let lowRow = {};

	// iterate through all given records
	records.forEach(record => {
		// find the value for our target
		let targetValue = hasRow(targetKey, record);

		if (rowByOrder("asc", targetValue, lowScore)) {
      lowScore = targetValue;
      lowRow = record;
    } 
	});

  return lowRow;
}




console.log(minByKey("b", [{"a": 1, "b": 2}, {"a":  2}])); // {"a": 1, "b": 2}

function hasRow(key, row) {
  return row[key];
}

// returns a boolean
function rowByOrder(order = "asc", currentValue, currentScore) {
	if (currentValue === 'undefined') {
		currentValue = 0;
	};

	if (order === "asc") {
		return currentValue < currentScore;
	} else {
		return currentValue > currentScore;
	}
}


function firstByKey(targetKey, order, records) {
	let result = {};
	let counter = order === "asc" ? Infinity : -Infinity;

	records.forEach((record) => {
		for(let row in record) {
			let targetValue = hasRow(targetKey, record);

			if (rowByOrder(order, targetValue, counter)) {
				counter = targetValue;
				result = record;
			} 
		}
	})

	return result;
}


