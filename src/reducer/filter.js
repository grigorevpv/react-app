const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
}

export default (filters = defaultFilters, action) => {
  const {type, payload} = action;
  switch(type) {
    case 'CHANGE_DATE_RANGE': 
      return {...filters, dateRange: payload.dateRange}
    case 'CHANGE_SELECT':
      return {...filters, selected: payload.articles}
    }

  return filters;
}