const notificationReducer = (state = "Hello world", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.notification;
    default:
      return state;
  }
};

export const changeNotification = (notification, timeout) => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: "SET_NOTIFICATION",
        notification: ""
      });
    }, timeout * 1000);
    dispatch({
      type: "SET_NOTIFICATION",
      notification
    });
  };
};

export default notificationReducer;
