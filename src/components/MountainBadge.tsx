import { StyleSheet, Text, View } from "react-native";

type MountainBadgeProps = {
  label: string;
  value: string;
};

export function MountainBadge({ label, value }: MountainBadgeProps) {
  return (
    <View style={styles.badge}>
      <View style={styles.peakBack} />
      <View style={styles.peakFront} />
      <View style={styles.gateOne} />
      <View style={styles.gateTwo} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.caption}>Slalom course is open</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#0b1b2d",
    borderColor: "#315d80",
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 178,
    overflow: "hidden",
    padding: 18,
    justifyContent: "flex-end"
  },
  peakBack: {
    borderBottomColor: "#244b6a",
    borderBottomWidth: 118,
    borderLeftColor: "transparent",
    borderLeftWidth: 92,
    borderRightColor: "transparent",
    borderRightWidth: 92,
    height: 0,
    left: 84,
    position: "absolute",
    top: 28,
    width: 0
  },
  peakFront: {
    borderBottomColor: "#eef7ff",
    borderBottomWidth: 92,
    borderLeftColor: "transparent",
    borderLeftWidth: 70,
    borderRightColor: "transparent",
    borderRightWidth: 70,
    height: 0,
    left: 16,
    position: "absolute",
    top: 55,
    width: 0
  },
  label: {
    color: "#7ed7ff",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  value: {
    color: "#ffffff",
    fontSize: 27,
    fontWeight: "900",
    marginTop: 6
  },
  caption: {
    color: "#a9bdd2",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 6
  },
  gateOne: {
    backgroundColor: "#ef5d60",
    height: 68,
    position: "absolute",
    right: 62,
    top: 78,
    transform: [{ rotate: "10deg" }],
    width: 5
  },
  gateTwo: {
    backgroundColor: "#4da3ff",
    height: 66,
    position: "absolute",
    right: 116,
    top: 98,
    transform: [{ rotate: "-9deg" }],
    width: 5
  }
});
