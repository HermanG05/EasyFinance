import {useAddTransaction} from '../../../hooks/useAddTransaction';
import {useState} from 'react'; 
import {name} from '../Index';
export const Expenses = () => {
    const { addTransaction }= useAddTransaction();
    const {name} = JSON.parse(localStorage.getItem("auth")); 

    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");

    const onSubmit = async(e) => {
        e.preventDefault(); 
        addTransaction({description, transactionAmount, transactionType});
    }

    return(
        <body class="expenses">
            <div class="greeting-text">
                <span>Welcome Back, {name}!</span>
            </div>
            <div class="list-expenses">
                <h2>Please click on the box to get started:</h2>
                <h3>Current Balance: $0.00</h3>
                <form className="add-transaction" onSubmit={onSubmit}>
                    <input type="text" placeholder='Description...' required onChange={(e) => setDescription(e.target.value)}/>
                    <input type="number" placeholder='Amount' required onChange={(e) => setTransactionAmount(e.target.value)} step="any"/>
                    <input type="radio" id="expense" value="expense" name="radio" onChange={(e) => setTransactionType(e.target.value)} checked={transactionType === "expense"}/>
                    <label htmlFor='expense'>Expenses</label>
                    <input type="radio" id="income" value="income" name="radio" onChange={(e) => setTransactionType(e.target.value)} checked={transactionType === "income"}/>
                    <label htmlFor='income'>Income</label>
                    <button type="submit" id="add">Add Income/Expense</button>
                </form>
            </div>
        </body>
    )
}