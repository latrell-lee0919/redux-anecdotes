const notificationReducer = (state = 'Welcome to the application', action) => {
    switch (action.type) {
      case 'CLEAR_NOTIFICATION': 
        return action.notification
      case 'NOTIFICATION':
        return action.notification
      default:
        return state
    }
  }

export const setNotification = (notification, displayTime) => {
    return async dispatch => {
      dispatch({
        type: 'NOTIFICATION',
        notification,
      })
  
      setTimeout(() => {
        dispatch({
          type: 'CLEAR_NOTIFICATION',
          notification: 'Welcome to the application'
        })
      }, displayTime * 1000)
    }
  }

export default notificationReducer