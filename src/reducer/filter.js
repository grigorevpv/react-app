const defaultState = {
  articles: [],
  dateRange: {
    from: null,
    to: null
  }
}

export default (state = defaultState, action) => {
  const {type} = action;
  debugger;
  switch(type) {
    case 'SET_FILTER': 
      {console.log('try set filter');
      return state;}
  }

  return state;
}