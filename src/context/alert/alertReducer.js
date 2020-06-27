export default (state, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...action.payload,
        visible: true,
      };
    case 'HIDE_ALERT':
      return {
        visible: false,
      };
    default:
      return state;
  }
};
