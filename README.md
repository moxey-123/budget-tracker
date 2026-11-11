# SpendWise – Personal Finance Dashboard

## Project Overview

SpendWise is a responsive personal finance dashboard built using HTML5, CSS3, and JavaScript.

The application allows users to enter their monthly budget and expense amounts, calculates total expenses and remaining balance, and displays the results on the dashboard and browser console.

The project demonstrates practical JavaScript programming concepts alongside modern CSS layout techniques.

## Features

- Responsive personal finance dashboard.
- Sidebar navigation menu.
- Budget input using JavaScript `prompt()`.
- Collection of six expense categories:
  - Food
  - Transport
  - Rent
  - Entertainment
  - Savings
  - Utilities
- JavaScript variables for storing budget and expense values.
- Array for storing expense information.
- Reusable functions for calculating expenses.
- `for...of` loop for calculating total expenses.
- Automatic calculation of total expenses.
- Automatic calculation of remaining balance.
- Financial results displayed on the webpage.
- Clearly labelled budget report in the browser console.
- Responsive mobile layout.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Grid
- CSS Flexbox
- CSS Media Queries
- JavaScript Variables
- JavaScript Arrays
- JavaScript Functions
- JavaScript Loops
- DOM Manipulation

## Project Structure

```text
budget-tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Explanation of Project Files

### 1. index.html

Contains the structure of the SpendWise dashboard.

It includes:

- Sidebar navigation.
- Dashboard header.
- Budget overview section.
- Monthly budget display.
- Total expenses display.
- Remaining balance display.
- Six expense category cards.
- Footer.
- Links to the CSS and JavaScript files.

### 2. style.css

Contains the styling and layout rules.

It uses:

- CSS Grid for organizing dashboard cards.
- Flexbox for arranging dashboard components.
- CSS styling for the sidebar and navigation.
- Responsive media queries.
- Hover effects.
- Consistent colors and spacing.

### 3. script.js

Contains the application's JavaScript functionality.

It performs the following operations:

1. Collects the monthly budget using `prompt()`.
2. Collects six expense amounts.
3. Stores the expense values in variables.
4. Stores expenses in an array.
5. Uses a reusable function to calculate total expenses.
6. Uses another reusable function to calculate the remaining balance.
7. Uses a `for...of` loop to calculate the total.
8. Displays financial results in the browser console.
9. Updates the dashboard using DOM manipulation.

### 4. README.md

Provides documentation about the project, its features, technologies, file structure, and instructions for running the application.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project folder:

   ```bash
   cd budget-tracker
   ```

3. Open `index.html` in your web browser.

4. Enter your monthly budget when prompted.

5. Enter the six expense amounts.

6. View the calculated results on the dashboard.

7. Open Developer Tools using `F12` and select the Console tab to view the detailed budget report.

## Sample Calculation

Example input:

| Category | Amount |
|---|---:|
| Monthly Budget | $2,000 |
| Food | $250 |
| Transport | $150 |
| Rent | $500 |
| Entertainment | $80 |
| Savings | $300 |
| Utilities | $95 |

Expected output:

- Total Expenses: $1,375.00
- Remaining Balance: $625.00

## Assignment Goal

The goal of this project is to demonstrate practical knowledge of JavaScript variables, user input, arrays, reusable functions, loops, calculations, and DOM manipulation while maintaining a responsive dashboard design.

---

**Project:** SpendWise Budget Tracker  
**Author:** Salman  
**Course:** Web Development – Week 6  
**Previous Work:** CSS Layout – Week 4