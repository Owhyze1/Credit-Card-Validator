// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (cardNumber === undefined || cardNumber === '' || cardNumber.length < 2){
    return '';
  }

  var prefix = cardNumber.slice(0,2);
  var length = cardNumber.length;
  var networkName = '';
  // console.log(`testing ${cardNumber}`);
  // console.log(length);
  // console.log( cardNumber[0]);

  if (length === 14 && (prefix === '38' || prefix === '39')){
      networkName = 'Diner\'s Club';
  } else if (length === 15 && (prefix === '34' || prefix === '37')) {
    networkName = 'American Express';
  } else if ((length === 13 || length === 16 || length === 19) && prefix[0] === '4'){
    networkName = 'Visa';
  } else if (length === 16 && (prefix >= '51' && prefix <= '55')){
    networkName = 'MasterCard';
  }
  // console.log(`network name: ${networkName}`);
  return networkName;
};

// test functions

// detectNetwork('38345678901234'); // Diner's Club
// detectNetwork('39345678901234'); // Diner's Club
// detectNetwork('343456789012345'); // American Express
// detectNetwork('373456789012345'); // American Express
// detectNetwork('4123456789012'); // Visa
// detectNetwork('4123456789012345'); // Visa
// detectNetwork('4123456789012345678'); // Visa
// detectNetwork('5112345678901234') // MasterCard
// detectNetwork('5212345678901234') // MasterCard
// detectNetwork('5312345678901234') // MasterCard
// detectNetwork('5412345678901234') // MasterCard
// detectNetwork('5512345678901234') // MasterCard



