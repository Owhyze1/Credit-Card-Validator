/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num) {
      return num / 2 === 0;
    };
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num) {
      return num % 2 === 0;
    };

    if (even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
    if ( detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if (!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert.strictEqual(detectNetwork('4123456789012'), 'Visa', '4123456789012 should be Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert.strictEqual(
        detectNetwork('4123456789012345'),
        'Visa',
        '4123456789012345 should be Visa'
      );
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert.strictEqual(
        detectNetwork('4123456789012345678'),
        'Visa',
        '4123456789012345678 should be Visa'
      );
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  it('has a prefix of 51 and a length of 14', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard', 'should be MasterCard');
  });
  it('has a prefix of 52 and a length of 14', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard', 'should be MasterCard');
  });
  it('has a prefix of 53 and a length of 14', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard', 'should be MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard', 'should be MasterCard');
  });
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard', 'should be MasterCard');
  });
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011567890123456')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011567890123456789')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6444567890123456')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6444567890123456789')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6454567890123456')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6454567890123456789')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6464567890123456')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6464567890123456789')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6474567890123456')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6474567890123456789')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6484567890123456')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6484567890123456789')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6494567890123456')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6494567890123456789')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6534567890123456')).to.equal('Discover', 'should be Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6534567890123456789')).to.equal('Discover', 'should be Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  var prefixValues = ['5018', '5020', '5038', '6304'];
  var endOfCardNumber = [
    '56789012',
    '567890123',
    '5678901234',
    '56789012345',
    '567890123456',
    '5678901234567',
    '56789012345678',
    '567890123456789'
  ];

  for (var i = 0; i < prefixValues.length; i++) {
    for (var j = 0; j < endOfCardNumber.length; j++) {
      var testValue = prefixValues[i] + endOfCardNumber[j];
      var length = testValue.length;
      (function(testValue, length) {
        it('it has a prefix of ' + prefixValues[i] + ' and a length of ' + length, function() {
          var actual = detectNetwork(testValue);
          expect(actual).to.equal('Maestro', testValue + ' should be Maestro');
        });
      })(testValue, length);
    }
  }
});

describe('China UnionPay', function() {

  var testChinaUnionPay = function(prefixStart, prefixEnd) {
    var minLength = 16;
    var maxLength = 19;
    var testValue = '';
    var testValueLength;
    var endOfNumber = '1234567890123456789';

    var expect = chai.expect;

    for (var prefix = prefixStart; prefix <= prefixEnd; prefix++) {
      for (var length = minLength; length <= maxLength; length++) {

        testValueLength = length - String(prefix).length;
        testValue = prefix + endOfNumber.slice(0, testValueLength);

        (function(prefix, testValue, length) {
          it('it has a prefix of ' + prefix + ' and a length of ' + length, function() {
            var actual = detectNetwork(testValue);
            expect(actual).to.equal('China UnionPay', testValue + ' should be China UnionPay');
          });
        })(prefix, testValue, length);
      }
    }
  };
  testChinaUnionPay(622126, 622925);
  testChinaUnionPay(624, 626);
  testChinaUnionPay(6282, 6288);
});

describe('Switch', function() {
  var prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var approvedLengths = [16, 18, 19];
  var endOfCardNumber = '1234567890123456789';
  var prefix, testValueLength;
  var testValue = '';
  var expect = chai.expect;

  for (var i = 0; i < prefixes.length; i++) {
    prefix = prefixes[i];
    for (var j = 0; j < approvedLengths.length; j++) {
      testValueLength = approvedLengths[j] - String(prefix).length;
      testValue = prefix + endOfCardNumber.slice(0, testValueLength);

      (function(prefix, testValue, length) {
        it('it has a prefix of ' + prefix + ' and a length of ' + length, function() {
          expect(detectNetwork(testValue)).to.equal('Switch', testValue + ' should be Switch');
        });
      })(prefix, testValue, testValueLength);
    }
  }
});