import { StyleSheet, Text, View } from "react-native";

type StatBarProps = {
  label: string;
  value: number;
  accentColor?: string;
};

export function StatBar({ accentColor = "#a8f0c4", label, value }: StatBarProps) {
  const percent = Math.min(value, 100);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { backgroundColor: accentColor, width: `${percent}%` }]} />
        <View style={styles.edgeLine} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#081827",
    borderColor: "#24435f",
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    padding: 12
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    color: "#eef7ff",
    fontSize: 15,
    fontWeight: "900",
    textTransform: "capitalize"
  },
  value: {
    color: "#f4d35e",
    fontSize: 15,
    fontWeight: "900"
  },
  track: {
    backgroundColor: "#142235",
    borderRadius: 8,
    height: 16,
    overflow: "hidden"
  },
  fill: {
    height: "100%"
  },
  edgeLine: {
    backgroundColor: "rgba(255, 255, 255, 0.26)",
    height: 3,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
  }
});
