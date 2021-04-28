import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber) {
    content = <GameScreen />
  }

  return (
    <View style={styles.screenView}>
      <Header title="Guess a Number"></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1
  },
});
