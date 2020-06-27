export default (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'EDIT_EXPENSE':
      return state;
    case 'REMOVE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((item) => item.id !== action.payload),
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        expenses: [],
      };

    default:
      return state;
  }
};
