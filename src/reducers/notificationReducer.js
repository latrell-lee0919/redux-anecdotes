const initialState = 'Welcome to the application'

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CLEAR_NOTIFICATION': 
        return initialState
      case 'NOTIFICATION':
        return action.notification
      default:
        return state
    }
  }

export const clearNotification = () => ({
  type: 'CLEAR_NOTIFICATION'
})

export const setNotification = (notification, displayTime) => {
    return async dispatch => {
      await dispatch({
        type: 'NOTIFICATION',
        notification,
      })
  
      setTimeout(
        async () => await dispatch(clearNotification()), 
        displayTime * 1000
      )
    }
  }


export default notificationReducer