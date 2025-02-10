import React from "react";
import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found." }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go to Home screen.
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292E",
  },
  button: {
    fontSize: 20,
    color: "#FFF",
    textDecorationLine: "underline",
  },
});
