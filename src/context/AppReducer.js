export default (state, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        alert: { ...action.payload, visible: true },
      };
    case 'HIDE_ALERT':
      return {
        ...state,
        alert: {
          visible: false,
        },
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        expenses: [],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        expenses: state.expenses.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
