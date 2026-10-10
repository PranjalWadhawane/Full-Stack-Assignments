# Student Registration and Result Management System

## Project Description

The Student Registration and Result Management System is a simple, responsive website developed using HTML5, CSS3, and JavaScript. It allows users to enter student details, input subject marks, and generate results automatically.

## Features

* Student registration form
* Student ID, name, email, and course details
* Marks entry for HTML, CSS, and JavaScript
* Automatic calculation of total marks and percentage
* Automatic Pass/Fail result generation
* Form validation
* JSON data storage using Local Storage
* Responsive design for desktop and mobile devices

## Technologies Used

* **HTML5:** Structure of the website
* **CSS3:** Styling, colours, and responsive layout
* **JavaScript:** Form validation and result calculation
* **JSON:** Storing student information in JSON format
* **Local Storage:** Saving student result data in the browser

## Project Structure

```text
Student-Portal/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Project

1. Download or clone the project folder.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. Enter the student details and subject marks.
5. Click the **Generate Result** button.
6. View the total marks, percentage, and Pass/Fail status.

## Result Calculation

* **Total Marks:** HTML + CSS + JavaScript
* **Percentage:** (Total Marks / 300) × 100
* **Passing Criteria:** At least 40 marks in each subject.
* **Result:** PASS if all subjects have at least 40 marks; otherwise, FAIL.

## Data Storage

Student information and results are converted into JSON using JavaScript's `JSON.stringify()` method and saved in the browser's Local Storage.

## Project Objective

The objective of this project is to understand web development fundamentals, form handling, JavaScript calculations, data validation, JSON, and browser Local Stofrage.

## Author

Student Name: Your Name
Course: MCA
Subject: Full Stack Development

## License

This project was developed for educational and academic purposes.
