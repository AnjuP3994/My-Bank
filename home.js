
// Function to get secondary input value
function getInputValue(secondaryInputId) {
    const secondaryInput = document.getElementById(secondaryInputId);
    const secondaryValue = secondaryInput.value.trim(); // Trim any extra spaces
    const secondaryAmount = parseFloat(secondaryValue);

    if (isNaN(secondaryAmount)) { // Check for NaN (e.g., if input is not a number)
        return 0; // Return 0 if the input is not a valid number
    }

    secondaryInput.value = ''; // Clear the input field
    return secondaryAmount;
}

// Function to update primary text
function updatePrimaryText(primaryId, secondaryAmount) {
    const primaryInput = document.getElementById(primaryId);
    const primaryText = primaryInput.innerText;
    const primaryAmount = parseFloat(primaryText) || 0; // Default to 0 if parsing fails
    primaryInput.innerText = primaryAmount + secondaryAmount;
}

// Function to update balance
function balanceUpdate(secondaryAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-primary');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText) || 0; // Default to 0 if parsing fails

    if (isAdd) {
        balanceTotal.innerText = balanceTotalAmount + secondaryAmount;
    } else {
        balanceTotal.innerText = balanceTotalAmount - secondaryAmount;
    }
}

// Event listener for deposit button
document.getElementById('deposit-button').addEventListener('click', function() {
    const secondaryAmount = getInputValue('deposit-secondary');

    if (secondaryAmount > 0) {
        updatePrimaryText('deposit-primary', secondaryAmount);
        balanceUpdate(secondaryAmount, true);
    } else {
        alert("Sorry! Please enter a valid deposit amount.");
    }
});

// Event listener for withdraw button
document.getElementById('withdraw-button').addEventListener('click', function() {
    const secondaryAmount = getInputValue('withdraw-secondary');
    const balanceTotal = document.getElementById('balance-primary');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText) || 0;

    if (secondaryAmount <= 0) {
        alert("Sorry! Please enter a valid withdrawal amount.");
    } else if (secondaryAmount > balanceTotalAmount) {
        alert("Sorry! You don't have sufficient balance for this withdrawal.");
    } else {
        updatePrimaryText('withdraw-primary', secondaryAmount);
        balanceUpdate(secondaryAmount, false);
    }
});
