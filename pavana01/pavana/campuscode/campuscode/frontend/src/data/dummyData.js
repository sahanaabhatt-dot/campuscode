// Dummy data for frontend-only development

export const dummyUsers = [
  {
    id: 1,
    name: 'Sahana Bhat',
    email: 'sahana@example.com',
    password: 'password123',
    semester: 3,
    usn: 'U02LV23S0040'
  },
  {
    id: 2,
    name: 'Pavana Gaonkar',
    email: 'pavana@example.com',
    password: 'password123',
    semester: 3,
    usn: 'U02LV23S0033'
  }
];

export const dummySubjects = [
  { id: 1, name: 'Programming in C', code: 'BCA101', semester: 1 },
  { id: 2, name: 'Data Structures', code: 'BCA201', semester: 2 },
  { id: 3, name: 'Object Oriented Programming', code: 'BCA301', semester: 3 },
  { id: 4, name: 'Database Management Systems', code: 'BCA302', semester: 3 },
  { id: 5, name: 'Web Technologies', code: 'BCA401', semester: 4 },
  { id: 6, name: 'Java Programming', code: 'BCA402', semester: 4 }
];

export const dummyUnits = [
  { id: 1, subject_id: 1, unit_number: 1, unit_name: 'Introduction to C Programming' },
  { id: 2, subject_id: 1, unit_number: 2, unit_name: 'Control Structures' },
  { id: 3, subject_id: 1, unit_number: 3, unit_name: 'Arrays and Strings' },
  { id: 4, subject_id: 1, unit_number: 4, unit_name: 'Functions' },
  { id: 5, subject_id: 1, unit_number: 5, unit_name: 'Pointers' },
  
  { id: 6, subject_id: 3, unit_number: 1, unit_name: 'Introduction to OOP' },
  { id: 7, subject_id: 3, unit_number: 2, unit_name: 'Classes and Objects' },
  { id: 8, subject_id: 3, unit_number: 3, unit_name: 'Inheritance' },
  { id: 9, subject_id: 3, unit_number: 4, unit_name: 'Polymorphism' },
  { id: 10, subject_id: 3, unit_number: 5, unit_name: 'Exception Handling' }
];

export const dummyProblems = [
  {
    id: 1,
    unit_id: 1,
    title: 'Hello World Program',
    description: 'Write a C program to print "Hello, World!" on the screen.',
    difficulty: 'easy',
    starter_code: '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 2,
    unit_id: 2,
    title: 'Check Even or Odd',
    description: 'Write a C program to check whether a number is even or odd.',
    difficulty: 'easy',
    starter_code: '#include <stdio.h>\n\nint main() {\n    int num;\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 3,
    unit_id: 2,
    title: 'Find Largest of Three Numbers',
    description: 'Write a C program to find the largest among three numbers.',
    difficulty: 'medium',
    starter_code: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 4,
    unit_id: 3,
    title: 'Sum of Array Elements',
    description: 'Write a C program to find the sum of all elements in an array.',
    difficulty: 'medium',
    starter_code: '#include <stdio.h>\n\nint main() {\n    int arr[100], n, sum = 0;\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 5,
    unit_id: 4,
    title: 'Factorial Using Function',
    description: 'Write a C program to calculate factorial of a number using functions.',
    difficulty: 'medium',
    starter_code: '#include <stdio.h>\n\nint factorial(int n) {\n    // Write your code here\n}\n\nint main() {\n    int num;\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 6,
    unit_id: 7,
    title: 'Create a Simple Class',
    description: 'Create a class Student with name and roll number. Create objects and display details.',
    difficulty: 'easy',
    starter_code: 'class Student {\n    // Write your code here\n};\n\nint main() {\n    // Write your code here\n    return 0;\n}'
  },
  {
    id: 7,
    unit_id: 8,
    title: 'Implement Single Inheritance',
    description: 'Create a base class Person and derived class Student. Demonstrate inheritance.',
    difficulty: 'medium',
    starter_code: 'class Person {\n    // Write your code here\n};\n\nclass Student : public Person {\n    // Write your code here\n};\n\nint main() {\n    return 0;\n}'
  },
  {
    id: 8,
    unit_id: 2,
    title: 'Print Pattern',
    description: 'Write a program to print a pyramid pattern using loops.',
    difficulty: 'easy',
    starter_code: '#include <stdio.h>\n\nint main() {\n    int rows;\n    // Write your code here\n    return 0;\n}'
  }
];

export const dummyTestCases = [
  { id: 1, problem_id: 1, input: '', expected_output: 'Hello, World!', is_hidden: false },
  { id: 2, problem_id: 2, input: '4', expected_output: 'Even', is_hidden: false },
  { id: 3, problem_id: 2, input: '7', expected_output: 'Odd', is_hidden: false },
  { id: 4, problem_id: 3, input: '5 10 15', expected_output: '15', is_hidden: false },
  { id: 5, problem_id: 4, input: '1 2 3 4 5', expected_output: '15', is_hidden: false },
  { id: 6, problem_id: 5, input: '5', expected_output: '120', is_hidden: false }
];

export const dummySubmissions = [
  { id: 1, problem_id: 1, status: 'accepted', submitted_at: '2026-02-20' },
  { id: 2, problem_id: 2, status: 'accepted', submitted_at: '2026-02-21' },
  { id: 3, problem_id: 3, status: 'wrong_answer', submitted_at: '2026-02-22' }
];
