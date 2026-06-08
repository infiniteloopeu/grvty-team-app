import { StyleSheet, Text, View } from "react-native";

type StatBarProps = {
  label: string;
  value: number;
};

export function StatBar({ label, value }: StatBarProps) {
  const percent = Math.min(value, 100);

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percent}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 7
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    color: "#dcecff",
    fontSize: 15,
    fontWeight: "800",
    textTransform: "capitalize"
  },
  value: {
    color: "#a8f0c4",
    fontSize: 15,
    fontWeight: "900"
  },
  track: {
    backgroundColor: "#142438",
    borderRadius: 7,
    height: 14,
    overflow: "hidden"
  },
  fill: {
    backgroundColor: "#a8f0c4",
    height: "100%"
  }
});
