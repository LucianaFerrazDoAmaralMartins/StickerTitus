import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, View, Text } from "react-native";

type Props = {
  label: string;
  theme?: "primary"; // ? para sinalizar que a prop é opcional
  onPress?: () => void; // vai receber uma função
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#FFD33D", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#FFF" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color={"#25292E"}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292E" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
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
  buttonLabel: {
    color: "#FFF",
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});
