const initialState = "Welcome to the application"

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MESSAGE':
        return action.message
      default:
        return state
    }
  }

export const messageChange = message => {
  return {
    type: 'SET_MESSAGE',
    message,
  }
}

export default notificationReducer