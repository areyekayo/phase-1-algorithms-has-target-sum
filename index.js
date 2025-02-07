function hasTargetSum(array, target) {
	let isMatch = false

		for (let i = 0; i < array.length; i++) {

			for (let j = i + 1; j < array.length; j++) {

				if (array[i] + array[j] === target) {
					return isMatch = true
				}
				else {
					continue
				}
		}
	}
	return isMatch
}

/* 
Big O notation: O(n^2), quadratic since it needs a nested loop that sums one element with all other elements in an unsorted array
*/

/* 
  Add your pseudocode here
	take one number in the array
		sum it with the next number in the array
			if the sum equals the target number, return true
			if not, continue to the next number
*/

/*
  Add written explanation of your solution here

  This function loops through the array by adding an element to the other numbers in the array. If a match to the target number is found, it returns true and the loop ends; otherwise it will continue to loop through the array, and returns false if no numbers sum up to the target number.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 10, 18, 33, 1], 6));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 17, 5, 4], 6));

}

module.exports = hasTargetSum;
