// Given a string, return true or false depending on whether that string has balanced parentheses.
// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.
// For example:
// >>> has_balanced_parens("()")
// // true
// >>> has_balanced_parens("(Oh Noes!)(")
// // false
// >>> has_balanced_parens("((There's a bonus open paren here.)")
// // false
// >>> has_balanced_parens(")")
// // false
// >>> has_balanced_parens("(")
// // false
// >>> has_balanced_parens("(This has (too many closes.) ) )")
// // false
// You may consider a string with no parentheses balanced:
// >>> has_balanced_parens("Hey...there are no parens here!")
// // true


const isBalanced = (str) => {
    let opening = 0;
    let closing = 0;
    for( let i = 0; i < str.length; i++){
      if(str[i] === '('){
        opening++;
      }
      else if (str[i] === ')'){
        closing++;
      }
      }
   return( opening === closing ?  true : false);
  }
  
  console.log(isBalanced('()))'))