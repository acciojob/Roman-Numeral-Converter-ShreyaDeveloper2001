function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let romanNumeral = '';

  for (let i = 0; i < 7; i++) {
    const [symbol, value] = obj[i];
    const count = Math.floor(num / value);
    num %= value;
    
    if (count > 0) {
      romanNumeral += symbol.repeat(count);
    }

    // Handle subtractive notation (e.g., IV for 4, IX for 9, etc.)
    if (i % 2 === 0 && i < 6) {
      const nextValue = obj[i + 2][1];
      const subtractiveSymbol = obj[i + 2][0];
      if (num >= value - nextValue) {
        romanNumeral += subtractiveSymbol + symbol;
        num -= value - nextValue;
      }
	}
  }

  return romanNumeral;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
