// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solve it with any thing you know

function reverse(str) {
	return str.split('').reverse().join('')
}

//Solve it again but cant use Array.reverse

// function reverse(str) {
// 	let reverse = []
// 	str = str.split('')
// 	str.forEach(letter => reverse.unshift(letter))
// 	reverse = reverse.join('')
// 	return reverse
// }

module.exports = reverse

