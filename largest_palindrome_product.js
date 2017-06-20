/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0;
  var factor_1;
  var palindromeNumber = 0;
  var palindromeArray = [];
  var final_factor_0;
  var final_factor_1;

   // function generatePallindrome() {
    var product;
    var stringProd;
    var stringArr;

    // var startVal = Math.pow(10, (digits - 1));
    // var finishVal = Math.pow(10, digits);

    // console.log(startVal);
    // console.log(finishVal);
    
    for (factor_0 = Math.pow(10, (digits - 1)); factor_0 < Math.pow(10, digits); factor_0++){
      
      for (factor_1 = Math.pow(10, (digits - 1)); factor_1 < Math.pow(10, digits); factor_1++){
        
        product = factor_0 * factor_1;
        stringProd = product.toString();
        stringArr = stringProd.split("");
        reversedProd = stringArr.reverse().join("");
        // console.log(stringProd);
        // console.log(reversedProd);

        if (stringProd === reversedProd){
          // console.log('we have a palindrome!');
          // palindromeArray.push(product);
          if (product > palindromeNumber){
            palindromeNumber = product;
            final_factor_0 = factor_0;
            final_factor_1 = factor_1;
          }
        }
      }
    }

    factor_0 = final_factor_0;
    factor_1 = final_factor_1;

    console.log('Largest palindrome is ' + palindromeNumber);  

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };

};