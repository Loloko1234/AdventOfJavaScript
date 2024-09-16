import { useState, useEffect } from "react";

function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const handleChange = (e) => {
    setIncome(e.target.value);
  };
  const handleChangeName = (e) => {
    setExpenseName(e.target.value);
  };
  const handleChangeAmount = (e) => {
    setExpenseAmount(e.target.value);
  };
  const handleOnClick = () => {
    setExpenses([
      ...expenses,
      {
        id: expenses.length,
        name: expenseName,
        amount: expenseAmount,
      },
    ]);
    calculateBalance();
  };
  const calculateBalance = () => {
    let totalExpenses = 0;
    expenses.forEach((expense) => {
      totalExpenses += parseFloat(expense.amount.replace("$", ""));
    });
    setTotalExpenses(totalExpenses);
    setBalance(income - totalExpenses);
  };

  const handleRemove = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  useEffect(() => {
    calculateBalance();
  }, [expenses, income]);
  return (
    <div className="wrapper">
      <div className="add-panel">
        <h1>Simplified Budget</h1>
        <div className="field">
          <input
            type="text"
            name="income"
            id="income"
            onChange={handleChange}
          />
          <label for="income">Budget Amount</label>
        </div>
        <div className="add-expense">
          <div className="field">
            <input
              type="text"
              name="expense-name"
              id="expense-name"
              onChange={handleChangeName}
            />
            <label for="expense-name">Expense</label>
          </div>

          <div className="field">
            <input
              type="text"
              name="expense-amount"
              id="expense-amount"
              onChange={handleChangeAmount}
            />
            <label for="expense-amount">Amount</label>
          </div>
          <button
            name="add-expense-button"
            id="add-expense-button"
            className="add-expense-button"
            onClick={handleOnClick}
          >
            <img src="./plus.svg" alt="Plus" />
          </button>
        </div>
      </div>

      <div className="expenses-panel">
        <h2>Expenses</h2>
        {expenses.map((expense, index) => (
          <div className="expense-table" key={index}>
            <div>{expense.name}</div>
            <div>
              {parseFloat(expense.amount).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <div className="delete">
              <button
                name="delete-expense"
                className="delete-expense"
                onClick={() => handleRemove(index)}
              >
                <img src="./trash.svg" alt="Trash" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="summary-panel">
        <div className="summary-item">
          <div className="summary-label">Income</div>
          <div className="summary-amount">
            $
            {income === ""
              ? "0.00"
              : parseFloat(income).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
          </div>
        </div>

        <div className="summary-item">
          <div className="summary-label">Expenses</div>
          <div className="summary-amount">
            {" "}
            $
            {totalExpenses === ""
              ? "0.00"
              : parseFloat(totalExpenses).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
          </div>
        </div>

        <div className="summary-item">
          <div className="summary-label">Balance</div>
          <div
            className="summary-amount"
            style={{ color: balance < 0 ? "red" : "green" }}
          >
            $
            {balance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
