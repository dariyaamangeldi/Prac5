import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import ExpensesList from './components/ExpensesList';
import AddExpenseForm from './components/AddExpenseForm';
import TotalExpenses from './components/TotalExpenses';
import Header from "./components/Header";

function App() {
    return (

        <Provider store={store}>
            <Header />
            <div className="container align-content-center">
                <h1 className="text-center mt-auto mb-4" style={{fontFamily:'Montserrat', fontWeight:'bolder'}}> Отслеживание расходов by Dariya </h1>
                <AddExpenseForm />
                <div className="expenses-list">
                    <h2 className="mt-4 mb-3" style={{fontFamily:'Montserrat', fontWeight:'bolder', marginTop:'250px'}}> Все расходы </h2>
                    <ExpensesList />
                    <TotalExpenses />
                </div>

            </div>
        </Provider>
    );
}

export default App;
