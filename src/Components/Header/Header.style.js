import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    paddingTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "Croissant",
  },
});
