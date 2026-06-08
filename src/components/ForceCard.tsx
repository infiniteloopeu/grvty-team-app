import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ProgressBar } from "./ProgressBar";

type ForceCardProps = PropsWithChildren<{
  label: string;
  force: number;
  caption: string;
  current?: number;
  target?: number;
  progressLabel?: string;
  accent?: "blue" | "gold" | "green";
}>;

const accentColors = {
  blue: "#7ed7ff",
  gold: "#f4d35e",
  green: "#a8f0c4"
};

export function ForceCard({
  accent = "blue",
  caption,
  children,
  current,
  force,
  label,
  progressLabel,
  target
}: ForceCardProps) {
  const accentColor = accentColors[accent];

  return (
    <View style={[styles.card, { borderColor: accentColor }]}>
      <View style={styles.skiLine} />
      <View style={styles.headerRow}>
        <View>
          <Text style={[styles.label, { color: accentColor }]}>{label}</Text>
          <Text style={styles.force}>{force.toLocaleString()}</Text>
        </View>
        <View style={[styles.bib, { backgroundColor: accentColor }]}>
          <Text style={styles.bibText}>FORCE</Text>
        </View>
      </View>
      <Text style={styles.caption}>{caption}</Text>
      {typeof current === "number" && typeof target === "number" ? (
        <ProgressBar
          current={current}
          fillColor={accentColor}
          label={progressLabel ?? "Course Progress"}
          target={target}
        />
      ) : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0d2135",
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
    padding: 16
  },
  skiLine: {
    backgroundColor: "#ffffff",
    height: 2,
    opacity: 0.5,
    position: "absolute",
    right: -22,
    top: 22,
    transform: [{ rotate: "-18deg" }],
    width: 150
  },
  headerRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  force: {
    color: "#ffffff",
    fontSize: 46,
    fontWeight: "900",
    lineHeight: 51,
    marginTop: 4
  },
  bib: {
    alignItems: "center",
    borderRadius: 8,
    minHeight: 42,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  bibText: {
    color: "#06111f",
    fontSize: 10,
    fontWeight: "900"
  },
  caption: {
    color: "#c7d9ee",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
    marginBottom: 14,
    marginTop: 6
  }
});
