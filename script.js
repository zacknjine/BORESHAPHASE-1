const modal = document.getElementById("modal");
const signInButton = document.querySelector("button");

// Add an event listener to the button
signInButton.addEventListener("click", () => {
  // Toggle the modal window's visibility
  modal.classList.toggle("hidden");
});

const weeklyInputsForm = document.getElementById("farm-inputs-form");
const weeklyExpensesForm = document.getElementById("weekly-expenses-form");
const weeklyKilosForm = document.getElementById("weekly-kilos-form");

document.getElementById("nav-links").addEventListener("click", (e) => {
  const target = e.target;
  if (target.href === "Farm_inputs.html") {
    farmInputsForm.style.display = "block";
    weeklyExpensesForm.style.display = "none";
    weeklyKilosForm.style.display = "none";
  } else if (target.href === "Weekly_expenses.html") {
    farmInputsForm.style.display = "none";
    weeklyExpensesForm.style.display = "block";
    weeklyKilosForm.style.display = "none";
  } else if (target.href === "Weekly_kilos.html") {
    farmInputsForm.style.display = "none";
    weeklyExpensesForm.style.display = "none";
    weeklyKilosForm.style.display = "block";
  }
});

const farmInputsForm = document.getElementById("farm-inputs-form");
farmInputsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fertiliser = document.getElementById("fertiliser").value;
  const kgSold = parseInt(document.getElementById("kg_sold").value);
  const amountSold = parseInt(document.getElementById("amount_sold").value);

  console.log(
    `Fertiliser: ${fertiliser}, Kg Sold: ${kgSold}, Amount Sold: ${amountSold}`
  );

  document.getElementById("fertiliser").value = "";
  document.getElementById("kg_sold").value = "";
  document.getElementById("amount_sold").value = "";
});

weeklyExpensesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const expenseType = document.getElementById("expense_type").value;
  const amountSpent = parseInt(document.getElementById("amount_spent").value);

  console.log(`Expense Type: ${expenseType}, Amount Spent: ${amountSpent}`);

  document.getElementById("expense_type").value = "";
  document.getElementById("amount_spent").value = "";
});

weeklyKilosForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const kilosSold = parseInt(document.getElementById("kilos_sold").value);
  const kilosRejected = parseInt(
    document.getElementById("kilos_rejected").value
  );

  console.log(`Kilos Sold: ${kilosSold}, Kilos Rejected: ${kilosRejected}`);

  document.getElementById("kilos_sold").value = "";
  document.getElementById("kilos_rejected").value = "";
});

function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("top-[9%]");
  navLinks.classList.toggle("top-0");
}

function showSection(sectionId) {
  // Hide all sections
  document.getElementById("farm-inputs-section").classList.add("hidden");
  document.getElementById("weekly-expenses-section").classList.add("hidden");
  document.getElementById("weekly-kilos-section").classList.add("hidden");

  document.getElementById(sectionId).classList.remove("hidden");
}

const enter = document.getElementById("submit");
// const submitButton = document.querySelector('button');
// submitButton.addEventListener('click', () => {

//   enter.classList.toggle('hidden');
// });

// farmInputsForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Get form values
//   const fertiliser = document.getElementById('fertiliser').value;
//   const kgSold = parseInt(document.getElementById('kg_sold').value);
//   const amountSold = parseInt(document.getElementById('amount_sold').value);

//   // Create a new row
// })

// Add cells to the row

document.getElementById("nav-links").addEventListener("click", (e) => {
  const target = e.target;
  if (target.href === "Farm_inputs.html") {
    farmInputsForm.style.display = "block";
    weeklyExpensesForm.style.display = "none";
    weeklyKilosForm.style.display = "none";
  } else if (target.href === "Weekly_expenses.html") {
    farmInputsForm.style.display = "none";
    weeklyExpensesForm.style.display = "block";
    weeklyKilosForm.style.display = "none";
  } else if (target.href === "Weekly_kilos.html") {
    farmInputsForm.style.display = "none";
    weeklyExpensesForm.style.display = "none";
    weeklyKilosForm.style.display = "block";
  }
});

weeklyExpensesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const expenseType = document.getElementById("expense_type").value;
  const amountSpent = parseInt(document.getElementById("amount_spent").value);

  console.log(`Expense Type: ${expenseType}, Amount Spent: ${amountSpent}`);

  document.getElementById("expense_type").value = "";
  document.getElementById("amount_spent").value = "";
});

weeklyKilosForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const kilosSold = parseInt(document.getElementById("kilos_sold").value);
  const kilosRejected = parseInt(
    document.getElementById("kilos_rejected").value
  );

  console.log(`Kilos Sold: ${kilosSold}, Kilos Rejected: ${kilosRejected}`);

  document.getElementById("kilos_sold").value = "";
  document.getElementById("kilos_rejected").value = "";
});

function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("top-[9%]");
  navLinks.classList.toggle("top-0");
}

function showSection(sectionId) {
  // Hide all sections
  document.getElementById("farm-inputs-section").classList.add("hidden");
  document.getElementById("weekly-expenses-section").classList.add("hidden");
  document.getElementById("weekly-kilos-section").classList.add("hidden");

  // Show the specified section
  document.getElementById(sectionId).classList.remove("hidden");
}

function fetchData() {
  fetch("http://localhost:3000/farm_inputs")
    .then((response) => response.json())
    .then((data) => {
      renderFarmInputsTable(data);
    });
}
fetchData();
function renderFarmInputsTable(data) {
  const tbody = document.querySelector("#farm-inputs-tbody");
  data.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
  <td>${element.fertiliser}</td>
            <td>${element.kgs_sold}</td>
            <td>${element.amount_sold}</td>`;
    tbody.appendChild(tr);
  });
}
function addFarmInput() {
  const fertiliserName = document.querySelector("#fertiliser").value;
  const kgs_sold = document.querySelector("#kg_sold").value;
  const amount_sold = document.querySelector("#amount_sold").value;
  fetch("http://localhost:3000/farm_inputs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fertiliser: fertiliserName,
      kgs_sold: kgs_sold,
      amount_sold: amount_sold,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

function fetchWeeklyExpense() {
  fetch("http://localhost:3000/weekly_expense")
    .then((response) => response.json())
    .then((data) => {
      renderWeeklyExpensesTable(data);
    });
}
fetchWeeklyExpense();
function renderWeeklyExpensesTable(data) {
  const tbody = document.querySelector("#weekly-expenses-tbody");
  data.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${element.expense_type}</td>
              <td>${element.amount_spent}</td>
              `;
    tbody.appendChild(tr);
  });
}
function addWeeklyExpenses() {
  const expenseType = document.querySelector("#expense_type").value;
  const amountSpent = document.querySelector("#amount_spent").value;
  fetch("http://localhost:3000/weekly_expense", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      expense_type: expenseType,
      amount_spent: amountSpent,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
function fetchWeeklyKilos() {
  fetch("http://localhost:3000/weekly_kilos")
    .then((response) => response.json())
    .then((data) => {
      renderWeeklyKilosTable(data);
    });
}
fetchWeeklyKilos();
function renderWeeklyKilosTable(data) {
  const tbody = document.querySelector("#weekly-kilos-tbody");
  data.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${element.kilos_rejected}</td>
                <td>${element.kilos_sold}</td>
                `;
    tbody.appendChild(tr);
  });
}
function addWeeklyKilos() {
  const kilosRejected = document.querySelector("#kilos_rejected").value;
  const kilosSold = document.querySelector("#kilos_sold").value;
  fetch("http://localhost:3000/weekly_kilos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      kilos_rejected: kilosRejected,
      kilos_sold: kilosSold,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
