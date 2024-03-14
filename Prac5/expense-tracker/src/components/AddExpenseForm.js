import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/action';
import '../styles.css';

const AddExpenseForm = ({ addExpense }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense({
            id: Math.random(),
            name,
            amount: parseFloat(amount),
            date
        });
        setName('');
        setAmount('');
        setDate('');
    };

    return (
        <div className="mb-4">
            <h2 style={{fontFamily:'Montserrat', margin:'20px'}}>Добавить новый </h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                <div className="form-group">
                    <input type="text" className="form-control mb-2" placeholder="Name" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control mb-2" placeholder="Amount" value={amount}
                           onChange={(e) => setAmount(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <input type="date" className="form-control mb-2" placeholder="Date" value={date}
                           onChange={(e) => setDate(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-outline-primary" style={{width:'100px', marginTop:'20px'}}>Add </button>
            </form>

        </div>
    );
};

export default connect(null, {addExpense})(AddExpenseForm);
