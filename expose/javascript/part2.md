1. What will happen at line 12 and why? If the code causes an error, explain why.
    - Answer: This line will print a '3' because 3 is the final value of index i from i++ after the loop finish iterating. 

2. What will happen at line 13 and why? If the code causes an error, explain why.
    - Answer: This line will print a '150', which is the final value assigned to discountPrices = prices[i] * (1 - discount) = 300 * (1-0.5) =150.

3. What will happen at line 14 and why? If the code causes an error, explain why.
    - Answer: This line will print a '150', which is the final value assigned to finalPrices after rounding discountPrices = 150.

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
    -  Answer: This function will return an array by the variable called 'discounted'= [ 50, 100, 150 ] based on calling "discountPrices([100, 200, 300], 0.5);".

5. What will happen at line 12 and why?  If the code causes an error, explain why. (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
    -  Answer: This line will cause a ReferenceError because 'i' is considered undefined since 'i' is declared with 'let' inside the for loop, which is not accessible outside of the for loop.

6. What will happen at line 13 and why? If the code causes an error, explain why.
    -  Answer: This line will cause a ReferenceError because 'discountedPrice' is considered undefined since 'discountedPrice' is declared with 'let' inside the for loop, which is not accessible outside the block/scope of where 'let' variable is being declared.
  
7. What will happen at line 14 and why? If the code causes an error, explain why. 
    -  Answer: This will print a '150', which it the final value assigned to finalPrice variable. We are able to access 'let finalPrice' is becuase its being declared withing the same scope.
  
8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    -  Answer: This function will return an array by the variable called 'discounted'= [ 50, 100, 150 ] based on calling "discountPrices([100, 200, 300], 0.5);".

9.  What will happen at line 11 and why? If the code causes an error, explain why.
    -  Answer: This line will cause a ReferenceError because 'i' is considered undefined since 'i' is declared with 'let' inside the for loop, which means 'i' is not accessible outside of the for loop.

10. What will happen at line 12 and why? If the code causes an error, explain why.
    -  Answer: This will print the length of the prices array, which is 3.

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    -  Answer: This function will return an array by the variable called 'discounted'= [ 50, 100, 150 ] based on calling "discountPrices([100, 200, 300], 0.5);".

12. Given the above Object, write the notation for:  (These should be in your part2.md)
    a. Accessing the value of the name property in the student object:
    student.name;
    b. Accessing the value of the Grad Year property in the student object:
    student['Grad Year'];
    c. Calling the function for the greeting property in the student object: student.greeting();
    d. Accessing the name property of the object in the Favorite Teacher property in student: student['Favorite Teacher'].name;
    e. Access index zero in the array of the courseLoad property of the student object: student.courseLoad[0];

13. Arithmetic:
    a. '3' + 2: '32', '+' operator can trigger string concatenation if one value is a string.
    b. '3' - 2: 1, '-' operator can convert string into number.
    c. 3 + null: 3 because null means 0, 3+0=3.
    d. '3' + null: '3null', '+' operator triggers the string concatenation here.
    e. true + 3: 4, true can be converted into 1, so 1+3=4
    f. false + null: 0, false can be converted into 0, and null=0, so 0+0=0.
    g. '3' + undefined: '3undefined', '+' operator triggers the string concatenation and converted undefined to string, so '3'+'undefined'.
    h. '3' - undefined: NaN, because neither of the values are numeric, so cannot do subtration, which result in NaN, meaning Not a Number.

14. Comparison
    a. '2' > 1: true, '2' is converted into number in this case, so the result returns true.
    b. '2' < '12': false, when comparing strings, javascript uses lexicographical order. e.g. '2' > '12'
    c. 2 == '2': true, '2' got converted into a number, so true.
    d. 2 === '2': false, '===' is used for checking the equality without type conversion.
    e. true == 2: false, true is converted into 1, so 1 not equals to 2, which is false.
    f. true === Boolean(2): true, because both are boolean.

15. Explain the difference between the == and === operators.
    - '==' operator checks equality after necessarily type conversion.
    - '===' operator checks types equality without type conversion.


16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)
    - Answered in part2-question16.js

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
    - Answer: When modifyArray([1,2,3], doSomething) is called, [1,2,3] is passed in as an array parameter, and doSomething is passed in as the callback function. By passing these two parameters, it will return an array contain [ 2, 4, 6 ] because doSomething will be called back every iteration in modifyArray function using callback().

18. The above program only prints out the time once when executed. Modify this code such that the program prints out the current time every second.  (This should be a JS file - part2-question18.js)
    - Answered in part2-question18.js

19. What is the output of the above code? (This should be in your part2.md)
    - Answer: The ouput prints out the current time every second. For example:
        11:07:55 AM
        11:07:56 AM
        11:07:57 AM
        11:07:58 AM
        11:07:59 AM
        11:08:00 AM
        11:08:01 AM
        11:08:02 AM
        .......
