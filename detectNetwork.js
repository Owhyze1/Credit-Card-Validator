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
  var visaPrefix = cardNumber.slice(0,1);
  var discoverPrefix = cardNumber.slice(0,4);
  var maestroPrefix = discoverPrefix;
  var length = cardNumber.length;
  var networkName = '';

  var dinersClub = ['38','39'];
  var visa = ['4'];
  var amex = ['34','37'];
  var masterCard = ['51', '52', '53', '54', '55'];
  var discover = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  var maestro = ['5018', '5020', '5038', '6304'];


  if (length === 14 && isPrefixCorrect(dinersClub, cardNumber)){
    networkName = 'Diner\'s Club';
  } else if (length === 15 && isPrefixCorrect(amex, cardNumber)) {
    networkName = 'American Express';
  } else if ((length === 13 || length === 16 || length === 19) && isPrefixCorrect(visa, cardNumber)){
    networkName = 'Visa';
  } else if (length === 16 && isPrefixCorrect(masterCard, cardNumber)){
    networkName = 'MasterCard';
  } else if ((length === 16 || length === 19) && isPrefixCorrect(discover, cardNumber)){
    networkName = 'Discover';
  } else if ((length >= 12 && length <= 19) && isPrefixCorrect(maestro, cardNumber)){
    networkName = 'Maestro'
  }
  return networkName;
};

var isPrefixCorrect = function(cardPrefixArray, cardNumber){
  for (var i = 0; i < cardPrefixArray.length; i++){
    if (cardNumber.startsWith(cardPrefixArray[i])){
      return true;
    }
  }
  return false;
}

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



