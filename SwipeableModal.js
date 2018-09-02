import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "./Button";

import Modal from "react-native-modal";

class SwipeableModal extends Component {
  state = {
    visible: false
  };

  openModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });

  render() {
    return (
      <View style={styles.container}>
        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.2}
          swipeDirection="left"
          onSwipe={this.closeModal}
          onBackdropPress={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.description}>
              {[
                "This is a swipeable modal from the 'react-native-modal' library.\n\n",
                "You can swipe it left to close it.\n\n",
                "You can also click on the backdrop to close the modal."
              ]}
            </Text>
            <Button
              color="#F7D426"
              label="Close Modal"
              onPress={this.closeModal}
            />
          </View>
        </Modal>
        <Button
          color="#F7D426"
          label="Swipeable Modal"
          onPress={this.openModal}
        />
      </View>
    );
  }
}

export default SwipeableModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 4,
    borderColor: "#C0C0C0",
    borderWidth: 2,
    marginHorizontal: 60,
    marginVertical: 200
  },
  description: {
    padding: 20,
    fontSize: 18
  }
});
