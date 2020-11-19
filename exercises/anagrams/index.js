// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	arrayA = stringA.replace(/[^\w]|_/g, "").toLowerCase().split('').sort()
	arrayB = stringB.replace(/[^\w]|_/g, "").toLowerCase().split('').sort()

	objA = arrayA.reduce((a, letter) => {
		!a[letter] ? a[letter] = 1 : a[letter]++
		return a
	}, {})

	objB = arrayB.reduce((b, letter) => {
		!b[letter] ? b[letter] = 1 : b[letter]++
		return b
	}, {})

	return JSON.stringify(objA) === JSON.stringify(objB)
}

module.exports = anagrams;

/*
lower case all letters for both strings
remove space and punctuation for both strings
make the strings arrays and sort them
iterate over each array, make object with letter as key and count as value
if the objects are equal, return true, else return false
*/