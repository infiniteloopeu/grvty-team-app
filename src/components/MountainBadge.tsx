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
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#0d2135",
    borderColor: "#1d3855",
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 178,
    overflow: "hidden",
    padding: 18,
    justifyContent: "flex-end"
  },
  peakBack: {
    borderBottomColor: "#23435e",
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
    borderBottomColor: "#dcecff",
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
    fontSize: 28,
    fontWeight: "900",
    marginTop: 6
  }
});
