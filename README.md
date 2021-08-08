# Calculator

### Server:
Use with .net core 5

CalculationController get input string from client

I parse the string into the Expression and handle operators order, to evaluate the string recursive

For performing basic operation I have a base class BaseMathCalculation and their derived classes Addition, Subtraction, Multiplication, and Division.

All the operation are performed by these classes. 

After performing all the evaluation, 

I return to client Response object with the result 

if any error occured I handle that errors in controller by try catch, and notify the client the error.


### Client:
Use with Angular 9

Design with primeng, bootstrap class

Result save on store with NgRx
