export default (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        editing: false,
      };
    case 'FIND_EXPENSE':
      return {
        ...state,
        editing: true,
        editItem: state.expenses.find((item) => item.id === action.payload),
      };
    case 'EDIT_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        editing: false,
      };
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
