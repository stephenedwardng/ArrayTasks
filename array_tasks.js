var arrayTasks = {

	concat: function (arr1, arr2) {
		
		return arr1.concat(arr2);

	},

	insertAt: function (arr, itemToAdd, index) {

		var arr1 = [];
		var arr2 = [];

		// push first half to arr1 up to index
		arr.forEach(function(element) {
		  if (arr.indexOf(element) < index) {
		  	arr1.push(element);
		  }
		})

		// push itemToAdd to array
		arr1.push(itemToAdd);

		// push every element after index to arr2 
		arr.forEach(function(element) {
		  if (arr.indexOf(element) >= index) {
		  	arr2.push(element);
		  }
		})

		// concat(arr1, arr2)
		return this.concat(arr1, arr2);
	},

	square: function (arr) {

		squaredArray = [];
		
		arr.forEach(function(element) {
			squaredArray.push(element * element);
		})		

		return squaredArray;
	},

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
