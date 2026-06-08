import { Pressable, StyleSheet, Text, View } from "react-native";

import { Mission } from "../types";

type MissionItemProps = {
  completed: boolean;
  mission: Mission;
  index: number;
  onToggle: () => void;
};

export function MissionItem({ completed, index, mission, onToggle }: MissionItemProps) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked: completed }}
      onPress={onToggle}
      style={[styles.item, completed && styles.completedItem]}
    >
      <View style={[styles.gatePole, index % 2 === 0 ? styles.redGate : styles.blueGate]} />
      <View style={styles.bib}>
        <Text style={styles.bibNumber}>{index + 1}</Text>
      </View>
      <View style={styles.textGroup}>
        <Text style={styles.title}>{mission.label}</Text>
        <Text style={styles.subtitle}>{completed ? "Gate cleared" : "Ready at the start gate"}</Text>
      </View>
      <View style={styles.forceChip}>
        <Text style={styles.forceText}>+{mission.force}</Text>
      </View>
      <View style={[styles.check, completed && styles.checked]}>
        <Text style={styles.checkText}>{completed ? "OK" : ""}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#0b1b2d",
    borderColor: "#24435f",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    minHeight: 78,
    overflow: "hidden",
    paddingHorizontal: 12
  },
  completedItem: {
    backgroundColor: "#123456",
    borderColor: "#a8f0c4"
  },
  gatePole: {
    bottom: 0,
    left: 0,
    position: "absolute",
    top: 0,
    width: 6
  },
  redGate: {
    backgroundColor: "#ef5d60"
  },
  blueGate: {
    backgroundColor: "#4da3ff"
  },
  bib: {
    alignItems: "center",
    backgroundColor: "#eef7ff",
    borderRadius: 8,
    height: 44,
    justifyContent: "center",
    width: 44
  },
  bibNumber: {
    color: "#06111f",
    fontSize: 18,
    fontWeight: "900"
  },
  textGroup: {
    flex: 1,
    marginLeft: 12
  },
  title: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "900"
  },
  subtitle: {
    color: "#a9bdd2",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 3
  },
  forceChip: {
    backgroundColor: "#19351f",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 7
  },
  forceText: {
    color: "#a8f0c4",
    fontSize: 14,
    fontWeight: "900"
  },
  check: {
    alignItems: "center",
    borderColor: "#7ed7ff",
    borderRadius: 8,
    borderWidth: 2,
    height: 34,
    justifyContent: "center",
    marginLeft: 8,
    width: 38
  },
  checked: {
    backgroundColor: "#a8f0c4",
    borderColor: "#a8f0c4"
  },
  checkText: {
    color: "#06111f",
    fontSize: 11,
    fontWeight: "900"
  }
});
