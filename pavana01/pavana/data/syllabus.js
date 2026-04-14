const syllabus = {
    "semester1": {
        "name": "Semester 1",
        "subjects": [
            {
                "id": "s1_c",
                "name": "C Programming",
                "code": "BCA101",
                "problems": [
                    {
                        "id": 1,
                        "title": "Hello World Program",
                        "difficulty": "easy",
                        "description": "Write a C program that prints the text 'Hello, World!' to the screen.",
                        "outputDesc": "The program prints a single line of text to the console.",
                        "expected": "Hello, World!",
                        "hint": "Use printf() to print text. Don't forget to include stdio.h."
                    },
                    {
                        "id": 2,
                        "title": "Print Your Name and Address",
                        "difficulty": "easy",
                        "description": "Write a C program that prints your name and address on separate lines.",
                        "outputDesc": "The program prints the name on the first line and the address on the second line.",
                        "expected": "Name: John Doe\nAddress: 123 Main Street, City",
                        "hint": "Use multiple printf() statements or use \\n for new lines."
                    },
                    {
                        "id": 3,
                        "title": "Variables and Data Types",
                        "difficulty": "easy",
                        "description": "Declare variables of types int, float, char, and double. Assign values and print each one.",
                        "outputDesc": "The program prints each variable's type label and its value on a separate line.",
                        "expected": "Integer: 10\nFloat: 3.14\nChar: A\nDouble: 9.99",
                        "hint": "Use %d for int, %f for float, %c for char, %lf for double."
                    },
                    {
                        "id": 4,
                        "title": "Integer and Float Input Output",
                        "difficulty": "easy",
                        "description": "Take an integer and a float as input from the user and print them back.",
                        "outputDesc": "The program prompts for two values, reads them, then prints both on one line.",
                        "expected": "Enter integer: 5\nEnter float: 2.5\nYou entered: 5 and 2.500000",
                        "hint": "Use scanf() to read input and printf() to display."
                    },
                    {
                        "id": 5,
                        "title": "Size of Data Types using sizeof",
                        "difficulty": "easy",
                        "description": "Print the size in bytes of int, float, double, and char using the sizeof operator.",
                        "outputDesc": "The program prints each data type name followed by its size in bytes.",
                        "expected": "Size of int: 4 bytes\nSize of float: 4 bytes\nSize of double: 8 bytes\nSize of char: 1 byte",
                        "hint": "Use sizeof(int), sizeof(float), etc."
                    },
                    {
                        "id": 6,
                        "title": "Type Casting in C",
                        "difficulty": "easy",
                        "description": "Divide two integers and show the difference with and without explicit type casting.",
                        "outputDesc": "The program shows integer division result first, then float result after casting.",
                        "expected": "Without cast: 3\nWith cast: 3.500000",
                        "hint": "Cast one integer to float before dividing: (float)a / b"
                    },
                    {
                        "id": 7,
                        "title": "Constants using #define and const",
                        "difficulty": "easy",
                        "description": "Define PI using #define and a constant radius using const. Calculate and print the area of a circle.",
                        "outputDesc": "The program prints the values of PI and radius, then the calculated area.",
                        "expected": "PI = 3.140000\nRadius = 5\nArea = 78.500000",
                        "hint": "#define PI 3.14 and const int radius = 5;"
                    },
                    {
                        "id": 8,
                        "title": "ASCII Value of a Character",
                        "difficulty": "easy",
                        "description": "Take a character as input and print its ASCII value. Also print the character for ASCII value 65.",
                        "outputDesc": "The program prints the ASCII value of the entered character, then the character corresponding to 65.",
                        "expected": "Enter character: A\nASCII value of A = 65\nCharacter for 65 = A",
                        "hint": "A char stored in %d format prints its ASCII value."
                    },
                    {
                        "id": 9,
                        "title": "Arithmetic Operators Demo",
                        "difficulty": "easy",
                        "description": "Take two integers a=10 and b=3. Perform and print addition, subtraction, multiplication, division, and modulus.",
                        "outputDesc": "The program performs all 5 arithmetic operations and prints each result on a separate line.",
                        "expected": "a + b = 13\na - b = 7\na * b = 30\na / b = 3\na % b = 1",
                        "hint": "Use +, -, *, /, % operators."
                    },
                    {
                        "id": 10,
                        "title": "Relational Operators Demo",
                        "difficulty": "easy",
                        "description": "Take two integers and compare them using all relational operators (>, <, >=, <=, ==, !=).",
                        "outputDesc": "The program prints each comparison expression and its result (1 for true, 0 for false).",
                        "expected": "5 > 3 = 1\n5 < 3 = 0\n5 >= 5 = 1\n5 <= 3 = 0\n5 == 3 = 0\n5 != 3 = 1",
                        "hint": "Use printf with %d to print boolean results."
                    },
                    {
                        "id": 11,
                        "title": "Logical Operators Demo",
                        "difficulty": "easy",
                        "description": "Demonstrate AND (&&), OR (||), and NOT (!) logical operators with integer values.",
                        "outputDesc": "The program prints each logical expression and its result (1 or 0).",
                        "expected": "1 && 0 = 0\n1 || 0 = 1\n!1 = 0\n!0 = 1",
                        "hint": "Logical operators return 0 or 1."
                    },
                    {
                        "id": 12,
                        "title": "Bitwise Operators Demo",
                        "difficulty": "medium",
                        "description": "Take a=12 (binary 1100) and b=10 (binary 1010). Apply all bitwise operators and print results.",
                        "outputDesc": "The program prints the result of AND, OR, XOR, NOT, left shift, and right shift operations.",
                        "expected": "a & b = 8\na | b = 14\na ^ b = 6\n~a = -13\na << 1 = 24\na >> 1 = 6",
                        "hint": "Use &, |, ^, ~, <<, >> operators."
                    },
                    {
                        "id": 13,
                        "title": "Increment and Decrement Operators",
                        "difficulty": "easy",
                        "description": "Demonstrate pre-increment, post-increment, pre-decrement, and post-decrement with a variable starting at 5.",
                        "outputDesc": "The program shows the value before and after each increment/decrement operation.",
                        "expected": "a = 5\n++a = 6\na++ = 6, now a = 7\n--a = 6\na-- = 6, now a = 5",
                        "hint": "Pre: changes before use. Post: changes after use."
                    },
                    {
                        "id": 14,
                        "title": "Ternary Operator Usage",
                        "difficulty": "easy",
                        "description": "Use the ternary operator to find the larger of two numbers and to check if a number is even or odd.",
                        "outputDesc": "The program prints the larger number and whether the second number is even or odd.",
                        "expected": "Larger of 8 and 5 = 8\n7 is Odd",
                        "hint": "Syntax: condition ? value_if_true : value_if_false"
                    },
                    {
                        "id": 15,
                        "title": "Assignment Operators Demo",
                        "difficulty": "easy",
                        "description": "Start with a=10 and apply +=, -=, *=, /=, %= operators one by one, printing the result after each.",
                        "outputDesc": "The program prints the value of a after each assignment operation is applied.",
                        "expected": "a = 10\na += 5 => 15\na -= 3 => 12\na *= 2 => 24\na /= 4 => 6\na %= 4 => 2",
                        "hint": "Each operator modifies the variable in place."
                    },
                    {
                        "id": 16,
                        "title": "Sum of Two Numbers",
                        "difficulty": "easy",
                        "description": "Take two integers as input from the user and print their sum.",
                        "expected": "Enter two numbers: 4 7\nSum = 11",
                        "hint": "Use scanf() to read two integers and printf() to show the result.",
                        "outputDesc": "The program correctly implements Sum of Two Numbers and displays the result."
                    },
                    {
                        "id": 17,
                        "title": "Even or Odd Number",
                        "difficulty": "easy",
                        "description": "Take an integer as input and check whether it is even or odd.",
                        "expected": "Enter a number: 6\n6 is Even",
                        "hint": "A number is even if num % 2 == 0.",
                        "outputDesc": "The program correctly implements Even or Odd Number and displays the result."
                    },
                    {
                        "id": 18,
                        "title": "Positive Negative or Zero",
                        "difficulty": "easy",
                        "description": "Take a number as input and print whether it is Positive, Negative, or Zero.",
                        "expected": "Enter a number: -4\n-4 is Negative",
                        "hint": "Use if-else if-else to check three conditions.",
                        "outputDesc": "The program correctly implements Positive Negative or Zero and displays the result."
                    },
                    {
                        "id": 19,
                        "title": "Largest of Two Numbers",
                        "difficulty": "easy",
                        "description": "Take two numbers as input and print the larger one.",
                        "expected": "Enter two numbers: 8 3\nLargest = 8",
                        "hint": "Use if-else to compare.",
                        "outputDesc": "The program correctly implements Largest of Two Numbers and displays the result."
                    },
                    {
                        "id": 20,
                        "title": "Largest of Three Numbers",
                        "difficulty": "easy",
                        "description": "Take three numbers as input and print the largest among them.",
                        "expected": "Enter three numbers: 4 9 2\nLargest = 9",
                        "hint": "Use nested if-else or logical AND to compare all three.",
                        "outputDesc": "The program correctly implements Largest of Three Numbers and displays the result."
                    },
                    {
                        "id": 21,
                        "title": "Grade Calculator using if-else",
                        "difficulty": "easy",
                        "description": "Take marks (0-100) as input and print the grade: A (>=90), B (>=75), C (>=60), D (>=40), F (<40).",
                        "expected": "Enter marks: 82\nGrade: B",
                        "hint": "Use if-else if ladder to check ranges.",
                        "outputDesc": "The program correctly implements Grade Calculator using if-else and displays the result."
                    },
                    {
                        "id": 22,
                        "title": "Simple Calculator using switch",
                        "difficulty": "medium",
                        "description": "Take two numbers and an operator (+, -, *, /) as input. Use switch to perform the operation and print the result.",
                        "expected": "Enter: 10 + 5\nResult = 15",
                        "hint": "Use switch(operator) with cases for each symbol.",
                        "outputDesc": "The program correctly implements Simple Calculator using switch and displays the result."
                    },
                    {
                        "id": 23,
                        "title": "Day of Week using switch",
                        "difficulty": "easy",
                        "description": "Take a number 1-7 as input and print the corresponding day of the week.",
                        "expected": "Enter day number: 3\nWednesday",
                        "hint": "case 1: Monday, case 2: Tuesday, etc.",
                        "outputDesc": "The program correctly implements Day of Week using switch and displays the result."
                    },
                    {
                        "id": 24,
                        "title": "Month Name using switch",
                        "difficulty": "easy",
                        "description": "Take a number 1-12 as input and print the corresponding month name.",
                        "expected": "Enter month number: 4\nApril",
                        "hint": "Use switch with 12 cases.",
                        "outputDesc": "The program correctly implements Month Name using switch and displays the result."
                    },
                    {
                        "id": 25,
                        "title": "Leap Year Check",
                        "difficulty": "easy",
                        "description": "Take a year as input and check if it is a leap year. A year is a leap year if divisible by 4, but not 100, unless also divisible by 400.",
                        "expected": "Enter year: 2024\n2024 is a Leap Year",
                        "hint": "Condition: (year%4==0 && year%100!=0) || (year%400==0)",
                        "outputDesc": "The program correctly implements Leap Year Check and displays the result."
                    },
                    {
                        "id": 26,
                        "title": "Sum of Natural Numbers",
                        "difficulty": "easy",
                        "description": "Take a number n as input and print the sum of all natural numbers from 1 to n.",
                        "expected": "Enter n: 5\nSum of 1 to 5 = 15",
                        "hint": "Use a for loop: sum += i for i from 1 to n.",
                        "outputDesc": "The program correctly implements Sum of Natural Numbers and displays the result."
                    },
                    {
                        "id": 27,
                        "title": "Multiplication Table",
                        "difficulty": "easy",
                        "description": "Take a number as input and print its multiplication table from 1 to 10.",
                        "expected": "Enter number: 3\n3 x 1 = 3\n3 x 2 = 6\n...\n3 x 10 = 30",
                        "hint": "Use a for loop from 1 to 10.",
                        "outputDesc": "The program correctly implements Multiplication Table and displays the result."
                    },
                    {
                        "id": 28,
                        "title": "Factorial of a Number",
                        "difficulty": "medium",
                        "description": "Take a non-negative integer n as input and print its factorial. Factorial of 0 is 1.",
                        "expected": "Enter n: 5\nFactorial of 5 = 120",
                        "hint": "Multiply all integers from 1 to n. Use long long for large values.",
                        "outputDesc": "The program correctly implements Factorial of a Number and displays the result."
                    },
                    {
                        "id": 29,
                        "title": "Fibonacci Series",
                        "difficulty": "medium",
                        "description": "Take n as input and print the first n terms of the Fibonacci series (0, 1, 1, 2, 3, 5, ...).",
                        "expected": "Enter n: 7\n0 1 1 2 3 5 8",
                        "hint": "Each term = sum of previous two. Start with a=0, b=1.",
                        "outputDesc": "The program correctly implements Fibonacci Series and displays the result."
                    },
                    {
                        "id": 30,
                        "title": "Prime Number Check",
                        "difficulty": "medium",
                        "description": "Take a number as input and check if it is prime. A prime number is divisible only by 1 and itself.",
                        "expected": "Enter number: 17\n17 is Prime",
                        "hint": "Check divisibility from 2 to sqrt(n). If any divides evenly, not prime.",
                        "outputDesc": "The program correctly implements Prime Number Check and displays the result."
                    },
                    {
                        "id": 31,
                        "title": "Print All Prime Numbers up to N",
                        "difficulty": "medium",
                        "description": "Take n as input and print all prime numbers from 2 to n.",
                        "expected": "Enter n: 20\n2 3 5 7 11 13 17 19",
                        "hint": "Use a nested loop: outer for each number, inner to check if prime.",
                        "outputDesc": "The program correctly implements Print All Prime Numbers up to N and displays the result."
                    },
                    {
                        "id": 32,
                        "title": "Armstrong Number Check",
                        "difficulty": "medium",
                        "description": "Check if a number is an Armstrong number. A 3-digit Armstrong number equals the sum of cubes of its digits (e.g. 153 = 1³+5³+3³).",
                        "expected": "Enter number: 153\n153 is an Armstrong Number",
                        "hint": "Extract each digit, cube it, and sum them up.",
                        "outputDesc": "The program correctly implements Armstrong Number Check and displays the result."
                    },
                    {
                        "id": 33,
                        "title": "Palindrome Number Check",
                        "difficulty": "medium",
                        "description": "Check if a number is a palindrome. A palindrome reads the same forwards and backwards (e.g. 121).",
                        "expected": "Enter number: 121\n121 is a Palindrome",
                        "hint": "Reverse the number and compare with original.",
                        "outputDesc": "The program correctly implements Palindrome Number Check and displays the result."
                    },
                    {
                        "id": 34,
                        "title": "Reverse of a Number",
                        "difficulty": "easy",
                        "description": "Take an integer as input and print its reverse.",
                        "expected": "Enter number: 1234\nReverse = 4321",
                        "hint": "Use % 10 to get last digit, then divide by 10 repeatedly.",
                        "outputDesc": "The program correctly implements Reverse of a Number and displays the result."
                    },
                    {
                        "id": 35,
                        "title": "Sum of Digits of a Number",
                        "difficulty": "easy",
                        "description": "Take an integer and print the sum of its digits.",
                        "expected": "Enter number: 1234\nSum of digits = 10",
                        "hint": "Extract each digit using % 10 and add to sum.",
                        "outputDesc": "The program correctly implements Sum of Digits of a Number and displays the result."
                    },
                    {
                        "id": 36,
                        "title": "GCD of Two Numbers",
                        "difficulty": "medium",
                        "description": "Find the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm.",
                        "expected": "Enter two numbers: 48 18\nGCD = 6",
                        "hint": "GCD(a,b) = GCD(b, a%b). Stop when b becomes 0.",
                        "outputDesc": "The program correctly implements GCD of Two Numbers and displays the result."
                    },
                    {
                        "id": 37,
                        "title": "LCM of Two Numbers",
                        "difficulty": "medium",
                        "description": "Find the Least Common Multiple (LCM) of two numbers.",
                        "expected": "Enter two numbers: 4 6\nLCM = 12",
                        "hint": "LCM = (a * b) / GCD(a, b)",
                        "outputDesc": "The program correctly implements LCM of Two Numbers and displays the result."
                    },
                    {
                        "id": 38,
                        "title": "Power of a Number without pow()",
                        "difficulty": "medium",
                        "description": "Take base and exponent as input. Calculate base^exponent without using the pow() function.",
                        "expected": "Enter base and exponent: 2 8\n2^8 = 256",
                        "hint": "Use a loop multiplying base by itself exponent times.",
                        "outputDesc": "The program correctly implements Power of a Number without pow() and displays the result."
                    },
                    {
                        "id": 39,
                        "title": "Count Digits in a Number",
                        "difficulty": "easy",
                        "description": "Take an integer and count how many digits it has.",
                        "expected": "Enter number: 45678\nNumber of digits = 5",
                        "hint": "Divide by 10 repeatedly until the number becomes 0, counting each step.",
                        "outputDesc": "The program correctly implements Count Digits in a Number and displays the result."
                    },
                    {
                        "id": 40,
                        "title": "Perfect Number Check",
                        "difficulty": "medium",
                        "description": "Check if a number is perfect. A perfect number equals the sum of its proper divisors (e.g. 6 = 1+2+3).",
                        "expected": "Enter number: 28\n28 is a Perfect Number\nDivisors: 1 2 4 7 14",
                        "hint": "Find all divisors from 1 to n/2 and sum them.",
                        "outputDesc": "The program correctly implements Perfect Number Check and displays the result."
                    },
                    {
                        "id": 41,
                        "title": "Right Triangle Star Pattern",
                        "difficulty": "easy",
                        "description": "Print a right-angled triangle of stars with n rows (n=5).",
                        "expected": "*\n**\n***\n****\n*****",
                        "hint": "Outer loop for rows, inner loop prints i stars on row i.",
                        "outputDesc": "The program correctly implements Right Triangle Star Pattern and displays the result."
                    },
                    {
                        "id": 42,
                        "title": "Inverted Triangle Star Pattern",
                        "difficulty": "easy",
                        "description": "Print an inverted right triangle of stars with n rows (n=5).",
                        "expected": "*****\n****\n***\n**\n*",
                        "hint": "Outer loop from n down to 1, inner loop prints i stars.",
                        "outputDesc": "The program correctly implements Inverted Triangle Star Pattern and displays the result."
                    },
                    {
                        "id": 43,
                        "title": "Pyramid Star Pattern",
                        "difficulty": "medium",
                        "description": "Print a centered pyramid of stars with n rows (n=5).",
                        "expected": "    *\n   ***\n  *****\n *******\n*********",
                        "hint": "Print (n-i) spaces then (2*i-1) stars on each row i.",
                        "outputDesc": "The program correctly implements Pyramid Star Pattern and displays the result."
                    },
                    {
                        "id": 44,
                        "title": "Diamond Star Pattern",
                        "difficulty": "medium",
                        "description": "Print a diamond shape using stars with n=5 rows for the top half.",
                        "expected": "    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *",
                        "hint": "Print pyramid then inverted pyramid.",
                        "outputDesc": "The program correctly implements Diamond Star Pattern and displays the result."
                    },
                    {
                        "id": 45,
                        "title": "Number Pattern Triangle",
                        "difficulty": "medium",
                        "description": "Print a triangle where each row contains the row number repeated.",
                        "expected": "1\n2 2\n3 3 3\n4 4 4 4\n5 5 5 5 5",
                        "hint": "Inner loop prints j (the row number) i times.",
                        "outputDesc": "The program correctly implements Number Pattern Triangle and displays the result."
                    },
                    {
                        "id": 46,
                        "title": "Floyd's Triangle",
                        "difficulty": "medium",
                        "description": "Print Floyd's Triangle with n rows. Numbers are filled row by row starting from 1.",
                        "expected": "1\n2 3\n4 5 6\n7 8 9 10",
                        "hint": "Use a counter that increments each iteration.",
                        "outputDesc": "The program correctly implements Floyd's Triangle and displays the result."
                    },
                    {
                        "id": 47,
                        "title": "Pascal's Triangle",
                        "difficulty": "hard",
                        "description": "Print Pascal's Triangle with n rows. Each element is the sum of the two elements above it.",
                        "expected": "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1",
                        "hint": "Use C(row, col) = C(row, col-1) * (row-col+1) / col to compute each value.",
                        "outputDesc": "The program correctly implements Pascal's Triangle and displays the result."
                    },
                    {
                        "id": 48,
                        "title": "Function to Find Square of a Number",
                        "difficulty": "easy",
                        "description": "Write a function square(n) that returns the square of a number. Call it and print the result.",
                        "expected": "Square of 7 = 49",
                        "hint": "Define int square(int n) { return n * n; }",
                        "outputDesc": "The program correctly implements Function to Find Square of a Number and displays the result."
                    },
                    {
                        "id": 49,
                        "title": "Function to Check Prime",
                        "difficulty": "medium",
                        "description": "Write a function isPrime(n) that returns 1 if n is prime, 0 otherwise. Test it with a few numbers.",
                        "expected": "isPrime(7) = 1 (Prime)\nisPrime(9) = 0 (Not Prime)",
                        "hint": "Check divisibility from 2 to sqrt(n) inside the function.",
                        "outputDesc": "The program correctly implements Function to Check Prime and displays the result."
                    },
                    {
                        "id": 50,
                        "title": "Recursive Factorial",
                        "difficulty": "medium",
                        "description": "Write a recursive function to calculate factorial of n. factorial(n) = n * factorial(n-1), base case: factorial(0) = 1.",
                        "expected": "factorial(6) = 720",
                        "hint": "if(n == 0) return 1; else return n * factorial(n-1);",
                        "outputDesc": "The program correctly implements Recursive Factorial and displays the result."
                    },
                    {
                        "id": 51,
                        "title": "Recursive Fibonacci",
                        "difficulty": "medium",
                        "description": "Write a recursive function fib(n) that returns the nth Fibonacci number. fib(0)=0, fib(1)=1.",
                        "expected": "fib(0)=0\nfib(1)=1\nfib(6)=8\nfib(10)=55",
                        "hint": "return fib(n-1) + fib(n-2) with base cases for 0 and 1.",
                        "outputDesc": "The program correctly implements Recursive Fibonacci and displays the result."
                    },
                    {
                        "id": 52,
                        "title": "Recursive Sum of Digits",
                        "difficulty": "medium",
                        "description": "Write a recursive function to find the sum of digits of a number.",
                        "expected": "Sum of digits of 1234 = 10",
                        "hint": "return n%10 + sumDigits(n/10); base case: if(n==0) return 0;",
                        "outputDesc": "The program correctly implements Recursive Sum of Digits and displays the result."
                    },
                    {
                        "id": 53,
                        "title": "Tower of Hanoi",
                        "difficulty": "hard",
                        "description": "Solve the Tower of Hanoi problem for n disks. Print each move showing which disk moves from which peg to which peg.",
                        "expected": "Move disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\n...",
                        "hint": "hanoi(n, from, to, aux): move n-1 to aux, move nth to dest, move n-1 from aux to dest.",
                        "outputDesc": "The program correctly implements Tower of Hanoi and displays the result."
                    },
                    {
                        "id": 54,
                        "title": "Function Overloading Concept",
                        "difficulty": "medium",
                        "description": "C does not support function overloading. Write two separate functions: addInt(a,b) and addFloat(a,b) to demonstrate the concept.",
                        "expected": "addInt(3, 4) = 7\naddFloat(2.5, 1.5) = 4.000000",
                        "hint": "Use different function names since C doesn't support overloading.",
                        "outputDesc": "The program correctly implements Function Overloading Concept and displays the result."
                    },
                    {
                        "id": 55,
                        "title": "Call by Value vs Call by Reference",
                        "difficulty": "medium",
                        "description": "Write two swap functions: one using call by value (no effect on original) and one using call by reference (pointers). Show the difference.",
                        "expected": "--- Call by Value ---\nBefore: a=5 b=10\nAfter: a=5 b=10 (unchanged)\n--- Call by Reference ---\nBefore: a=5 b=10\nAfter: a=10 b=5 (swapped)",
                        "hint": "Pass pointers in the reference version: swap(int *a, int *b)",
                        "outputDesc": "The program correctly implements Call by Value vs Call by Reference and displays the result."
                    },
                    {
                        "id": 56,
                        "title": "Array Input and Output",
                        "difficulty": "easy",
                        "description": "Take 5 integers as input into an array and print them.",
                        "expected": "Enter 5 elements: 10 20 30 40 50\nArray: 10 20 30 40 50",
                        "hint": "Use a for loop with scanf to fill the array, another to print.",
                        "outputDesc": "The program correctly implements Array Input and Output and displays the result."
                    },
                    {
                        "id": 57,
                        "title": "Sum and Average of Array Elements",
                        "difficulty": "easy",
                        "description": "Take n integers in an array and print their sum and average.",
                        "expected": "Elements: 4 8 15 16 23\nSum = 66\nAverage = 13.20",
                        "hint": "Sum all elements, then divide by n for average.",
                        "outputDesc": "The program correctly implements Sum and Average of Array Elements and displays the result."
                    },
                    {
                        "id": 58,
                        "title": "Find Maximum in Array",
                        "difficulty": "easy",
                        "description": "Find and print the maximum element in an array of n integers.",
                        "expected": "Array: 3 7 1 9 4\nMaximum = 9",
                        "hint": "Assume first element is max, compare with each subsequent element.",
                        "outputDesc": "The program correctly implements Find Maximum in Array and displays the result."
                    },
                    {
                        "id": 59,
                        "title": "Find Minimum in Array",
                        "difficulty": "easy",
                        "description": "Find and print the minimum element in an array of n integers.",
                        "expected": "Array: 3 7 1 9 4\nMinimum = 1",
                        "hint": "Assume first element is min, compare with each subsequent element.",
                        "outputDesc": "The program correctly implements Find Minimum in Array and displays the result."
                    },
                    {
                        "id": 60,
                        "title": "Reverse an Array",
                        "difficulty": "easy",
                        "description": "Take an array of n elements and print it in reverse order.",
                        "expected": "Original: 1 2 3 4 5\nReversed: 5 4 3 2 1",
                        "hint": "Print from index n-1 down to 0, or swap elements from both ends.",
                        "outputDesc": "The program correctly implements Reverse an Array and displays the result."
                    },
                    {
                        "id": 61,
                        "title": "Linear Search in Array",
                        "difficulty": "easy",
                        "description": "Search for a target value in an array using linear search. Print the index if found, else print not found.",
                        "expected": "Array: 10 25 30 45 50\nSearch for: 30\nFound at index 2",
                        "hint": "Loop through each element and compare with target.",
                        "outputDesc": "The program correctly implements Linear Search in Array and displays the result."
                    },
                    {
                        "id": 62,
                        "title": "Binary Search in Array",
                        "difficulty": "medium",
                        "description": "Search for a target in a sorted array using binary search. Print the index if found.",
                        "expected": "Sorted Array: 5 10 15 20 25 30\nSearch for: 20\nFound at index 3",
                        "hint": "Use low, high, mid pointers. Compare mid with target and halve the search space.",
                        "outputDesc": "The program correctly implements Binary Search in Array and displays the result."
                    },
                    {
                        "id": 63,
                        "title": "Bubble Sort",
                        "difficulty": "medium",
                        "description": "Sort an array of n integers in ascending order using Bubble Sort. Print the array before and after sorting.",
                        "expected": "Before: 64 34 25 12 22 11 90\nAfter:  11 12 22 25 34 64 90",
                        "hint": "Repeatedly swap adjacent elements if they are in wrong order.",
                        "outputDesc": "The program correctly implements Bubble Sort and displays the result."
                    },
                    {
                        "id": 64,
                        "title": "Selection Sort",
                        "difficulty": "medium",
                        "description": "Sort an array using Selection Sort. Find the minimum element and place it at the beginning each pass.",
                        "expected": "Before: 29 10 14 37 13\nAfter:  10 13 14 29 37",
                        "hint": "Find min in unsorted portion, swap with first unsorted element.",
                        "outputDesc": "The program correctly implements Selection Sort and displays the result."
                    },
                    {
                        "id": 65,
                        "title": "Insertion Sort",
                        "difficulty": "medium",
                        "description": "Sort an array using Insertion Sort. Insert each element into its correct position in the sorted portion.",
                        "expected": "Before: 12 11 13 5 6\nAfter:  5 6 11 12 13",
                        "hint": "Pick element, shift larger elements right, insert in correct position.",
                        "outputDesc": "The program correctly implements Insertion Sort and displays the result."
                    },
                    {
                        "id": 66,
                        "title": "Count Even and Odd in Array",
                        "difficulty": "easy",
                        "description": "Count how many even and odd numbers are in an array.",
                        "expected": "Array: 1 2 3 4 5 6 7 8\nEven count = 4\nOdd count = 4",
                        "hint": "Check each element with % 2.",
                        "outputDesc": "The program correctly implements Count Even and Odd in Array and displays the result."
                    },
                    {
                        "id": 67,
                        "title": "Remove Duplicates from Array",
                        "difficulty": "medium",
                        "description": "Remove duplicate elements from an array and print the unique elements.",
                        "expected": "Original: 1 2 2 3 4 4 5\nUnique: 1 2 3 4 5",
                        "hint": "For each element, check if it appeared before in the array.",
                        "outputDesc": "The program correctly implements Remove Duplicates from Array and displays the result."
                    },
                    {
                        "id": 68,
                        "title": "Merge Two Arrays",
                        "difficulty": "medium",
                        "description": "Merge two sorted arrays into a single sorted array.",
                        "expected": "Array 1: 1 3 5 7\nArray 2: 2 4 6 8\nMerged: 1 2 3 4 5 6 7 8",
                        "hint": "Use two pointers, pick the smaller element from each array at each step.",
                        "outputDesc": "The program correctly implements Merge Two Arrays and displays the result."
                    },
                    {
                        "id": 69,
                        "title": "Matrix Input and Display",
                        "difficulty": "easy",
                        "description": "Take a 3x3 matrix as input and display it in matrix format.",
                        "expected": "Enter 3x3 matrix:\n1 2 3\n4 5 6\n7 8 9\nMatrix:\n1 2 3\n4 5 6\n7 8 9",
                        "hint": "Use a 2D array int mat[3][3] and nested loops.",
                        "outputDesc": "The program correctly implements Matrix Input and Display and displays the result."
                    },
                    {
                        "id": 70,
                        "title": "Matrix Addition",
                        "difficulty": "easy",
                        "description": "Add two 3x3 matrices and print the result.",
                        "expected": "Matrix A + Matrix B =\n6 6 6\n6 6 6\n6 6 6",
                        "hint": "result[i][j] = a[i][j] + b[i][j]",
                        "outputDesc": "The program correctly implements Matrix Addition and displays the result."
                    },
                    {
                        "id": 71,
                        "title": "Matrix Subtraction",
                        "difficulty": "easy",
                        "description": "Subtract matrix B from matrix A and print the result.",
                        "expected": "Matrix A - Matrix B =\n0 0 0\n0 0 0\n0 0 0",
                        "hint": "result[i][j] = a[i][j] - b[i][j]",
                        "outputDesc": "The program correctly implements Matrix Subtraction and displays the result."
                    },
                    {
                        "id": 72,
                        "title": "Matrix Multiplication",
                        "difficulty": "medium",
                        "description": "Multiply two 3x3 matrices and print the result.",
                        "expected": "Product Matrix:\n30 24 18\n84 69 54\n138 114 90",
                        "hint": "result[i][j] += a[i][k] * b[k][j] for k from 0 to n.",
                        "outputDesc": "The program correctly implements Matrix Multiplication and displays the result."
                    },
                    {
                        "id": 73,
                        "title": "Transpose of a Matrix",
                        "difficulty": "medium",
                        "description": "Find and print the transpose of a 3x3 matrix. Transpose swaps rows and columns.",
                        "expected": "Original:\n1 2 3\n4 5 6\n7 8 9\nTranspose:\n1 4 7\n2 5 8\n3 6 9",
                        "hint": "transpose[j][i] = original[i][j]",
                        "outputDesc": "The program correctly implements Transpose of a Matrix and displays the result."
                    },
                    {
                        "id": 74,
                        "title": "Diagonal Sum of Matrix",
                        "difficulty": "medium",
                        "description": "Find the sum of the primary diagonal and secondary diagonal of a 3x3 matrix.",
                        "expected": "Matrix:\n1 2 3\n4 5 6\n7 8 9\nPrimary diagonal sum = 15\nSecondary diagonal sum = 15",
                        "hint": "Primary: mat[i][i]. Secondary: mat[i][n-1-i]",
                        "outputDesc": "The program correctly implements Diagonal Sum of Matrix and displays the result."
                    },
                    {
                        "id": 75,
                        "title": "Identity Matrix Check",
                        "difficulty": "medium",
                        "description": "Check if a given 3x3 matrix is an identity matrix (1s on diagonal, 0s elsewhere).",
                        "expected": "Matrix:\n1 0 0\n0 1 0\n0 0 1\nIt is an Identity Matrix",
                        "hint": "Check mat[i][i]==1 for diagonal and mat[i][j]==0 for non-diagonal.",
                        "outputDesc": "The program correctly implements Identity Matrix Check and displays the result."
                    },
                    {
                        "id": 76,
                        "title": "String Input and Output",
                        "difficulty": "easy",
                        "description": "Take a string as input and print it back. Also print its length using strlen().",
                        "expected": "Enter string: Hello\nYou entered: Hello\nLength: 5",
                        "hint": "Use char str[100]; scanf(\"%s\", str); or gets(str).",
                        "outputDesc": "The program correctly implements String Input and Output and displays the result."
                    },
                    {
                        "id": 77,
                        "title": "String Length without strlen()",
                        "difficulty": "easy",
                        "description": "Find the length of a string without using the strlen() library function.",
                        "expected": "String: Programming\nLength = 11",
                        "hint": "Loop until you hit the null character '\\0', counting each character.",
                        "outputDesc": "The program correctly implements String Length without strlen() and displays the result."
                    },
                    {
                        "id": 78,
                        "title": "String Copy without strcpy()",
                        "difficulty": "easy",
                        "description": "Copy one string to another without using strcpy().",
                        "expected": "Original: Hello\nCopied: Hello",
                        "hint": "Loop through each character and copy it, then add '\\0' at the end.",
                        "outputDesc": "The program correctly implements String Copy without strcpy() and displays the result."
                    },
                    {
                        "id": 79,
                        "title": "String Concatenation without strcat()",
                        "difficulty": "easy",
                        "description": "Concatenate two strings without using strcat().",
                        "expected": "String 1: Hello\nString 2: World\nConcatenated: HelloWorld",
                        "hint": "Find end of first string, then copy second string starting there.",
                        "outputDesc": "The program correctly implements String Concatenation without strcat() and displays the result."
                    },
                    {
                        "id": 80,
                        "title": "String Comparison without strcmp()",
                        "difficulty": "medium",
                        "description": "Compare two strings character by character without using strcmp(). Print which is greater or if they are equal.",
                        "expected": "String 1: apple\nString 2: apple\nStrings are Equal",
                        "hint": "Compare ASCII values of each character until a difference or null is found.",
                        "outputDesc": "The program correctly implements String Comparison without strcmp() and displays the result."
                    },
                    {
                        "id": 81,
                        "title": "Reverse a String",
                        "difficulty": "easy",
                        "description": "Take a string as input and print it in reverse.",
                        "expected": "Enter string: Hello\nReversed: olleH",
                        "hint": "Swap characters from both ends moving towards the center.",
                        "outputDesc": "The program correctly implements Reverse a String and displays the result."
                    },
                    {
                        "id": 82,
                        "title": "Palindrome String Check",
                        "difficulty": "medium",
                        "description": "Check if a string is a palindrome (reads same forwards and backwards).",
                        "expected": "Enter string: madam\nmadam is a Palindrome",
                        "hint": "Compare characters from start and end moving inward.",
                        "outputDesc": "The program correctly implements Palindrome String Check and displays the result."
                    },
                    {
                        "id": 83,
                        "title": "Count Vowels and Consonants",
                        "difficulty": "easy",
                        "description": "Count the number of vowels and consonants in a string.",
                        "expected": "String: Hello World\nVowels = 3\nConsonants = 7",
                        "hint": "Check each character against a, e, i, o, u (both cases).",
                        "outputDesc": "The program correctly implements Count Vowels and Consonants and displays the result."
                    },
                    {
                        "id": 84,
                        "title": "Convert String to Uppercase",
                        "difficulty": "easy",
                        "description": "Convert all lowercase letters in a string to uppercase.",
                        "expected": "Input: hello world\nOutput: HELLO WORLD",
                        "hint": "If char >= 'a' && char <= 'z', subtract 32 to convert.",
                        "outputDesc": "The program correctly implements Convert String to Uppercase and displays the result."
                    },
                    {
                        "id": 85,
                        "title": "Convert String to Lowercase",
                        "difficulty": "easy",
                        "description": "Convert all uppercase letters in a string to lowercase.",
                        "expected": "Input: HELLO WORLD\nOutput: hello world",
                        "hint": "If char >= 'A' && char <= 'Z', add 32 to convert.",
                        "outputDesc": "The program correctly implements Convert String to Lowercase and displays the result."
                    },
                    {
                        "id": 86,
                        "title": "Count Words in a String",
                        "difficulty": "medium",
                        "description": "Count the number of words in a sentence (words are separated by spaces).",
                        "expected": "String: The quick brown fox\nWord count = 4",
                        "hint": "Count spaces + 1, or count transitions from space to non-space.",
                        "outputDesc": "The program correctly implements Count Words in a String and displays the result."
                    },
                    {
                        "id": 87,
                        "title": "Remove Spaces from String",
                        "difficulty": "medium",
                        "description": "Remove all spaces from a string and print the result.",
                        "expected": "Input: Hello World\nOutput: HelloWorld",
                        "hint": "Copy only non-space characters to a new string.",
                        "outputDesc": "The program correctly implements Remove Spaces from String and displays the result."
                    },
                    {
                        "id": 88,
                        "title": "Pointer Basics and Address",
                        "difficulty": "easy",
                        "description": "Declare an integer variable, a pointer to it, and print both the value and the memory address.",
                        "expected": "Value of a = 10\nAddress of a = 0x7ffd... (some address)\nValue via pointer = 10",
                        "hint": "int *p = &a; Use %p to print address, *p to dereference.",
                        "outputDesc": "The program correctly implements Pointer Basics and Address and displays the result."
                    },
                    {
                        "id": 89,
                        "title": "Pointer Arithmetic",
                        "difficulty": "medium",
                        "description": "Demonstrate pointer arithmetic: increment, decrement, and difference between two pointers on an array.",
                        "expected": "arr[0] address: 100\narr[1] address: 104\narr[2] address: 108\nDifference = 2 elements",
                        "hint": "Incrementing an int pointer moves it by sizeof(int) bytes.",
                        "outputDesc": "The program correctly implements Pointer Arithmetic and displays the result."
                    },
                    {
                        "id": 90,
                        "title": "Swap Two Numbers using Pointers",
                        "difficulty": "medium",
                        "description": "Write a function that swaps two integers using pointers.",
                        "expected": "Before swap: a=5, b=10\nAfter swap: a=10, b=5",
                        "hint": "void swap(int *x, int *y) { int t=*x; *x=*y; *y=t; }",
                        "outputDesc": "The program correctly implements Swap Two Numbers using Pointers and displays the result."
                    },
                    {
                        "id": 91,
                        "title": "Array using Pointers",
                        "difficulty": "medium",
                        "description": "Access and print array elements using pointer notation instead of index notation.",
                        "expected": "Array using index: 10 20 30 40 50\nArray using pointer: 10 20 30 40 50",
                        "hint": "*(arr + i) is equivalent to arr[i].",
                        "outputDesc": "The program correctly implements Array using Pointers and displays the result."
                    },
                    {
                        "id": 92,
                        "title": "Pointer to Pointer",
                        "difficulty": "hard",
                        "description": "Demonstrate a pointer to a pointer (double pointer). Show how to access the value through two levels of indirection.",
                        "expected": "a = 10\n*p = 10\n**pp = 10\nAddress of a: 0x...\nAddress stored in p: 0x...",
                        "hint": "int **pp = &p; **pp gives the value of a.",
                        "outputDesc": "The program correctly implements Pointer to Pointer and displays the result."
                    },
                    {
                        "id": 93,
                        "title": "Dynamic Memory Allocation using malloc",
                        "difficulty": "hard",
                        "description": "Dynamically allocate an array of n integers using malloc, fill it with values, print it, then free the memory.",
                        "expected": "Enter n: 5\nEnter 5 values: 10 20 30 40 50\nDynamic array: 10 20 30 40 50\nMemory freed.",
                        "hint": "int *arr = (int*)malloc(n * sizeof(int)); Don't forget free(arr).",
                        "outputDesc": "The program correctly implements Dynamic Memory Allocation using malloc and displays the result."
                    },
                    {
                        "id": 94,
                        "title": "Dynamic Memory Allocation using calloc",
                        "difficulty": "hard",
                        "description": "Allocate memory for n integers using calloc (initializes to 0). Print the initial values, then assign and print new values.",
                        "expected": "Initial (calloc): 0 0 0 0 0\nAfter assignment: 5 10 15 20 25",
                        "hint": "calloc(n, sizeof(int)) allocates and zero-initializes.",
                        "outputDesc": "The program correctly implements Dynamic Memory Allocation using calloc and displays the result."
                    },
                    {
                        "id": 95,
                        "title": "Structure to Store Student Details",
                        "difficulty": "medium",
                        "description": "Define a structure Student with fields: name, roll number, and marks. Take input for one student and display the details.",
                        "expected": "Enter name: Alice\nEnter roll: 101\nEnter marks: 92\n--- Student Details ---\nName: Alice\nRoll: 101\nMarks: 92",
                        "hint": "struct Student { char name[50]; int roll; float marks; };",
                        "outputDesc": "The program correctly implements Structure to Store Student Details and displays the result."
                    },
                    {
                        "id": 96,
                        "title": "Array of Structures",
                        "difficulty": "medium",
                        "description": "Create an array of 3 Student structures. Input details for each and display them all.",
                        "expected": "Student 1: Alice | Roll: 101 | Marks: 92\nStudent 2: Bob | Roll: 102 | Marks: 85\nStudent 3: Carol | Roll: 103 | Marks: 78",
                        "hint": "struct Student students[3]; Use a loop to input and display.",
                        "outputDesc": "The program correctly implements Array of Structures and displays the result."
                    },
                    {
                        "id": 97,
                        "title": "Structure with Functions",
                        "difficulty": "medium",
                        "description": "Pass a structure to a function that prints the student details.",
                        "expected": "Calling printStudent()...\nName: Alice, Roll: 101, Marks: 92.00",
                        "hint": "void printStudent(struct Student s) { ... } Pass by value.",
                        "outputDesc": "The program correctly implements Structure with Functions and displays the result."
                    },
                    {
                        "id": 98,
                        "title": "Nested Structures",
                        "difficulty": "hard",
                        "description": "Create a nested structure: Address (street, city) inside Employee (name, id, address). Input and display all fields.",
                        "expected": "Name: John\nID: 201\nStreet: MG Road\nCity: Bangalore",
                        "hint": "struct Employee { char name[50]; int id; struct Address addr; };",
                        "outputDesc": "The program correctly implements Nested Structures and displays the result."
                    },
                    {
                        "id": 99,
                        "title": "Union in C",
                        "difficulty": "medium",
                        "description": "Demonstrate a union with int, float, and char members. Show that all members share the same memory location.",
                        "expected": "Size of union = 4 bytes\nint value: 65\nfloat value: 0.000000 (shared memory)\nchar value: A",
                        "hint": "union Data { int i; float f; char c; }; All share same memory.",
                        "outputDesc": "The program correctly implements Union in C and displays the result."
                    },
                    {
                        "id": 100,
                        "title": "Write to a File",
                        "difficulty": "medium",
                        "description": "Write a program that creates a file called 'output.txt' and writes 3 lines of text to it. Confirm success.",
                        "expected": "Writing to file...\nFile written successfully!\nCheck output.txt",
                        "hint": "FILE *fp = fopen(\"output.txt\", \"w\"); Use fprintf() to write.",
                        "outputDesc": "The program correctly implements Write to a File and displays the result."
                    },
                    {
                        "id": 101,
                        "title": "Read from a File",
                        "difficulty": "medium",
                        "description": "Read and print the contents of a file line by line.",
                        "expected": "Contents of file:\nLine 1: Hello\nLine 2: World\nLine 3: CampusCode",
                        "hint": "FILE *fp = fopen(\"output.txt\", \"r\"); Use fgets() to read line by line.",
                        "outputDesc": "The program correctly implements Read from a File and displays the result."
                    },
                    {
                        "id": 102,
                        "title": "Copy Contents of One File to Another",
                        "difficulty": "hard",
                        "description": "Copy all contents from source.txt to destination.txt character by character.",
                        "expected": "Copying file...\nFile copied successfully!\nCharacters copied: 42",
                        "hint": "Read with fgetc(), write with fputc() in a loop until EOF.",
                        "outputDesc": "The program correctly implements Copy Contents of One File to Another and displays the result."
                    },
                    {
                        "id": 103,
                        "title": "Count Lines in a File",
                        "difficulty": "hard",
                        "description": "Count and print the total number of lines in a text file.",
                        "expected": "File: data.txt\nTotal lines = 15",
                        "hint": "Count newline characters '\\n' while reading the file.",
                        "outputDesc": "The program correctly implements Count Lines in a File and displays the result."
                    }
                ]
            },
            {
                "id": "s1_algo",
                "name": "Algorithms",
                "code": "BCA106",
                "problems": [
                    {
                        "id": 1,
                        "title": "Bubble Sort",
                        "difficulty": "easy",
                        "description": "Sort an array of n integers in ascending order using Bubble Sort. Print the array before and after sorting.",
                        "outputDesc": "Prints array before and after sorting.",
                        "expected": "Before: 64 34 25 12 22\nAfter:  12 22 25 34 64",
                        "hint": "Compare adjacent elements and swap if out of order. Repeat n-1 passes."
                    },
                    {
                        "id": 2,
                        "title": "Selection Sort",
                        "difficulty": "easy",
                        "description": "Sort an array using Selection Sort. Find the minimum element and place it at the beginning each pass.",
                        "outputDesc": "Prints sorted array.",
                        "expected": "Before: 29 10 14 37 13\nAfter:  10 13 14 29 37",
                        "hint": "Find min in unsorted portion, swap with first unsorted element."
                    },
                    {
                        "id": 3,
                        "title": "Insertion Sort",
                        "difficulty": "easy",
                        "description": "Sort an array using Insertion Sort. Insert each element into its correct position.",
                        "outputDesc": "Prints sorted array.",
                        "expected": "Before: 12 11 13 5 6\nAfter:  5 6 11 12 13",
                        "hint": "Pick element, shift larger elements right, insert in correct position."
                    },
                    {
                        "id": 4,
                        "title": "Merge Sort",
                        "difficulty": "medium",
                        "description": "Sort an array using Merge Sort (divide and conquer). Split array into halves, sort each, then merge.",
                        "outputDesc": "Prints sorted array.",
                        "expected": "Before: 38 27 43 3 9 82 10\nAfter:  3 9 10 27 38 43 82",
                        "hint": "Recursively split array in half. Merge two sorted halves by comparing elements."
                    },
                    {
                        "id": 5,
                        "title": "Quick Sort",
                        "difficulty": "medium",
                        "description": "Sort an array using Quick Sort. Choose a pivot, partition array around it, recursively sort partitions.",
                        "outputDesc": "Prints sorted array.",
                        "expected": "Before: 10 7 8 9 1 5\nAfter:  1 5 7 8 9 10",
                        "hint": "Partition: place pivot at correct position. Elements left < pivot, right > pivot."
                    },
                    {
                        "id": 6,
                        "title": "Heap Sort",
                        "difficulty": "hard",
                        "description": "Sort an array using Heap Sort. Build a max-heap, then extract elements one by one.",
                        "outputDesc": "Prints sorted array.",
                        "expected": "Before: 12 11 13 5 6 7\nAfter:  5 6 7 11 12 13",
                        "hint": "Build max-heap using heapify. Swap root with last element, reduce heap size, heapify again."
                    },
                    {
                        "id": 7,
                        "title": "Counting Sort",
                        "difficulty": "medium",
                        "description": "Sort an array of non-negative integers using Counting Sort. Print the sorted array.",
                        "outputDesc": "Prints sorted array.",
                        "expected": "Before: 4 2 2 8 3 3 1\nAfter:  1 2 2 3 3 4 8",
                        "hint": "Count occurrences of each element. Use prefix sum to place elements in output array."
                    },
                    {
                        "id": 8,
                        "title": "Radix Sort",
                        "difficulty": "hard",
                        "description": "Sort an array of integers using Radix Sort. Sort digit by digit from least significant to most significant.",
                        "outputDesc": "Prints sorted array.",
                        "expected": "Before: 170 45 75 90 802 24 2 66\nAfter:  2 24 45 66 75 90 170 802",
                        "hint": "Use counting sort as subroutine for each digit position."
                    },
                    {
                        "id": 9,
                        "title": "Linear Search",
                        "difficulty": "easy",
                        "description": "Search for a target value in an unsorted array using linear search. Print index if found.",
                        "outputDesc": "Prints index of target or not found.",
                        "expected": "Array: 10 25 30 45 50\nSearch: 30\nFound at index 2",
                        "hint": "Loop through each element and compare with target."
                    },
                    {
                        "id": 10,
                        "title": "Binary Search",
                        "difficulty": "easy",
                        "description": "Search for a target in a sorted array using binary search. Print the index if found.",
                        "outputDesc": "Prints index of target or not found.",
                        "expected": "Array: 5 10 15 20 25 30\nSearch: 20\nFound at index 3",
                        "hint": "Use low, high, mid. Compare mid with target and halve the search space."
                    },
                    {
                        "id": 11,
                        "title": "Binary Search Recursive",
                        "difficulty": "medium",
                        "description": "Implement binary search using recursion.",
                        "outputDesc": "Prints index of target.",
                        "expected": "Search 15 in [5,10,15,20,25]: Found at index 2",
                        "hint": "binarySearch(arr, low, high, target). Base case: low > high."
                    },
                    {
                        "id": 12,
                        "title": "Jump Search",
                        "difficulty": "medium",
                        "description": "Implement Jump Search on a sorted array. Jump by sqrt(n) steps, then linear search in block.",
                        "outputDesc": "Prints index of target.",
                        "expected": "Array: 1 3 5 7 9 11 13 15\nSearch: 9\nFound at index 4",
                        "hint": "Jump step = sqrt(n). Jump until arr[step] >= target, then linear search backward."
                    },
                    {
                        "id": 13,
                        "title": "Interpolation Search",
                        "difficulty": "hard",
                        "description": "Implement Interpolation Search for uniformly distributed sorted arrays.",
                        "outputDesc": "Prints index of target.",
                        "expected": "Array: 10 20 30 40 50 60 70\nSearch: 40\nFound at index 3",
                        "hint": "pos = low + ((target-arr[low])*(high-low))/(arr[high]-arr[low])"
                    },
                    {
                        "id": 14,
                        "title": "Factorial using Recursion",
                        "difficulty": "easy",
                        "description": "Calculate factorial of n using recursion.",
                        "outputDesc": "Prints factorial.",
                        "expected": "factorial(6) = 720",
                        "hint": "if(n==0) return 1; return n * factorial(n-1);"
                    },
                    {
                        "id": 15,
                        "title": "Fibonacci using Recursion",
                        "difficulty": "easy",
                        "description": "Print nth Fibonacci number using recursion.",
                        "outputDesc": "Prints Fibonacci number.",
                        "expected": "fib(10) = 55",
                        "hint": "return fib(n-1) + fib(n-2); base cases: fib(0)=0, fib(1)=1"
                    },
                    {
                        "id": 16,
                        "title": "Tower of Hanoi",
                        "difficulty": "medium",
                        "description": "Solve Tower of Hanoi for n disks. Print each move.",
                        "outputDesc": "Prints each disk move.",
                        "expected": "Move disk 1: A->C\nMove disk 2: A->B\nMove disk 1: C->B\nMove disk 3: A->C",
                        "hint": "hanoi(n,from,to,aux): move n-1 to aux, move n to dest, move n-1 from aux to dest."
                    },
                    {
                        "id": 17,
                        "title": "GCD using Recursion",
                        "difficulty": "easy",
                        "description": "Find GCD of two numbers using recursive Euclidean algorithm.",
                        "outputDesc": "Prints GCD.",
                        "expected": "GCD(48, 18) = 6",
                        "hint": "gcd(a,b) = gcd(b, a%b). Base case: gcd(a,0) = a."
                    },
                    {
                        "id": 18,
                        "title": "Power using Recursion",
                        "difficulty": "easy",
                        "description": "Calculate base^exp using recursion.",
                        "outputDesc": "Prints result.",
                        "expected": "2^10 = 1024",
                        "hint": "power(base,exp) = base * power(base,exp-1). Base case: exp==0 return 1."
                    },
                    {
                        "id": 19,
                        "title": "Sum of Array using Recursion",
                        "difficulty": "easy",
                        "description": "Find sum of array elements using recursion.",
                        "outputDesc": "Prints sum.",
                        "expected": "Array: 1 2 3 4 5\nSum = 15",
                        "hint": "sum(arr,n) = arr[n-1] + sum(arr,n-1). Base case: n==0 return 0."
                    },
                    {
                        "id": 20,
                        "title": "Binary Search using Recursion",
                        "difficulty": "medium",
                        "description": "Implement recursive binary search.",
                        "outputDesc": "Prints index.",
                        "expected": "Found 7 at index 3",
                        "hint": "Recursively call with updated low or high based on comparison with mid."
                    },
                    {
                        "id": 21,
                        "title": "Fibonacci using Dynamic Programming",
                        "difficulty": "medium",
                        "description": "Calculate nth Fibonacci number using dynamic programming (memoization). Compare with recursive approach.",
                        "outputDesc": "Prints Fibonacci number and time comparison.",
                        "expected": "fib(40) = 102334155\nDP is much faster than recursion.",
                        "hint": "Store computed values in array. dp[i] = dp[i-1] + dp[i-2]."
                    },
                    {
                        "id": 22,
                        "title": "0/1 Knapsack Problem",
                        "difficulty": "hard",
                        "description": "Solve 0/1 Knapsack problem using dynamic programming. Given weights and values of n items and capacity W, find maximum value.",
                        "outputDesc": "Prints maximum value and selected items.",
                        "expected": "Capacity: 50\nMax value: 220\nItems selected: 1 3 4",
                        "hint": "dp[i][w] = max(dp[i-1][w], val[i]+dp[i-1][w-wt[i]])"
                    },
                    {
                        "id": 23,
                        "title": "Longest Common Subsequence",
                        "difficulty": "hard",
                        "description": "Find the length of Longest Common Subsequence (LCS) of two strings using DP.",
                        "outputDesc": "Prints LCS length and the subsequence.",
                        "expected": "S1: ABCBDAB\nS2: BDCAB\nLCS length: 4\nLCS: BCAB",
                        "hint": "dp[i][j] = dp[i-1][j-1]+1 if match, else max(dp[i-1][j], dp[i][j-1])"
                    },
                    {
                        "id": 24,
                        "title": "Longest Increasing Subsequence",
                        "difficulty": "hard",
                        "description": "Find the length of Longest Increasing Subsequence in an array.",
                        "outputDesc": "Prints LIS length.",
                        "expected": "Array: 10 9 2 5 3 7 101 18\nLIS length: 4\nLIS: 2 3 7 101",
                        "hint": "dp[i] = max length ending at index i. dp[i] = max(dp[j]+1) for all j<i where arr[j]<arr[i]."
                    },
                    {
                        "id": 25,
                        "title": "Coin Change Problem",
                        "difficulty": "hard",
                        "description": "Find minimum number of coins to make amount n using given coin denominations.",
                        "outputDesc": "Prints minimum coins needed.",
                        "expected": "Coins: 1 5 6 9\nAmount: 11\nMin coins: 2 (5+6)",
                        "hint": "dp[i] = min coins for amount i. dp[i] = min(dp[i], dp[i-coin]+1) for each coin."
                    },
                    {
                        "id": 26,
                        "title": "Matrix Chain Multiplication",
                        "difficulty": "hard",
                        "description": "Find minimum number of scalar multiplications to multiply a chain of matrices.",
                        "outputDesc": "Prints minimum multiplications.",
                        "expected": "Dimensions: 10x30, 30x5, 5x60\nMin multiplications: 4500",
                        "hint": "dp[i][j] = min cost to multiply matrices i to j. Try all split points k."
                    },
                    {
                        "id": 27,
                        "title": "Edit Distance",
                        "difficulty": "hard",
                        "description": "Find minimum edit distance (Levenshtein distance) between two strings using DP.",
                        "outputDesc": "Prints edit distance.",
                        "expected": "S1: kitten\nS2: sitting\nEdit distance: 3",
                        "hint": "dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+(0 if match else 1))"
                    },
                    {
                        "id": 28,
                        "title": "Activity Selection Problem",
                        "difficulty": "medium",
                        "description": "Select maximum number of non-overlapping activities given start and end times.",
                        "outputDesc": "Prints selected activities.",
                        "expected": "Activities: (1,4),(3,5),(0,6),(5,7),(3,9),(5,9),(6,10),(8,11)\nSelected: 4 activities",
                        "hint": "Sort by end time. Greedily select activity if start >= last selected end."
                    },
                    {
                        "id": 29,
                        "title": "Fractional Knapsack",
                        "difficulty": "medium",
                        "description": "Solve fractional knapsack problem using greedy approach. Items can be broken into fractions.",
                        "outputDesc": "Prints maximum value.",
                        "expected": "Capacity: 50\nMax value: 240.0",
                        "hint": "Sort by value/weight ratio. Take as much as possible of highest ratio item."
                    },
                    {
                        "id": 30,
                        "title": "Huffman Coding",
                        "difficulty": "hard",
                        "description": "Implement Huffman coding to compress a string. Print character codes and compression ratio.",
                        "outputDesc": "Prints Huffman codes for each character.",
                        "expected": "a:0 b:100 c:101 d:11\nOriginal: 32 bits\nCompressed: 14 bits",
                        "hint": "Build min-heap of frequencies. Merge two smallest nodes repeatedly."
                    },
                    {
                        "id": 31,
                        "title": "Job Sequencing with Deadlines",
                        "difficulty": "hard",
                        "description": "Schedule jobs to maximize profit. Each job has a deadline and profit.",
                        "outputDesc": "Prints selected jobs and total profit.",
                        "expected": "Jobs: J1(d=2,p=100) J2(d=1,p=19) J3(d=2,p=27) J4(d=1,p=25)\nSelected: J1 J3\nProfit: 127",
                        "hint": "Sort by profit descending. For each job, find latest available slot before deadline."
                    },
                    {
                        "id": 32,
                        "title": "BFS Traversal",
                        "difficulty": "medium",
                        "description": "Implement Breadth First Search on a graph. Print nodes in BFS order.",
                        "outputDesc": "Prints BFS traversal.",
                        "expected": "BFS from 0: 0 1 2 3 4 5",
                        "hint": "Use queue. Mark visited before enqueuing."
                    },
                    {
                        "id": 33,
                        "title": "DFS Traversal",
                        "difficulty": "medium",
                        "description": "Implement Depth First Search on a graph using recursion.",
                        "outputDesc": "Prints DFS traversal.",
                        "expected": "DFS from 0: 0 1 3 4 2 5",
                        "hint": "Use visited array. Recursively visit unvisited neighbors."
                    },
                    {
                        "id": 34,
                        "title": "Dijkstra's Shortest Path",
                        "difficulty": "hard",
                        "description": "Find shortest path from source to all vertices using Dijkstra's algorithm.",
                        "outputDesc": "Prints shortest distance to each vertex.",
                        "expected": "Source: 0\n0->1: 4\n0->2: 12\n0->3: 19\n0->4: 21",
                        "hint": "Use min-heap. Relax edges: if dist[u]+w < dist[v], update dist[v]."
                    },
                    {
                        "id": 35,
                        "title": "Bellman-Ford Algorithm",
                        "difficulty": "hard",
                        "description": "Find shortest paths from source using Bellman-Ford. Detect negative weight cycles.",
                        "outputDesc": "Prints shortest distances or negative cycle detection.",
                        "expected": "Shortest distances from 0:\n0->1: -1\n0->2: 2\n0->3: -2\n0->4: 1",
                        "hint": "Relax all edges V-1 times. If still relaxable on Vth iteration, negative cycle exists."
                    },
                    {
                        "id": 36,
                        "title": "Floyd-Warshall Algorithm",
                        "difficulty": "hard",
                        "description": "Find shortest paths between all pairs of vertices using Floyd-Warshall.",
                        "outputDesc": "Prints distance matrix.",
                        "expected": "All-pairs shortest paths:\n0 3 6 2\n3 0 3 1\n6 3 0 4\n2 1 4 0",
                        "hint": "dp[i][j][k] = min(dp[i][j][k-1], dp[i][k][k-1]+dp[k][j][k-1])"
                    },
                    {
                        "id": 37,
                        "title": "Prim's MST Algorithm",
                        "difficulty": "hard",
                        "description": "Find Minimum Spanning Tree using Prim's algorithm.",
                        "outputDesc": "Prints MST edges and total weight.",
                        "expected": "MST edges: 0-1(2) 1-2(3) 0-3(6)\nTotal weight: 11",
                        "hint": "Start from any vertex. Always add minimum weight edge connecting visited to unvisited."
                    },
                    {
                        "id": 38,
                        "title": "Kruskal's MST Algorithm",
                        "difficulty": "hard",
                        "description": "Find Minimum Spanning Tree using Kruskal's algorithm with Union-Find.",
                        "outputDesc": "Prints MST edges and total weight.",
                        "expected": "MST edges: 0-3(1) 2-3(2) 0-1(3)\nTotal weight: 6",
                        "hint": "Sort edges by weight. Add edge if it doesn't form cycle (use Union-Find)."
                    },
                    {
                        "id": 39,
                        "title": "Topological Sort",
                        "difficulty": "hard",
                        "description": "Perform topological sorting of a DAG using DFS.",
                        "outputDesc": "Prints topological order.",
                        "expected": "Topological order: 5 4 2 3 1 0",
                        "hint": "After visiting all neighbors, push node to stack. Print stack in reverse."
                    },
                    {
                        "id": 40,
                        "title": "Detect Cycle in Graph",
                        "difficulty": "medium",
                        "description": "Detect if a directed graph contains a cycle using DFS.",
                        "outputDesc": "Prints whether cycle exists.",
                        "expected": "Graph has cycle: Yes",
                        "hint": "Use recursion stack. If neighbor is in recStack, cycle found."
                    },
                    {
                        "id": 41,
                        "title": "Maximum Subarray - Kadane's Algorithm",
                        "difficulty": "medium",
                        "description": "Find the contiguous subarray with maximum sum using Kadane's algorithm.",
                        "outputDesc": "Prints maximum sum and subarray.",
                        "expected": "Array: -2 1 -3 4 -1 2 1 -5 4\nMax sum: 6\nSubarray: 4 -1 2 1",
                        "hint": "maxSoFar=arr[0], maxEndingHere=arr[0]. For each element: maxEndingHere=max(arr[i], maxEndingHere+arr[i])."
                    },
                    {
                        "id": 42,
                        "title": "Closest Pair of Points",
                        "difficulty": "hard",
                        "description": "Find the closest pair of points in a 2D plane using divide and conquer.",
                        "outputDesc": "Prints the closest pair and distance.",
                        "expected": "Points: (2,3)(12,30)(40,50)(5,1)(12,10)(3,4)\nClosest pair: (2,3) and (3,4)\nDistance: 1.41",
                        "hint": "Sort by x. Divide into halves. Find min in each half. Check strip around midline."
                    },
                    {
                        "id": 43,
                        "title": "Strassen Matrix Multiplication",
                        "difficulty": "hard",
                        "description": "Multiply two 2x2 matrices using Strassen's algorithm (7 multiplications instead of 8).",
                        "outputDesc": "Prints product matrix.",
                        "expected": "A*B using Strassen:\n19 22\n43 50",
                        "hint": "Compute 7 products: m1=(a+d)(e+h), m2=(c+d)e, etc. Combine to get result."
                    },
                    {
                        "id": 44,
                        "title": "Naive String Matching",
                        "difficulty": "easy",
                        "description": "Find all occurrences of a pattern in a text using naive string matching.",
                        "outputDesc": "Prints all positions where pattern found.",
                        "expected": "Text: AABAACAADAABAABA\nPattern: AABA\nFound at: 0 9 12",
                        "hint": "Slide pattern over text. Compare character by character at each position."
                    },
                    {
                        "id": 45,
                        "title": "KMP String Matching",
                        "difficulty": "hard",
                        "description": "Implement KMP (Knuth-Morris-Pratt) pattern matching algorithm.",
                        "outputDesc": "Prints positions where pattern found.",
                        "expected": "Text: ABABDABACDABABCABAB\nPattern: ABABCABAB\nFound at: 10",
                        "hint": "Build failure function (LPS array). Use it to skip unnecessary comparisons."
                    },
                    {
                        "id": 46,
                        "title": "Rabin-Karp Algorithm",
                        "difficulty": "hard",
                        "description": "Implement Rabin-Karp string matching using rolling hash.",
                        "outputDesc": "Prints positions where pattern found.",
                        "expected": "Text: GEEKS FOR GEEKS\nPattern: GEEK\nFound at: 0 10",
                        "hint": "Compute hash of pattern and each window. Compare hashes, verify on match."
                    },
                    {
                        "id": 47,
                        "title": "N-Queens Problem",
                        "difficulty": "hard",
                        "description": "Place N queens on NxN chessboard so no two queens attack each other. Print all solutions.",
                        "outputDesc": "Prints all valid queen placements.",
                        "expected": "N=4\nSolution 1:\n. Q . .\n. . . Q\nQ . . .\n. . Q .\nSolution 2:\n. . Q .\nQ . . .\n. . . Q\n. Q . .",
                        "hint": "Place queen in each row. Check column and diagonal conflicts. Backtrack if stuck."
                    },
                    {
                        "id": 48,
                        "title": "Rat in a Maze",
                        "difficulty": "hard",
                        "description": "Find path for rat from top-left to bottom-right of a maze. Print the path.",
                        "outputDesc": "Prints solution matrix with path.",
                        "expected": "1 0 0 0\n1 1 0 1\n0 1 0 0\n0 1 1 1\nPath found!",
                        "hint": "Try all 4 directions. Mark cell as part of path. Backtrack if no path found."
                    },
                    {
                        "id": 49,
                        "title": "Sudoku Solver",
                        "difficulty": "hard",
                        "description": "Solve a 9x9 Sudoku puzzle using backtracking.",
                        "outputDesc": "Prints solved Sudoku grid.",
                        "expected": "Solved Sudoku:\n5 3 4 6 7 8 9 1 2\n6 7 2 1 9 5 3 4 8\n...",
                        "hint": "Find empty cell. Try digits 1-9. Check row, column, 3x3 box. Backtrack if invalid."
                    },
                    {
                        "id": 50,
                        "title": "Graph Coloring",
                        "difficulty": "hard",
                        "description": "Color a graph with minimum colors such that no two adjacent vertices have same color.",
                        "outputDesc": "Prints color assigned to each vertex.",
                        "expected": "Vertex 0: Color 1\nVertex 1: Color 2\nVertex 2: Color 3\nVertex 3: Color 2\nColors used: 3",
                        "hint": "Try colors 1,2,3... for each vertex. Check if color is safe (no adjacent same color)."
                    }
                ]
            }
        ]
    },
    "semester2": {
        "name": "Semester 2",
        "subjects": [
            {
                "id": "s2_cpp",
                "name": "C++ Programming",
                "code": "BCA201",
                "problems": [
                    {
                        "id": 1,
                        "title": "Hello World in C++",
                        "difficulty": "easy",
                        "description": "Write a C++ program that prints Hello World.",
                        "expected": "Hello, World!",
                        "hint": "Use cout << \"Hello, World!\" << endl;"
                    },
                    {
                        "id": 2,
                        "title": "Variables and Data Types",
                        "difficulty": "easy",
                        "description": "Declare int, float, double, char, bool variables. Print each.",
                        "expected": "int:10 float:3.14 char:A bool:1",
                        "hint": "Use cout for output."
                    },
                    {
                        "id": 3,
                        "title": "Arithmetic Operators",
                        "difficulty": "easy",
                        "description": "Perform +,-,*,/,% on two integers a=10,b=3.",
                        "expected": "13 7 30 3 1",
                        "hint": "Use standard operators."
                    },
                    {
                        "id": 4,
                        "title": "If-Else Statement",
                        "difficulty": "easy",
                        "description": "Check if number is positive, negative or zero.",
                        "expected": "5 is Positive",
                        "hint": "Use if-else if-else."
                    },
                    {
                        "id": 5,
                        "title": "Switch Statement",
                        "difficulty": "easy",
                        "description": "Print day name for number 1-7.",
                        "expected": "Day 3: Wednesday",
                        "hint": "Use switch with 7 cases."
                    },
                    {
                        "id": 6,
                        "title": "For Loop",
                        "difficulty": "easy",
                        "description": "Print multiplication table of a number.",
                        "expected": "5x1=5\n5x10=50",
                        "hint": "for(int i=1;i<=10;i++)"
                    },
                    {
                        "id": 7,
                        "title": "While Loop",
                        "difficulty": "easy",
                        "description": "Print sum of digits using while loop.",
                        "expected": "Sum of 1234 = 10",
                        "hint": "while(n>0){ sum+=n%10; n/=10; }"
                    },
                    {
                        "id": 8,
                        "title": "Factorial",
                        "difficulty": "easy",
                        "description": "Calculate factorial using for loop.",
                        "expected": "5! = 120",
                        "hint": "long long fact=1; for loop."
                    },
                    {
                        "id": 9,
                        "title": "Fibonacci Series",
                        "difficulty": "medium",
                        "description": "Print first n Fibonacci numbers.",
                        "expected": "0 1 1 2 3 5 8",
                        "hint": "int a=0,b=1; loop n times."
                    },
                    {
                        "id": 10,
                        "title": "Prime Check",
                        "difficulty": "medium",
                        "description": "Check if number is prime.",
                        "expected": "17 is Prime",
                        "hint": "Loop 2 to sqrt(n)."
                    },
                    {
                        "id": 11,
                        "title": "Class and Object",
                        "difficulty": "medium",
                        "description": "Create Student class with name,roll,marks. Display details.",
                        "expected": "Name:Alice Roll:101 Marks:92",
                        "hint": "class Student{ string name; int roll; float marks; };"
                    },
                    {
                        "id": 12,
                        "title": "Constructor",
                        "difficulty": "medium",
                        "description": "Create Box class with parameterized constructor.",
                        "expected": "Box 5x3x2 Volume=30",
                        "hint": "Constructor same name as class."
                    },
                    {
                        "id": 13,
                        "title": "Destructor",
                        "difficulty": "medium",
                        "description": "Demonstrate destructor printing message when object destroyed.",
                        "expected": "Object created\nObject destroyed",
                        "hint": "~ClassName(){ cout<<\"destroyed\"; }"
                    },
                    {
                        "id": 14,
                        "title": "Inheritance",
                        "difficulty": "medium",
                        "description": "Create Animal base class. Derive Dog and Cat.",
                        "expected": "Dog: Woof\nCat: Meow",
                        "hint": "class Dog : public Animal{}"
                    },
                    {
                        "id": 15,
                        "title": "Multiple Inheritance",
                        "difficulty": "hard",
                        "description": "Create class C inheriting from both A and B.",
                        "expected": "A method\nB method\nC method",
                        "hint": "class C : public A, public B{}"
                    },
                    {
                        "id": 16,
                        "title": "Polymorphism",
                        "difficulty": "medium",
                        "description": "Virtual function demo with Shape, Circle, Rectangle.",
                        "expected": "Circle area:78.5\nRect area:24",
                        "hint": "virtual double area()=0;"
                    },
                    {
                        "id": 17,
                        "title": "Abstract Class",
                        "difficulty": "medium",
                        "description": "Abstract Shape class with pure virtual area().",
                        "expected": "Circle:78.54 Triangle:12",
                        "hint": "virtual double area()=0; makes class abstract."
                    },
                    {
                        "id": 18,
                        "title": "Interface via Abstract",
                        "difficulty": "hard",
                        "description": "Implement Printable and Saveable interfaces.",
                        "expected": "Printed\nSaved",
                        "hint": "Pure virtual functions simulate interfaces."
                    },
                    {
                        "id": 19,
                        "title": "Operator Overloading +",
                        "difficulty": "hard",
                        "description": "Overload + for Complex numbers.",
                        "expected": "(3+4i)+(1+2i)=4+6i",
                        "hint": "Complex operator+(Complex c){ return Complex(r+c.r,i+c.i); }"
                    },
                    {
                        "id": 20,
                        "title": "Operator Overloading <<",
                        "difficulty": "hard",
                        "description": "Overload << to print object.",
                        "expected": "Complex: 3+4i",
                        "hint": "friend ostream& operator<<(ostream&,Complex&)"
                    },
                    {
                        "id": 21,
                        "title": "Copy Constructor",
                        "difficulty": "medium",
                        "description": "Demonstrate copy constructor.",
                        "expected": "Original:10 Copy:10",
                        "hint": "ClassName(const ClassName& obj){ val=obj.val; }"
                    },
                    {
                        "id": 22,
                        "title": "Static Members",
                        "difficulty": "medium",
                        "description": "Count objects using static variable.",
                        "expected": "Objects created: 3",
                        "hint": "static int count; increment in constructor."
                    },
                    {
                        "id": 23,
                        "title": "Friend Function",
                        "difficulty": "medium",
                        "description": "Friend function accessing private members.",
                        "expected": "Sum of private: 15",
                        "hint": "friend int sum(MyClass a, MyClass b);"
                    },
                    {
                        "id": 24,
                        "title": "Exception Handling",
                        "difficulty": "medium",
                        "description": "Handle division by zero with try-catch.",
                        "expected": "Error: Division by zero",
                        "hint": "try{ }catch(exception& e){ }"
                    },
                    {
                        "id": 25,
                        "title": "Custom Exception",
                        "difficulty": "hard",
                        "description": "Create InvalidAgeException class.",
                        "expected": "Exception: Age -5 invalid",
                        "hint": "class InvalidAgeException : public exception{}"
                    },
                    {
                        "id": 26,
                        "title": "File Write",
                        "difficulty": "medium",
                        "description": "Write student records to file.",
                        "expected": "Written to students.txt",
                        "hint": "ofstream fout(\"file.txt\"); fout<<data;"
                    },
                    {
                        "id": 27,
                        "title": "File Read",
                        "difficulty": "medium",
                        "description": "Read and display file contents.",
                        "expected": "Alice 92\nBob 85",
                        "hint": "ifstream fin(\"file.txt\"); getline(fin,line);"
                    },
                    {
                        "id": 28,
                        "title": "Template Function",
                        "difficulty": "hard",
                        "description": "Generic findMax function for any type.",
                        "expected": "Max int:9 Max float:7.5",
                        "hint": "template<typename T> T findMax(T a,T b)"
                    },
                    {
                        "id": 29,
                        "title": "Template Class",
                        "difficulty": "hard",
                        "description": "Generic Stack class using template.",
                        "expected": "Push:1,2,3 Pop:3",
                        "hint": "template<class T> class Stack{}"
                    },
                    {
                        "id": 30,
                        "title": "STL Vector",
                        "difficulty": "medium",
                        "description": "Use vector: push_back, pop_back, iterate.",
                        "expected": "1 2 3 4 5",
                        "hint": "vector<int> v; v.push_back(1);"
                    },
                    {
                        "id": 31,
                        "title": "STL Map",
                        "difficulty": "medium",
                        "description": "Store and retrieve key-value pairs.",
                        "expected": "Alice:92 Bob:85",
                        "hint": "map<string,int> m; m[\"Alice\"]=92;"
                    },
                    {
                        "id": 32,
                        "title": "STL Set",
                        "difficulty": "medium",
                        "description": "Store unique elements, check membership.",
                        "expected": "Set: 1 2 3 4 5",
                        "hint": "set<int> s; s.insert(3);"
                    },
                    {
                        "id": 33,
                        "title": "STL List",
                        "difficulty": "medium",
                        "description": "Doubly linked list operations.",
                        "expected": "List: 1 2 3 4",
                        "hint": "list<int> l; l.push_back(1);"
                    },
                    {
                        "id": 34,
                        "title": "STL Stack",
                        "difficulty": "medium",
                        "description": "Stack push pop peek.",
                        "expected": "Top:3 After pop:2",
                        "hint": "stack<int> st; st.push(1);"
                    },
                    {
                        "id": 35,
                        "title": "STL Queue",
                        "difficulty": "medium",
                        "description": "Queue enqueue dequeue.",
                        "expected": "Front:1 After dequeue:2",
                        "hint": "queue<int> q; q.push(1); q.pop();"
                    },
                    {
                        "id": 36,
                        "title": "STL Algorithm sort",
                        "difficulty": "medium",
                        "description": "Sort vector using STL sort.",
                        "expected": "Sorted: 1 2 3 4 5",
                        "hint": "sort(v.begin(),v.end());"
                    },
                    {
                        "id": 37,
                        "title": "STL find",
                        "difficulty": "medium",
                        "description": "Find element in vector.",
                        "expected": "Found 3 at index 2",
                        "hint": "auto it=find(v.begin(),v.end(),3);"
                    },
                    {
                        "id": 38,
                        "title": "Lambda Expression",
                        "difficulty": "hard",
                        "description": "Use lambda to filter even numbers.",
                        "expected": "Evens: 2 4 6",
                        "hint": "auto isEven=[](int n){return n%2==0;};"
                    },
                    {
                        "id": 39,
                        "title": "Smart Pointer unique_ptr",
                        "difficulty": "hard",
                        "description": "Use unique_ptr for memory management.",
                        "expected": "Value:42 Auto deleted",
                        "hint": "unique_ptr<int> p=make_unique<int>(42);"
                    },
                    {
                        "id": 40,
                        "title": "Smart Pointer shared_ptr",
                        "difficulty": "hard",
                        "description": "Share ownership with shared_ptr.",
                        "expected": "Count:2 Value:10",
                        "hint": "shared_ptr<int> p1=make_shared<int>(10);"
                    },
                    {
                        "id": 41,
                        "title": "Namespace",
                        "difficulty": "medium",
                        "description": "Create and use custom namespace.",
                        "expected": "Math::PI=3.14",
                        "hint": "namespace Math{ const double PI=3.14; }"
                    },
                    {
                        "id": 42,
                        "title": "Inline Function",
                        "difficulty": "easy",
                        "description": "Inline function for square.",
                        "expected": "Square of 5 = 25",
                        "hint": "inline int square(int n){ return n*n; }"
                    },
                    {
                        "id": 43,
                        "title": "Default Arguments",
                        "difficulty": "medium",
                        "description": "Function with default parameter values.",
                        "expected": "Hello Alice\nGood Morning Bob",
                        "hint": "void greet(string name,string msg=\"Hello\")"
                    },
                    {
                        "id": 44,
                        "title": "Function Overloading",
                        "difficulty": "medium",
                        "description": "Overload add() for int and float.",
                        "expected": "add(3,4)=7 add(1.5,2.5)=4.0",
                        "hint": "int add(int a,int b) and float add(float a,float b)"
                    },
                    {
                        "id": 45,
                        "title": "Reference Variables",
                        "difficulty": "medium",
                        "description": "Swap using references.",
                        "expected": "Before:5,10 After:10,5",
                        "hint": "void swap(int& a,int& b){ int t=a;a=b;b=t; }"
                    },
                    {
                        "id": 46,
                        "title": "Pointer Basics",
                        "difficulty": "medium",
                        "description": "Pointer declaration and dereferencing.",
                        "expected": "Value:10 Address:0x...",
                        "hint": "int* p=&a; cout<<*p;"
                    },
                    {
                        "id": 47,
                        "title": "this Pointer",
                        "difficulty": "medium",
                        "description": "Use this pointer in class.",
                        "expected": "Name:Alice (via this)",
                        "hint": "return this->name;"
                    },
                    {
                        "id": 48,
                        "title": "Virtual Destructor",
                        "difficulty": "hard",
                        "description": "Virtual destructor prevents memory leak.",
                        "expected": "Base destroyed\nDerived destroyed",
                        "hint": "virtual ~Base(){}"
                    },
                    {
                        "id": 49,
                        "title": "Pure Virtual Function",
                        "difficulty": "hard",
                        "description": "Abstract class with pure virtual.",
                        "expected": "Circle area:50.27",
                        "hint": "virtual double area()=0;"
                    },
                    {
                        "id": 50,
                        "title": "Multilevel Inheritance",
                        "difficulty": "hard",
                        "description": "A->B->C inheritance chain.",
                        "expected": "A:Animal B:Dog C:Puppy",
                        "hint": "class C : public B{}; class B : public A{}"
                    }
                ]
            },
            {
                "id": "s2_ds",
                "name": "Data Structures",
                "code": "BCA202",
                "problems": [
                    {
                        "id": 1,
                        "title": "Array Basics",
                        "difficulty": "easy",
                        "description": "Create array, input elements, print.",
                        "expected": "10 20 30 40 50",
                        "hint": "int arr[5]; for loop input/output."
                    },
                    {
                        "id": 2,
                        "title": "Array Reversal",
                        "difficulty": "easy",
                        "description": "Reverse array in place.",
                        "expected": "Original:1 2 3 4 5\nReversed:5 4 3 2 1",
                        "hint": "Swap arr[i] and arr[n-1-i]."
                    },
                    {
                        "id": 3,
                        "title": "Array Search",
                        "difficulty": "easy",
                        "description": "Linear search in array.",
                        "expected": "Found 30 at index 2",
                        "hint": "Loop and compare each element."
                    },
                    {
                        "id": 4,
                        "title": "Array Sort Bubble",
                        "difficulty": "medium",
                        "description": "Bubble sort implementation.",
                        "expected": "Sorted: 1 2 3 4 5",
                        "hint": "Nested loops, swap adjacent if out of order."
                    },
                    {
                        "id": 5,
                        "title": "Stack using Array",
                        "difficulty": "medium",
                        "description": "Push, pop, peek, isEmpty using array.",
                        "expected": "Push:1,2,3 Peek:3 Pop:3",
                        "hint": "int stack[100]; int top=-1;"
                    },
                    {
                        "id": 6,
                        "title": "Stack using Linked List",
                        "difficulty": "hard",
                        "description": "Stack with dynamic linked list.",
                        "expected": "Push:A,B,C Pop:C",
                        "hint": "struct Node{ int data; Node* next; };"
                    },
                    {
                        "id": 7,
                        "title": "Queue using Array",
                        "difficulty": "medium",
                        "description": "Enqueue, dequeue, front, rear.",
                        "expected": "Enqueue:1,2,3 Dequeue:1",
                        "hint": "int queue[100]; int front=0,rear=-1;"
                    },
                    {
                        "id": 8,
                        "title": "Circular Queue",
                        "difficulty": "hard",
                        "description": "Circular queue to avoid wastage.",
                        "expected": "Circular queue: 1 2 3",
                        "hint": "rear=(rear+1)%SIZE;"
                    },
                    {
                        "id": 9,
                        "title": "Deque",
                        "difficulty": "hard",
                        "description": "Double ended queue operations.",
                        "expected": "Front add:1 Rear add:2",
                        "hint": "Add/remove from both ends."
                    },
                    {
                        "id": 10,
                        "title": "Singly Linked List",
                        "difficulty": "medium",
                        "description": "Insert, delete, traverse.",
                        "expected": "List: 1->2->3->NULL",
                        "hint": "struct Node{ int data; Node* next; };"
                    },
                    {
                        "id": 11,
                        "title": "Doubly Linked List",
                        "difficulty": "hard",
                        "description": "Insert, delete, traverse forward/backward.",
                        "expected": "Forward:1 2 3\nBackward:3 2 1",
                        "hint": "struct Node{ int data; Node *prev,*next; };"
                    },
                    {
                        "id": 12,
                        "title": "Circular Linked List",
                        "difficulty": "hard",
                        "description": "Circular linked list traversal.",
                        "expected": "1->2->3->1(circular)",
                        "hint": "Last node points to head."
                    },
                    {
                        "id": 13,
                        "title": "Linked List Reverse",
                        "difficulty": "hard",
                        "description": "Reverse a linked list.",
                        "expected": "Original:1->2->3\nReversed:3->2->1",
                        "hint": "Use three pointers: prev, curr, next."
                    },
                    {
                        "id": 14,
                        "title": "Linked List Middle",
                        "difficulty": "medium",
                        "description": "Find middle of linked list.",
                        "expected": "Middle of 1->2->3->4->5 is 3",
                        "hint": "Slow and fast pointer technique."
                    },
                    {
                        "id": 15,
                        "title": "Linked List Cycle",
                        "difficulty": "hard",
                        "description": "Detect cycle in linked list.",
                        "expected": "Cycle detected: Yes",
                        "hint": "Floyd cycle detection: slow/fast pointers."
                    },
                    {
                        "id": 16,
                        "title": "Binary Tree Insert",
                        "difficulty": "medium",
                        "description": "Insert nodes in binary tree.",
                        "expected": "Tree created with root 5",
                        "hint": "struct Node{ int data; Node *left,*right; };"
                    },
                    {
                        "id": 17,
                        "title": "Inorder Traversal",
                        "difficulty": "medium",
                        "description": "Inorder (Left-Root-Right) traversal.",
                        "expected": "Inorder: 1 2 3 4 5",
                        "hint": "Recursively visit left, root, right."
                    },
                    {
                        "id": 18,
                        "title": "Preorder Traversal",
                        "difficulty": "medium",
                        "description": "Preorder (Root-Left-Right) traversal.",
                        "expected": "Preorder: 5 3 1 4 7",
                        "hint": "Visit root first, then left, then right."
                    },
                    {
                        "id": 19,
                        "title": "Postorder Traversal",
                        "difficulty": "medium",
                        "description": "Postorder (Left-Right-Root) traversal.",
                        "expected": "Postorder: 1 4 3 7 5",
                        "hint": "Visit left, right, then root."
                    },
                    {
                        "id": 20,
                        "title": "Level Order Traversal",
                        "difficulty": "hard",
                        "description": "BFS level-by-level traversal.",
                        "expected": "Level 0:5\nLevel 1:3 7\nLevel 2:1 4",
                        "hint": "Use queue for BFS."
                    },
                    {
                        "id": 21,
                        "title": "BST Insert Search",
                        "difficulty": "medium",
                        "description": "Binary Search Tree insert and search.",
                        "expected": "Inserted:5,3,7\nSearch 3: Found",
                        "hint": "Left<root<right property."
                    },
                    {
                        "id": 22,
                        "title": "BST Delete",
                        "difficulty": "hard",
                        "description": "Delete node from BST.",
                        "expected": "After deleting 3: 1 5 7",
                        "hint": "Handle 3 cases: leaf, one child, two children."
                    },
                    {
                        "id": 23,
                        "title": "BST Height",
                        "difficulty": "medium",
                        "description": "Find height of binary tree.",
                        "expected": "Height of tree: 3",
                        "hint": "height=1+max(height(left),height(right))"
                    },
                    {
                        "id": 24,
                        "title": "BST Min Max",
                        "difficulty": "easy",
                        "description": "Find min and max in BST.",
                        "expected": "Min:1 Max:9",
                        "hint": "Min: go left. Max: go right."
                    },
                    {
                        "id": 25,
                        "title": "Graph Adjacency Matrix",
                        "difficulty": "medium",
                        "description": "Represent graph as adjacency matrix.",
                        "expected": "Matrix:\n0 1 1\n1 0 1\n1 1 0",
                        "hint": "int graph[V][V]; graph[i][j]=1 if edge."
                    },
                    {
                        "id": 26,
                        "title": "Graph Adjacency List",
                        "difficulty": "medium",
                        "description": "Represent graph as adjacency list.",
                        "expected": "0: 1 2\n1: 0 2\n2: 0 1",
                        "hint": "vector<int> adj[V]; adj[u].push_back(v);"
                    },
                    {
                        "id": 27,
                        "title": "BFS Graph",
                        "difficulty": "medium",
                        "description": "Breadth First Search traversal.",
                        "expected": "BFS: 0 1 2 3 4",
                        "hint": "Use queue. Mark visited."
                    },
                    {
                        "id": 28,
                        "title": "DFS Graph",
                        "difficulty": "medium",
                        "description": "Depth First Search traversal.",
                        "expected": "DFS: 0 1 3 4 2",
                        "hint": "Use recursion. Mark visited."
                    },
                    {
                        "id": 29,
                        "title": "Heap Insert",
                        "difficulty": "hard",
                        "description": "Min-heap insert and heapify.",
                        "expected": "Heap: 1 3 2 7 5",
                        "hint": "Parent at i, children at 2i+1 and 2i+2."
                    },
                    {
                        "id": 30,
                        "title": "Heap Extract Min",
                        "difficulty": "hard",
                        "description": "Extract minimum from min-heap.",
                        "expected": "Min:1 After extract: 2 3 5 7",
                        "hint": "Replace root with last, heapify down."
                    },
                    {
                        "id": 31,
                        "title": "Hash Table",
                        "difficulty": "hard",
                        "description": "Hash table with chaining for collision.",
                        "expected": "Insert:5,15,25 (chain at index 5)",
                        "hint": "hash(key)=key%size; chain with linked list."
                    },
                    {
                        "id": 32,
                        "title": "Hash Table Open Addressing",
                        "difficulty": "hard",
                        "description": "Linear probing for collision resolution.",
                        "expected": "Inserted at: 5,6,7",
                        "hint": "probe=(hash+i)%size;"
                    },
                    {
                        "id": 33,
                        "title": "Trie Insert Search",
                        "difficulty": "hard",
                        "description": "Trie for string storage and search.",
                        "expected": "Inserted: apple\nSearch apple: Found",
                        "hint": "struct TrieNode{ TrieNode* children[26]; bool isEnd; };"
                    },
                    {
                        "id": 34,
                        "title": "Segment Tree",
                        "difficulty": "hard",
                        "description": "Range sum query with segment tree.",
                        "expected": "Sum(1,3)=9",
                        "hint": "Build tree. Query and update in O(log n)."
                    },
                    {
                        "id": 35,
                        "title": "Fenwick Tree",
                        "difficulty": "hard",
                        "description": "Binary indexed tree for prefix sums.",
                        "expected": "Prefix sum(4)=10",
                        "hint": "BIT update and query operations."
                    },
                    {
                        "id": 36,
                        "title": "Sparse Table",
                        "difficulty": "hard",
                        "description": "Range minimum query with sparse table.",
                        "expected": "RMQ(1,4)=2",
                        "hint": "Precompute powers of 2 ranges."
                    },
                    {
                        "id": 37,
                        "title": "Disjoint Set Union",
                        "difficulty": "hard",
                        "description": "Union-Find with path compression.",
                        "expected": "Union(1,2) Union(2,3) Find(1)==Find(3): Yes",
                        "hint": "parent[x]=find(parent[x]);"
                    },
                    {
                        "id": 38,
                        "title": "Priority Queue",
                        "difficulty": "medium",
                        "description": "Max priority queue operations.",
                        "expected": "Max:9 After extract:7",
                        "hint": "Use heap. Highest priority served first."
                    },
                    {
                        "id": 39,
                        "title": "Expression Evaluation",
                        "difficulty": "hard",
                        "description": "Evaluate infix expression using stack.",
                        "expected": "3+4*2 = 11",
                        "hint": "Convert to postfix, then evaluate."
                    },
                    {
                        "id": 40,
                        "title": "Balanced Parentheses",
                        "difficulty": "medium",
                        "description": "Check if parentheses are balanced.",
                        "expected": "(({})) : Balanced\n({)} : Not balanced",
                        "hint": "Push open, pop and match on close."
                    },
                    {
                        "id": 41,
                        "title": "Infix to Postfix",
                        "difficulty": "hard",
                        "description": "Convert infix to postfix using stack.",
                        "expected": "a+b*c -> abc*+",
                        "hint": "Use operator precedence and stack."
                    },
                    {
                        "id": 42,
                        "title": "Postfix Evaluation",
                        "difficulty": "hard",
                        "description": "Evaluate postfix expression.",
                        "expected": "231*+9- = -4",
                        "hint": "Push operands, pop two on operator."
                    },
                    {
                        "id": 43,
                        "title": "Merge Sort",
                        "difficulty": "medium",
                        "description": "Sort using merge sort.",
                        "expected": "Sorted: 1 2 3 4 5",
                        "hint": "Divide, sort halves, merge."
                    },
                    {
                        "id": 44,
                        "title": "Quick Sort",
                        "difficulty": "medium",
                        "description": "Sort using quick sort.",
                        "expected": "Sorted: 1 2 3 4 5",
                        "hint": "Partition around pivot, recurse."
                    },
                    {
                        "id": 45,
                        "title": "Counting Sort",
                        "difficulty": "medium",
                        "description": "Sort using counting sort.",
                        "expected": "Sorted: 1 2 2 3 4",
                        "hint": "Count occurrences, reconstruct."
                    },
                    {
                        "id": 46,
                        "title": "Radix Sort",
                        "difficulty": "hard",
                        "description": "Sort using radix sort.",
                        "expected": "Sorted: 2 24 45 66 75",
                        "hint": "Sort digit by digit using counting sort."
                    },
                    {
                        "id": 47,
                        "title": "Topological Sort",
                        "difficulty": "hard",
                        "description": "Topological ordering of DAG.",
                        "expected": "Order: 5 4 2 3 1 0",
                        "hint": "DFS based. Push to stack after visiting."
                    },
                    {
                        "id": 48,
                        "title": "Shortest Path Dijkstra",
                        "difficulty": "hard",
                        "description": "Dijkstra shortest path.",
                        "expected": "0->4: distance=21",
                        "hint": "Min-heap. Relax edges."
                    },
                    {
                        "id": 49,
                        "title": "Minimum Spanning Tree",
                        "difficulty": "hard",
                        "description": "Prim MST algorithm.",
                        "expected": "MST weight: 16",
                        "hint": "Greedy. Add min edge connecting visited to unvisited."
                    },
                    {
                        "id": 50,
                        "title": "AVL Tree Insert",
                        "difficulty": "hard",
                        "description": "Self-balancing AVL tree insertion.",
                        "expected": "Balanced tree after insert",
                        "hint": "Rotate left/right to maintain balance factor -1,0,1."
                    }
                ]
            },
            {
                "id": "s2_dbms",
                "name": "Database Management",
                "code": "BCA203",
                "problems": [
                    {
                        "id": 1,
                        "title": "CREATE TABLE",
                        "difficulty": "easy",
                        "description": "Create students table with id,name,marks.",
                        "expected": "Table created successfully",
                        "hint": "CREATE TABLE students(id INT PRIMARY KEY, name VARCHAR(50), marks INT);"
                    },
                    {
                        "id": 2,
                        "title": "INSERT Records",
                        "difficulty": "easy",
                        "description": "Insert 3 student records.",
                        "expected": "3 rows inserted",
                        "hint": "INSERT INTO students VALUES(1,\"Alice\",92);"
                    },
                    {
                        "id": 3,
                        "title": "SELECT All",
                        "difficulty": "easy",
                        "description": "Fetch all records from table.",
                        "expected": "1 Alice 92\n2 Bob 85",
                        "hint": "SELECT * FROM students;"
                    },
                    {
                        "id": 4,
                        "title": "SELECT WHERE",
                        "difficulty": "easy",
                        "description": "Fetch students with marks > 80.",
                        "expected": "Alice:92 Bob:85",
                        "hint": "SELECT * FROM students WHERE marks>80;"
                    },
                    {
                        "id": 5,
                        "title": "UPDATE Record",
                        "difficulty": "easy",
                        "description": "Update marks of a student.",
                        "expected": "Updated Bob to 90",
                        "hint": "UPDATE students SET marks=90 WHERE name=\"Bob\";"
                    },
                    {
                        "id": 6,
                        "title": "DELETE Record",
                        "difficulty": "easy",
                        "description": "Delete a student by ID.",
                        "expected": "Deleted ID 2",
                        "hint": "DELETE FROM students WHERE id=2;"
                    },
                    {
                        "id": 7,
                        "title": "ORDER BY",
                        "difficulty": "easy",
                        "description": "Sort students by marks descending.",
                        "expected": "Alice:92 Bob:85 Carol:78",
                        "hint": "SELECT * FROM students ORDER BY marks DESC;"
                    },
                    {
                        "id": 8,
                        "title": "DISTINCT",
                        "difficulty": "easy",
                        "description": "Get unique department names.",
                        "expected": "CS IT ECE",
                        "hint": "SELECT DISTINCT dept FROM students;"
                    },
                    {
                        "id": 9,
                        "title": "COUNT SUM AVG",
                        "difficulty": "medium",
                        "description": "Count students, sum and average marks.",
                        "expected": "Count:3 Sum:255 Avg:85",
                        "hint": "SELECT COUNT(*),SUM(marks),AVG(marks) FROM students;"
                    },
                    {
                        "id": 10,
                        "title": "MAX MIN",
                        "difficulty": "easy",
                        "description": "Find highest and lowest marks.",
                        "expected": "Max:92 Min:78",
                        "hint": "SELECT MAX(marks),MIN(marks) FROM students;"
                    },
                    {
                        "id": 11,
                        "title": "GROUP BY",
                        "difficulty": "medium",
                        "description": "Count students per department.",
                        "expected": "CS:3 IT:2 ECE:1",
                        "hint": "SELECT dept,COUNT(*) FROM students GROUP BY dept;"
                    },
                    {
                        "id": 12,
                        "title": "HAVING",
                        "difficulty": "medium",
                        "description": "Departments with more than 2 students.",
                        "expected": "CS:3",
                        "hint": "SELECT dept,COUNT(*) FROM students GROUP BY dept HAVING COUNT(*)>2;"
                    },
                    {
                        "id": 13,
                        "title": "LIKE",
                        "difficulty": "easy",
                        "description": "Find students whose name starts with A.",
                        "expected": "Alice Amy",
                        "hint": "SELECT * FROM students WHERE name LIKE \"A%\";"
                    },
                    {
                        "id": 14,
                        "title": "BETWEEN",
                        "difficulty": "easy",
                        "description": "Students with marks between 80 and 90.",
                        "expected": "Bob:85 Carol:88",
                        "hint": "SELECT * FROM students WHERE marks BETWEEN 80 AND 90;"
                    },
                    {
                        "id": 15,
                        "title": "IN Operator",
                        "difficulty": "easy",
                        "description": "Students in specific departments.",
                        "expected": "Alice Bob",
                        "hint": "SELECT * FROM students WHERE dept IN (\"CS\",\"IT\");"
                    },
                    {
                        "id": 16,
                        "title": "INNER JOIN",
                        "difficulty": "medium",
                        "description": "Join students and courses tables.",
                        "expected": "Alice - Math\nBob - Science",
                        "hint": "SELECT s.name,c.course FROM students s INNER JOIN courses c ON s.id=c.student_id;"
                    },
                    {
                        "id": 17,
                        "title": "LEFT JOIN",
                        "difficulty": "medium",
                        "description": "All students with their courses if any.",
                        "expected": "Alice-Math Bob-NULL",
                        "hint": "SELECT s.name,c.course FROM students s LEFT JOIN courses c ON s.id=c.student_id;"
                    },
                    {
                        "id": 18,
                        "title": "RIGHT JOIN",
                        "difficulty": "medium",
                        "description": "All courses with student if enrolled.",
                        "expected": "Math-Alice Science-NULL",
                        "hint": "SELECT s.name,c.course FROM students s RIGHT JOIN courses c ON s.id=c.student_id;"
                    },
                    {
                        "id": 19,
                        "title": "SELF JOIN",
                        "difficulty": "hard",
                        "description": "Find students in same department.",
                        "expected": "Alice and Bob both in CS",
                        "hint": "SELECT a.name,b.name FROM students a,students b WHERE a.dept=b.dept AND a.id<b.id;"
                    },
                    {
                        "id": 20,
                        "title": "Subquery",
                        "difficulty": "hard",
                        "description": "Students with marks above average.",
                        "expected": "Alice:92",
                        "hint": "SELECT * FROM students WHERE marks>(SELECT AVG(marks) FROM students);"
                    },
                    {
                        "id": 21,
                        "title": "Correlated Subquery",
                        "difficulty": "hard",
                        "description": "Students with max marks in their dept.",
                        "expected": "Alice(CS) Dave(IT)",
                        "hint": "SELECT * FROM students s WHERE marks=(SELECT MAX(marks) FROM students WHERE dept=s.dept);"
                    },
                    {
                        "id": 22,
                        "title": "CREATE INDEX",
                        "difficulty": "medium",
                        "description": "Create index on name column.",
                        "expected": "Index created",
                        "hint": "CREATE INDEX idx_name ON students(name);"
                    },
                    {
                        "id": 23,
                        "title": "CREATE VIEW",
                        "difficulty": "medium",
                        "description": "Create view for top students.",
                        "expected": "View created",
                        "hint": "CREATE VIEW top_students AS SELECT * FROM students WHERE marks>=90;"
                    },
                    {
                        "id": 24,
                        "title": "Stored Procedure",
                        "difficulty": "hard",
                        "description": "Procedure to get students by dept.",
                        "expected": "CALL get_students(\"CS\")",
                        "hint": "CREATE PROCEDURE get_students(IN dept VARCHAR(20)) BEGIN SELECT * FROM students WHERE dept=dept; END"
                    },
                    {
                        "id": 25,
                        "title": "Trigger",
                        "difficulty": "hard",
                        "description": "Trigger to log deletions.",
                        "expected": "Trigger fires on DELETE",
                        "hint": "CREATE TRIGGER after_delete AFTER DELETE ON students FOR EACH ROW INSERT INTO log VALUES(OLD.id);"
                    },
                    {
                        "id": 26,
                        "title": "Transaction COMMIT",
                        "difficulty": "hard",
                        "description": "Transfer marks with transaction.",
                        "expected": "Transaction committed",
                        "hint": "START TRANSACTION; UPDATE...; COMMIT;"
                    },
                    {
                        "id": 27,
                        "title": "Transaction ROLLBACK",
                        "difficulty": "hard",
                        "description": "Rollback on error.",
                        "expected": "Transaction rolled back",
                        "hint": "START TRANSACTION; UPDATE...; ROLLBACK;"
                    },
                    {
                        "id": 28,
                        "title": "FOREIGN KEY",
                        "difficulty": "medium",
                        "description": "Create courses table with FK to students.",
                        "expected": "FK constraint created",
                        "hint": "FOREIGN KEY(student_id) REFERENCES students(id)"
                    },
                    {
                        "id": 29,
                        "title": "Normalization 1NF",
                        "difficulty": "medium",
                        "description": "Convert table to First Normal Form.",
                        "expected": "Atomic values in each cell",
                        "hint": "Remove repeating groups. Each cell one value."
                    },
                    {
                        "id": 30,
                        "title": "Normalization 2NF",
                        "difficulty": "hard",
                        "description": "Remove partial dependencies.",
                        "expected": "No partial dependency on PK",
                        "hint": "Every non-key attribute fully dependent on PK."
                    },
                    {
                        "id": 31,
                        "title": "Normalization 3NF",
                        "difficulty": "hard",
                        "description": "Remove transitive dependencies.",
                        "expected": "No transitive dependency",
                        "hint": "Non-key attributes depend only on PK."
                    },
                    {
                        "id": 32,
                        "title": "ER Diagram to Tables",
                        "difficulty": "hard",
                        "description": "Convert ER diagram to relational tables.",
                        "expected": "3 tables created from ER",
                        "hint": "Entity->table, relationship->FK or junction table."
                    },
                    {
                        "id": 33,
                        "title": "UNION",
                        "difficulty": "medium",
                        "description": "Combine results of two queries.",
                        "expected": "All students from CS and IT",
                        "hint": "SELECT * FROM cs_students UNION SELECT * FROM it_students;"
                    },
                    {
                        "id": 34,
                        "title": "INTERSECT",
                        "difficulty": "medium",
                        "description": "Common records in two queries.",
                        "expected": "Students in both CS and honors",
                        "hint": "SELECT * FROM cs INTERSECT SELECT * FROM honors;"
                    },
                    {
                        "id": 35,
                        "title": "EXCEPT",
                        "difficulty": "medium",
                        "description": "Records in first but not second query.",
                        "expected": "CS students not in honors",
                        "hint": "SELECT * FROM cs EXCEPT SELECT * FROM honors;"
                    },
                    {
                        "id": 36,
                        "title": "CASE Statement",
                        "difficulty": "medium",
                        "description": "Grade based on marks using CASE.",
                        "expected": "Alice:A Bob:B Carol:C",
                        "hint": "SELECT name, CASE WHEN marks>=90 THEN \"A\" WHEN marks>=80 THEN \"B\" ELSE \"C\" END FROM students;"
                    },
                    {
                        "id": 37,
                        "title": "NULL Handling",
                        "difficulty": "easy",
                        "description": "Find students with NULL phone.",
                        "expected": "Students with no phone: 2",
                        "hint": "SELECT * FROM students WHERE phone IS NULL;"
                    },
                    {
                        "id": 38,
                        "title": "COALESCE",
                        "difficulty": "medium",
                        "description": "Replace NULL with default value.",
                        "expected": "Phone: 000-0000 (default)",
                        "hint": "SELECT COALESCE(phone,\"000-0000\") FROM students;"
                    },
                    {
                        "id": 39,
                        "title": "String Functions",
                        "difficulty": "easy",
                        "description": "Use UPPER,LOWER,LENGTH,CONCAT.",
                        "expected": "ALICE alice 5 Alice-92",
                        "hint": "SELECT UPPER(name),LOWER(name),LENGTH(name) FROM students;"
                    },
                    {
                        "id": 40,
                        "title": "Date Functions",
                        "difficulty": "medium",
                        "description": "Extract year,month,day from date.",
                        "expected": "Year:2026 Month:4 Day:14",
                        "hint": "SELECT YEAR(dob),MONTH(dob),DAY(dob) FROM students;"
                    },
                    {
                        "id": 41,
                        "title": "LIMIT OFFSET",
                        "difficulty": "easy",
                        "description": "Pagination: get 3 records per page.",
                        "expected": "Page 1: Alice Bob Carol",
                        "hint": "SELECT * FROM students LIMIT 3 OFFSET 0;"
                    },
                    {
                        "id": 42,
                        "title": "ALTER TABLE",
                        "difficulty": "medium",
                        "description": "Add column to existing table.",
                        "expected": "Column phone added",
                        "hint": "ALTER TABLE students ADD phone VARCHAR(15);"
                    },
                    {
                        "id": 43,
                        "title": "DROP TABLE",
                        "difficulty": "easy",
                        "description": "Drop a table.",
                        "expected": "Table dropped",
                        "hint": "DROP TABLE IF EXISTS temp_table;"
                    },
                    {
                        "id": 44,
                        "title": "TRUNCATE",
                        "difficulty": "easy",
                        "description": "Remove all records keeping structure.",
                        "expected": "Table truncated",
                        "hint": "TRUNCATE TABLE students;"
                    },
                    {
                        "id": 45,
                        "title": "Aggregate with JOIN",
                        "difficulty": "hard",
                        "description": "Average marks per department with names.",
                        "expected": "CS avg:88 IT avg:82",
                        "hint": "SELECT dept,AVG(marks) FROM students JOIN dept_info USING(dept_id) GROUP BY dept;"
                    },
                    {
                        "id": 46,
                        "title": "Rank Function",
                        "difficulty": "hard",
                        "description": "Rank students by marks.",
                        "expected": "Alice:1 Bob:2 Carol:3",
                        "hint": "SELECT name,RANK() OVER(ORDER BY marks DESC) FROM students;"
                    },
                    {
                        "id": 47,
                        "title": "ROW_NUMBER",
                        "difficulty": "hard",
                        "description": "Assign row numbers.",
                        "expected": "1 Alice 2 Bob 3 Carol",
                        "hint": "SELECT ROW_NUMBER() OVER(ORDER BY marks DESC),name FROM students;"
                    },
                    {
                        "id": 48,
                        "title": "PARTITION BY",
                        "difficulty": "hard",
                        "description": "Rank within each department.",
                        "expected": "CS:Alice-1,Bob-2 IT:Dave-1",
                        "hint": "RANK() OVER(PARTITION BY dept ORDER BY marks DESC)"
                    },
                    {
                        "id": 49,
                        "title": "Full Text Search",
                        "difficulty": "hard",
                        "description": "Search text in description column.",
                        "expected": "Found 3 matching records",
                        "hint": "SELECT * FROM articles WHERE MATCH(content) AGAINST(\"database\");"
                    },
                    {
                        "id": 50,
                        "title": "Database Backup",
                        "difficulty": "medium",
                        "description": "Export database to SQL file.",
                        "expected": "Backup created: backup.sql",
                        "hint": "mysqldump -u root -p campuscode > backup.sql"
                    }
                ]
            }
        ]
    },
    "semester3": {
        "name": "Semester 3",
        "subjects": [
            {
                "id": "s3_java",
                "name": "Java Programming",
                "code": "BCA301",
                "problems": [
                    {
                        "id": 1,
                        "title": "Hello World in Java",
                        "difficulty": "easy",
                        "description": "Write a Java program that prints Hello World to the console.",
                        "expected": "Hello, World!",
                        "hint": "Use System.out.println() inside main method."
                    },
                    {
                        "id": 2,
                        "title": "Variables and Data Types",
                        "difficulty": "easy",
                        "description": "Declare int, float, double, char, boolean variables. Assign values and print each.",
                        "expected": "int: 10\nfloat: 3.14\nchar: A\nboolean: true",
                        "hint": "Use System.out.println() for each variable."
                    },
                    {
                        "id": 3,
                        "title": "Arithmetic Operators",
                        "difficulty": "easy",
                        "description": "Take two integers and perform +,-,*,/,% operations.",
                        "expected": "Add:13 Sub:7 Mul:30 Div:3 Mod:1",
                        "hint": "Use standard arithmetic operators."
                    },
                    {
                        "id": 4,
                        "title": "If-Else Statement",
                        "difficulty": "easy",
                        "description": "Check if a number is positive, negative, or zero.",
                        "expected": "5 is Positive",
                        "hint": "Use if-else if-else chain."
                    },
                    {
                        "id": 5,
                        "title": "Switch Statement",
                        "difficulty": "easy",
                        "description": "Print day name for day number 1-7 using switch.",
                        "expected": "Day 3: Wednesday",
                        "hint": "Use switch(day) with 7 cases."
                    },
                    {
                        "id": 6,
                        "title": "For Loop",
                        "difficulty": "easy",
                        "description": "Print multiplication table of a number using for loop.",
                        "expected": "5x1=5\n5x2=10\n5x10=50",
                        "hint": "for(int i=1;i<=10;i++) System.out.println(n+\"x\"+i+\"=\"+n*i);"
                    },
                    {
                        "id": 7,
                        "title": "While Loop",
                        "difficulty": "easy",
                        "description": "Print sum of digits of a number using while loop.",
                        "expected": "Number: 1234\nSum: 10",
                        "hint": "while(n>0){ sum+=n%10; n/=10; }"
                    },
                    {
                        "id": 8,
                        "title": "Factorial using Loop",
                        "difficulty": "easy",
                        "description": "Calculate factorial of n using for loop.",
                        "expected": "5! = 120",
                        "hint": "long fact=1; for(int i=1;i<=n;i++) fact*=i;"
                    },
                    {
                        "id": 9,
                        "title": "Fibonacci Series",
                        "difficulty": "medium",
                        "description": "Print first n Fibonacci numbers.",
                        "expected": "0 1 1 2 3 5 8 13",
                        "hint": "int a=0,b=1; for loop: print a, then c=a+b, a=b, b=c"
                    },
                    {
                        "id": 10,
                        "title": "Prime Number Check",
                        "difficulty": "medium",
                        "description": "Check if a number is prime.",
                        "expected": "17 is Prime",
                        "hint": "Loop from 2 to sqrt(n). If any divides evenly, not prime."
                    },
                    {
                        "id": 11,
                        "title": "Array Input and Output",
                        "difficulty": "easy",
                        "description": "Take 5 integers in array and print them.",
                        "expected": "Array: 10 20 30 40 50",
                        "hint": "int[] arr = new int[5]; Use Scanner for input."
                    },
                    {
                        "id": 12,
                        "title": "Array Sum and Average",
                        "difficulty": "easy",
                        "description": "Find sum and average of array elements.",
                        "expected": "Sum=150 Average=30.0",
                        "hint": "Loop through array, add to sum. Divide by length for average."
                    },
                    {
                        "id": 13,
                        "title": "Array Max and Min",
                        "difficulty": "easy",
                        "description": "Find maximum and minimum in array.",
                        "expected": "Max=90 Min=10",
                        "hint": "Initialize max=arr[0], min=arr[0]. Compare each element."
                    },
                    {
                        "id": 14,
                        "title": "Bubble Sort in Java",
                        "difficulty": "medium",
                        "description": "Sort array using bubble sort.",
                        "expected": "Before: 64 34 25 12\nAfter: 12 25 34 64",
                        "hint": "Nested loops. Swap adjacent elements if out of order."
                    },
                    {
                        "id": 15,
                        "title": "Binary Search in Java",
                        "difficulty": "medium",
                        "description": "Search element in sorted array using binary search.",
                        "expected": "Found 20 at index 3",
                        "hint": "int low=0,high=n-1; while(low<=high){ mid=(low+high)/2; }"
                    },
                    {
                        "id": 16,
                        "title": "String Operations",
                        "difficulty": "easy",
                        "description": "Demonstrate length(), charAt(), substring(), toUpperCase(), contains() on a string.",
                        "expected": "Length:5 Upper:HELLO Contains:true",
                        "hint": "String methods are called on string object: str.length()"
                    },
                    {
                        "id": 17,
                        "title": "String Palindrome Check",
                        "difficulty": "medium",
                        "description": "Check if a string is palindrome.",
                        "expected": "madam is Palindrome",
                        "hint": "Compare str with new StringBuilder(str).reverse().toString()"
                    },
                    {
                        "id": 18,
                        "title": "String Anagram Check",
                        "difficulty": "medium",
                        "description": "Check if two strings are anagrams.",
                        "expected": "listen and silent are Anagrams",
                        "hint": "Sort both strings as char arrays and compare."
                    },
                    {
                        "id": 19,
                        "title": "Class and Object",
                        "difficulty": "medium",
                        "description": "Create Student class with name, roll, marks. Create object and display details.",
                        "expected": "Name:Alice Roll:101 Marks:92",
                        "hint": "class Student{ String name; int roll; float marks; }"
                    },
                    {
                        "id": 20,
                        "title": "Constructor",
                        "difficulty": "medium",
                        "description": "Create class with parameterized constructor. Initialize and display values.",
                        "expected": "Box: 5x3x2 Volume=30",
                        "hint": "public Box(int l,int w,int h){ this.l=l; this.w=w; this.h=h; }"
                    },
                    {
                        "id": 21,
                        "title": "Inheritance",
                        "difficulty": "medium",
                        "description": "Create Animal base class with speak(). Derive Dog and Cat classes.",
                        "expected": "Dog: Woof!\nCat: Meow!",
                        "hint": "class Dog extends Animal{ void speak(){ System.out.println(\"Woof!\"); } }"
                    },
                    {
                        "id": 22,
                        "title": "Method Overriding",
                        "difficulty": "medium",
                        "description": "Override toString() and area() methods in Shape hierarchy.",
                        "expected": "Circle area: 78.54\nRectangle area: 24",
                        "hint": "Use @Override annotation. Call super.method() if needed."
                    },
                    {
                        "id": 23,
                        "title": "Interface",
                        "difficulty": "medium",
                        "description": "Create Drawable interface with draw(). Implement in Circle and Rectangle.",
                        "expected": "Drawing Circle\nDrawing Rectangle",
                        "hint": "interface Drawable{ void draw(); } class Circle implements Drawable{...}"
                    },
                    {
                        "id": 24,
                        "title": "Abstract Class",
                        "difficulty": "medium",
                        "description": "Create abstract Shape class with abstract area(). Implement in subclasses.",
                        "expected": "Circle area: 78.54\nTriangle area: 12.0",
                        "hint": "abstract class Shape{ abstract double area(); }"
                    },
                    {
                        "id": 25,
                        "title": "Polymorphism",
                        "difficulty": "medium",
                        "description": "Demonstrate runtime polymorphism using parent class reference.",
                        "expected": "Shape area: 78.54\nShape area: 24.0",
                        "hint": "Shape s = new Circle(5); s.area() calls Circle's area()."
                    },
                    {
                        "id": 26,
                        "title": "Exception Handling",
                        "difficulty": "medium",
                        "description": "Handle ArithmeticException for division by zero using try-catch.",
                        "expected": "Result: 5\nError: Division by zero!",
                        "hint": "try{ int r=a/b; }catch(ArithmeticException e){ System.out.println(e.getMessage()); }"
                    },
                    {
                        "id": 27,
                        "title": "Custom Exception",
                        "difficulty": "hard",
                        "description": "Create custom InvalidAgeException. Throw it when age < 0 or > 150.",
                        "expected": "Exception: Invalid age: -5\nValid age: 25",
                        "hint": "class InvalidAgeException extends Exception{ public InvalidAgeException(String msg){ super(msg); } }"
                    },
                    {
                        "id": 28,
                        "title": "Multiple Catch Blocks",
                        "difficulty": "medium",
                        "description": "Handle multiple exceptions: ArrayIndexOutOfBounds, NumberFormat, ArithmeticException.",
                        "expected": "Caught: ArrayIndexOutOfBoundsException\nCaught: NumberFormatException",
                        "hint": "Use multiple catch blocks after single try. Most specific first."
                    },
                    {
                        "id": 29,
                        "title": "File Write in Java",
                        "difficulty": "medium",
                        "description": "Write student records to a file using FileWriter.",
                        "expected": "Written to file.\nFile: students.txt created.",
                        "hint": "FileWriter fw = new FileWriter(\"students.txt\"); fw.write(data); fw.close();"
                    },
                    {
                        "id": 30,
                        "title": "File Read in Java",
                        "difficulty": "medium",
                        "description": "Read and display file contents using BufferedReader.",
                        "expected": "Line 1: Alice 92\nLine 2: Bob 85",
                        "hint": "BufferedReader br = new BufferedReader(new FileReader(\"file.txt\")); br.readLine()"
                    },
                    {
                        "id": 31,
                        "title": "ArrayList Operations",
                        "difficulty": "medium",
                        "description": "Create ArrayList of integers. Add, remove, search, sort elements.",
                        "expected": "List: [10,20,30,40]\nAfter remove: [10,30,40]\nSorted: [10,30,40]",
                        "hint": "ArrayList<Integer> list = new ArrayList<>(); list.add(), list.remove(), Collections.sort()"
                    },
                    {
                        "id": 32,
                        "title": "HashMap Operations",
                        "difficulty": "medium",
                        "description": "Create HashMap of student names and marks. Add, retrieve, update, delete entries.",
                        "expected": "Alice:92 Bob:85\nUpdated Bob:90\nRemoved Alice",
                        "hint": "HashMap<String,Integer> map = new HashMap<>(); map.put(), map.get(), map.remove()"
                    },
                    {
                        "id": 33,
                        "title": "LinkedList in Java",
                        "difficulty": "medium",
                        "description": "Implement LinkedList operations: add, remove, traverse using Java LinkedList class.",
                        "expected": "List: [A,B,C,D]\nFirst: A\nLast: D",
                        "hint": "LinkedList<String> list = new LinkedList<>(); list.addFirst(), list.addLast()"
                    },
                    {
                        "id": 34,
                        "title": "Stack in Java",
                        "difficulty": "medium",
                        "description": "Implement stack using Java Stack class. Push, pop, peek operations.",
                        "expected": "Push: 10 20 30\nPeek: 30\nPop: 30\nStack: [10,20]",
                        "hint": "Stack<Integer> stack = new Stack<>(); stack.push(), stack.pop(), stack.peek()"
                    },
                    {
                        "id": 35,
                        "title": "Queue in Java",
                        "difficulty": "medium",
                        "description": "Implement queue using LinkedList. Enqueue, dequeue, peek operations.",
                        "expected": "Enqueue: A B C\nDequeue: A\nFront: B",
                        "hint": "Queue<String> q = new LinkedList<>(); q.offer(), q.poll(), q.peek()"
                    },
                    {
                        "id": 36,
                        "title": "Iterator",
                        "difficulty": "medium",
                        "description": "Use Iterator to traverse ArrayList and remove elements conditionally.",
                        "expected": "Before: [1,2,3,4,5]\nAfter removing evens: [1,3,5]",
                        "hint": "Iterator<Integer> it = list.iterator(); while(it.hasNext()){ if(it.next()%2==0) it.remove(); }"
                    },
                    {
                        "id": 37,
                        "title": "Generics",
                        "difficulty": "hard",
                        "description": "Create generic class Pair<T,U> that stores two values of different types.",
                        "expected": "Pair: (Alice, 92)\nPair: (3.14, true)",
                        "hint": "class Pair<T,U>{ T first; U second; Pair(T f,U s){ first=f; second=s; } }"
                    },
                    {
                        "id": 38,
                        "title": "Thread Creation",
                        "difficulty": "hard",
                        "description": "Create two threads using Thread class. Each prints numbers 1-5.",
                        "expected": "Thread1: 1\nThread2: 1\nThread1: 2\nThread2: 2...",
                        "hint": "class MyThread extends Thread{ public void run(){ for(int i=1;i<=5;i++) System.out.println(getName()+\": \"+i); } }"
                    },
                    {
                        "id": 39,
                        "title": "Runnable Interface",
                        "difficulty": "hard",
                        "description": "Create thread using Runnable interface.",
                        "expected": "Runnable thread running: 1 2 3 4 5",
                        "hint": "class Task implements Runnable{ public void run(){...} } new Thread(new Task()).start();"
                    },
                    {
                        "id": 40,
                        "title": "Thread Synchronization",
                        "difficulty": "hard",
                        "description": "Demonstrate thread synchronization using synchronized keyword to prevent race condition.",
                        "expected": "Final counter: 1000 (without sync may differ)",
                        "hint": "synchronized void increment(){ counter++; } Ensures only one thread executes at a time."
                    },
                    {
                        "id": 41,
                        "title": "Lambda Expressions",
                        "difficulty": "hard",
                        "description": "Use lambda expressions with functional interfaces. Sort list using lambda.",
                        "expected": "Sorted: [Alice, Bob, Carol]\nFiltered: [Bob, Carol]",
                        "hint": "list.sort((a,b)->a.compareTo(b)); list.stream().filter(s->s.length()>3)"
                    },
                    {
                        "id": 42,
                        "title": "Stream API",
                        "difficulty": "hard",
                        "description": "Use Java Stream API to filter, map, and reduce a list of numbers.",
                        "expected": "Sum of evens: 30\nSquares: [1,4,9,16,25]\nMax: 10",
                        "hint": "list.stream().filter(n->n%2==0).mapToInt(Integer::intValue).sum()"
                    },
                    {
                        "id": 43,
                        "title": "Optional Class",
                        "difficulty": "hard",
                        "description": "Use Optional to handle null values safely.",
                        "expected": "Value present: Alice\nNo value present\nDefault: Unknown",
                        "hint": "Optional<String> opt = Optional.ofNullable(value); opt.isPresent(), opt.orElse()"
                    },
                    {
                        "id": 44,
                        "title": "String Builder",
                        "difficulty": "medium",
                        "description": "Use StringBuilder to build a string efficiently. Append, insert, delete, reverse.",
                        "expected": "Built: Hello World!\nReversed: !dlroW olleH",
                        "hint": "StringBuilder sb = new StringBuilder(); sb.append(), sb.insert(), sb.reverse()"
                    },
                    {
                        "id": 45,
                        "title": "Wrapper Classes",
                        "difficulty": "easy",
                        "description": "Demonstrate autoboxing, unboxing, and wrapper class methods.",
                        "expected": "Integer max: 2147483647\nParsed: 42\nBinary: 101010",
                        "hint": "Integer.MAX_VALUE, Integer.parseInt(), Integer.toBinaryString()"
                    },
                    {
                        "id": 46,
                        "title": "Enum in Java",
                        "difficulty": "medium",
                        "description": "Create enum for days of week. Use in switch statement.",
                        "expected": "Day: MONDAY\nType: Weekday\nOrdinal: 0",
                        "hint": "enum Day{ MON,TUE,WED,THU,FRI,SAT,SUN } switch(day){ case MON: ... }"
                    },
                    {
                        "id": 47,
                        "title": "Varargs",
                        "difficulty": "medium",
                        "description": "Write method that accepts variable number of arguments and returns their sum.",
                        "expected": "sum(1,2,3) = 6\nsum(1,2,3,4,5) = 15",
                        "hint": "int sum(int... nums){ int s=0; for(int n:nums) s+=n; return s; }"
                    },
                    {
                        "id": 48,
                        "title": "Static Methods and Variables",
                        "difficulty": "medium",
                        "description": "Demonstrate static variables and methods. Count objects created using static counter.",
                        "expected": "Objects created: 3\nStatic method called",
                        "hint": "static int count=0; increment in constructor. static void display(){...}"
                    },
                    {
                        "id": 49,
                        "title": "Inner Class",
                        "difficulty": "hard",
                        "description": "Demonstrate inner class and anonymous inner class in Java.",
                        "expected": "Outer: Hello\nInner: World\nAnonymous: Running!",
                        "hint": "class Outer{ class Inner{...} } new Outer().new Inner()"
                    },
                    {
                        "id": 50,
                        "title": "Design Pattern - Singleton",
                        "difficulty": "hard",
                        "description": "Implement Singleton design pattern. Ensure only one instance is created.",
                        "expected": "Instance 1 == Instance 2: true\nSame object!",
                        "hint": "private static Singleton instance; private Singleton(){} public static Singleton getInstance(){ if(instance==null) instance=new Singleton(); return instance; }"
                    }
                ]
            },
            {
                "id": "s3_web",
                "name": "Web Technologies",
                "code": "BCA302",
                "problems": [
                    {
                        "id": 1,
                        "title": "Basic HTML Page",
                        "difficulty": "easy",
                        "description": "Create a basic HTML page with title, heading, paragraph, and a link.",
                        "expected": "Page with H1, paragraph, and hyperlink displayed.",
                        "hint": "Use <!DOCTYPE html>, <html>, <head>, <body>, <h1>, <p>, <a> tags."
                    },
                    {
                        "id": 2,
                        "title": "HTML Lists",
                        "difficulty": "easy",
                        "description": "Create ordered and unordered lists of programming languages.",
                        "expected": "Ordered: 1.Python 2.Java\nUnordered: bullet C bullet C++",
                        "hint": "Use <ol><li> for ordered, <ul><li> for unordered lists."
                    },
                    {
                        "id": 3,
                        "title": "HTML Table",
                        "difficulty": "easy",
                        "description": "Create an HTML table showing student name, roll, and marks.",
                        "expected": "Table with header row and 3 data rows displayed.",
                        "hint": "Use <table><tr><th> for header, <td> for data cells."
                    },
                    {
                        "id": 4,
                        "title": "HTML Form",
                        "difficulty": "easy",
                        "description": "Create a registration form with name, email, password, gender, and submit button.",
                        "expected": "Form with all fields and submit button displayed.",
                        "hint": "Use <form>, <input type=text>, <input type=email>, <input type=password>, <input type=radio>"
                    },
                    {
                        "id": 5,
                        "title": "HTML Images and Links",
                        "difficulty": "easy",
                        "description": "Embed an image and create internal and external links.",
                        "expected": "Image displayed with alt text. Links working.",
                        "hint": "<img src='' alt=''> for image. <a href='#section'> for internal link."
                    },
                    {
                        "id": 6,
                        "title": "CSS Selectors",
                        "difficulty": "easy",
                        "description": "Apply styles using element, class, and ID selectors.",
                        "expected": "H1 red, .highlight yellow background, #main blue border.",
                        "hint": "h1{color:red;} .highlight{background:yellow;} #main{border:1px solid blue;}"
                    },
                    {
                        "id": 7,
                        "title": "CSS Box Model",
                        "difficulty": "easy",
                        "description": "Demonstrate margin, padding, border, and content areas using CSS.",
                        "expected": "Box with visible margin, padding, and border.",
                        "hint": "div{ margin:20px; padding:10px; border:2px solid black; }"
                    },
                    {
                        "id": 8,
                        "title": "CSS Flexbox Layout",
                        "difficulty": "medium",
                        "description": "Create a navigation bar using CSS Flexbox.",
                        "expected": "Horizontal nav bar with evenly spaced items.",
                        "hint": "display:flex; justify-content:space-between; align-items:center;"
                    },
                    {
                        "id": 9,
                        "title": "CSS Grid Layout",
                        "difficulty": "medium",
                        "description": "Create a 3-column grid layout for a webpage.",
                        "expected": "3 equal columns with content in each.",
                        "hint": "display:grid; grid-template-columns:repeat(3,1fr); gap:10px;"
                    },
                    {
                        "id": 10,
                        "title": "Responsive Design",
                        "difficulty": "medium",
                        "description": "Make a webpage responsive using media queries.",
                        "expected": "2 columns on desktop, 1 column on mobile.",
                        "hint": "@media(max-width:768px){ .container{ flex-direction:column; } }"
                    },
                    {
                        "id": 11,
                        "title": "CSS Animations",
                        "difficulty": "medium",
                        "description": "Create a bouncing ball animation using CSS keyframes.",
                        "expected": "Ball animates up and down continuously.",
                        "hint": "@keyframes bounce{ 0%{top:0} 50%{top:100px} 100%{top:0} } animation:bounce 1s infinite;"
                    },
                    {
                        "id": 12,
                        "title": "CSS Transitions",
                        "difficulty": "easy",
                        "description": "Add hover transition effect to a button.",
                        "expected": "Button smoothly changes color on hover.",
                        "hint": "button{ transition:background 0.3s; } button:hover{ background:blue; }"
                    },
                    {
                        "id": 13,
                        "title": "JavaScript Variables",
                        "difficulty": "easy",
                        "description": "Declare variables using var, let, const. Show scope differences.",
                        "expected": "var:10 let:20 const:30\nBlock scope demo",
                        "hint": "let and const are block-scoped. var is function-scoped."
                    },
                    {
                        "id": 14,
                        "title": "JavaScript Functions",
                        "difficulty": "easy",
                        "description": "Write regular function, arrow function, and IIFE.",
                        "expected": "Regular: Hello Alice\nArrow: 25\nIIFE: Executed!",
                        "hint": "function greet(name){} const square=n=>n*n; (function(){})()"
                    },
                    {
                        "id": 15,
                        "title": "JavaScript Arrays",
                        "difficulty": "easy",
                        "description": "Demonstrate push, pop, shift, unshift, map, filter, reduce on arrays.",
                        "expected": "After push:[1,2,3,4]\nFiltered:[2,4]\nSum:10",
                        "hint": "arr.push(), arr.filter(n=>n%2==0), arr.reduce((a,b)=>a+b,0)"
                    },
                    {
                        "id": 16,
                        "title": "JavaScript Objects",
                        "difficulty": "easy",
                        "description": "Create object with properties and methods. Access using dot and bracket notation.",
                        "expected": "Name:Alice Age:25\nGreeting: Hello, I am Alice",
                        "hint": "const obj={name:'Alice',greet:function(){return 'Hello, I am '+this.name;}}"
                    },
                    {
                        "id": 17,
                        "title": "DOM Manipulation",
                        "difficulty": "medium",
                        "description": "Change text content, style, and add/remove elements using JavaScript DOM.",
                        "expected": "Text changed, color updated, new element added.",
                        "hint": "document.getElementById(), element.textContent, element.style.color, appendChild()"
                    },
                    {
                        "id": 18,
                        "title": "Event Handling",
                        "difficulty": "medium",
                        "description": "Handle click, mouseover, keypress events using addEventListener.",
                        "expected": "Button clicked! Mouse over detected. Key pressed: A",
                        "hint": "element.addEventListener('click', function(){...})"
                    },
                    {
                        "id": 19,
                        "title": "Form Validation with JS",
                        "difficulty": "medium",
                        "description": "Validate form fields using JavaScript before submission.",
                        "expected": "Name empty: Error\nInvalid email: Error\nAll valid: Submitted!",
                        "hint": "Check field.value.trim()==='' for empty. Use regex for email validation."
                    },
                    {
                        "id": 20,
                        "title": "JavaScript Calculator",
                        "difficulty": "medium",
                        "description": "Build a simple calculator that performs +,-,*,/ operations.",
                        "expected": "5 + 3 = 8\n10 / 2 = 5",
                        "hint": "Use eval() or switch statement. Handle division by zero."
                    },
                    {
                        "id": 21,
                        "title": "JavaScript Promises",
                        "difficulty": "hard",
                        "description": "Create and chain Promises. Handle resolve and reject.",
                        "expected": "Promise resolved: Data loaded\nChained: Processed\nRejected: Error caught",
                        "hint": "new Promise((resolve,reject)=>{...}).then(data=>{}).catch(err=>{})"
                    },
                    {
                        "id": 22,
                        "title": "Async Await",
                        "difficulty": "hard",
                        "description": "Use async/await to fetch data. Handle errors with try-catch.",
                        "expected": "Fetching...\nData: {id:1,name:Alice}\nDone",
                        "hint": "async function fetchData(){ try{ const data=await fetch(url); }catch(e){} }"
                    },
                    {
                        "id": 23,
                        "title": "Local Storage",
                        "difficulty": "medium",
                        "description": "Save, retrieve, and delete data from browser localStorage.",
                        "expected": "Saved: username=Alice\nRetrieved: Alice\nDeleted",
                        "hint": "localStorage.setItem('key','value'); localStorage.getItem('key'); localStorage.removeItem('key')"
                    },
                    {
                        "id": 24,
                        "title": "JSON Parse and Stringify",
                        "difficulty": "easy",
                        "description": "Convert JavaScript object to JSON string and back.",
                        "expected": "JSON: {\"name\":\"Alice\",\"age\":25}\nParsed name: Alice",
                        "hint": "JSON.stringify(obj) converts to string. JSON.parse(str) converts back."
                    },
                    {
                        "id": 25,
                        "title": "Fetch API",
                        "difficulty": "hard",
                        "description": "Use Fetch API to get data from a public API and display results.",
                        "expected": "Fetched user: {id:1, name:Leanne Graham}\nStatus: 200",
                        "hint": "fetch('https://jsonplaceholder.typicode.com/users/1').then(r=>r.json()).then(data=>console.log(data))"
                    },
                    {
                        "id": 26,
                        "title": "ES6 Classes",
                        "difficulty": "medium",
                        "description": "Create ES6 class with constructor, methods, and inheritance.",
                        "expected": "Animal: Dog\nSound: Woof\nLegs: 4",
                        "hint": "class Animal{ constructor(name){this.name=name;} } class Dog extends Animal{...}"
                    },
                    {
                        "id": 27,
                        "title": "Destructuring",
                        "difficulty": "medium",
                        "description": "Use array and object destructuring in JavaScript.",
                        "expected": "x=1 y=2\nname=Alice age=25\nFirst=A Rest=[B,C,D]",
                        "hint": "const [x,y]=[1,2]; const {name,age}=person; const [first,...rest]=arr;"
                    },
                    {
                        "id": 28,
                        "title": "Spread and Rest Operators",
                        "difficulty": "medium",
                        "description": "Demonstrate spread operator for arrays/objects and rest parameters.",
                        "expected": "Merged: [1,2,3,4,5]\nSum of all: 15",
                        "hint": "const merged=[...arr1,...arr2]; function sum(...nums){ return nums.reduce((a,b)=>a+b); }"
                    },
                    {
                        "id": 29,
                        "title": "Template Literals",
                        "difficulty": "easy",
                        "description": "Use template literals for string interpolation and multiline strings.",
                        "expected": "Hello Alice, you are 25 years old.\nMultiline string works!",
                        "hint": "const msg=Hello , you are  years old."
                    },
                    {
                        "id": 30,
                        "title": "Regular Expressions in JS",
                        "difficulty": "hard",
                        "description": "Use regex to validate email, extract numbers, and replace patterns.",
                        "expected": "Email valid: true\nNumbers: [42,100]\nReplaced: Hello World",
                        "hint": "const emailRegex=/^[\\w.-]+@[\\w.-]+\\.\\w+$/; str.match(/\\d+/g); str.replace(/foo/g,'bar')"
                    },
                    {
                        "id": 31,
                        "title": "CSS Variables",
                        "difficulty": "medium",
                        "description": "Use CSS custom properties (variables) for theming.",
                        "expected": "Primary color applied consistently across elements.",
                        "hint": ":root{ --primary:#e91e63; } button{ background:var(--primary); }"
                    },
                    {
                        "id": 32,
                        "title": "HTML5 Canvas",
                        "difficulty": "hard",
                        "description": "Draw shapes on HTML5 Canvas: rectangle, circle, line, text.",
                        "expected": "Canvas shows rectangle, circle, line, and text.",
                        "hint": "const ctx=canvas.getContext('2d'); ctx.fillRect(), ctx.arc(), ctx.fillText()"
                    },
                    {
                        "id": 33,
                        "title": "HTML5 Audio and Video",
                        "difficulty": "medium",
                        "description": "Embed audio and video elements with controls.",
                        "expected": "Audio player and video player displayed with controls.",
                        "hint": "<audio controls><source src='audio.mp3'></audio>"
                    },
                    {
                        "id": 34,
                        "title": "CSS Pseudo-classes",
                        "difficulty": "medium",
                        "description": "Style elements using :hover, :focus, :nth-child, :first-child pseudo-classes.",
                        "expected": "First item bold, odd items highlighted, hover changes color.",
                        "hint": "li:first-child{font-weight:bold;} li:nth-child(odd){background:#eee;} a:hover{color:red;}"
                    },
                    {
                        "id": 35,
                        "title": "JavaScript Closure",
                        "difficulty": "hard",
                        "description": "Demonstrate closures in JavaScript. Create counter using closure.",
                        "expected": "Counter: 1\nCounter: 2\nCounter: 3\nReset: 0",
                        "hint": "function makeCounter(){ let count=0; return function(){ return ++count; }; }"
                    },
                    {
                        "id": 36,
                        "title": "Prototype and Inheritance",
                        "difficulty": "hard",
                        "description": "Demonstrate prototype chain and prototypal inheritance in JavaScript.",
                        "expected": "Dog inherits from Animal\nDog.speak(): Woof\nDog.eat(): Eating",
                        "hint": "Dog.prototype=Object.create(Animal.prototype); Dog.prototype.constructor=Dog;"
                    },
                    {
                        "id": 37,
                        "title": "Error Handling in JS",
                        "difficulty": "medium",
                        "description": "Use try-catch-finally and throw custom errors.",
                        "expected": "Caught: Invalid input\nFinally: Cleanup done",
                        "hint": "throw new Error('Invalid input'); try{...}catch(e){console.log(e.message)}finally{...}"
                    },
                    {
                        "id": 38,
                        "title": "SetTimeout and SetInterval",
                        "difficulty": "medium",
                        "description": "Use setTimeout for delayed execution and setInterval for repeated execution.",
                        "expected": "After 1s: Hello!\nEvery 500ms: tick tick tick",
                        "hint": "setTimeout(()=>console.log('Hello!'),1000); const id=setInterval(()=>{},500); clearInterval(id)"
                    },
                    {
                        "id": 39,
                        "title": "CSS Flexbox Card Layout",
                        "difficulty": "medium",
                        "description": "Create a responsive card layout using Flexbox.",
                        "expected": "3 cards per row on desktop, 1 on mobile.",
                        "hint": "display:flex; flex-wrap:wrap; .card{flex:1 1 300px; margin:10px;}"
                    },
                    {
                        "id": 40,
                        "title": "JavaScript Modules",
                        "difficulty": "hard",
                        "description": "Create and import JavaScript modules using ES6 import/export.",
                        "expected": "Imported add: 5\nImported multiply: 6",
                        "hint": "export function add(a,b){return a+b;} import {add} from './math.js';"
                    }
                ]
            }
        ]
    },
    "semester4": {
        "name": "Semester 4",
        "subjects": [
            {
                "id": "s4_python",
                "name": "Python Programming",
                "code": "BCA401",
                "problems": [
                    {
                        "id": 1,
                        "title": "Hello World",
                        "difficulty": "easy",
                        "description": "Print Hello World in Python.",
                        "expected": "Hello, World!",
                        "hint": "print('Hello, World!')"
                    },
                    {
                        "id": 2,
                        "title": "Variables and Types",
                        "difficulty": "easy",
                        "description": "Declare int,float,str,bool. Print each with type().",
                        "expected": "10 int\n3.14 float",
                        "hint": "print(type(x))"
                    },
                    {
                        "id": 3,
                        "title": "Arithmetic Operators",
                        "difficulty": "easy",
                        "description": "Perform +,-,*,/,//,%,** on two numbers.",
                        "expected": "13 7 30 3.33 3 1 100",
                        "hint": "Use all Python arithmetic operators."
                    },
                    {
                        "id": 4,
                        "title": "String Operations",
                        "difficulty": "easy",
                        "description": "Demonstrate len,upper,lower,strip,replace,split.",
                        "expected": "HELLO 5 hello",
                        "hint": "str.upper() str.lower() len(str)"
                    },
                    {
                        "id": 5,
                        "title": "If-Else",
                        "difficulty": "easy",
                        "description": "Check positive negative zero.",
                        "expected": "5 is Positive",
                        "hint": "if x>0: elif x<0: else:"
                    },
                    {
                        "id": 6,
                        "title": "For Loop",
                        "difficulty": "easy",
                        "description": "Print multiplication table.",
                        "expected": "5x1=5\n5x10=50",
                        "hint": "for i in range(1,11): print(n,'x',i,'=',n*i)"
                    },
                    {
                        "id": 7,
                        "title": "While Loop",
                        "difficulty": "easy",
                        "description": "Sum digits of a number.",
                        "expected": "Sum of 1234 = 10",
                        "hint": "while n>0: sum+=n%10; n//=10"
                    },
                    {
                        "id": 8,
                        "title": "List Operations",
                        "difficulty": "easy",
                        "description": "Create list, append, remove, sort, slice.",
                        "expected": "[1,2,3,4,5]",
                        "hint": "list.append() list.remove() list.sort()"
                    },
                    {
                        "id": 9,
                        "title": "Tuple Operations",
                        "difficulty": "easy",
                        "description": "Create tuple, access, unpack.",
                        "expected": "Alice 25 CS",
                        "hint": "t=(\"Alice\",25,\"CS\"); name,age,dept=t"
                    },
                    {
                        "id": 10,
                        "title": "Dictionary Operations",
                        "difficulty": "medium",
                        "description": "Create dict, add, update, delete, iterate.",
                        "expected": "Alice:92 Bob:85",
                        "hint": "d={} d[\"Alice\"]=92 del d[\"Bob\"]"
                    },
                    {
                        "id": 11,
                        "title": "Set Operations",
                        "difficulty": "medium",
                        "description": "Union, intersection, difference of sets.",
                        "expected": "Union:{1,2,3,4,5}",
                        "hint": "s1|s2 s1&s2 s1-s2"
                    },
                    {
                        "id": 12,
                        "title": "List Comprehension",
                        "difficulty": "medium",
                        "description": "Generate squares of even numbers 1-10.",
                        "expected": "[4,16,36,64,100]",
                        "hint": "[x**2 for x in range(1,11) if x%2==0]"
                    },
                    {
                        "id": 13,
                        "title": "Dictionary Comprehension",
                        "difficulty": "medium",
                        "description": "Create dict of word lengths.",
                        "expected": "{'hello':5,'world':5}",
                        "hint": "{word:len(word) for word in words}"
                    },
                    {
                        "id": 14,
                        "title": "Functions",
                        "difficulty": "easy",
                        "description": "Write function to find max of three numbers.",
                        "expected": "Max of 4,9,2 = 9",
                        "hint": "def max_three(a,b,c): return max(a,b,c)"
                    },
                    {
                        "id": 15,
                        "title": "Default Arguments",
                        "difficulty": "medium",
                        "description": "Function with default greeting parameter.",
                        "expected": "Hello Alice\nGood Morning Bob",
                        "hint": "def greet(name,msg='Hello'):"
                    },
                    {
                        "id": 16,
                        "title": "*args **kwargs",
                        "difficulty": "medium",
                        "description": "Function accepting variable arguments.",
                        "expected": "Sum: 15\nName:Alice Age:25",
                        "hint": "def func(*args,**kwargs):"
                    },
                    {
                        "id": 17,
                        "title": "Lambda Functions",
                        "difficulty": "medium",
                        "description": "Lambda for square, filter evens, sort.",
                        "expected": "Squares:[1,4,9]\nEvens:[2,4,6]",
                        "hint": "square=lambda x:x**2"
                    },
                    {
                        "id": 18,
                        "title": "Recursion Factorial",
                        "difficulty": "medium",
                        "description": "Recursive factorial function.",
                        "expected": "5! = 120",
                        "hint": "def fact(n): return 1 if n==0 else n*fact(n-1)"
                    },
                    {
                        "id": 19,
                        "title": "Recursion Fibonacci",
                        "difficulty": "medium",
                        "description": "Recursive Fibonacci.",
                        "expected": "fib(10)=55",
                        "hint": "def fib(n): return n if n<=1 else fib(n-1)+fib(n-2)"
                    },
                    {
                        "id": 20,
                        "title": "File Write Read",
                        "difficulty": "medium",
                        "description": "Write lines to file, read back.",
                        "expected": "Line1:Hello\nLine2:World",
                        "hint": "open('f.txt','w') open('f.txt','r')"
                    },
                    {
                        "id": 21,
                        "title": "File Append",
                        "difficulty": "easy",
                        "description": "Append line to existing file.",
                        "expected": "Appended successfully",
                        "hint": "open('f.txt','a').write('new line')"
                    },
                    {
                        "id": 22,
                        "title": "Exception Handling",
                        "difficulty": "medium",
                        "description": "Try-except-finally for division by zero.",
                        "expected": "Error: division by zero\nFinally executed",
                        "hint": "try: except ZeroDivisionError: finally:"
                    },
                    {
                        "id": 23,
                        "title": "Custom Exception",
                        "difficulty": "hard",
                        "description": "Create InvalidAgeError exception.",
                        "expected": "InvalidAgeError: Age -5 invalid",
                        "hint": "class InvalidAgeError(Exception): pass"
                    },
                    {
                        "id": 24,
                        "title": "Class and Object",
                        "difficulty": "medium",
                        "description": "Student class with name,roll,marks.",
                        "expected": "Name:Alice Roll:101",
                        "hint": "class Student: def __init__(self,name,roll):"
                    },
                    {
                        "id": 25,
                        "title": "Inheritance",
                        "difficulty": "medium",
                        "description": "Animal base, Dog Cat derived.",
                        "expected": "Dog: Woof\nCat: Meow",
                        "hint": "class Dog(Animal): def speak(self): return 'Woof'"
                    },
                    {
                        "id": 26,
                        "title": "Polymorphism",
                        "difficulty": "medium",
                        "description": "Shape area() overridden in Circle Rectangle.",
                        "expected": "Circle:78.54 Rect:24",
                        "hint": "def area(self): in each subclass"
                    },
                    {
                        "id": 27,
                        "title": "Encapsulation",
                        "difficulty": "medium",
                        "description": "Private attributes with getters setters.",
                        "expected": "Balance: 1000",
                        "hint": "self.__balance=0 def get_balance(self):"
                    },
                    {
                        "id": 28,
                        "title": "Dunder Methods",
                        "difficulty": "hard",
                        "description": "Implement __str__ __len__ __add__.",
                        "expected": "Student:Alice Len:3",
                        "hint": "def __str__(self): return f'Student:{self.name}'"
                    },
                    {
                        "id": 29,
                        "title": "Decorators",
                        "difficulty": "hard",
                        "description": "Create timer and logger decorators.",
                        "expected": "Function took 0.001s",
                        "hint": "def timer(func): def wrapper(*args): ..."
                    },
                    {
                        "id": 30,
                        "title": "Generators",
                        "difficulty": "hard",
                        "description": "Generator for Fibonacci sequence.",
                        "expected": "0 1 1 2 3 5 8 13",
                        "hint": "def fib_gen(): a,b=0,1; while True: yield a; a,b=b,a+b"
                    },
                    {
                        "id": 31,
                        "title": "Iterators",
                        "difficulty": "hard",
                        "description": "Custom iterator class for range.",
                        "expected": "1 2 3 4 5",
                        "hint": "class MyRange: def __iter__(self): def __next__(self):"
                    },
                    {
                        "id": 32,
                        "title": "Context Manager",
                        "difficulty": "hard",
                        "description": "Custom context manager with __enter__ __exit__.",
                        "expected": "File opened\nFile closed",
                        "hint": "class FileManager: def __enter__(self): def __exit__(self):"
                    },
                    {
                        "id": 33,
                        "title": "Regular Expressions",
                        "difficulty": "hard",
                        "description": "Validate email, phone, extract numbers.",
                        "expected": "Email valid\nNumbers:[42,100]",
                        "hint": "import re; re.match() re.findall()"
                    },
                    {
                        "id": 34,
                        "title": "JSON Handling",
                        "difficulty": "medium",
                        "description": "Read write JSON data.",
                        "expected": "{'name':'Alice','marks':92}",
                        "hint": "import json; json.dumps() json.loads()"
                    },
                    {
                        "id": 35,
                        "title": "CSV Handling",
                        "difficulty": "medium",
                        "description": "Read write CSV file.",
                        "expected": "Alice,92\nBob,85",
                        "hint": "import csv; csv.writer() csv.reader()"
                    },
                    {
                        "id": 36,
                        "title": "OS Module",
                        "difficulty": "medium",
                        "description": "List files, create dir, get cwd.",
                        "expected": "Files: ['a.txt','b.py']",
                        "hint": "import os; os.listdir() os.mkdir() os.getcwd()"
                    },
                    {
                        "id": 37,
                        "title": "DateTime Module",
                        "difficulty": "medium",
                        "description": "Current date time, difference, formatting.",
                        "expected": "2026-04-14 09:30:00",
                        "hint": "from datetime import datetime; datetime.now()"
                    },
                    {
                        "id": 38,
                        "title": "Math Module",
                        "difficulty": "easy",
                        "description": "Use math.sqrt,pow,floor,ceil,pi.",
                        "expected": "sqrt(16)=4 pi=3.14159",
                        "hint": "import math; math.sqrt(16)"
                    },
                    {
                        "id": 39,
                        "title": "Random Module",
                        "difficulty": "medium",
                        "description": "Generate random numbers, shuffle list.",
                        "expected": "Random: 42\nShuffled: [3,1,4,2,5]",
                        "hint": "import random; random.randint() random.shuffle()"
                    },
                    {
                        "id": 40,
                        "title": "Sorting Algorithms",
                        "difficulty": "medium",
                        "description": "Implement bubble sort in Python.",
                        "expected": "Sorted: [1,2,3,4,5]",
                        "hint": "for i in range(n): for j in range(n-i-1):"
                    },
                    {
                        "id": 41,
                        "title": "Binary Search",
                        "difficulty": "medium",
                        "description": "Binary search in sorted list.",
                        "expected": "Found 20 at index 3",
                        "hint": "low,high=0,len(arr)-1; while low<=high:"
                    },
                    {
                        "id": 42,
                        "title": "Stack Implementation",
                        "difficulty": "medium",
                        "description": "Stack using Python list.",
                        "expected": "Push:1,2,3 Pop:3",
                        "hint": "stack=[] stack.append(x) stack.pop()"
                    },
                    {
                        "id": 43,
                        "title": "Queue Implementation",
                        "difficulty": "medium",
                        "description": "Queue using collections.deque.",
                        "expected": "Enqueue:1,2,3 Dequeue:1",
                        "hint": "from collections import deque; q=deque()"
                    },
                    {
                        "id": 44,
                        "title": "Linked List",
                        "difficulty": "hard",
                        "description": "Singly linked list in Python.",
                        "expected": "1->2->3->None",
                        "hint": "class Node: class LinkedList:"
                    },
                    {
                        "id": 45,
                        "title": "Binary Tree",
                        "difficulty": "hard",
                        "description": "Binary tree insert and inorder.",
                        "expected": "Inorder: 1 2 3 4 5",
                        "hint": "class TreeNode: class BST:"
                    },
                    {
                        "id": 46,
                        "title": "Map Filter Reduce",
                        "difficulty": "medium",
                        "description": "Use map filter reduce on list.",
                        "expected": "Squares:[1,4,9]\nEvens:[2,4]\nSum:15",
                        "hint": "from functools import reduce; map() filter() reduce()"
                    },
                    {
                        "id": 47,
                        "title": "Zip Enumerate",
                        "difficulty": "easy",
                        "description": "Use zip and enumerate.",
                        "expected": "0:Alice 1:Bob\nAlice-92 Bob-85",
                        "hint": "for i,name in enumerate(names): for n,m in zip(names,marks):"
                    },
                    {
                        "id": 48,
                        "title": "String Formatting",
                        "difficulty": "easy",
                        "description": "f-strings, format(), % formatting.",
                        "expected": "Hello Alice, marks: 92",
                        "hint": "f'Hello {name}' '{}'.format(name)"
                    },
                    {
                        "id": 49,
                        "title": "Multithreading",
                        "difficulty": "hard",
                        "description": "Two threads printing numbers simultaneously.",
                        "expected": "Thread1:1 Thread2:1 Thread1:2",
                        "hint": "import threading; t=threading.Thread(target=func)"
                    },
                    {
                        "id": 50,
                        "title": "NumPy Basics",
                        "difficulty": "hard",
                        "description": "Array creation, operations, slicing.",
                        "expected": "Array:[1,2,3,4,5]\nMean:3.0",
                        "hint": "import numpy as np; np.array() np.mean()"
                    }
                ]
            },
            {
                "id": "s4_cn",
                "name": "Computer Networks",
                "code": "BCA403",
                "problems": [
                    {
                        "id": 1,
                        "title": "IP Address Classes",
                        "difficulty": "easy",
                        "description": "Identify class of IP address A,B,C,D,E.",
                        "expected": "192.168.1.1 = Class C",
                        "hint": "Class A:1-126, B:128-191, C:192-223"
                    },
                    {
                        "id": 2,
                        "title": "Subnet Mask",
                        "difficulty": "medium",
                        "description": "Calculate subnet mask for given CIDR.",
                        "expected": "192.168.1.0/24 mask:255.255.255.0",
                        "hint": "Count bits in network portion."
                    },
                    {
                        "id": 3,
                        "title": "Subnetting",
                        "difficulty": "hard",
                        "description": "Divide network into 4 subnets.",
                        "expected": "Subnet1:192.168.1.0/26\nSubnet2:192.168.1.64/26",
                        "hint": "Borrow bits from host portion."
                    },
                    {
                        "id": 4,
                        "title": "Binary IP Conversion",
                        "difficulty": "easy",
                        "description": "Convert IP to binary and back.",
                        "expected": "192.168.1.1 = 11000000.10101000.00000001.00000001",
                        "hint": "Convert each octet to 8-bit binary."
                    },
                    {
                        "id": 5,
                        "title": "OSI Model Layers",
                        "difficulty": "easy",
                        "description": "List all 7 OSI layers with functions.",
                        "expected": "Physical DataLink Network Transport Session Presentation Application",
                        "hint": "Each layer has specific protocols."
                    },
                    {
                        "id": 6,
                        "title": "TCP vs UDP",
                        "difficulty": "easy",
                        "description": "Compare TCP and UDP protocols.",
                        "expected": "TCP:reliable ordered\nUDP:fast unreliable",
                        "hint": "TCP has handshake, UDP does not."
                    },
                    {
                        "id": 7,
                        "title": "TCP Three-Way Handshake",
                        "difficulty": "medium",
                        "description": "Simulate TCP connection establishment.",
                        "expected": "SYN -> SYN-ACK -> ACK\nConnection established",
                        "hint": "Client sends SYN, server SYN-ACK, client ACK."
                    },
                    {
                        "id": 8,
                        "title": "Socket Programming TCP",
                        "difficulty": "hard",
                        "description": "TCP client-server chat program.",
                        "expected": "Server:Hello Client\nClient:Hello Server",
                        "hint": "import socket; s.bind() s.listen() s.accept()"
                    },
                    {
                        "id": 9,
                        "title": "Socket Programming UDP",
                        "difficulty": "hard",
                        "description": "UDP client-server program.",
                        "expected": "Sent: Hello\nReceived: Hello",
                        "hint": "socket.SOCK_DGRAM; sendto() recvfrom()"
                    },
                    {
                        "id": 10,
                        "title": "HTTP Request",
                        "difficulty": "medium",
                        "description": "Send HTTP GET request using Python.",
                        "expected": "Status:200\nBody:Hello World",
                        "hint": "import requests; r=requests.get(url)"
                    },
                    {
                        "id": 11,
                        "title": "DNS Lookup",
                        "difficulty": "medium",
                        "description": "Resolve hostname to IP address.",
                        "expected": "google.com -> 142.250.x.x",
                        "hint": "import socket; socket.gethostbyname('google.com')"
                    },
                    {
                        "id": 12,
                        "title": "Ping Simulation",
                        "difficulty": "medium",
                        "description": "Simulate ping using ICMP.",
                        "expected": "Ping 8.8.8.8: 4 packets sent 4 received",
                        "hint": "import subprocess; subprocess.run(['ping',host])"
                    },
                    {
                        "id": 13,
                        "title": "Port Scanner",
                        "difficulty": "hard",
                        "description": "Scan open ports on localhost.",
                        "expected": "Port 80:Open Port 443:Open",
                        "hint": "socket.connect_ex((host,port))==0 means open"
                    },
                    {
                        "id": 14,
                        "title": "MAC Address",
                        "difficulty": "easy",
                        "description": "Get MAC address of network interface.",
                        "expected": "MAC: 00:1A:2B:3C:4D:5E",
                        "hint": "import uuid; hex(uuid.getnode())"
                    },
                    {
                        "id": 15,
                        "title": "Network Interfaces",
                        "difficulty": "medium",
                        "description": "List all network interfaces and IPs.",
                        "expected": "eth0:192.168.1.5\nlo:127.0.0.1",
                        "hint": "import socket; socket.gethostbyname_ex()"
                    },
                    {
                        "id": 16,
                        "title": "URL Parser",
                        "difficulty": "easy",
                        "description": "Parse URL into components.",
                        "expected": "Scheme:https Host:google.com Path:/search",
                        "hint": "from urllib.parse import urlparse"
                    },
                    {
                        "id": 17,
                        "title": "Email Send SMTP",
                        "difficulty": "hard",
                        "description": "Send email using SMTP.",
                        "expected": "Email sent to alice@example.com",
                        "hint": "import smtplib; server.sendmail()"
                    },
                    {
                        "id": 18,
                        "title": "FTP Basics",
                        "difficulty": "hard",
                        "description": "Connect to FTP server, list files.",
                        "expected": "Connected\nFiles: ['readme.txt']",
                        "hint": "from ftplib import FTP; ftp.connect() ftp.nlst()"
                    },
                    {
                        "id": 19,
                        "title": "Bandwidth Calculator",
                        "difficulty": "easy",
                        "description": "Calculate bandwidth given data and time.",
                        "expected": "100MB in 10s = 10 MB/s",
                        "hint": "bandwidth = data_size / time"
                    },
                    {
                        "id": 20,
                        "title": "Checksum Calculation",
                        "difficulty": "medium",
                        "description": "Calculate checksum for error detection.",
                        "expected": "Data:1010 Checksum:0101",
                        "hint": "XOR all bytes or use sum and complement."
                    },
                    {
                        "id": 21,
                        "title": "Hamming Code",
                        "difficulty": "hard",
                        "description": "Encode data with Hamming error correction.",
                        "expected": "Data:1011 Encoded:0110011",
                        "hint": "Place parity bits at power-of-2 positions."
                    },
                    {
                        "id": 22,
                        "title": "CRC Calculation",
                        "difficulty": "hard",
                        "description": "Calculate CRC for error detection.",
                        "expected": "CRC of 1101011011 = 1110",
                        "hint": "Polynomial division in binary."
                    },
                    {
                        "id": 23,
                        "title": "Routing Table",
                        "difficulty": "medium",
                        "description": "Simulate routing table lookup.",
                        "expected": "Dest:192.168.2.0 Gateway:192.168.1.1",
                        "hint": "Match destination with longest prefix."
                    },
                    {
                        "id": 24,
                        "title": "NAT Simulation",
                        "difficulty": "hard",
                        "description": "Simulate Network Address Translation.",
                        "expected": "Private:192.168.1.5 -> Public:203.0.113.1",
                        "hint": "Map private IP:port to public IP:port."
                    },
                    {
                        "id": 25,
                        "title": "DHCP Simulation",
                        "difficulty": "hard",
                        "description": "Simulate DHCP IP assignment.",
                        "expected": "Client gets IP: 192.168.1.100",
                        "hint": "DISCOVER OFFER REQUEST ACK sequence."
                    },
                    {
                        "id": 26,
                        "title": "ARP Simulation",
                        "difficulty": "medium",
                        "description": "Simulate ARP request and reply.",
                        "expected": "Who has 192.168.1.1? -> 00:1A:2B:3C:4D:5E",
                        "hint": "Broadcast request, unicast reply."
                    },
                    {
                        "id": 27,
                        "title": "Sliding Window Protocol",
                        "difficulty": "hard",
                        "description": "Simulate sliding window flow control.",
                        "expected": "Window size:4 Sent:1,2,3,4 ACK:1,2,3,4",
                        "hint": "Sender can have multiple unacknowledged frames."
                    },
                    {
                        "id": 28,
                        "title": "Stop and Wait Protocol",
                        "difficulty": "medium",
                        "description": "Simulate stop-and-wait ARQ.",
                        "expected": "Send frame 0, wait ACK, send frame 1",
                        "hint": "Send one frame, wait for ACK before next."
                    },
                    {
                        "id": 29,
                        "title": "Network Topology Star",
                        "difficulty": "easy",
                        "description": "Simulate star topology message passing.",
                        "expected": "Hub receives from A, forwards to B",
                        "hint": "All nodes connect to central hub."
                    },
                    {
                        "id": 30,
                        "title": "Packet Fragmentation",
                        "difficulty": "hard",
                        "description": "Fragment large packet into smaller ones.",
                        "expected": "1500B packet -> 3x500B fragments",
                        "hint": "MTU limits packet size. Add fragment offset."
                    },
                    {
                        "id": 31,
                        "title": "IPv6 Address",
                        "difficulty": "medium",
                        "description": "Convert IPv4 to IPv6 format.",
                        "expected": "192.168.1.1 -> ::ffff:192.168.1.1",
                        "hint": "IPv6 is 128-bit. IPv4-mapped format."
                    },
                    {
                        "id": 32,
                        "title": "CIDR Notation",
                        "difficulty": "medium",
                        "description": "Calculate network and broadcast address.",
                        "expected": "192.168.1.0/24 Broadcast:192.168.1.255",
                        "hint": "Network=IP AND mask. Broadcast=network OR NOT mask."
                    },
                    {
                        "id": 33,
                        "title": "Traceroute Simulation",
                        "difficulty": "hard",
                        "description": "Simulate traceroute showing hops.",
                        "expected": "Hop1:192.168.1.1 Hop2:10.0.0.1",
                        "hint": "TTL decrements at each router."
                    },
                    {
                        "id": 34,
                        "title": "Firewall Rules",
                        "difficulty": "hard",
                        "description": "Implement simple packet filter firewall.",
                        "expected": "Block port 23: BLOCKED\nAllow port 80: ALLOWED",
                        "hint": "Check packet against rule list."
                    },
                    {
                        "id": 35,
                        "title": "Load Balancer",
                        "difficulty": "hard",
                        "description": "Round-robin load balancer simulation.",
                        "expected": "Request1->Server1 Request2->Server2",
                        "hint": "Distribute requests cyclically."
                    },
                    {
                        "id": 36,
                        "title": "SSL TLS Handshake",
                        "difficulty": "hard",
                        "description": "Simulate SSL/TLS handshake steps.",
                        "expected": "ClientHello ServerHello Certificate Finished",
                        "hint": "Key exchange and cipher negotiation."
                    },
                    {
                        "id": 37,
                        "title": "HTTP Server",
                        "difficulty": "hard",
                        "description": "Simple HTTP server using Python.",
                        "expected": "GET / HTTP/1.1 -> 200 OK",
                        "hint": "from http.server import HTTPServer,BaseHTTPRequestHandler"
                    },
                    {
                        "id": 38,
                        "title": "WebSocket Basics",
                        "difficulty": "hard",
                        "description": "WebSocket echo server.",
                        "expected": "Client:Hello Server:Hello (echo)",
                        "hint": "import websockets; async def handler(ws):"
                    },
                    {
                        "id": 39,
                        "title": "Network Latency",
                        "difficulty": "medium",
                        "description": "Measure round-trip time to server.",
                        "expected": "RTT to 8.8.8.8: 15ms",
                        "hint": "time before and after socket connect."
                    },
                    {
                        "id": 40,
                        "title": "Bandwidth Throttling",
                        "difficulty": "hard",
                        "description": "Simulate bandwidth throttling.",
                        "expected": "Sending at 1MB/s (throttled from 10MB/s)",
                        "hint": "time.sleep() between chunks to limit rate."
                    }
                ]
            }
        ]
    },
    "semester5": {
        "name": "Semester 5",
        "subjects": [
            {
                "id": "s5_daa",
                "name": "Design and Analysis of Algorithms",
                "code": "BCA501",
                "problems": [
                    {
                        "id": 1,
                        "title": "Bubble Sort",
                        "difficulty": "easy",
                        "description": "Sort array using bubble sort.",
                        "expected": "Sorted: 1 2 3 4 5",
                        "hint": "Nested loops, swap adjacent if out of order."
                    },
                    {
                        "id": 2,
                        "title": "Selection Sort",
                        "difficulty": "easy",
                        "description": "Sort using selection sort.",
                        "expected": "Sorted: 1 2 3 4 5",
                        "hint": "Find min, swap with first unsorted."
                    },
                    {
                        "id": 3,
                        "title": "Insertion Sort",
                        "difficulty": "easy",
                        "description": "Sort using insertion sort.",
                        "expected": "Sorted: 1 2 3 4 5",
                        "hint": "Insert each element in correct position."
                    },
                    {
                        "id": 4,
                        "title": "Merge Sort",
                        "difficulty": "medium",
                        "description": "Sort using merge sort divide and conquer.",
                        "expected": "Sorted: 1 2 3 4 5",
                        "hint": "Split, sort halves, merge."
                    },
                    {
                        "id": 5,
                        "title": "Quick Sort",
                        "difficulty": "medium",
                        "description": "Sort using quick sort with pivot.",
                        "expected": "Sorted: 1 2 3 4 5",
                        "hint": "Partition around pivot, recurse."
                    },
                    {
                        "id": 6,
                        "title": "Heap Sort",
                        "difficulty": "hard",
                        "description": "Sort using heap sort.",
                        "expected": "Sorted: 1 2 3 4 5",
                        "hint": "Build max-heap, extract root repeatedly."
                    },
                    {
                        "id": 7,
                        "title": "Counting Sort",
                        "difficulty": "medium",
                        "description": "Sort using counting sort.",
                        "expected": "Sorted: 1 2 2 3 4",
                        "hint": "Count occurrences, reconstruct array."
                    },
                    {
                        "id": 8,
                        "title": "Radix Sort",
                        "difficulty": "hard",
                        "description": "Sort using radix sort.",
                        "expected": "Sorted: 2 24 45 66 75",
                        "hint": "Sort digit by digit using counting sort."
                    },
                    {
                        "id": 9,
                        "title": "Shell Sort",
                        "difficulty": "medium",
                        "description": "Sort using shell sort with gap sequence.",
                        "expected": "Sorted: 1 2 3 4 5",
                        "hint": "Sort elements far apart, reduce gap."
                    },
                    {
                        "id": 10,
                        "title": "Linear Search",
                        "difficulty": "easy",
                        "description": "Search element using linear search.",
                        "expected": "Found 30 at index 2",
                        "hint": "Loop and compare each element."
                    },
                    {
                        "id": 11,
                        "title": "Binary Search",
                        "difficulty": "easy",
                        "description": "Search in sorted array using binary search.",
                        "expected": "Found 20 at index 3",
                        "hint": "low,high,mid. Halve search space."
                    },
                    {
                        "id": 12,
                        "title": "Binary Search Recursive",
                        "difficulty": "medium",
                        "description": "Recursive binary search.",
                        "expected": "Found at index 3",
                        "hint": "binarySearch(arr,low,high,target)"
                    },
                    {
                        "id": 13,
                        "title": "Jump Search",
                        "difficulty": "medium",
                        "description": "Search using jump search.",
                        "expected": "Found 9 at index 4",
                        "hint": "Jump sqrt(n) steps, then linear search."
                    },
                    {
                        "id": 14,
                        "title": "Interpolation Search",
                        "difficulty": "hard",
                        "description": "Search using interpolation formula.",
                        "expected": "Found 40 at index 3",
                        "hint": "pos=low+((target-arr[low])*(high-low))/(arr[high]-arr[low])"
                    },
                    {
                        "id": 15,
                        "title": "Fibonacci Search",
                        "difficulty": "hard",
                        "description": "Search using Fibonacci numbers.",
                        "expected": "Found at index 3",
                        "hint": "Use Fibonacci numbers to divide array."
                    },
                    {
                        "id": 16,
                        "title": "Asymptotic Notation",
                        "difficulty": "easy",
                        "description": "Calculate O,Omega,Theta for given function.",
                        "expected": "f(n)=3n^2+2n+1 -> O(n^2)",
                        "hint": "Drop constants and lower order terms."
                    },
                    {
                        "id": 17,
                        "title": "Recurrence Relation",
                        "difficulty": "medium",
                        "description": "Solve T(n)=2T(n/2)+n using Master theorem.",
                        "expected": "T(n)=O(n log n)",
                        "hint": "Master theorem: a=2,b=2,f(n)=n -> case 2"
                    },
                    {
                        "id": 18,
                        "title": "Time Complexity Analysis",
                        "difficulty": "medium",
                        "description": "Analyze time complexity of nested loops.",
                        "expected": "O(n^2) for nested loops",
                        "hint": "Count operations as function of n."
                    },
                    {
                        "id": 19,
                        "title": "Space Complexity",
                        "difficulty": "easy",
                        "description": "Analyze space complexity of algorithms.",
                        "expected": "Bubble sort: O(1) Merge sort: O(n)",
                        "hint": "Count extra memory used."
                    },
                    {
                        "id": 20,
                        "title": "Divide and Conquer Max",
                        "difficulty": "medium",
                        "description": "Find max element using divide and conquer.",
                        "expected": "Max of [3,1,4,1,5,9] = 9",
                        "hint": "Split array, find max in each half, compare."
                    },
                    {
                        "id": 21,
                        "title": "Strassen Matrix Multiply",
                        "difficulty": "hard",
                        "description": "Multiply 2x2 matrices using Strassen.",
                        "expected": "Result: [[19,22],[43,50]]",
                        "hint": "7 multiplications instead of 8."
                    },
                    {
                        "id": 22,
                        "title": "Closest Pair of Points",
                        "difficulty": "hard",
                        "description": "Find closest pair in 2D plane.",
                        "expected": "Closest: (2,3) and (3,4) dist=1.41",
                        "hint": "Divide by x, find min in each half, check strip."
                    },
                    {
                        "id": 23,
                        "title": "Activity Selection",
                        "difficulty": "medium",
                        "description": "Select max non-overlapping activities.",
                        "expected": "Selected: 4 activities",
                        "hint": "Sort by end time, greedily select."
                    },
                    {
                        "id": 24,
                        "title": "Fractional Knapsack",
                        "difficulty": "medium",
                        "description": "Maximize value with fractional items.",
                        "expected": "Max value: 240.0",
                        "hint": "Sort by value/weight ratio, take greedily."
                    },
                    {
                        "id": 25,
                        "title": "Huffman Coding",
                        "difficulty": "hard",
                        "description": "Build Huffman tree and encode string.",
                        "expected": "a:0 b:100 c:101 d:11",
                        "hint": "Min-heap, merge two smallest nodes."
                    },
                    {
                        "id": 26,
                        "title": "Job Sequencing",
                        "difficulty": "hard",
                        "description": "Schedule jobs to maximize profit.",
                        "expected": "Selected: J1 J3 Profit:127",
                        "hint": "Sort by profit, find latest slot before deadline."
                    },
                    {
                        "id": 27,
                        "title": "Coin Change Greedy",
                        "difficulty": "medium",
                        "description": "Minimum coins for amount using greedy.",
                        "expected": "Amount:11 Coins:1,5,6,9 Min:2",
                        "hint": "Always pick largest coin <= remaining amount."
                    },
                    {
                        "id": 28,
                        "title": "0/1 Knapsack DP",
                        "difficulty": "hard",
                        "description": "Solve knapsack using dynamic programming.",
                        "expected": "Max value: 220",
                        "hint": "dp[i][w]=max(dp[i-1][w], val[i]+dp[i-1][w-wt[i]])"
                    },
                    {
                        "id": 29,
                        "title": "Longest Common Subsequence",
                        "difficulty": "hard",
                        "description": "Find LCS of two strings.",
                        "expected": "LCS of ABCBDAB and BDCAB = 4",
                        "hint": "dp[i][j]=dp[i-1][j-1]+1 if match else max(dp[i-1][j],dp[i][j-1])"
                    },
                    {
                        "id": 30,
                        "title": "Longest Increasing Subsequence",
                        "difficulty": "hard",
                        "description": "Find LIS length.",
                        "expected": "LIS of [10,9,2,5,3,7,101,18] = 4",
                        "hint": "dp[i]=max(dp[j]+1) for j<i where arr[j]<arr[i]"
                    },
                    {
                        "id": 31,
                        "title": "Matrix Chain Multiplication",
                        "difficulty": "hard",
                        "description": "Minimize multiplications for matrix chain.",
                        "expected": "Min multiplications: 4500",
                        "hint": "dp[i][j]=min cost to multiply matrices i to j."
                    },
                    {
                        "id": 32,
                        "title": "Edit Distance",
                        "difficulty": "hard",
                        "description": "Minimum edits to convert string.",
                        "expected": "kitten->sitting: 3",
                        "hint": "dp[i][j]=min(insert,delete,replace)"
                    },
                    {
                        "id": 33,
                        "title": "Coin Change Min Coins",
                        "difficulty": "hard",
                        "description": "Minimum coins using DP.",
                        "expected": "Amount:11 Min coins:2",
                        "hint": "dp[i]=min(dp[i],dp[i-coin]+1)"
                    },
                    {
                        "id": 34,
                        "title": "Rod Cutting",
                        "difficulty": "hard",
                        "description": "Maximize profit by cutting rod.",
                        "expected": "Length:4 Max profit:10",
                        "hint": "dp[i]=max(price[j]+dp[i-j-1])"
                    },
                    {
                        "id": 35,
                        "title": "BFS Traversal",
                        "difficulty": "medium",
                        "description": "Breadth first search on graph.",
                        "expected": "BFS: 0 1 2 3 4",
                        "hint": "Queue, mark visited, process neighbors."
                    },
                    {
                        "id": 36,
                        "title": "DFS Traversal",
                        "difficulty": "medium",
                        "description": "Depth first search on graph.",
                        "expected": "DFS: 0 1 3 4 2",
                        "hint": "Recursion, mark visited, visit neighbors."
                    },
                    {
                        "id": 37,
                        "title": "Dijkstra Shortest Path",
                        "difficulty": "hard",
                        "description": "Find shortest path using Dijkstra.",
                        "expected": "0->4: 21",
                        "hint": "Min-heap, relax edges."
                    },
                    {
                        "id": 38,
                        "title": "Bellman-Ford",
                        "difficulty": "hard",
                        "description": "Shortest path with negative weights.",
                        "expected": "Distances: 0 -1 2 -2 1",
                        "hint": "Relax all edges V-1 times."
                    },
                    {
                        "id": 39,
                        "title": "Floyd-Warshall",
                        "difficulty": "hard",
                        "description": "All pairs shortest paths.",
                        "expected": "Distance matrix computed",
                        "hint": "dp[i][j]=min(dp[i][j],dp[i][k]+dp[k][j])"
                    },
                    {
                        "id": 40,
                        "title": "Prim MST",
                        "difficulty": "hard",
                        "description": "Minimum spanning tree using Prim.",
                        "expected": "MST weight: 16",
                        "hint": "Greedy, add min edge to visited set."
                    },
                    {
                        "id": 41,
                        "title": "Kruskal MST",
                        "difficulty": "hard",
                        "description": "MST using Kruskal with union-find.",
                        "expected": "MST weight: 16",
                        "hint": "Sort edges, add if no cycle."
                    },
                    {
                        "id": 42,
                        "title": "Topological Sort",
                        "difficulty": "hard",
                        "description": "Topological ordering of DAG.",
                        "expected": "Order: 5 4 2 3 1 0",
                        "hint": "DFS, push to stack after visiting."
                    },
                    {
                        "id": 43,
                        "title": "N-Queens Backtracking",
                        "difficulty": "hard",
                        "description": "Place N queens on NxN board.",
                        "expected": "Solution for N=4 found",
                        "hint": "Place queen, check conflicts, backtrack."
                    },
                    {
                        "id": 44,
                        "title": "Rat in Maze",
                        "difficulty": "hard",
                        "description": "Find path in maze using backtracking.",
                        "expected": "Path found: (0,0)->(2,2)",
                        "hint": "Try all directions, backtrack if stuck."
                    },
                    {
                        "id": 45,
                        "title": "Sudoku Solver",
                        "difficulty": "hard",
                        "description": "Solve sudoku using backtracking.",
                        "expected": "Sudoku solved!",
                        "hint": "Try 1-9, check validity, backtrack."
                    },
                    {
                        "id": 46,
                        "title": "Graph Coloring",
                        "difficulty": "hard",
                        "description": "Color graph with minimum colors.",
                        "expected": "3 colors needed",
                        "hint": "Try colors, check adjacent, backtrack."
                    },
                    {
                        "id": 47,
                        "title": "Subset Sum",
                        "difficulty": "hard",
                        "description": "Find subset with given sum.",
                        "expected": "Subset [3,5,7] sums to 15",
                        "hint": "Include/exclude each element, recurse."
                    },
                    {
                        "id": 48,
                        "title": "Hamiltonian Path",
                        "difficulty": "hard",
                        "description": "Find Hamiltonian path in graph.",
                        "expected": "Path: 0->1->2->3->4",
                        "hint": "Visit each vertex exactly once."
                    },
                    {
                        "id": 49,
                        "title": "Travelling Salesman",
                        "difficulty": "hard",
                        "description": "Find minimum cost tour.",
                        "expected": "Min tour cost: 80",
                        "hint": "Try all permutations or use DP bitmask."
                    },
                    {
                        "id": 50,
                        "title": "String Matching KMP",
                        "difficulty": "hard",
                        "description": "KMP pattern matching algorithm.",
                        "expected": "Pattern found at index 10",
                        "hint": "Build failure function, use to skip comparisons."
                    }
                ]
            },
            {
                "id": "s5_ml",
                "name": "Machine Learning",
                "code": "BCA503",
                "problems": [
                    {
                        "id": 1,
                        "title": "Linear Regression from Scratch",
                        "difficulty": "medium",
                        "description": "Implement simple linear regression using least squares formula. Given x and y data points, calculate slope and intercept. Predict y for new x.",
                        "expected": "Slope: 0.8\nIntercept: 1.2\nPrediction for x=10: 9.2\nMSE: 0.45",
                        "hint": "m=(n*sum(xy)-sum(x)*sum(y))/(n*sum(x^2)-(sum(x))^2). b=(sum(y)-m*sum(x))/n"
                    },
                    {
                        "id": 2,
                        "title": "Multiple Linear Regression",
                        "difficulty": "hard",
                        "description": "Implement multiple linear regression with 2 features using numpy. Find coefficients and predict output.",
                        "expected": "Coefficients: [1.5, 2.3]\nIntercept: 0.8\nPrediction: 15.4",
                        "hint": "Use numpy: coeffs = np.linalg.lstsq(X, y). Add bias column of 1s to X."
                    },
                    {
                        "id": 3,
                        "title": "Gradient Descent",
                        "difficulty": "hard",
                        "description": "Implement gradient descent to minimize f(x)=x^2-4x+4. Start at x=10, lr=0.1. Print x each iteration until convergence.",
                        "expected": "Iter 1: x=8.4\nIter 2: x=7.07\n...\nConverged: x=2.0, f=0.0",
                        "hint": "x = x - lr * f_prime(x). For f(x)=x^2-4x+4, f'(x)=2x-4."
                    },
                    {
                        "id": 4,
                        "title": "K-Nearest Neighbors",
                        "difficulty": "hard",
                        "description": "Implement KNN classifier with k=3. Classify new point based on majority class of 3 nearest neighbors using Euclidean distance.",
                        "expected": "New point: (3,4)\nNearest: (2,3)=A, (3,5)=A, (4,3)=B\nPrediction: A",
                        "hint": "dist=sqrt((x1-x2)^2+(y1-y2)^2). Sort by distance. Take majority of k nearest."
                    },
                    {
                        "id": 5,
                        "title": "K-Means Clustering",
                        "difficulty": "hard",
                        "description": "Implement K-Means clustering with k=2. Assign points to nearest centroid, update centroids until convergence.",
                        "expected": "Cluster 1: [(1,1),(1,2),(2,1)]\nCluster 2: [(8,8),(9,8),(8,9)]\nConverged in 3 iterations",
                        "hint": "Initialize centroids randomly. Assign each point to nearest. Recalculate centroids. Repeat."
                    },
                    {
                        "id": 6,
                        "title": "Naive Bayes Classifier",
                        "difficulty": "hard",
                        "description": "Implement Naive Bayes to classify emails as spam or not spam based on word frequencies.",
                        "expected": "P(spam|email)=0.82\nP(ham|email)=0.18\nClassification: SPAM",
                        "hint": "P(class|words) proportional to P(class)*product(P(word|class)). Use Laplace smoothing."
                    },
                    {
                        "id": 7,
                        "title": "Decision Tree - Entropy",
                        "difficulty": "hard",
                        "description": "Calculate entropy and information gain for a dataset. Find the best attribute to split on.",
                        "expected": "Entropy of dataset: 0.94\nInfoGain(Outlook): 0.246\nBest split: Outlook",
                        "hint": "Entropy=-sum(p*log2(p)). InfoGain=Entropy(parent)-weighted_avg(Entropy(children))"
                    },
                    {
                        "id": 8,
                        "title": "Confusion Matrix",
                        "difficulty": "medium",
                        "description": "Calculate confusion matrix, accuracy, precision, recall, and F1-score from predicted and actual labels.",
                        "expected": "TP=50 FP=5 FN=10 TN=35\nAccuracy: 0.85\nPrecision: 0.91\nRecall: 0.83\nF1: 0.87",
                        "hint": "Accuracy=(TP+TN)/total. Precision=TP/(TP+FP). Recall=TP/(TP+FN). F1=2*P*R/(P+R)"
                    },
                    {
                        "id": 9,
                        "title": "Train Test Split",
                        "difficulty": "medium",
                        "description": "Split dataset into 80% training and 20% testing. Train linear regression on train set, evaluate on test set.",
                        "expected": "Train size: 80\nTest size: 20\nTrain MSE: 0.45\nTest MSE: 0.52",
                        "hint": "Use random shuffle. First 80% for train, rest for test. Calculate MSE on each."
                    },
                    {
                        "id": 10,
                        "title": "Feature Normalization",
                        "difficulty": "medium",
                        "description": "Normalize features using Min-Max scaling and Z-score standardization.",
                        "expected": "Original: [1,5,10,15,20]\nMin-Max: [0.0,0.21,0.47,0.74,1.0]\nZ-score: [-1.41,-0.71,0.0,0.71,1.41]",
                        "hint": "Min-Max: (x-min)/(max-min). Z-score: (x-mean)/std"
                    },
                    {
                        "id": 11,
                        "title": "Perceptron Learning",
                        "difficulty": "hard",
                        "description": "Train perceptron to learn AND gate. Show weight updates each epoch.",
                        "expected": "Epoch 1: weights=[0.1,0.1] bias=-0.2\nFinal: 0 AND 0=0, 1 AND 1=1",
                        "hint": "w=w+lr*(target-output)*x. output=1 if w.x+b>0 else 0."
                    },
                    {
                        "id": 12,
                        "title": "Sigmoid and ReLU Functions",
                        "difficulty": "easy",
                        "description": "Implement sigmoid and ReLU activation functions. Plot values for x from -5 to 5.",
                        "expected": "sigmoid(-5)=0.007\nsigmoid(0)=0.5\nsigmoid(5)=0.993\nrelu(-3)=0\nrelu(3)=3",
                        "hint": "sigmoid=1/(1+e^-x). relu=max(0,x)."
                    },
                    {
                        "id": 13,
                        "title": "Backpropagation",
                        "difficulty": "hard",
                        "description": "Implement backpropagation for a 2-layer neural network. Train on XOR problem.",
                        "expected": "Epoch 1000: loss=0.05\nEpoch 5000: loss=0.001\n0 XOR 1 = 1\n1 XOR 1 = 0",
                        "hint": "Forward pass: z=w*x+b, a=sigmoid(z). Backward: delta=error*sigmoid_prime. Update weights."
                    },
                    {
                        "id": 14,
                        "title": "Principal Component Analysis",
                        "difficulty": "hard",
                        "description": "Implement PCA to reduce 3D data to 2D. Calculate covariance matrix, eigenvalues, eigenvectors.",
                        "expected": "Original: 3 features\nAfter PCA: 2 components\nVariance explained: 95%",
                        "hint": "Center data. Compute covariance matrix. Find eigenvectors. Project data onto top k eigenvectors."
                    },
                    {
                        "id": 15,
                        "title": "Cross Validation",
                        "difficulty": "hard",
                        "description": "Implement k-fold cross validation (k=5) for a classifier. Report mean accuracy.",
                        "expected": "Fold 1: 0.85\nFold 2: 0.88\nFold 3: 0.82\nFold 4: 0.90\nFold 5: 0.87\nMean: 0.864",
                        "hint": "Split data into k folds. Train on k-1 folds, test on remaining. Repeat k times."
                    },
                    {
                        "id": 16,
                        "title": "Polynomial Regression",
                        "difficulty": "hard",
                        "description": "Fit polynomial regression of degree 2 to data. Compare with linear regression.",
                        "expected": "Linear MSE: 2.5\nPolynomial MSE: 0.3\nPolynomial fits better",
                        "hint": "Add x^2 as feature. Use linear regression on [x, x^2] features."
                    },
                    {
                        "id": 17,
                        "title": "Logistic Regression",
                        "difficulty": "hard",
                        "description": "Implement logistic regression for binary classification. Use sigmoid function and gradient descent.",
                        "expected": "Training accuracy: 92%\nTest accuracy: 89%\nPrediction for x=[1,2]: Class 1",
                        "hint": "P(y=1|x)=sigmoid(w.x+b). Loss=-y*log(p)-(1-y)*log(1-p). Update w with gradient."
                    },
                    {
                        "id": 18,
                        "title": "Support Vector Machine Concept",
                        "difficulty": "hard",
                        "description": "Implement a simple linear SVM classifier. Find the hyperplane that maximizes margin.",
                        "expected": "Support vectors: 3\nMargin: 2.0\nClassification accuracy: 95%",
                        "hint": "SVM finds w,b such that w.x+b=0 is decision boundary. Maximize 2/||w||."
                    },
                    {
                        "id": 19,
                        "title": "Random Forest Concept",
                        "difficulty": "hard",
                        "description": "Simulate Random Forest by training 3 decision trees on random subsets. Use majority voting.",
                        "expected": "Tree 1: Class A\nTree 2: Class A\nTree 3: Class B\nFinal prediction: Class A",
                        "hint": "Bootstrap sampling for each tree. Each tree votes. Majority wins."
                    },
                    {
                        "id": 20,
                        "title": "Elbow Method for K-Means",
                        "difficulty": "medium",
                        "description": "Find optimal k for K-Means using elbow method. Plot WCSS for k=1 to 10.",
                        "expected": "k=1: WCSS=500\nk=2: WCSS=150\nk=3: WCSS=80\nk=4: WCSS=75\nOptimal k=3 (elbow point)",
                        "hint": "WCSS=sum of squared distances from each point to its centroid. Plot and find elbow."
                    }
                ]
            },
            {
                "id": "s5_r",
                "name": "R Programming and Statistics",
                "code": "BCA505",
                "problems": [
                    {
                        "id": 1,
                        "title": "Basic R Syntax and Variables",
                        "difficulty": "easy",
                        "description": "Write a program to demonstrate: Basic R Syntax and Variables. This is a easy-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Basic R Syntax and Variables and displays the result.",
                        "expected": "Output for Basic R Syntax and Variables:\n[Result based on your implementation]",
                        "hint": "Break the problem into small steps. Start with the simplest case."
                    },
                    {
                        "id": 2,
                        "title": "Vector Operations",
                        "difficulty": "easy",
                        "description": "Write a program to demonstrate: Vector Operations. This is a easy-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Vector Operations and displays the result.",
                        "expected": "Output for Vector Operations:\n[Result based on your implementation]",
                        "hint": "Break the problem into small steps. Start with the simplest case."
                    },
                    {
                        "id": 3,
                        "title": "Matrix Creation and Operations",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Matrix Creation and Operations. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Matrix Creation and Operations and displays the result.",
                        "expected": "Output for Matrix Creation and Operations:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 4,
                        "title": "Array Manipulation",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Array Manipulation. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Array Manipulation and displays the result.",
                        "expected": "Output for Array Manipulation:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 5,
                        "title": "Working with Lists",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Working with Lists. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Working with Lists and displays the result.",
                        "expected": "Output for Working with Lists:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 6,
                        "title": "Data Frames Operations",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Data Frames Operations. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Data Frames Operations and displays the result.",
                        "expected": "Output for Data Frames Operations:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 7,
                        "title": "Basic Plotting in R",
                        "difficulty": "easy",
                        "description": "Write a program to demonstrate: Basic Plotting in R. This is a easy-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Basic Plotting in R and displays the result.",
                        "expected": "Output for Basic Plotting in R:\n[Result based on your implementation]",
                        "hint": "Break the problem into small steps. Start with the simplest case."
                    },
                    {
                        "id": 8,
                        "title": "Reading CSV Files",
                        "difficulty": "easy",
                        "description": "Write a program to demonstrate: Reading CSV Files. This is a easy-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Reading CSV Files and displays the result.",
                        "expected": "Output for Reading CSV Files:\n[Result based on your implementation]",
                        "hint": "Break the problem into small steps. Start with the simplest case."
                    },
                    {
                        "id": 9,
                        "title": "Writing Data to Files",
                        "difficulty": "easy",
                        "description": "Write a program to demonstrate: Writing Data to Files. This is a easy-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Writing Data to Files and displays the result.",
                        "expected": "Output for Writing Data to Files:\n[Result based on your implementation]",
                        "hint": "Break the problem into small steps. Start with the simplest case."
                    },
                    {
                        "id": 10,
                        "title": "If-Else Conditions",
                        "difficulty": "easy",
                        "description": "Write a program to demonstrate: If-Else Conditions. This is a easy-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements If-Else Conditions and displays the result.",
                        "expected": "Output for If-Else Conditions:\n[Result based on your implementation]",
                        "hint": "Break the problem into small steps. Start with the simplest case."
                    },
                    {
                        "id": 11,
                        "title": "For and While Loops",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: For and While Loops. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements For and While Loops and displays the result.",
                        "expected": "Output for For and While Loops:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 12,
                        "title": "Writing Custom Functions",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Writing Custom Functions. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Writing Custom Functions and displays the result.",
                        "expected": "Output for Writing Custom Functions:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 13,
                        "title": "Exception Handling in R",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Exception Handling in R. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Exception Handling in R and displays the result.",
                        "expected": "Output for Exception Handling in R:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 14,
                        "title": "Descriptive Statistics",
                        "difficulty": "easy",
                        "description": "Write a program to demonstrate: Descriptive Statistics. This is a easy-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Descriptive Statistics and displays the result.",
                        "expected": "Output for Descriptive Statistics:\n[Result based on your implementation]",
                        "hint": "Break the problem into small steps. Start with the simplest case."
                    },
                    {
                        "id": 15,
                        "title": "Data Visualization with ggplot2",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Data Visualization with ggplot2. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Data Visualization with ggplot2 and displays the result.",
                        "expected": "Output for Data Visualization with ggplot2:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 16,
                        "title": "Probability Calculations",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Probability Calculations. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Probability Calculations and displays the result.",
                        "expected": "Output for Probability Calculations:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 17,
                        "title": "Bernoulli Distribution",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Bernoulli Distribution. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Bernoulli Distribution and displays the result.",
                        "expected": "Output for Bernoulli Distribution:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 18,
                        "title": "Binomial Distribution",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Binomial Distribution. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Binomial Distribution and displays the result.",
                        "expected": "Output for Binomial Distribution:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 19,
                        "title": "Poisson Distribution",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Poisson Distribution. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Poisson Distribution and displays the result.",
                        "expected": "Output for Poisson Distribution:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 20,
                        "title": "Uniform Distribution",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Uniform Distribution. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Uniform Distribution and displays the result.",
                        "expected": "Output for Uniform Distribution:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 21,
                        "title": "Normal Distribution",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Normal Distribution. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Normal Distribution and displays the result.",
                        "expected": "Output for Normal Distribution:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 22,
                        "title": "Student's t-Distribution",
                        "difficulty": "hard",
                        "description": "Write a program to demonstrate: Student's t-Distribution. This is a hard-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Student's t-Distribution and displays the result.",
                        "expected": "Output for Student's t-Distribution:\n[Result based on your implementation]",
                        "hint": "Consider edge cases. Plan your data structures before coding."
                    },
                    {
                        "id": 23,
                        "title": "Hypothesis Testing",
                        "difficulty": "hard",
                        "description": "Write a program to demonstrate: Hypothesis Testing. This is a hard-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Hypothesis Testing and displays the result.",
                        "expected": "Output for Hypothesis Testing:\n[Result based on your implementation]",
                        "hint": "Consider edge cases. Plan your data structures before coding."
                    },
                    {
                        "id": 24,
                        "title": "Testing Means (t-test)",
                        "difficulty": "hard",
                        "description": "Write a program to demonstrate: Testing Means (t-test). This is a hard-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Testing Means (t-test) and displays the result.",
                        "expected": "Output for Testing Means (t-test):\n[Result based on your implementation]",
                        "hint": "Consider edge cases. Plan your data structures before coding."
                    },
                    {
                        "id": 25,
                        "title": "Testing Proportions",
                        "difficulty": "hard",
                        "description": "Write a program to demonstrate: Testing Proportions. This is a hard-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Testing Proportions and displays the result.",
                        "expected": "Output for Testing Proportions:\n[Result based on your implementation]",
                        "hint": "Consider edge cases. Plan your data structures before coding."
                    },
                    {
                        "id": 26,
                        "title": "Chi-Square Test",
                        "difficulty": "hard",
                        "description": "Write a program to demonstrate: Chi-Square Test. This is a hard-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Chi-Square Test and displays the result.",
                        "expected": "Output for Chi-Square Test:\n[Result based on your implementation]",
                        "hint": "Consider edge cases. Plan your data structures before coding."
                    },
                    {
                        "id": 27,
                        "title": "ANOVA Analysis",
                        "difficulty": "hard",
                        "description": "Write a program to demonstrate: ANOVA Analysis. This is a hard-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements ANOVA Analysis and displays the result.",
                        "expected": "Output for ANOVA Analysis:\n[Result based on your implementation]",
                        "hint": "Consider edge cases. Plan your data structures before coding."
                    },
                    {
                        "id": 28,
                        "title": "Simple Linear Regression",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Simple Linear Regression. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Simple Linear Regression and displays the result.",
                        "expected": "Output for Simple Linear Regression:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 29,
                        "title": "Multiple Linear Regression",
                        "difficulty": "hard",
                        "description": "Write a program to demonstrate: Multiple Linear Regression. This is a hard-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Multiple Linear Regression and displays the result.",
                        "expected": "Output for Multiple Linear Regression:\n[Result based on your implementation]",
                        "hint": "Consider edge cases. Plan your data structures before coding."
                    },
                    {
                        "id": 30,
                        "title": "Model Diagnostics",
                        "difficulty": "hard",
                        "description": "Write a program to demonstrate: Model Diagnostics. This is a hard-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Model Diagnostics and displays the result.",
                        "expected": "Output for Model Diagnostics:\n[Result based on your implementation]",
                        "hint": "Consider edge cases. Plan your data structures before coding."
                    },
                    {
                        "id": 31,
                        "title": "Advanced Plot Customization",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Advanced Plot Customization. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Advanced Plot Customization and displays the result.",
                        "expected": "Output for Advanced Plot Customization:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    },
                    {
                        "id": 32,
                        "title": "3D Scatter Plots",
                        "difficulty": "hard",
                        "description": "Write a program to demonstrate: 3D Scatter Plots. This is a hard-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements 3D Scatter Plots and displays the result.",
                        "expected": "Output for 3D Scatter Plots:\n[Result based on your implementation]",
                        "hint": "Consider edge cases. Plan your data structures before coding."
                    },
                    {
                        "id": 33,
                        "title": "Color Representation in Plots",
                        "difficulty": "medium",
                        "description": "Write a program to demonstrate: Color Representation in Plots. This is a medium-level problem from R Programming and Statistics (BCA505).",
                        "outputDesc": "The program correctly implements Color Representation in Plots and displays the result.",
                        "expected": "Output for Color Representation in Plots:\n[Result based on your implementation]",
                        "hint": "Think about the algorithm first, then implement step by step."
                    }
                ]
            },
            {
                "id": "s5_cybersecurity",
                "name": "Cybersecurity and Cryptography",
                "code": "BCA508",
                "problems": [
                    {
                        "id": 1,
                        "title": "Caesar Cipher",
                        "difficulty": "easy",
                        "description": "Implement Caesar cipher encryption and decryption with a given shift key.",
                        "expected": "Encrypted: Khoor\nDecrypted: Hello",
                        "hint": "Shift each letter by key. Use modulo 26."
                    },
                    {
                        "id": 2,
                        "title": "Vigenere Cipher",
                        "difficulty": "medium",
                        "description": "Implement Vigenere cipher using a keyword for encryption and decryption.",
                        "expected": "Plaintext: HELLO\nKey: KEY\nCiphertext: RIJVS",
                        "hint": "Each letter shifted by corresponding key letter position."
                    },
                    {
                        "id": 3,
                        "title": "XOR Cipher",
                        "difficulty": "easy",
                        "description": "Encrypt and decrypt text using XOR operation with a key.",
                        "expected": "Encrypted bytes shown\nDecrypted: Hello",
                        "hint": "XOR is its own inverse. Apply same operation to decrypt."
                    },
                    {
                        "id": 4,
                        "title": "MD5 Hash Function",
                        "difficulty": "medium",
                        "description": "Calculate MD5 hash of strings. Show collision resistance.",
                        "expected": "MD5('hello')=5d41402abc4b2a76b9719d911017c592",
                        "hint": "import hashlib; hashlib.md5(s.encode()).hexdigest()"
                    },
                    {
                        "id": 5,
                        "title": "SHA-256 Hash",
                        "difficulty": "medium",
                        "description": "Calculate SHA-256 hash. Demonstrate avalanche effect with small input change.",
                        "expected": "SHA256('hello')=2cf24dba...\nSHA256('Hello')=completely different",
                        "hint": "hashlib.sha256(s.encode()).hexdigest()"
                    },
                    {
                        "id": 6,
                        "title": "RSA Key Generation",
                        "difficulty": "hard",
                        "description": "Generate RSA public and private keys from two prime numbers.",
                        "expected": "n=3233, e=17, d=2753",
                        "hint": "n=p*q, phi=(p-1)*(q-1), e coprime to phi, d=modular_inverse(e,phi)"
                    },
                    {
                        "id": 7,
                        "title": "RSA Encrypt Decrypt",
                        "difficulty": "hard",
                        "description": "Encrypt a number with RSA public key and decrypt with private key.",
                        "expected": "Message:65 Encrypted:2790 Decrypted:65",
                        "hint": "pow(m,e,n) to encrypt. pow(c,d,n) to decrypt."
                    },
                    {
                        "id": 8,
                        "title": "Diffie-Hellman",
                        "difficulty": "hard",
                        "description": "Simulate Diffie-Hellman key exchange. Both parties compute same shared secret.",
                        "expected": "Alice secret=2, Bob secret=2 (same!)",
                        "hint": "A=g^a mod p, B=g^b mod p, shared=B^a mod p=A^b mod p"
                    },
                    {
                        "id": 9,
                        "title": "Password Hashing with Salt",
                        "difficulty": "hard",
                        "description": "Hash passwords with random salt. Verify password against stored hash.",
                        "expected": "Hash stored. Verification: True",
                        "hint": "salt=os.urandom(16). hash=sha256(salt+password.encode())"
                    },
                    {
                        "id": 10,
                        "title": "Base64 Encoding",
                        "difficulty": "easy",
                        "description": "Encode and decode strings using Base64 encoding.",
                        "expected": "Encoded: SGVsbG8=\nDecoded: Hello",
                        "hint": "import base64; base64.b64encode(s.encode())"
                    },
                    {
                        "id": 11,
                        "title": "Frequency Analysis Attack",
                        "difficulty": "medium",
                        "description": "Perform frequency analysis to break a monoalphabetic substitution cipher.",
                        "expected": "Most frequent letter maps to E\nDecrypted message revealed",
                        "hint": "Count letter frequencies. Map to English frequency table."
                    },
                    {
                        "id": 12,
                        "title": "Brute Force Caesar",
                        "difficulty": "medium",
                        "description": "Break Caesar cipher by trying all 26 keys.",
                        "expected": "Key 3: Hello World (correct!)",
                        "hint": "Try all 26 shifts. Print each decryption."
                    },
                    {
                        "id": 13,
                        "title": "Digital Signature Simulation",
                        "difficulty": "hard",
                        "description": "Simulate digital signature: sign with private key, verify with public key.",
                        "expected": "Signature valid: True",
                        "hint": "sig=pow(hash(msg),d,n). Verify: pow(sig,e,n)==hash(msg)"
                    },
                    {
                        "id": 14,
                        "title": "Port Scanner",
                        "difficulty": "hard",
                        "description": "Scan localhost ports to find open ones.",
                        "expected": "Port 80: Open\nPort 443: Open",
                        "hint": "socket.connect_ex((host,port)) returns 0 if open."
                    },
                    {
                        "id": 15,
                        "title": "Password Strength Checker",
                        "difficulty": "medium",
                        "description": "Evaluate password strength based on multiple criteria.",
                        "expected": "Strength: Strong (4/4 criteria met)",
                        "hint": "Check length>=8, uppercase, digits, special chars."
                    },
                    {
                        "id": 16,
                        "title": "One Time Pad",
                        "difficulty": "medium",
                        "description": "Implement One Time Pad cipher. Show perfect secrecy.",
                        "expected": "Encrypted: EQNVZ\nDecrypted: HELLO",
                        "hint": "c[i]=(m[i]+k[i])%26. Key must be random and same length as message."
                    },
                    {
                        "id": 17,
                        "title": "Hill Cipher",
                        "difficulty": "hard",
                        "description": "Implement Hill cipher encryption using matrix multiplication.",
                        "expected": "Plaintext: ACT\nKey matrix: [[6,24,1],[13,16,10],[20,17,15]]\nCiphertext: POH",
                        "hint": "Multiply key matrix by plaintext vector mod 26."
                    },
                    {
                        "id": 18,
                        "title": "Modular Arithmetic",
                        "difficulty": "medium",
                        "description": "Implement modular exponentiation using fast power algorithm.",
                        "expected": "2^10 mod 1000 = 24\n3^100 mod 97 = 1",
                        "hint": "Use Python pow(base,exp,mod) or implement square-and-multiply."
                    },
                    {
                        "id": 19,
                        "title": "GCD and Extended Euclidean",
                        "difficulty": "medium",
                        "description": "Implement GCD and Extended Euclidean algorithm to find modular inverse.",
                        "expected": "GCD(48,18)=6\nModular inverse of 17 mod 3120 = 2753",
                        "hint": "Extended Euclidean: ax+by=gcd(a,b). Modular inverse when gcd=1."
                    },
                    {
                        "id": 20,
                        "title": "AES Simulation",
                        "difficulty": "hard",
                        "description": "Demonstrate AES encryption using Python cryptography library.",
                        "expected": "Plaintext encrypted and decrypted successfully.",
                        "hint": "from cryptography.fernet import Fernet; key=Fernet.generate_key()"
                    },
                    {
                        "id": 21,
                        "title": "SQL Injection Prevention",
                        "difficulty": "hard",
                        "description": "Show SQL injection vulnerability and fix using parameterized queries.",
                        "expected": "Vulnerable: returns all records\nSafe: returns only matching record",
                        "hint": "Use ? placeholders in SQL. Never concatenate user input directly."
                    },
                    {
                        "id": 22,
                        "title": "Steganography LSB",
                        "difficulty": "hard",
                        "description": "Hide message in image using LSB steganography.",
                        "expected": "Message hidden and extracted successfully.",
                        "hint": "Replace LSB of pixel values with message bits."
                    },
                    {
                        "id": 23,
                        "title": "Network Packet Analysis",
                        "difficulty": "hard",
                        "description": "Simulate packet capture and analyze headers using Python.",
                        "expected": "Src IP: 192.168.1.1\nDst IP: 8.8.8.8\nProtocol: TCP\nPort: 80",
                        "hint": "Use scapy or socket library to capture/analyze packets."
                    },
                    {
                        "id": 24,
                        "title": "Firewall Rules Simulation",
                        "difficulty": "hard",
                        "description": "Simulate a simple firewall that allows or blocks packets based on rules.",
                        "expected": "Rule: Block port 23\nPacket to port 23: BLOCKED\nPacket to port 80: ALLOWED",
                        "hint": "Define list of rules. Check each packet against rules in order."
                    },
                    {
                        "id": 25,
                        "title": "Intrusion Detection Simulation",
                        "difficulty": "hard",
                        "description": "Simulate simple IDS that detects port scanning by counting connection attempts.",
                        "expected": "Normal traffic: OK\n10 connections in 1s: ALERT - Port scan detected!",
                        "hint": "Track connection count per IP per second. Alert if exceeds threshold."
                    }
                ]
            },
            {
                "id": "s5_security_lab",
                "name": "Information Security Lab",
                "code": "BCA506",
                "problems": [
                    {
                        "id": 1,
                        "title": "Caesar Cipher Encryption",
                        "difficulty": "easy",
                        "description": "Implement Caesar cipher encryption. Shift each letter by key positions. Preserve case and non-alphabetic characters.",
                        "expected": "Plaintext: Hello World\nKey: 3\nCiphertext: Khoor Zruog",
                        "hint": "For each char: if letter, shift by key using (ord(c)-ord('a')+key)%26+ord('a')"
                    },
                    {
                        "id": 2,
                        "title": "Caesar Cipher Decryption",
                        "difficulty": "easy",
                        "description": "Decrypt a Caesar cipher message given the key.",
                        "expected": "Ciphertext: Khoor Zruog\nKey: 3\nPlaintext: Hello World",
                        "hint": "Decryption is encryption with key = 26-key."
                    },
                    {
                        "id": 3,
                        "title": "Caesar Cipher Brute Force",
                        "difficulty": "medium",
                        "description": "Break Caesar cipher by trying all 26 possible keys. Print all decryptions.",
                        "expected": "Key 0: Khoor Zruog\nKey 1: Jgnnq Yqtnf\n...\nKey 3: Hello World",
                        "hint": "Loop key from 0 to 25. Decrypt with each key and print result."
                    },
                    {
                        "id": 4,
                        "title": "Vigenere Cipher",
                        "difficulty": "medium",
                        "description": "Implement Vigenere cipher encryption and decryption using a keyword.",
                        "expected": "Plaintext: HELLO\nKey: KEY\nCiphertext: RIJVS\nDecrypted: HELLO",
                        "hint": "Each letter shifted by corresponding key letter. key_index = i % len(key)."
                    },
                    {
                        "id": 5,
                        "title": "Rail Fence Cipher",
                        "difficulty": "medium",
                        "description": "Implement Rail Fence transposition cipher with 2 rails.",
                        "expected": "Plaintext: WEAREDISCOVEREDRUNATONCE\nCiphertext: WECRLTEERDSOEEFEAABORADICVNE",
                        "hint": "Write chars in zigzag pattern across rails. Read row by row."
                    },
                    {
                        "id": 6,
                        "title": "Columnar Transposition Cipher",
                        "difficulty": "medium",
                        "description": "Implement columnar transposition cipher. Arrange text in grid, read columns in key order.",
                        "expected": "Plaintext: WEAREDISCOVERED\nKey: 3142\nCiphertext: EVDAECRSEIRDOWE",
                        "hint": "Write text row by row in grid. Read columns in alphabetical order of key."
                    },
                    {
                        "id": 7,
                        "title": "XOR Cipher",
                        "difficulty": "easy",
                        "description": "Implement XOR cipher. Encrypt and decrypt using XOR with a key byte.",
                        "expected": "Plaintext: Hello\nKey: 42\nEncrypted: [bytes]\nDecrypted: Hello",
                        "hint": "XOR is its own inverse. encrypted[i]=plaintext[i]^key. Decrypt same way."
                    },
                    {
                        "id": 8,
                        "title": "One Time Pad",
                        "difficulty": "medium",
                        "description": "Implement One Time Pad encryption. Generate random key same length as message.",
                        "expected": "Message: HELLO\nKey: XMCKL\nCiphertext: EQNVZ\nDecrypted: HELLO",
                        "hint": "c[i]=(m[i]+k[i])%26. Decrypt: m[i]=(c[i]-k[i]+26)%26. Key must be truly random."
                    },
                    {
                        "id": 9,
                        "title": "MD5 Hash",
                        "difficulty": "medium",
                        "description": "Calculate MD5 hash of a string using hashlib. Show that different inputs give different hashes.",
                        "expected": "MD5('hello') = 5d41402abc4b2a76b9719d911017c592\nMD5('Hello') = 8b1a9953c4611296a827abf8c47804d7",
                        "hint": "import hashlib; hashlib.md5(text.encode()).hexdigest()"
                    },
                    {
                        "id": 10,
                        "title": "SHA-256 Hash",
                        "difficulty": "medium",
                        "description": "Calculate SHA-256 hash of a string. Demonstrate avalanche effect.",
                        "expected": "SHA256('hello') = 2cf24dba...\nSHA256('hello!') = completely different hash",
                        "hint": "import hashlib; hashlib.sha256(text.encode()).hexdigest()"
                    },
                    {
                        "id": 11,
                        "title": "Hash Verification",
                        "difficulty": "medium",
                        "description": "Verify file integrity using SHA-256 hash. Detect if file has been tampered.",
                        "expected": "Original hash: abc123...\nFile unchanged: True\nAfter modification: False",
                        "hint": "Hash file content. Compare with stored hash. If different, file was modified."
                    },
                    {
                        "id": 12,
                        "title": "Password Hashing with Salt",
                        "difficulty": "hard",
                        "description": "Hash passwords with random salt using SHA-256. Verify password against stored hash.",
                        "expected": "Password: mypassword\nSalt: random_bytes\nHash: stored_hash\nVerification: True",
                        "hint": "salt=os.urandom(16). hash=sha256(salt+password). Store salt+hash. Verify by rehashing."
                    },
                    {
                        "id": 13,
                        "title": "RSA Key Generation",
                        "difficulty": "hard",
                        "description": "Implement RSA key generation. Choose two primes p and q, calculate n, phi, e, d.",
                        "expected": "p=61, q=53\nn=3233\nphi=3120\ne=17\nd=2753\nPublic key: (17,3233)\nPrivate key: (2753,3233)",
                        "hint": "n=p*q. phi=(p-1)*(q-1). Choose e coprime to phi. d=modular_inverse(e,phi)."
                    },
                    {
                        "id": 14,
                        "title": "RSA Encryption",
                        "difficulty": "hard",
                        "description": "Encrypt a number using RSA public key. c = m^e mod n.",
                        "expected": "Message: 65\nPublic key: (17, 3233)\nCiphertext: 2790",
                        "hint": "ciphertext = pow(message, e, n) in Python."
                    },
                    {
                        "id": 15,
                        "title": "RSA Decryption",
                        "difficulty": "hard",
                        "description": "Decrypt RSA ciphertext using private key. m = c^d mod n.",
                        "expected": "Ciphertext: 2790\nPrivate key: (2753, 3233)\nDecrypted: 65",
                        "hint": "message = pow(ciphertext, d, n) in Python."
                    },
                    {
                        "id": 16,
                        "title": "Diffie-Hellman Key Exchange",
                        "difficulty": "hard",
                        "description": "Simulate Diffie-Hellman key exchange between Alice and Bob. Both arrive at same shared secret.",
                        "expected": "p=23, g=5\nAlice private: 6, public: 8\nBob private: 15, public: 19\nShared secret: 2",
                        "hint": "Alice: A=g^a mod p. Bob: B=g^b mod p. Shared: s=B^a mod p = A^b mod p."
                    },
                    {
                        "id": 17,
                        "title": "Digital Signature",
                        "difficulty": "hard",
                        "description": "Simulate digital signature using RSA. Sign message with private key, verify with public key.",
                        "expected": "Message: Hello\nSignature created with private key\nVerification with public key: Valid",
                        "hint": "Sign: sig=hash(msg)^d mod n. Verify: sig^e mod n == hash(msg)."
                    },
                    {
                        "id": 18,
                        "title": "Frequency Analysis",
                        "difficulty": "medium",
                        "description": "Perform frequency analysis on ciphertext to break simple substitution cipher.",
                        "expected": "Most frequent: E(12.7%), T(9.1%), A(8.2%)\nLikely mapping found\nDecrypted text revealed",
                        "hint": "Count letter frequencies. Map most frequent ciphertext letter to 'e', second to 't', etc."
                    },
                    {
                        "id": 19,
                        "title": "Steganography - LSB",
                        "difficulty": "hard",
                        "description": "Hide a secret message in an image using LSB (Least Significant Bit) steganography.",
                        "expected": "Original image: unchanged visually\nHidden message: 'Secret'\nExtracted: 'Secret'",
                        "hint": "Replace LSB of each pixel's RGB value with bits of message. Extract by reading LSBs."
                    },
                    {
                        "id": 20,
                        "title": "Port Scanner",
                        "difficulty": "hard",
                        "description": "Write a simple port scanner that checks which ports are open on localhost.",
                        "expected": "Scanning localhost...\nPort 80: Open\nPort 443: Open\nPort 8080: Open\nPort 22: Closed",
                        "hint": "import socket; s=socket.socket(); s.settimeout(0.5); result=s.connect_ex(('localhost',port))"
                    },
                    {
                        "id": 21,
                        "title": "Password Strength Checker",
                        "difficulty": "medium",
                        "description": "Check password strength based on length, uppercase, lowercase, digits, special chars.",
                        "expected": "Password: MyP@ss123\nLength: OK\nUppercase: OK\nDigits: OK\nSpecial: OK\nStrength: Strong",
                        "hint": "Use regex or manual checks. Score based on criteria met."
                    },
                    {
                        "id": 22,
                        "title": "Base64 Encoding Decoding",
                        "difficulty": "easy",
                        "description": "Encode and decode strings using Base64.",
                        "expected": "Original: Hello World\nEncoded: SGVsbG8gV29ybGQ=\nDecoded: Hello World",
                        "hint": "import base64; base64.b64encode(text.encode()); base64.b64decode(encoded)"
                    },
                    {
                        "id": 23,
                        "title": "AES Encryption Concept",
                        "difficulty": "hard",
                        "description": "Demonstrate AES encryption using Python's cryptography library. Encrypt and decrypt a message.",
                        "expected": "Key: 16 bytes\nPlaintext: Hello World\nCiphertext: [encrypted bytes]\nDecrypted: Hello World",
                        "hint": "from cryptography.fernet import Fernet; key=Fernet.generate_key(); f=Fernet(key); f.encrypt()"
                    },
                    {
                        "id": 24,
                        "title": "Brute Force Password Attack",
                        "difficulty": "medium",
                        "description": "Simulate brute force attack on a 3-character lowercase password. Count attempts.",
                        "expected": "Target hash: abc123...\nTrying: aaa, aab, aac...\nFound: cat\nAttempts: 2003",
                        "hint": "Generate all combinations of lowercase letters up to length 3. Hash each and compare."
                    },
                    {
                        "id": 25,
                        "title": "SQL Injection Demo",
                        "difficulty": "hard",
                        "description": "Demonstrate SQL injection vulnerability and prevention using parameterized queries.",
                        "expected": "Vulnerable query: returns all users\nSafe query: returns only matching user\nPrevention: use ? placeholders",
                        "hint": "Vulnerable: 'SELECT * FROM users WHERE name='+input. Safe: cursor.execute('SELECT * FROM users WHERE name=?',(input,))"
                    }
                ]
            }
        ]
    },
    "semester6": {
        "name": "Semester 6",
        "subjects": [
            {
                "id": "s6_ai",
                "name": "Artificial Intelligence",
                "code": "BCA604",
                "problems": [
                    {
                        "id": 1,
                        "title": "BFS - Basic Traversal",
                        "difficulty": "medium",
                        "description": "Implement BFS on an undirected graph. Print nodes visited in BFS order starting from node 0.",
                        "expected": "BFS from 0: 0 1 2 3 4 5",
                        "hint": "Use a queue and visited array. Enqueue start node, then process neighbors level by level."
                    },
                    {
                        "id": 2,
                        "title": "BFS - Shortest Path (Unweighted)",
                        "difficulty": "medium",
                        "description": "Find the shortest path between two nodes in an unweighted graph using BFS. Print the path and its length.",
                        "expected": "Shortest path from 0 to 5: 0 -> 2 -> 4 -> 5\nLength: 3",
                        "hint": "Track parent of each node during BFS. Backtrack from destination to source to get path."
                    },
                    {
                        "id": 3,
                        "title": "BFS - Level Order of Binary Tree",
                        "difficulty": "medium",
                        "description": "Print the level order traversal of a binary tree using BFS. Print each level on a new line.",
                        "expected": "Level 0: 1\nLevel 1: 2 3\nLevel 2: 4 5 6 7",
                        "hint": "Use a queue. Enqueue root, then for each node dequeued, enqueue its left and right children."
                    },
                    {
                        "id": 4,
                        "title": "BFS - Count Connected Components",
                        "difficulty": "medium",
                        "description": "Count the number of connected components in an undirected graph using BFS.",
                        "expected": "Graph has 3 connected components",
                        "hint": "Run BFS from every unvisited node. Each BFS call finds one component."
                    },
                    {
                        "id": 5,
                        "title": "BFS - Check Bipartite Graph",
                        "difficulty": "hard",
                        "description": "Check if a graph is bipartite using BFS. A graph is bipartite if nodes can be colored with 2 colors such that no two adjacent nodes have the same color.",
                        "expected": "Graph is Bipartite: Yes\nColoring: 0=Red 1=Blue 2=Red 3=Blue",
                        "hint": "Use BFS with 2 colors. If a neighbor has the same color as current node, not bipartite."
                    },
                    {
                        "id": 6,
                        "title": "BFS - Minimum Steps in Grid",
                        "difficulty": "hard",
                        "description": "Find the minimum number of steps to reach from top-left to bottom-right of a grid, avoiding obstacles (1=blocked, 0=free).",
                        "expected": "Grid 4x4\nMin steps: 6",
                        "hint": "Treat each cell as a node. BFS from (0,0) to (n-1,m-1). Move in 4 directions."
                    },
                    {
                        "id": 7,
                        "title": "BFS - Word Ladder Problem",
                        "difficulty": "hard",
                        "description": "Given a start word and end word, find the minimum number of transformations to reach end word, changing one letter at a time. Each intermediate word must be in the dictionary.",
                        "expected": "Start: hit, End: cog\nTransformations: hit -> hot -> dot -> dog -> cog\nSteps: 4",
                        "hint": "Each word is a node. Two words are connected if they differ by one letter. BFS finds shortest path."
                    },
                    {
                        "id": 8,
                        "title": "BFS - Flood Fill Algorithm",
                        "difficulty": "medium",
                        "description": "Implement flood fill (like paint bucket tool). Given a 2D grid, a starting cell, and a new color, fill all connected cells of the same original color.",
                        "expected": "Original grid filled. Changed 5 cells to new color.",
                        "hint": "BFS from starting cell. Visit all 4-directional neighbors with same original color and recolor them."
                    },
                    {
                        "id": 9,
                        "title": "DFS - Basic Traversal",
                        "difficulty": "medium",
                        "description": "Implement DFS on a directed graph using recursion. Print nodes in DFS order.",
                        "expected": "DFS from 0: 0 1 3 4 2 5",
                        "hint": "Use a visited array. For each unvisited neighbor, recursively call DFS."
                    },
                    {
                        "id": 10,
                        "title": "DFS - Detect Cycle in Directed Graph",
                        "difficulty": "hard",
                        "description": "Detect if a directed graph contains a cycle using DFS. Use a recursion stack to track nodes in current path.",
                        "expected": "Graph has cycle: Yes\nCycle involves nodes: 1 -> 2 -> 3 -> 1",
                        "hint": "Maintain a recStack[] array. If a neighbor is in recStack, cycle exists."
                    },
                    {
                        "id": 11,
                        "title": "DFS - Detect Cycle in Undirected Graph",
                        "difficulty": "medium",
                        "description": "Detect if an undirected graph contains a cycle using DFS.",
                        "expected": "Graph has cycle: Yes",
                        "hint": "Track parent of each node. If a visited neighbor is not the parent, cycle exists."
                    },
                    {
                        "id": 12,
                        "title": "DFS - Topological Sort",
                        "difficulty": "hard",
                        "description": "Perform topological sorting of a Directed Acyclic Graph (DAG) using DFS. Print the topological order.",
                        "expected": "Topological order: 5 4 2 3 1 0",
                        "hint": "After visiting all neighbors of a node, push it to a stack. Print stack in reverse."
                    },
                    {
                        "id": 13,
                        "title": "DFS - Find All Paths",
                        "difficulty": "hard",
                        "description": "Find all possible paths from source to destination in a directed graph using DFS.",
                        "expected": "All paths from 0 to 3:\n0 -> 1 -> 3\n0 -> 2 -> 3\n0 -> 1 -> 2 -> 3",
                        "hint": "Use DFS with backtracking. Add node to path, recurse, then remove from path."
                    },
                    {
                        "id": 14,
                        "title": "DFS - Connected Components",
                        "difficulty": "medium",
                        "description": "Find all connected components in an undirected graph using DFS. Print nodes in each component.",
                        "expected": "Component 1: 0 1 2\nComponent 2: 3 4\nComponent 3: 5",
                        "hint": "Run DFS from each unvisited node. All nodes visited in one DFS call form one component."
                    },
                    {
                        "id": 15,
                        "title": "DFS - Maze Solver",
                        "difficulty": "hard",
                        "description": "Solve a maze represented as a 2D grid using DFS. Find a path from start (S) to end (E). Print the path.",
                        "expected": "Maze solved!\nPath: (0,0) -> (0,1) -> (1,1) -> (2,1) -> (2,2)",
                        "hint": "Use DFS with backtracking. Mark cells as visited. If stuck, backtrack and try another direction."
                    },
                    {
                        "id": 16,
                        "title": "A* Search - Grid Pathfinding",
                        "difficulty": "hard",
                        "description": "Implement A* search on a grid to find the shortest path from start to goal avoiding obstacles. Use Manhattan distance as heuristic.",
                        "expected": "Path found: (0,0)->(0,1)->(1,1)->(2,1)->(2,2)\nCost: 4",
                        "hint": "f(n)=g(n)+h(n). Use priority queue ordered by f. Manhattan distance: |x1-x2|+|y1-y2|."
                    },
                    {
                        "id": 17,
                        "title": "A* Search - Weighted Graph",
                        "difficulty": "hard",
                        "description": "Implement A* on a weighted graph with given heuristic values. Find optimal path from source to goal.",
                        "expected": "A* Path: A->C->E->G\nTotal cost: 12",
                        "hint": "Maintain open and closed sets. Always expand node with lowest f=g+h value."
                    },
                    {
                        "id": 18,
                        "title": "Greedy Best First Search",
                        "difficulty": "hard",
                        "description": "Implement Greedy Best First Search. Always expand the node with lowest heuristic value. Compare result with A*.",
                        "expected": "Greedy path: A->B->E (cost 15)\nA* path: A->C->E (cost 12)\nA* is optimal.",
                        "hint": "Greedy uses only h(n), ignoring g(n). May not find optimal path but is faster."
                    },
                    {
                        "id": 19,
                        "title": "Hill Climbing - Function Optimization",
                        "difficulty": "hard",
                        "description": "Use hill climbing to maximize f(x) = -x^2 + 4x + 1. Start from x=0, step size=0.1. Print each step.",
                        "expected": "x=0.0 f=1.0\nx=0.1 f=1.39\n...\nx=2.0 f=5.0 (maximum)",
                        "hint": "At each step evaluate x+step and x-step. Move to higher value. Stop when neither improves."
                    },
                    {
                        "id": 20,
                        "title": "Simulated Annealing",
                        "difficulty": "hard",
                        "description": "Implement simulated annealing to find the minimum of f(x) = x^2 - 4x + 4. Start at x=10, temperature=100.",
                        "expected": "Initial x=10, f=64\nFinal x=2.0, f=0.0 (minimum found)",
                        "hint": "Accept worse solutions with probability e^(-delta/T). Decrease T each iteration."
                    },
                    {
                        "id": 21,
                        "title": "Iterative Deepening DFS",
                        "difficulty": "hard",
                        "description": "Implement IDDFS to find a target node in a tree. Print the depth at which it is found.",
                        "expected": "Searching for node 7...\nDepth 1: not found\nDepth 2: not found\nDepth 3: Found at depth 3!",
                        "hint": "Run DFS with depth limit 0,1,2,... Increment limit until goal found."
                    },
                    {
                        "id": 22,
                        "title": "Bidirectional BFS",
                        "difficulty": "hard",
                        "description": "Implement bidirectional BFS to find shortest path. Run BFS from both source and destination simultaneously.",
                        "expected": "Bidirectional BFS\nMeeting point: node 4\nShortest path length: 4",
                        "hint": "Alternate between forward and backward BFS. Stop when frontiers meet."
                    },
                    {
                        "id": 23,
                        "title": "Simple Reflex Agent",
                        "difficulty": "easy",
                        "description": "Implement a simple reflex agent for a vacuum cleaner world. Agent checks room state and decides: Clean or Move.",
                        "expected": "Room A: Dirty -> Clean\nRoom B: Clean -> Move Right\nRoom A: Clean -> Done",
                        "hint": "Use if-else rules. If current room dirty, clean. Else move to next room."
                    },
                    {
                        "id": 24,
                        "title": "Model-Based Reflex Agent",
                        "difficulty": "medium",
                        "description": "Implement a model-based agent that maintains internal state. The agent remembers which rooms it has cleaned.",
                        "expected": "State: {A:dirty, B:dirty}\nClean A -> State: {A:clean, B:dirty}\nMove to B -> Clean B\nAll rooms clean!",
                        "hint": "Maintain a state dictionary. Update state after each action."
                    },
                    {
                        "id": 25,
                        "title": "Goal-Based Agent",
                        "difficulty": "medium",
                        "description": "Implement a goal-based agent that plans actions to achieve a goal. Agent must reach room C from room A.",
                        "expected": "Goal: Reach room C\nPlan: A->B->C\nExecuting: Move A->B, Move B->C\nGoal achieved!",
                        "hint": "Define goal state. Use search to find sequence of actions leading to goal."
                    },
                    {
                        "id": 26,
                        "title": "Linear Regression from Scratch",
                        "difficulty": "medium",
                        "description": "Implement linear regression using least squares. Given (x,y) data points, find slope and intercept. Predict for new x.",
                        "expected": "Slope: 0.8\nIntercept: 1.2\nPrediction for x=10: 9.2\nMSE: 0.45",
                        "hint": "m=(n*Σxy - Σx*Σy)/(n*Σx² - (Σx)²). b=(Σy - m*Σx)/n"
                    },
                    {
                        "id": 27,
                        "title": "Gradient Descent",
                        "difficulty": "hard",
                        "description": "Implement gradient descent to minimize f(x) = x^2 - 4x + 4. Start at x=10, learning rate=0.1. Print x after each iteration.",
                        "expected": "Iter 1: x=8.4\nIter 2: x=7.07\n...\nConverged at x=2.0, f=0.0",
                        "hint": "x = x - lr * f'(x). For f(x)=x²-4x+4, f'(x)=2x-4. Repeat until |gradient|<threshold."
                    },
                    {
                        "id": 28,
                        "title": "K-Nearest Neighbors",
                        "difficulty": "hard",
                        "description": "Implement KNN classifier with k=3. Classify a new point based on majority class of 3 nearest neighbors using Euclidean distance.",
                        "expected": "Training: 10 points\nNew point: (3,4)\nNearest: (2,3)=A, (3,5)=A, (4,3)=B\nPrediction: A",
                        "hint": "Calculate distance to all points. Sort. Take k nearest. Return majority class."
                    },
                    {
                        "id": 29,
                        "title": "K-Means Clustering",
                        "difficulty": "hard",
                        "description": "Implement K-Means clustering with k=2. Given 8 data points, assign each to nearest centroid and update centroids until convergence.",
                        "expected": "Iteration 1: Cluster1=[p1,p2,p3] Cluster2=[p4,p5,p6,p7,p8]\nConverged after 3 iterations.",
                        "hint": "Initialize k centroids randomly. Assign each point to nearest centroid. Recalculate centroids. Repeat."
                    },
                    {
                        "id": 30,
                        "title": "Perceptron Learning",
                        "difficulty": "hard",
                        "description": "Train a perceptron to learn AND gate. Show weight updates for each training example over multiple epochs.",
                        "expected": "Epoch 1: w=[0.1,0.1] b=-0.2\nEpoch 2: w=[0.2,0.2] b=-0.3\nFinal: 0 AND 0=0, 1 AND 1=1",
                        "hint": "w=w+lr*(target-output)*x. Use step function: output=1 if w·x+b>0 else 0."
                    },
                    {
                        "id": 31,
                        "title": "Naive Bayes Classifier",
                        "difficulty": "hard",
                        "description": "Implement Naive Bayes to classify text as spam or not spam based on word frequencies.",
                        "expected": "Training on 6 emails...\nTest: 'free money win prize'\nP(spam)=0.82, P(ham)=0.18\nClassification: SPAM",
                        "hint": "P(class|words) ∝ P(class) * ∏P(word|class). Use Laplace smoothing to handle zero probabilities."
                    },
                    {
                        "id": 32,
                        "title": "Decision Tree - ID3 Algorithm",
                        "difficulty": "hard",
                        "description": "Implement ID3 decision tree algorithm. Calculate entropy and information gain to select best attribute for splitting.",
                        "expected": "Entropy of dataset: 0.94\nBest attribute: Outlook\nTree built successfully.\nPrediction: Play=Yes",
                        "hint": "Entropy=-Σp*log2(p). InfoGain=Entropy(parent)-Σ(weighted Entropy of children)."
                    },
                    {
                        "id": 33,
                        "title": "Propositional Logic Evaluator",
                        "difficulty": "medium",
                        "description": "Evaluate propositional logic expressions with AND, OR, NOT. Take expression and variable values as input.",
                        "expected": "Expression: (A AND B) OR (NOT C)\nA=T B=F C=T\nResult: False",
                        "hint": "Replace variable names with True/False. Use Python eval() or manual parsing."
                    },
                    {
                        "id": 34,
                        "title": "Truth Table Generator",
                        "difficulty": "medium",
                        "description": "Generate a complete truth table for a given propositional formula with n variables.",
                        "expected": "Formula: A AND B OR C\nA B C | Result\n0 0 0 | 0\n0 0 1 | 1\n...",
                        "hint": "Use itertools.product([0,1], repeat=n) to generate all combinations."
                    },
                    {
                        "id": 35,
                        "title": "Forward Chaining Inference",
                        "difficulty": "hard",
                        "description": "Implement forward chaining. Given facts and IF-THEN rules, derive all possible conclusions.",
                        "expected": "Facts: {A, B}\nRules: A+B->C, C->D, D->E\nDerived: C, D, E\nGoal E: Proved",
                        "hint": "Keep applying rules whose premises are all in facts. Add conclusions to facts. Repeat until no change."
                    },
                    {
                        "id": 36,
                        "title": "Backward Chaining Inference",
                        "difficulty": "hard",
                        "description": "Implement backward chaining to prove a goal from a knowledge base.",
                        "expected": "Goal: E\nNeed D -> Need C -> Need A,B\nA: known, B: known\nGoal E: Proved!",
                        "hint": "To prove goal G, find rule with G as conclusion. Recursively prove all premises."
                    },
                    {
                        "id": 37,
                        "title": "Resolution Theorem Proving",
                        "difficulty": "hard",
                        "description": "Implement resolution for propositional logic. Convert clauses to CNF and apply resolution to prove a theorem.",
                        "expected": "Clauses: {A,B}, {~A,C}, {~B,~C}\nApplying resolution...\nDerived empty clause: Contradiction found!",
                        "hint": "Resolution rule: from {A,X} and {~A,Y} derive {X,Y}. Empty clause means contradiction."
                    },
                    {
                        "id": 38,
                        "title": "Minimax Algorithm",
                        "difficulty": "hard",
                        "description": "Implement Minimax for a game tree. Given a tree with leaf values, find the optimal value for the maximizing player.",
                        "expected": "Game tree depth: 3\nLeaf values: [3,5,2,9,1,7,4,6]\nOptimal value: 5",
                        "hint": "Maximizer picks max of children. Minimizer picks min. Alternate levels."
                    },
                    {
                        "id": 39,
                        "title": "Alpha-Beta Pruning",
                        "difficulty": "hard",
                        "description": "Implement Minimax with Alpha-Beta pruning. Show which branches are pruned.",
                        "expected": "Without pruning: 40 nodes\nWith alpha-beta: 18 nodes\nOptimal value: 5 (same result)",
                        "hint": "Maintain alpha (best for max) and beta (best for min). Prune when alpha>=beta."
                    },
                    {
                        "id": 40,
                        "title": "Tic-Tac-Toe with Minimax AI",
                        "difficulty": "hard",
                        "description": "Build Tic-Tac-Toe where AI uses Minimax. AI should never lose. Print board after each move.",
                        "expected": "Your move: 5\nAI move: 1\nBoard:\nO _ _\n_ X _\n_ _ _\nGame continues...",
                        "hint": "Score: +10 for AI win, -10 for player win, 0 for draw. AI picks move with highest score."
                    },
                    {
                        "id": 41,
                        "title": "Single Neuron - Step Function",
                        "difficulty": "medium",
                        "description": "Implement a single artificial neuron with step activation. Given weights and inputs, compute output.",
                        "expected": "Inputs: [1, 0]\nWeights: [0.5, 0.5]\nBias: -0.3\nWeighted sum: 0.2\nOutput: 1",
                        "hint": "output = 1 if (w1*x1 + w2*x2 + bias) > 0 else 0"
                    },
                    {
                        "id": 42,
                        "title": "Sigmoid Activation Function",
                        "difficulty": "easy",
                        "description": "Implement sigmoid activation function σ(x) = 1/(1+e^-x). Plot values for x from -5 to 5.",
                        "expected": "x=-5: 0.0067\nx=-2: 0.1192\nx=0: 0.5000\nx=2: 0.8808\nx=5: 0.9933",
                        "hint": "import math; sigmoid = lambda x: 1/(1+math.exp(-x))"
                    },
                    {
                        "id": 43,
                        "title": "XOR Problem with Neural Network",
                        "difficulty": "hard",
                        "description": "Implement a 2-layer neural network to solve XOR problem. Train with backpropagation.",
                        "expected": "Training XOR network...\nEpoch 1000: loss=0.05\nEpoch 5000: loss=0.001\n0 XOR 0 = 0\n1 XOR 1 = 0\n0 XOR 1 = 1",
                        "hint": "Need hidden layer. Use sigmoid activation. Backprop: delta = error * sigmoid_derivative."
                    },
                    {
                        "id": 44,
                        "title": "Tokenization",
                        "difficulty": "easy",
                        "description": "Implement word tokenization. Split a sentence into individual words, remove punctuation, and convert to lowercase.",
                        "expected": "Input: 'Hello, World! How are you?'\nTokens: ['hello', 'world', 'how', 'are', 'you']\nCount: 5",
                        "hint": "Use split() and strip punctuation with string.punctuation or regex."
                    },
                    {
                        "id": 45,
                        "title": "Bag of Words Model",
                        "difficulty": "medium",
                        "description": "Implement Bag of Words representation. Given a corpus of sentences, create a vocabulary and represent each sentence as a word frequency vector.",
                        "expected": "Vocab: ['cat','dog','sat','mat']\nSentence 1: [1,0,1,1]\nSentence 2: [0,1,1,0]",
                        "hint": "Build vocabulary from all words. For each sentence, count occurrences of each vocab word."
                    },
                    {
                        "id": 46,
                        "title": "TF-IDF Calculation",
                        "difficulty": "hard",
                        "description": "Calculate TF-IDF scores for words in a document corpus. Print top 5 words by TF-IDF score.",
                        "expected": "Doc1 top words:\n'algorithm': 0.45\n'search': 0.38\n'graph': 0.31",
                        "hint": "TF=word_count/total_words. IDF=log(N/df). TF-IDF=TF*IDF."
                    },
                    {
                        "id": 47,
                        "title": "Edit Distance (Levenshtein)",
                        "difficulty": "hard",
                        "description": "Calculate the minimum edit distance between two strings using dynamic programming.",
                        "expected": "String1: 'kitten'\nString2: 'sitting'\nEdit distance: 3\nOperations: substitute k->s, substitute e->i, insert g",
                        "hint": "dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+(0 if match else 1))"
                    },
                    {
                        "id": 48,
                        "title": "Sentiment Analysis - Simple",
                        "difficulty": "medium",
                        "description": "Implement simple rule-based sentiment analysis. Given a review text and lists of positive/negative words, classify as positive, negative, or neutral.",
                        "expected": "Review: 'Great product, very happy with purchase'\nPositive words: 3\nNegative words: 0\nSentiment: Positive",
                        "hint": "Count positive and negative words. If pos>neg: positive. If neg>pos: negative. Else: neutral."
                    },
                    {
                        "id": 49,
                        "title": "Uniform Cost Search",
                        "difficulty": "hard",
                        "description": "Implement Uniform Cost Search on a weighted graph. Find the least-cost path from source to destination.",
                        "expected": "UCS from A to G\nPath: A->C->F->G\nTotal cost: 8",
                        "hint": "Use priority queue ordered by path cost. Expand lowest-cost node first."
                    },
                    {
                        "id": 50,
                        "title": "Depth Limited Search",
                        "difficulty": "medium",
                        "description": "Implement Depth Limited Search with a given depth limit. Return success, failure, or cutoff.",
                        "expected": "DLS with limit=3\nSearching for node 7...\nResult: Found at depth 3",
                        "hint": "DFS but stop recursing when depth limit reached. Return cutoff if limit exceeded."
                    }
                ]
            },
            {
                "id": "s6_php",
                "name": "PHP and MySQL Programming",
                "code": "BCA605",
                "problems": [
                    {
                        "id": 1,
                        "title": "Hello World in PHP",
                        "difficulty": "easy",
                        "description": "Write a PHP script that prints Hello World to the browser.",
                        "expected": "Hello, World!",
                        "hint": "Use <?php echo 'Hello, World!'; ?>"
                    },
                    {
                        "id": 2,
                        "title": "PHP Variables and Data Types",
                        "difficulty": "easy",
                        "description": "Declare int, float, string, boolean variables and print each with gettype().",
                        "expected": "10 - integer\n3.14 - double\nHello - string\n1 - boolean",
                        "hint": "PHP variables start with $. Use gettype() to get type."
                    },
                    {
                        "id": 3,
                        "title": "PHP Arithmetic Operations",
                        "difficulty": "easy",
                        "description": "Take two numbers and perform +, -, *, /, % operations.",
                        "expected": "Add:13 Sub:7 Mul:30 Div:3.33 Mod:1",
                        "hint": "Use +,-,*,/,% operators."
                    },
                    {
                        "id": 4,
                        "title": "PHP String Length",
                        "difficulty": "easy",
                        "description": "Take a string and print its length using strlen().",
                        "expected": "String: Hello World\nLength: 11",
                        "hint": "Use strlen($str)."
                    },
                    {
                        "id": 5,
                        "title": "PHP String Reverse",
                        "difficulty": "easy",
                        "description": "Reverse a string using strrev().",
                        "expected": "Original: Hello\nReversed: olleH",
                        "hint": "Use strrev($str)."
                    },
                    {
                        "id": 6,
                        "title": "PHP String Uppercase Lowercase",
                        "difficulty": "easy",
                        "description": "Convert a string to uppercase and lowercase.",
                        "expected": "Upper: HELLO\nLower: hello",
                        "hint": "Use strtoupper() and strtolower()."
                    },
                    {
                        "id": 7,
                        "title": "PHP String Replace",
                        "difficulty": "easy",
                        "description": "Replace a word in a string using str_replace().",
                        "expected": "Original: I love Java\nReplaced: I love PHP",
                        "hint": "str_replace('Java','PHP',$str)"
                    },
                    {
                        "id": 8,
                        "title": "PHP String Position",
                        "difficulty": "easy",
                        "description": "Find the position of a substring using strpos().",
                        "expected": "String: Hello World\nPosition of World: 6",
                        "hint": "strpos($str,'World') returns index."
                    },
                    {
                        "id": 9,
                        "title": "PHP String Split",
                        "difficulty": "easy",
                        "description": "Split a comma-separated string into an array using explode().",
                        "expected": "Parts: Apple, Banana, Mango",
                        "hint": "explode(',',$str) splits by comma."
                    },
                    {
                        "id": 10,
                        "title": "PHP String Join",
                        "difficulty": "easy",
                        "description": "Join array elements into a string using implode().",
                        "expected": "Joined: Apple-Banana-Mango",
                        "hint": "implode('-',$arr) joins with separator."
                    },
                    {
                        "id": 11,
                        "title": "PHP If-Else Statement",
                        "difficulty": "easy",
                        "description": "Check if a number is positive, negative, or zero.",
                        "expected": "Number: 5\nResult: Positive",
                        "hint": "Use if-elseif-else."
                    },
                    {
                        "id": 12,
                        "title": "PHP Switch Statement",
                        "difficulty": "easy",
                        "description": "Print day name for a given day number (1-7).",
                        "expected": "Day 3: Wednesday",
                        "hint": "Use switch($day) with 7 cases."
                    },
                    {
                        "id": 13,
                        "title": "PHP Ternary Operator",
                        "difficulty": "easy",
                        "description": "Use ternary operator to check even or odd.",
                        "expected": "6 is Even",
                        "hint": "$result = ($n%2==0) ? 'Even' : 'Odd';"
                    },
                    {
                        "id": 14,
                        "title": "PHP For Loop",
                        "difficulty": "easy",
                        "description": "Print multiplication table of a number using for loop.",
                        "expected": "5x1=5\n5x2=10\n...\n5x10=50",
                        "hint": "for($i=1;$i<=10;$i++) echo $n.'x'.$i.'='.$n*$i;"
                    },
                    {
                        "id": 15,
                        "title": "PHP While Loop",
                        "difficulty": "easy",
                        "description": "Print numbers 1 to 10 using while loop.",
                        "expected": "1 2 3 4 5 6 7 8 9 10",
                        "hint": "$i=1; while($i<=10){ echo $i; $i++; }"
                    },
                    {
                        "id": 16,
                        "title": "PHP Do-While Loop",
                        "difficulty": "easy",
                        "description": "Print sum of digits of a number using do-while loop.",
                        "expected": "Number: 1234\nSum of digits: 10",
                        "hint": "do{ $sum+=$n%10; $n=(int)$n/10; }while($n>0);"
                    },
                    {
                        "id": 17,
                        "title": "PHP Factorial using Loop",
                        "difficulty": "easy",
                        "description": "Calculate factorial of n using a for loop.",
                        "expected": "5! = 120",
                        "hint": "$fact=1; for($i=1;$i<=$n;$i++) $fact*=$i;"
                    },
                    {
                        "id": 18,
                        "title": "PHP Fibonacci Series",
                        "difficulty": "medium",
                        "description": "Print first n Fibonacci numbers.",
                        "expected": "0 1 1 2 3 5 8 13",
                        "hint": "$a=0;$b=1; for($i=0;$i<$n;$i++){ echo $a; $c=$a+$b; $a=$b; $b=$c; }"
                    },
                    {
                        "id": 19,
                        "title": "PHP Prime Number Check",
                        "difficulty": "medium",
                        "description": "Check if a number is prime.",
                        "expected": "17 is Prime",
                        "hint": "Loop from 2 to sqrt($n). If any divides evenly, not prime."
                    },
                    {
                        "id": 20,
                        "title": "PHP Armstrong Number",
                        "difficulty": "medium",
                        "description": "Check if a number is an Armstrong number.",
                        "expected": "153 is Armstrong",
                        "hint": "Sum of cubes of digits equals the number."
                    },
                    {
                        "id": 21,
                        "title": "PHP Palindrome Check",
                        "difficulty": "medium",
                        "description": "Check if a string is a palindrome.",
                        "expected": "madam is Palindrome",
                        "hint": "Compare $str with strrev($str)."
                    },
                    {
                        "id": 22,
                        "title": "PHP Indexed Array",
                        "difficulty": "easy",
                        "description": "Create an indexed array of 5 fruits, print all elements using foreach.",
                        "expected": "Apple\nBanana\nMango\nOrange\nGrape",
                        "hint": "foreach($arr as $item) echo $item;"
                    },
                    {
                        "id": 23,
                        "title": "PHP Associative Array",
                        "difficulty": "medium",
                        "description": "Create associative array of student marks, print name and marks.",
                        "expected": "Alice: 92\nBob: 85\nCarol: 78",
                        "hint": "foreach($arr as $name=>$marks) echo $name.': '.$marks;"
                    },
                    {
                        "id": 24,
                        "title": "PHP Multidimensional Array",
                        "difficulty": "medium",
                        "description": "Create a 2D array representing a 3x3 matrix and print it.",
                        "expected": "1 2 3\n4 5 6\n7 8 9",
                        "hint": "Use nested foreach loops."
                    },
                    {
                        "id": 25,
                        "title": "PHP Array Sort",
                        "difficulty": "easy",
                        "description": "Sort an array of numbers in ascending and descending order.",
                        "expected": "Ascending: 1 3 5 7 9\nDescending: 9 7 5 3 1",
                        "hint": "sort($arr) for ascending, rsort($arr) for descending."
                    },
                    {
                        "id": 26,
                        "title": "PHP Array Search",
                        "difficulty": "easy",
                        "description": "Search for a value in an array using in_array() and array_search().",
                        "expected": "Found: Yes\nPosition: 2",
                        "hint": "in_array($val,$arr) returns bool. array_search($val,$arr) returns index."
                    },
                    {
                        "id": 27,
                        "title": "PHP Array Merge",
                        "difficulty": "easy",
                        "description": "Merge two arrays using array_merge() and print result.",
                        "expected": "Merged: 1 2 3 4 5 6",
                        "hint": "$merged = array_merge($arr1,$arr2);"
                    },
                    {
                        "id": 28,
                        "title": "PHP Array Unique",
                        "difficulty": "easy",
                        "description": "Remove duplicate values from an array using array_unique().",
                        "expected": "Original: 1 2 2 3 4 4 5\nUnique: 1 2 3 4 5",
                        "hint": "array_unique($arr) removes duplicates."
                    },
                    {
                        "id": 29,
                        "title": "PHP Array Slice",
                        "difficulty": "medium",
                        "description": "Extract a portion of an array using array_slice().",
                        "expected": "Original: 1 2 3 4 5\nSlice(1,3): 2 3 4",
                        "hint": "array_slice($arr,$offset,$length)"
                    },
                    {
                        "id": 30,
                        "title": "PHP Array Push Pop",
                        "difficulty": "easy",
                        "description": "Demonstrate array_push() and array_pop() operations.",
                        "expected": "After push: 1 2 3 4\nAfter pop: 1 2 3\nPopped: 4",
                        "hint": "array_push($arr,$val) adds to end. array_pop($arr) removes from end."
                    },
                    {
                        "id": 31,
                        "title": "PHP User Defined Function",
                        "difficulty": "easy",
                        "description": "Write a function to find the maximum of three numbers.",
                        "expected": "Max of 4,9,2 = 9",
                        "hint": "function maxThree($a,$b,$c){ return max($a,max($b,$c)); }"
                    },
                    {
                        "id": 32,
                        "title": "PHP Function with Default Parameter",
                        "difficulty": "medium",
                        "description": "Write a function greet($name, $greeting='Hello') with a default parameter.",
                        "expected": "Hello, Alice!\nGood Morning, Bob!",
                        "hint": "function greet($name,$greeting='Hello'){ echo $greeting.', '.$name.'!'; }"
                    },
                    {
                        "id": 33,
                        "title": "PHP Recursive Function",
                        "difficulty": "medium",
                        "description": "Write a recursive function to calculate power of a number.",
                        "expected": "2^8 = 256",
                        "hint": "function power($base,$exp){ if($exp==0) return 1; return $base*power($base,$exp-1); }"
                    },
                    {
                        "id": 34,
                        "title": "PHP Variable Scope",
                        "difficulty": "medium",
                        "description": "Demonstrate local, global, and static variable scope in PHP.",
                        "expected": "Local: 10\nGlobal: 20\nStatic count: 1 2 3",
                        "hint": "Use global $var inside function. Use static $count for static variables."
                    },
                    {
                        "id": 35,
                        "title": "PHP Math Functions",
                        "difficulty": "easy",
                        "description": "Demonstrate abs(), ceil(), floor(), round(), sqrt(), pow().",
                        "expected": "abs(-5)=5\nceil(4.3)=5\nfloor(4.7)=4\nround(4.5)=5\nsqrt(16)=4\npow(2,3)=8",
                        "hint": "PHP has built-in math functions in the standard library."
                    },
                    {
                        "id": 36,
                        "title": "PHP Date Functions",
                        "difficulty": "easy",
                        "description": "Print current date, time, day, month, year using date().",
                        "expected": "Date: 2026-04-14\nTime: 09:30:00\nDay: Tuesday",
                        "hint": "date('Y-m-d'), date('H:i:s'), date('l')"
                    },
                    {
                        "id": 37,
                        "title": "PHP Date Difference",
                        "difficulty": "medium",
                        "description": "Calculate number of days between two dates.",
                        "expected": "From 2026-01-01 to 2026-04-14: 103 days",
                        "hint": "Use DateTime and diff() method."
                    },
                    {
                        "id": 38,
                        "title": "PHP File Create and Write",
                        "difficulty": "medium",
                        "description": "Create a file and write 3 lines to it.",
                        "expected": "File created.\nWritten 3 lines.",
                        "hint": "fopen('file.txt','w'), fwrite(), fclose()"
                    },
                    {
                        "id": 39,
                        "title": "PHP File Read",
                        "difficulty": "medium",
                        "description": "Read and display contents of a file line by line.",
                        "expected": "Line 1: Hello\nLine 2: World\nLine 3: PHP",
                        "hint": "fopen('file.txt','r'), fgets() in loop until feof()."
                    },
                    {
                        "id": 40,
                        "title": "PHP File Append",
                        "difficulty": "medium",
                        "description": "Append a new line to an existing file.",
                        "expected": "Appended: New line added.\nFile now has 4 lines.",
                        "hint": "fopen('file.txt','a') opens in append mode."
                    },
                    {
                        "id": 41,
                        "title": "PHP File Delete",
                        "difficulty": "easy",
                        "description": "Check if a file exists and delete it.",
                        "expected": "File exists: Yes\nFile deleted successfully.",
                        "hint": "file_exists($file) checks. unlink($file) deletes."
                    },
                    {
                        "id": 42,
                        "title": "PHP Form GET Method",
                        "difficulty": "medium",
                        "description": "Create HTML form with GET method. Process and display submitted name and email.",
                        "expected": "Name: John\nEmail: john@example.com",
                        "hint": "Use $_GET['name'] and $_GET['email']."
                    },
                    {
                        "id": 43,
                        "title": "PHP Form POST Method",
                        "difficulty": "medium",
                        "description": "Create login form with POST. Validate username and password.",
                        "expected": "Login successful for: admin",
                        "hint": "Use $_POST['username'] and $_POST['password']."
                    },
                    {
                        "id": 44,
                        "title": "PHP Form Validation",
                        "difficulty": "medium",
                        "description": "Validate registration form: name not empty, valid email, age 18-60, password min 6 chars.",
                        "expected": "All fields valid!\nRegistration successful.",
                        "hint": "filter_var($email, FILTER_VALIDATE_EMAIL) for email validation."
                    },
                    {
                        "id": 45,
                        "title": "PHP Session Start and Set",
                        "difficulty": "medium",
                        "description": "Start a session, set session variables for username and role.",
                        "expected": "Session started.\nUsername: admin\nRole: user",
                        "hint": "session_start(); $_SESSION['user']='admin';"
                    },
                    {
                        "id": 46,
                        "title": "PHP Session Check and Destroy",
                        "difficulty": "medium",
                        "description": "Check if session exists, display data, then destroy session.",
                        "expected": "Session active: Yes\nUser: admin\nSession destroyed.",
                        "hint": "isset($_SESSION['user']) to check. session_destroy() to end."
                    },
                    {
                        "id": 47,
                        "title": "PHP Cookie Set and Read",
                        "difficulty": "medium",
                        "description": "Set a cookie with username expiring in 1 hour. Read and display it.",
                        "expected": "Cookie set for: John\nWelcome back, John!",
                        "hint": "setcookie('user','John',time()+3600); Read with $_COOKIE['user']."
                    },
                    {
                        "id": 48,
                        "title": "PHP JSON Encode",
                        "difficulty": "medium",
                        "description": "Convert a PHP array to JSON string using json_encode().",
                        "expected": "[{\"name\":\"Alice\",\"marks\":92},{\"name\":\"Bob\",\"marks\":85}]",
                        "hint": "json_encode($array) converts to JSON string."
                    },
                    {
                        "id": 49,
                        "title": "PHP JSON Decode",
                        "difficulty": "medium",
                        "description": "Decode a JSON string to PHP array and access values.",
                        "expected": "Name: Alice\nMarks: 92",
                        "hint": "json_decode($json, true) returns associative array."
                    },
                    {
                        "id": 50,
                        "title": "PHP Regular Expression Match",
                        "difficulty": "hard",
                        "description": "Use preg_match() to validate email, phone number, and ZIP code.",
                        "expected": "Email valid: Yes\nPhone valid: Yes\nZIP valid: Yes",
                        "hint": "preg_match('/^[\\w.-]+@[\\w.-]+\\.\\w+$/',$email)"
                    },
                    {
                        "id": 51,
                        "title": "PHP Regex Replace",
                        "difficulty": "hard",
                        "description": "Use preg_replace() to remove all non-alphanumeric characters from a string.",
                        "expected": "Input: Hello, World! 123\nOutput: HelloWorld123",
                        "hint": "preg_replace('/[^a-zA-Z0-9]/','', $str)"
                    },
                    {
                        "id": 52,
                        "title": "PHP OOP Class and Object",
                        "difficulty": "medium",
                        "description": "Create a class BankAccount with deposit, withdraw, getBalance methods.",
                        "expected": "Deposit 1000: Balance=1000\nWithdraw 200: Balance=800",
                        "hint": "class BankAccount{ private $balance=0; public function deposit($amt){...} }"
                    },
                    {
                        "id": 53,
                        "title": "PHP OOP Constructor",
                        "difficulty": "medium",
                        "description": "Create a class Person with constructor setting name and age. Display details.",
                        "expected": "Name: Alice, Age: 25",
                        "hint": "function __construct($name,$age){ $this->name=$name; $this->age=$age; }"
                    },
                    {
                        "id": 54,
                        "title": "PHP OOP Inheritance",
                        "difficulty": "hard",
                        "description": "Create base class Vehicle and derived classes Car and Bike. Override describe() method.",
                        "expected": "Car: 4 wheels, 120 km/h\nBike: 2 wheels, 80 km/h",
                        "hint": "class Car extends Vehicle{ public function describe(){...} }"
                    },
                    {
                        "id": 55,
                        "title": "PHP OOP Interface",
                        "difficulty": "hard",
                        "description": "Create interface Shape with area() and perimeter(). Implement in Circle and Rectangle classes.",
                        "expected": "Circle area: 78.54\nRectangle perimeter: 20",
                        "hint": "interface Shape{ public function area(); } class Circle implements Shape{...}"
                    },
                    {
                        "id": 56,
                        "title": "PHP OOP Abstract Class",
                        "difficulty": "hard",
                        "description": "Create abstract class Animal with abstract method sound(). Implement in Dog and Cat.",
                        "expected": "Dog: Woof!\nCat: Meow!",
                        "hint": "abstract class Animal{ abstract public function sound(); }"
                    },
                    {
                        "id": 57,
                        "title": "PHP MySQL Connect",
                        "difficulty": "medium",
                        "description": "Connect to MySQL database and print connection status.",
                        "expected": "Connected to MySQL successfully!\nServer info: MySQL 8.0",
                        "hint": "mysqli_connect($host,$user,$pass,$db) or use PDO."
                    },
                    {
                        "id": 58,
                        "title": "PHP MySQL Create Table",
                        "difficulty": "medium",
                        "description": "Create a students table with id, name, marks columns.",
                        "expected": "Table 'students' created successfully.",
                        "hint": "CREATE TABLE students(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), marks INT)"
                    },
                    {
                        "id": 59,
                        "title": "PHP MySQL Insert",
                        "difficulty": "medium",
                        "description": "Insert 3 student records into the students table.",
                        "expected": "Inserted: Alice(92)\nInserted: Bob(85)\nInserted: Carol(78)",
                        "hint": "INSERT INTO students(name,marks) VALUES(?,?). Use prepared statements."
                    },
                    {
                        "id": 60,
                        "title": "PHP MySQL Select All",
                        "difficulty": "medium",
                        "description": "Fetch and display all records from students table.",
                        "expected": "1 | Alice | 92\n2 | Bob | 85\n3 | Carol | 78",
                        "hint": "SELECT * FROM students. Loop with mysqli_fetch_assoc()."
                    },
                    {
                        "id": 61,
                        "title": "PHP MySQL Select Where",
                        "difficulty": "medium",
                        "description": "Fetch students with marks greater than 80.",
                        "expected": "Students with marks > 80:\nAlice: 92\nBob: 85",
                        "hint": "SELECT * FROM students WHERE marks > 80"
                    },
                    {
                        "id": 62,
                        "title": "PHP MySQL Update",
                        "difficulty": "medium",
                        "description": "Update marks of a student by name.",
                        "expected": "Updated Bob's marks to 90.\nRows affected: 1",
                        "hint": "UPDATE students SET marks=90 WHERE name='Bob'"
                    },
                    {
                        "id": 63,
                        "title": "PHP MySQL Delete",
                        "difficulty": "medium",
                        "description": "Delete a student record by ID.",
                        "expected": "Deleted student ID 2.\nRemaining records: 2",
                        "hint": "DELETE FROM students WHERE id=2"
                    },
                    {
                        "id": 64,
                        "title": "PHP MySQL Order By",
                        "difficulty": "medium",
                        "description": "Fetch students ordered by marks descending.",
                        "expected": "Alice: 92\nBob: 85\nCarol: 78",
                        "hint": "SELECT * FROM students ORDER BY marks DESC"
                    },
                    {
                        "id": 65,
                        "title": "PHP MySQL Count and Aggregate",
                        "difficulty": "medium",
                        "description": "Find total students, average marks, highest and lowest marks.",
                        "expected": "Total: 3\nAverage: 85\nHighest: 92\nLowest: 78",
                        "hint": "SELECT COUNT(*),AVG(marks),MAX(marks),MIN(marks) FROM students"
                    },
                    {
                        "id": 66,
                        "title": "PHP MySQL Prepared Statement",
                        "difficulty": "hard",
                        "description": "Use prepared statements to safely insert user input into database.",
                        "expected": "Prepared statement executed.\nRecord inserted safely.",
                        "hint": "$stmt=$conn->prepare('INSERT INTO students VALUES(?,?)'); $stmt->bind_param('si',$name,$marks);"
                    },
                    {
                        "id": 67,
                        "title": "PHP MySQL Search",
                        "difficulty": "medium",
                        "description": "Search for students by partial name match using LIKE.",
                        "expected": "Search 'Al': Alice(92)",
                        "hint": "SELECT * FROM students WHERE name LIKE '%Al%'"
                    },
                    {
                        "id": 68,
                        "title": "PHP Pagination",
                        "difficulty": "hard",
                        "description": "Implement pagination to display 3 records per page from database.",
                        "expected": "Page 1: Alice, Bob, Carol\nPage 2: Dave, Eve, Frank\nTotal pages: 2",
                        "hint": "Use LIMIT and OFFSET. LIMIT 3 OFFSET ($page-1)*3"
                    },
                    {
                        "id": 69,
                        "title": "PHP Error Handling",
                        "difficulty": "medium",
                        "description": "Implement custom error handler using set_error_handler(). Handle division by zero.",
                        "expected": "Custom error: Division by zero on line 5\nProgram continues.",
                        "hint": "set_error_handler(function($errno,$errstr){...}); trigger_error() to raise."
                    },
                    {
                        "id": 70,
                        "title": "PHP Exception Handling",
                        "difficulty": "medium",
                        "description": "Use try-catch-finally to handle exceptions. Throw custom exception for invalid age.",
                        "expected": "Exception: Age must be between 0 and 120\nFinally block executed.",
                        "hint": "throw new Exception('message'); catch(Exception $e){ echo $e->getMessage(); }"
                    }
                ]
            }
        ]
    }
};
