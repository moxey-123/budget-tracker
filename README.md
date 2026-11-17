# SpendWise – Interactive Budget Tracker

## Project Description

SpendWise is a personal finance and budgeting application built using HTML, CSS, and JavaScript. It helps users manage their monthly budgets, record expenses, monitor spending, and track their remaining balances.

## Improvements Made This Week

The following improvements were made to make SpendWise interactive:

- Added a monthly budget input.
- Added an expense form for recording new expenses.
- Added expense categories.
- Added automatic calculation of total expenses and remaining balance.
- Added dynamic expense records.
- Added the ability to delete expense records.
- Added budget warning messages.
- Improved the dashboard to display updated information directly on the webpage.
- Added responsive styling for different screen sizes.

## 1. Conditionals

Conditional statements (`if`, `else if`, and `else`) are used to evaluate the user's budget and provide appropriate feedback.

For example:
- If the budget is not set, the application asks the user to enter a budget.
- If expenses exceed the budget, a warning is displayed.
- If the remaining balance is low, the application displays a warning.
- If spending is within the budget, a positive message is displayed.

## 2. Arrays

An array called `expenses` stores multiple expense records.

Each expense is stored as an object containing:
- Expense ID
- Expense name
- Amount
- Category
- Date

The `push()` method adds new expense records, while the `filter()` method removes selected records.

## 3. Loops

Loops are used to process multiple expense records.

The `for...of` loop calculates total expenses and processes category amounts.

The application also uses loops to display expense records and update category totals efficiently.

## 4. DOM Manipulation

DOM manipulation is used to update the webpage dynamically.

JavaScript updates:
- Monthly budget
- Total expenses
- Remaining balance
- Expense categories
- Expense records
- Budget feedback messages

Methods and properties such as `getElementById()`, `textContent`, `createElement()`, and `appendChild()` are used to update webpage content.

## 5. Event Handling

Event listeners allow users to interact with the application.

The project uses:
- `click` events to set the monthly budget.
- `submit` events to add expenses.
- `click` events to delete expense records.

The `preventDefault()` method prevents the expense form from refreshing the webpage when submitted.

## 6. Challenges Encountered and Solutions

**Challenge 1: Calculating multiple expenses**

Solution: Used an array to store expense records and loops to calculate the total amount.

**Challenge 2: Updating the dashboard automatically**

Solution: Used DOM manipulation to update dashboard values whenever expenses are added or deleted.

**Challenge 3: Monitoring budget limits**

Solution: Used conditional statements to check remaining balances and display appropriate warning messages.

**Challenge 4: Handling user interactions**

Solution: Used event listeners to respond to button clicks and form submissions.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using Live Server.
4. Set a monthly budget.
5. Add and manage expenses.

## Conclusion

SpendWise demonstrates how JavaScript makes a budgeting application interactive through conditionals, arrays, loops, DOM manipulation, and event handling.

The application allows users to manage expenses and monitor their financial activities through a dynamic dashboard.
