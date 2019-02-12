const filtersDefaultState = {
    text: ''
};

export const setTextFilter = (text='')=> ({
  type: 'SET_TEXT_FILTER',
  text
});


const filtersReducers = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
          ...state,
          text: action.text
      };
    default:
      return state;
  }
};



export default filtersReducers;