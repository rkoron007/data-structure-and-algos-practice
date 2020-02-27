
// Your previous Plain Text content is preserved below :
// 
// # Step 1
// Throughout this interview, we'll pretend we're building a new * analytical
// database. Don't worry about actually building a database though – * these
// will all be toy problems. 
// Here's how the database works: all records are
// represented as maps, with string keys and integer values. 
// The records are contained in an array, in no particular order.

// To begin with, the database will support just one function: min_by_key.
// This function scans the array of records and returns the record that has
// the minimum value for a specified key. Records that do not contain the
// specified key are considered to have value 0 for the key. Note that keys
// may map to negative values!

// Here's an example use case: each of your records contains data about a
// school student. You can use min_by_key to answer questions such as "who is
// the youngest student?" and "who is the student with the lowest grade-point
// average?" 

// Implementation notes: You should handle an empty array of
// records in an idiomatic way in your language of choice. If several records
// share the same minimum value for the chosen key, you may return any of
// them. 

// ### Examples (in Python): ```
// assert min_by_key("a", [{"a": 1, "b": 2}, {"a": * 2}]) == {"a": 1, "b": 2}
// assert min_by_key("a", [{"a": 2}, {"a": 1, "b": 2}]) * == {"a": 1, "b": 2}
// assert min_by_key("b", [{"a": 1, "b": 2}, {"a": 2}]) == * {"a": 2}
// assert min_by_key("a", [{}]) == {}
// assert min_by_key("b", [{"a": * -1}, {"b": -1}]) == {"b": -1} ``` */

// 1. should this be an independent function or part of a class?

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


// # Step 2: first_by_key Our next step in database development is to add a new
// function. We'll call this function first_by_key. It has much in common with
// min_by_key. first_by_key takes three arguments: a string key a string sort
// order (which must be either "asc" or "desc") an array of records, just as
// in min_by_key. If the sort order is "asc", then we should return the
// minimum record, otherwise we should return the maximum record. As before,
// records without a value for the key should be treated as having value 0. Once
// you have a working solution, you should re-implement min_by_key in terms of
// first_by_key .

// if asc we will return the min record
// if desc we should return the max record


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


// console.log(firstByKey("a", "desc", [{"a": 1, "b": 2}, {"a": 2}])); // {"a": 1, "b": 2}
// assert min_by_key("a", [{"a": 1, "b": 2}, {"a": * 2}]) == {"a": 1, "b": 2}
// assert min_by_key("a", [{"a": 2}, {"a": 1, "b": 2}]) * == {"a": 1, "b": 2}
// assert min_by_key("b", [{"a": 1, "b": 2}, {"a": 2}]) == * {"a": 2}
// assert min_by_key("a", [{}]) == {}
// assert min_by_key("b", [{"a": * -1}, {"b": -1}]) == {"b": -1} ``` */

