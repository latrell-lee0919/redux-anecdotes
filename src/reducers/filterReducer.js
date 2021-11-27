const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'NEW_FILTER':
            return action.content
        default:
            return state
    }
}

export const createFilter = (content) => {
    //console.log(content)
    return {
      type: 'NEW_FILTER',
      content
    }
}

export default filterReducer