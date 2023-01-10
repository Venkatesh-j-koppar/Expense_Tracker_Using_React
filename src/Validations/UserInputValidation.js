// Validates Name and returns true or false
const handleNameError = (name) => {
  if (name.length <= 3) {
    return false;
  }
  return true;
};

// Validates Expense Type
const handleExpenseType = (type) => {
  if (type == "") {
    return false;
  }
  return true;
};

// Validates Expense Amount
const handleExpenseAmout = (amount) => {
  let amount1 = parseInt(amount);

  if (amount1 <= 0) {
    return false;
  }
  return true;
};

export { handleNameError, handleExpenseType, handleExpenseAmout };
