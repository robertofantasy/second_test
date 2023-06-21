import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);
  const changeTesxt = () => {
    setTitle("Title Chaged!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={changeTesxt}>Button</button>
    </Card>
  );
}

export default ExpenseItems;
