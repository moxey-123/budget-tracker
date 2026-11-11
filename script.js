
// ==================================
// SPENDWISE BUDGET TRACKER
// ==================================


// STEP 1: COLLECT BUDGET INFORMATION

let monthlyBudget = Number(
    prompt("Enter your monthly budget:")
);


// STEP 2: COLLECT EXPENSE INFORMATION

let food = Number(prompt("Enter your food expenses:"));

let transport = Number(prompt("Enter your transport expenses:"));

let rent = Number(prompt("Enter your rent expenses:"));

let entertainment = Number(prompt("Enter your entertainment expenses:"));

let savings = Number(prompt("Enter your savings:"));

let utilities = Number(prompt("Enter your utilities expenses:"));


// STEP 3: STORE EXPENSES IN AN ARRAY

let expenses = [
    food,
    transport,
    rent,
    entertainment,
    savings,
    utilities
];


// STEP 4: CREATE A REUSABLE FUNCTION
// This function calculates total expenses.

function calculateTotalExpenses(expenseList) {

    let total = 0;

    for (let expense of expenseList) {
        total += expense;
    }

    return total;
}


// STEP 5: CREATE A REUSABLE FUNCTION
// This function calculates the remaining balance.

function calculateRemainingBalance(budget, totalExpenses) {

    return budget - totalExpenses;

}


// STEP 6: CALL THE FUNCTIONS

let totalExpenses = calculateTotalExpenses(expenses);

let remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);


// STEP 7: DISPLAY RESULTS IN THE CONSOLE

console.log("========== SPENDWISE BUDGET REPORT ==========");

console.log("Monthly Budget: $" + monthlyBudget.toFixed(2));

console.log("Food Expenses: $" + food.toFixed(2));

console.log("Transport Expenses: $" + transport.toFixed(2));

console.log("Rent Expenses: $" + rent.toFixed(2));

console.log("Entertainment Expenses: $" + entertainment.toFixed(2));

console.log("Savings: $" + savings.toFixed(2));

console.log("Utilities Expenses: $" + utilities.toFixed(2));

console.log("--------------------------------------------");

console.log("Total Expenses: $" + totalExpenses.toFixed(2));

console.log("Remaining Balance: $" + remainingBalance.toFixed(2));

console.log("============================================");


// STEP 8: DISPLAY RESULTS ON THE WEBPAGE

document.getElementById("budgetAmount").textContent =
    "$" + monthlyBudget.toFixed(2);

document.getElementById("totalExpenses").textContent =
    "$" + totalExpenses.toFixed(2);

document.getElementById("remainingBalance").textContent =
    "$" + remainingBalance.toFixed(2);


// Display individual expenses

document.getElementById("foodAmount").textContent =
    "$" + food.toFixed(2);

document.getElementById("transportAmount").textContent =
    "$" + transport.toFixed(2);

document.getElementById("rentAmount").textContent =
    "$" + rent.toFixed(2);

document.getElementById("entertainmentAmount").textContent =
    "$" + entertainment.toFixed(2);

document.getElementById("savingsAmount").textContent =
    "$" + savings.toFixed(2);

document.getElementById("utilitiesAmount").textContent =
    "$" + utilities.toFixed(2);
