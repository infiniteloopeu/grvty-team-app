import { Pressable, StyleSheet, Text, View } from "react-native";

import { Mission } from "../types";

type MissionCardProps = {
  mission: Mission;
  completed: boolean;
  onToggle: () => void;
};

export function MissionCard({ mission, completed, onToggle }: MissionCardProps) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked: completed }}
      onPress={onToggle}
      style={[styles.card, completed && styles.completedCard]}
    >
      <View style={[styles.checkbox, completed && styles.checkedBox]}>
        <Text style={styles.checkMark}>{completed ? "✓" : ""}</Text>
      </View>
      <View style={styles.textGroup}>
        <Text style={styles.title}>{mission.label}</Text>
        <Text style={styles.subtitle}>Power the team climb</Text>
      </View>
      <Text style={styles.force}>+{mission.force}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#0d2135",
    borderColor: "#1d3855",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    minHeight: 74,
    padding: 14
  },
  completedCard: {
    backgroundColor: "#123456",
    borderColor: "#7ed7ff"
  },
  checkbox: {
    alignItems: "center",
    backgroundColor: "#071526",
    borderColor: "#7ed7ff",
    borderRadius: 8,
    borderWidth: 2,
    height: 36,
    justifyContent: "center",
    width: 36
  },
  checkedBox: {
    backgroundColor: "#7ed7ff"
  },
  checkMark: {
    color: "#06111f",
    fontSize: 24,
    fontWeight: "900"
  },
  textGroup: {
    flex: 1,
    marginLeft: 14
  },
  title: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900"
  },
  subtitle: {
    color: "#a9bdd2",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 3
  },
  force: {
    color: "#a8f0c4",
    fontSize: 20,
    fontWeight: "900"
  }
});
