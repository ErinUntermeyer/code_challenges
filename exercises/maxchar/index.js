// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const charCount = {}
	str.split('').forEach(letter => {
		!charCount[letter] ? charCount[letter] = 1 : charCount[letter]++
	})
	
	const commonChar = Object.keys(charCount).reduce((mostCommon, char) => {
		charCount[char] > mostCommon ? mostCommon = char : mostCommon
		return mostCommon
	}, '')
	return commonChar
}

module.exports = maxChar;

/*
iterate over string (turn to array)
create object
key is letter
value is counter, starts at 0
return key with highest value
*/