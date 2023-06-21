import react, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const titleChangeHandler = (event) => {
    setTitleInput(event.target.value);
  };

  const [amountInput, setAmountInput] = useState("");
  const amountChangeHandler = (event) => {
    setAmountInput(event.target.value);
  };

  const [dateInput, setDateInput] = useState("");
  const dateChangeHandler = (event) => {
    setDateInput(event.target.value);
  };

  const submitFormHndler = (e) => {
    e.preventDefault();
    const ExpenseForm = {
      title: titleInput,
      amount: amountInput,
      date: new Date(dateInput),
    };
    props.onSaveExpenseData(ExpenseForm);
    setTitleInput("");
    setAmountInput("");
    setDateInput("");
  };

  return (
    <form onSubmit={submitFormHndler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title: </label>
          <input type="text" onChange={titleChangeHandler} value={titleInput} />
        </div>
        <div className="new-expense__control" onChange={amountChangeHandler}>
          <label>Amount: </label>
          <input type="number" min="0.01" step="0.01" value={amountInput} />
        </div>
        <div className="new-expense__control " onChange={dateChangeHandler}>
          <label>Date: </label>
          <input type="date" min="0.01" step="0.01" value={dateInput} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expanse </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
