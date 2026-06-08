import { StyleSheet, Text, View } from "react-native";

type ProgressBarProps = {
  current: number;
  target: number;
  label: string;
  valueLabel?: string;
  compact?: boolean;
  fillColor?: string;
};

export function ProgressBar({
  compact = false,
  current,
  fillColor = "#7ed7ff",
  label,
  target,
  valueLabel
}: ProgressBarProps) {
  const percent = Math.min(Math.round((current / target) * 100), 100);

  return (
    <View style={styles.wrap}>
      <View style={styles.headerRow}>
        <Text style={[styles.label, compact && styles.compactLabel]}>{label}</Text>
        <Text style={[styles.percent, compact && styles.compactPercent]}>{percent}%</Text>
      </View>
      <View style={[styles.track, compact && styles.compactTrack]}>
        <View style={[styles.fill, { backgroundColor: fillColor, width: `${percent}%` }]} />
        <View style={styles.snowCap} />
      </View>
      <Text style={[styles.value, compact && styles.compactValue]}>
        {valueLabel ?? `${current.toLocaleString()} / ${target.toLocaleString()} Force`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 7
  },
  headerRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    color: "#eef7ff",
    fontSize: 14,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  compactLabel: {
    fontSize: 11
  },
  percent: {
    color: "#f4d35e",
    fontSize: 13,
    fontWeight: "900"
  },
  compactPercent: {
    fontSize: 11
  },
  track: {
    backgroundColor: "#0a1728",
    borderColor: "#315d80",
    borderRadius: 8,
    borderWidth: 1,
    height: 20,
    overflow: "hidden"
  },
  compactTrack: {
    height: 12
  },
  fill: {
    height: "100%"
  },
  snowCap: {
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    height: 4,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
  },
  value: {
    color: "#b7cbe1",
    fontSize: 13,
    fontWeight: "800"
  },
  compactValue: {
    fontSize: 11
  }
});
