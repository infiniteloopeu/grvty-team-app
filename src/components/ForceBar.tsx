import { StyleSheet, Text, View } from "react-native";

type ForceBarProps = {
  current: number;
  target: number;
  label?: string;
};

export function ForceBar({ current, target, label }: ForceBarProps) {
  const percent = Math.min(Math.round((current / target) * 100), 100);

  return (
    <View style={styles.wrap}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>{label ?? "Force Progress"}</Text>
        <Text style={styles.percent}>{percent}%</Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percent}%` }]} />
      </View>
      <Text style={styles.value}>
        {current.toLocaleString()} / {target.toLocaleString()} Force
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 8
  },
  headerRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    color: "#dcecff",
    fontSize: 14,
    fontWeight: "800"
  },
  percent: {
    color: "#7ed7ff",
    fontSize: 13,
    fontWeight: "900"
  },
  track: {
    backgroundColor: "#142438",
    borderColor: "#274560",
    borderRadius: 8,
    borderWidth: 1,
    height: 18,
    overflow: "hidden"
  },
  fill: {
    backgroundColor: "#7ed7ff",
    height: "100%"
  },
  value: {
    color: "#a9bdd2",
    fontSize: 13,
    fontWeight: "700"
  }
});
