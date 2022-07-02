import { React } from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 7, 2);
  const expenseTitle = "Car Insurance";
  const expenseAmount = "$294.67";

  return (
    <div className="expense-item">
      <div>
        {expenseDate.toLocaleDateString()}
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price"> {expenseAmount} </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
