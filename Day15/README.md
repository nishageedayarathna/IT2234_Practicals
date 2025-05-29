## API Endpoint Description

GET /Student/course

Purpose:

Retrieve a list of all students along with detailed information about their enrolled degree program and the courses they are enrolled in.

Request:

Method: GET

URL: /Student/course

Response:

Success (200 OK): Returns an array of student objects. Each student object includes:

Student details (ID, name, date of birth, gender)

The populated degreeId field with full degree information (degree name, credits, duration, faculty)

The populated enroled_courses array with complete course details (code, name, credits, description)

No Data Found (404 Not Found): If there are no students in the database, returns a message:
"Sorry, No Data Found!"

Server Error (500 Internal Server Error): If an unexpected error occurs, returns a message:
"Server Error!"

## Student.js

<img width="452" alt="student" src="https://github.com/user-attachments/assets/9157c510-7b98-4381-b345-504917e15b85" />

## studentRoute.js

<img width="419" alt="code" src="https://github.com/user-attachments/assets/f2971e0a-f648-4d63-aac4-e3e6ad10da37" />

## Postman

<img width="642" alt="postman" src="https://github.com/user-attachments/assets/dc20c167-0b43-49ba-8dfe-8b036977c8c7" />


