// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	const capitalizedWords = str.split(' ').map(word => {
		return word.charAt(0).toUpperCase() + word.slice(1)
	})
	return capitalizedWords.join(' ')
}

module.exports = capitalize;

/*
turn string to array
iterate over string using map
use toUpperCase to char[0] and slice for the rest of the word
join together
return string
*/