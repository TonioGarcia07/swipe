import React, { Component } from "react";
import { Alert as RNAlert } from "react-native";
import Button from "./Button";

class Alert extends Component {
  handleAlert = () => {
    RNAlert.alert("A simple alert", "With a simple message", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel"
      },
      { text: "OK", onPress: () => {} }
    ]);
  };

  render() {
    return <Button color="#FC2D1E" label="Alert" onPress={this.handleAlert} />;
  }
}

export default Alert;
