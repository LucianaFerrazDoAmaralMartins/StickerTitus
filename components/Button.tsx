import { Pressable, StyleSheet, View, Text } from "react-native";

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <View>
      <Pressable onPress={() => alert("Você clicou aqui.")}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    marginHorizontal: 20,
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
