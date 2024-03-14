import React from 'react';
import { connect } from 'react-redux';

const TotalExpenses = ({ expenses }) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    return (
        <div className="mt-4">
            <h4 style={{fontFamily:'Montserrat', backgroundColor:'lightblue', width:'220px', height:'30px', borderRadius:'5px', marginLeft:'0px', textAlign:'center'}}>Общие расходы</h4>
            <p className="lead">Total: ${total}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(TotalExpenses);
