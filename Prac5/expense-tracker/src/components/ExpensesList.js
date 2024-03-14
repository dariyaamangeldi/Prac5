import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteExpense, updateExpense } from '../actions/action';

const ExpensesList = ({ expenses, deleteExpense, updateExpense }) => {
    const [editMode, setEditMode] = useState(null);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedAmount, setUpdatedAmount] = useState('');
    const [updatedDate, setUpdatedDate] = useState('');

    const handleEdit = (expense) => {
        setEditMode(expense.id);
        setUpdatedName(expense.name);
        setUpdatedAmount(expense.amount);
        setUpdatedDate(expense.date);
    };

    const handleUpdate = (expenseId) => {
        updateExpense({
            id: expenseId,
            name: updatedName,
            amount: parseFloat(updatedAmount),
            date: updatedDate
        });
        setEditMode(null);
    };

    return (
        <ul className="list-group" style={{width:'400px'}}>
            {expenses.map(expense => (
                <li key={expense.id} className="list-group-item d-flex flex-column align-items-center">
                    {editMode === expense.id ? (
                        <div>
                            <input type="text" className="form-control mb-2" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} required />
                            <input type="number" className="form-control mb-2" value={updatedAmount} onChange={(e) => setUpdatedAmount(e.target.value)} required />
                            <input type="date" className="form-control mb-2" value={updatedDate} onChange={(e) => setUpdatedDate(e.target.value)} required />
                            <button className="btn btn-outline-primary btn-sm mr-2" style={{marginRight:'20px'}} onClick={() => handleUpdate(expense.id)}>Save</button>
                            <button className="btn btn-secondary btn-sm" onClick={() => setEditMode(null)}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <strong>{expense.name}</strong> - ${expense.amount} - {expense.date}
                            <button className="btn btn-primary btn-sm ml-2" style={{marginLeft:'20px'}} onClick={() => handleEdit(expense)}>Edit</button>
                            <button className="btn btn-danger btn-sm ml-2" style={{marginLeft:'20px'}} onClick={() => deleteExpense(expense.id)}>Delete</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps, { deleteExpense, updateExpense })(ExpensesList);
