1. What is printed by line 9? If the code returns an error, explain why.
   - Answer: values added:  20, the code did not raise any error messages.

2. What is printed by line 13? If the code returns an error, explain why. 
   - Answer: final result:  20, the code did not raise any error messages.

3. What is printed by line 9? If the code returns an error, explain why. 
   - Answer: values added:  20, the code did not raise any error messages for this part.

4. What is printed by line 13? If the code returns an error, explain why. 
   - Answer: There was an error message saying "ReferenceError: result is not defined" from console.log('final result: ', result). The reason is because "let" variables is only accessible inside the same block defined by curly brackets.

5. What is printed by line 9? If the code returns an error, explain why. 
   - Answer: There was an error message saying "TypeError: Assignment to constant variable" due to "result = num1 + num2;". The reason is because result is declared as a "const" variable, and is assigned with "0" already, which cannot be reassigned with other values.

6. What is printed by line 13? If the code returns an error, explain why. 
   - Answer: Line 13 will not print anything due to the execution stopped by line 9 accessing 'result' variable. However, if we were to ignore the TypeError, line 13 will still raise a ReferenceError because result is declared inside other curly brackets, which cannot be accessed outside the if block.



