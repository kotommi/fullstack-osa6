import React from "react";
import { connect } from "react-redux";

const Notificationi = props => {
  //console.log('notif')
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  };
  const notification = props.notification;
  if (!notification || notification === "") {
    return null;
  }

  return <div style={style}>{notification}</div>;
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

const Notification = connect(mapStateToProps)(Notificationi);

export default Notification;
