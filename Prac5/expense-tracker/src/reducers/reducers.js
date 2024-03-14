const initialState = {
    expenses: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            };
        default:
            return state;case 'UPDATE_EXPENSE':
            return {
                ...state,
                expenses: [action.payload]
            };
    }
};

export default rootReducer;
