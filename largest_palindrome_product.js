/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
function findLargestPal(digits){
  var factor_0;
  var factor_1;
  var palindromeNumber = 0;

  function findMaxValue(num){
    return (Math.pow(10, num) - 1);
  }

  var maxVal = findMaxValue(digits);

  walkFactors(maxVal);

  function walkFactors(startVal){
    var product;
    for (factor_0 = startVal; factor_0 > 0; factor_0--){
      for (factor_1 = startVal; factor_1 > 0; factor_1--){
        product = factor_0 * factor_1;
        console.log(factor_1);
        if (checkPallindrome(product) === true){
          palindromeNumber = product;
          return palindromeNumber;
        }
      }
    }
  }

  function checkPallindrome(prod) {
    var stringProd = prod.toString();
    reversedProd = stringProd.split("").reverse().join("");
    return stringProd === reversedProd;
  }
  

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };

}

module.exports = findLargestPal;