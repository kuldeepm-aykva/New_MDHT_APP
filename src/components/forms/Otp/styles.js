import { StyleSheet } from "react-native";
import { scale, verticalScale } from "../../../constants/responsive";

export default styles =StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    // marginTop: 40,
  },
  input: {
    width: scale(52),
    height: verticalScale(52),
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "rgba(110, 110, 110, 0.25)",
    borderRadius: 14,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});