import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpensesFilter />
      <ExpenseItems
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItems>
    </Card>
  );
}
export default Expenses;
