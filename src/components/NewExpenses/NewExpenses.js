import React from "react";
import "./NewExpenses.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
