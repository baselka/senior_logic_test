/* 
3. When you run the execute function with a parameter of 1 “execute(1)” the return value will be 7.

function execute(num) {
    return num++ + ++num + num
}

Q: What is the correct value of “return ? + ? + ?” when invoking the execute function “example: execute(1)”. Replace the question mark with the correct values.

* ANSWER: return 1 + 3 + 3

Q: Explain the arithmetic that leads to return 7.

* ANSWER: The postfix operatior ++ in the first num var will not make an effect till the next variable is called since we don't have a terminator,
          it will remain as it is but it will increment by 1, before the second argument with the prefix operation "++num" the value of num is already has been incremented by 1,
          therefore the prefix operator will immidiately increment by 1 and num becomes 3 .

Q: What is the name of the following operators used “num++” and “++num”

* ANSWER:- 
            “num++” is Postfix increment operator.
            “++num” is Prefix increment operator.
*/


function execute(num) {
  console.log(num++ , ++num , num)
    return num++ + ++num + num

}

console.log(execute(1))