
// ======================================
// SpendWise - Interactive Budget Tracker
// ======================================

// 1. STORE DATA USING VARIABLES AND ARRAYS

let monthlyBudget = 0;
let expenses = [];
let nextExpenseId = 1;

// Get HTML elements
const budgetInput = document.getElementById("monthlyBudget");
const setBudgetBtn = document.getElementById("setBudgetBtn");

const budgetAmount = document.getElementById("budgetAmount");
const totalExpenses = document.getElementById("totalExpenses");
const remainingBalance = document.getElementById("remainingBalance");
const budgetMessage = document.getElementById("budgetMessage");

const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

// Expense category elements
const categoryElements = {
    Food: document.getElementById("foodAmount"),
    Transport: document.getElementById("transportAmount"),
    Rent: document.getElementById("rentAmount"),
    Entertainment: document.getElementById("entertainmentAmount"),
    Savings: document.getElementById("savingsAmount"),
    Utilities: document.getElementById("utilitiesAmount")
};

// Format money
function formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(amount);
}

// 2. CALCULATE TOTAL EXPENSES USING A LOOP

function calculateTotalExpenses() {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// 3. UPDATE THE DASHBOARD USING DOM MANIPULATION

function updateDashboard() {

    let total = calculateTotalExpenses();
    let remaining = monthlyBudget - total;

    budgetAmount.textContent = formatCurrency(monthlyBudget);
    totalExpenses.textContent = formatCurrency(total);
    remainingBalance.textContent = formatCurrency(remaining);

    // Update expense categories
    let categoryTotals = {
        Food: 0,
        Transport: 0,
        Rent: 0,
        Entertainment: 0,
        Savings: 0,
        Utilities: 0
    };

    // Process expense records using a loop
    for (let expense of expenses) {
        if (categoryTotals[expense.category] !== undefined) {
            categoryTotals[expense.category] += expense.amount;
        }
    }

    // Display category totals
    for (let category in categoryTotals) {
        categoryElements[category].textContent =
            formatCurrency(categoryTotals[category]);
    }

    // 4. CONDITIONAL STATEMENTS FOR BUDGET FEEDBACK

    budgetMessage.className = "budget-message";

    if (monthlyBudget <= 0) {

        budgetMessage.textContent =
            "Please set your monthly budget to get started.";

    } else if (remaining < 0) {

        budgetMessage.textContent =
            "Warning! You have exceeded your monthly budget.";

        budgetMessage.classList.add("danger");

    } else if (remaining === 0) {

        budgetMessage.textContent =
            "You have used your entire monthly budget.";

        budgetMessage.classList.add("warning");

    } else if (remaining <= monthlyBudget * 0.2) {

        budgetMessage.textContent =
            "Be careful! You are running low on your budget.";

        budgetMessage.classList.add("warning");

    } else {

        budgetMessage.textContent =
            "Great job! Your spending is within your budget.";
    }
}

// 5. DISPLAY EXPENSE RECORDS ON THE WEBPAGE

function displayExpenses() {

    // Clear previous records
    expenseList.replaceChildren();

    // Check whether expenses exist
    if (expenses.length === 0) {

        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No expenses added yet.";

        expenseList.appendChild(emptyMessage);
        return;
    }

    // Loop through all expense records
    for (let expense of expenses) {

        const expenseItem = document.createElement("div");
        expenseItem.className = "expense-item";

        const details = document.createElement("div");
        details.className = "expense-details";

        const name = document.createElement("h3");
        name.textContent = expense.name;

        const category = document.createElement("p");
        category.textContent =
            expense.category + " | " + expense.date;

        details.appendChild(name);
        details.appendChild(category);

        const actions = document.createElement("div");
        actions.className = "expense-actions";

        const amount = document.createElement("strong");
        amount.textContent = formatCurrency(expense.amount);

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.dataset.id = expense.id;

        actions.appendChild(amount);
        actions.appendChild(deleteButton);

        expenseItem.appendChild(details);
        expenseItem.appendChild(actions);

        expenseList.appendChild(expenseItem);
    }
}

// 6. HANDLE MONTHLY BUDGET BUTTON USING EVENTS

setBudgetBtn.addEventListener("click", function () {

    const newBudget = Number(budgetInput.value);

    if (budgetInput.value.trim() === "" ||
        !Number.isFinite(newBudget) ||
        newBudget <= 0) {

        alert("Please enter a valid budget greater than zero.");
        return;
    }

    monthlyBudget = newBudget;

    updateDashboard();

    budgetInput.value = "";
});

// 7. HANDLE EXPENSE FORM SUBMISSION

expenseForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get user input
    const expenseName =
        document.getElementById("expenseName").value.trim();

    const expenseAmount =
        Number(document.getElementById("expenseAmount").value);

    const expenseCategory =
        document.getElementById("expenseCategory").value;

    // Validate user input
    if (
        expenseName === "" ||
        !Number.isFinite(expenseAmount) ||
        expenseAmount <= 0 ||
        !Object.hasOwn(categoryElements, expenseCategory)
    ) {
        alert("Please enter valid expense information.");
        return;
    }

    // Create a new expense record
    const newExpense = {
        id: nextExpenseId++,
        name: expenseName,
        amount: expenseAmount,
        category: expenseCategory,
        date: new Date().toLocaleDateString()
    };

    // Store expense inside the array
    expenses.push(newExpense);

    // Update webpage
    displayExpenses();
    updateDashboard();

    // Clear form fields
    expenseForm.reset();
});

// 8. HANDLE DELETE BUTTON CLICKS

expenseList.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-btn")) {

        const expenseId = Number(event.target.dataset.id);

        // Remove selected expense from array
        expenses = expenses.filter(function (expense) {
            return expense.id !== expenseId;
        });

        // Refresh dashboard and expense records
        displayExpenses();
        updateDashboard();
    }
});

// 9. INITIALIZE DASHBOARD

displayExpenses();
updateDashboard();
