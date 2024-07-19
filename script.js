
const modal = document.getElementById('modal');
const signInButton = document.querySelector('button');

// Add an event listener to the button
signInButton.addEventListener('click', () => {
  // Toggle the modal window's visibility
  modal.classList.toggle('hidden');
});


const farmInputsForm = document.getElementById('farm-inputs-form');
const weeklyExpensesForm = document.getElementById('weekly-expenses-form');
const weeklyKilosForm = document.getElementById('weekly-kilos-form');


document.getElementById('nav-links').addEventListener('click', (e) => {
  const target = e.target;
  if (target.href === 'Farm_inputs.html') {
    farmInputsForm.style.display = 'block';
    weeklyExpensesForm.style.display = 'none';
    weeklyKilosForm.style.display = 'none';
  } else if (target.href === 'Weekly_expenses.html') {
    farmInputsForm.style.display = 'none';
    weeklyExpensesForm.style.display = 'block';
    weeklyKilosForm.style.display = 'none';
  } else if (target.href === 'Weekly_kilos.html') {
    farmInputsForm.style.display = 'none';
    weeklyExpensesForm.style.display = 'none';
    weeklyKilosForm.style.display = 'block';
  }
});


farmInputsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fertiliser = document.getElementById('fertiliser').value;
  const kgSold = parseInt(document.getElementById('kg_sold').value);
  const amountSold = parseInt(document.getElementById('amount_sold').value);
  

  console.log(`Fertiliser: ${fertiliser}, Kg Sold: ${kgSold}, Amount Sold: ${amountSold}`);
  

  document.getElementById('fertiliser').value = '';
  document.getElementById('kg_sold').value = '';
  document.getElementById('amount_sold').value = '';
});

weeklyExpensesForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const expenseType = document.getElementById('expense_type').value;
  const amountSpent = parseInt(document.getElementById('amount_spent').value);
  
  
  console.log(`Expense Type: ${expenseType}, Amount Spent: ${amountSpent}`);
  
  
  document.getElementById('expense_type').value = '';
  document.getElementById('amount_spent').value = '';
});

weeklyKilosForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const kilosSold = parseInt(document.getElementById('kilos_sold').value);
  const kilosRejected = parseInt(document.getElementById('kilos_rejected').value);
  
  
  console.log(`Kilos Sold: ${kilosSold}, Kilos Rejected: ${kilosRejected}`);
  
  
  document.getElementById('kilos_sold').value = '';
  document.getElementById('kilos_rejected').value = '';
});

function onToggleMenu(e) {
  e.name = e.name === 'menu' ? 'close' : 'menu';
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('top-[9%]');
  navLinks.classList.toggle('top-0');
}

function showSection(sectionId) {
  // Hide all sections
  document.getElementById('farm-inputs-section').classList.add('hidden');
  document.getElementById('weekly-expenses-section').classList.add('hidden');
  document.getElementById('weekly-kilos-section').classList.add('hidden');
  
  
  document.getElementById(sectionId).classList.remove('hidden');}

const enter = document.getElementById('submit'); 
const submitButton = document.querySelector('button');
submitButton.addEventListener('click', () => {
  // Toggle the modal window's visibility
  enter.classList.toggle('hidden');
});