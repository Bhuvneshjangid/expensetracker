import React, { useState } from "react";


const ExpenseForm = () => {

    const[title,setTitle]=useState()
    const[amount,setAmount]=useState()
    const[type,setType]=useState("expense")


   

    return(
        <div>
            <form style={{ display:"flex",flexDirection:"column"}}  onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <input
                type="number"
                placeholder="enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />

                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>

                <button type="submit">Add</button>

            </form>

          
        </div>
    )
}


export default ExpenseForm;