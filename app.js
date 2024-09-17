document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    if (amount && description) {
        addEntry(amount, description);
        clearForm();
    }
});

function addEntry(amount, description) {
    const entryList = document.getElementById('entries');
    const listItem = document.createElement('li');
    listItem.textContent = `${description}: $${amount}`;
    entryList.appendChild(listItem);
}

function clearForm() {
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
}
