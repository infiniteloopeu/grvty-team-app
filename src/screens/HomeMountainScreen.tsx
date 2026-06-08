import { Pressable, StyleSheet, Text, View } from "react-native";

import { ForceBar } from "../components/ForceBar";
import { MountainBadge } from "../components/MountainBadge";
import { Screen } from "../components/Screen";
import { brand, weeklyMountain } from "../mockData";

type HomeMountainScreenProps = {
  todayForce: number;
  onStartMission: () => void;
};

export function HomeMountainScreen({ onStartMission, todayForce }: HomeMountainScreenProps) {
  const weeklyForce = weeklyMountain.currentForce + todayForce;

  return (
    <Screen
      kicker={brand.fullTeamName}
      title={brand.appName}
      subtitle="Every mission powers the climb for you, your rope team, and all of GRVTY."
    >
      <View style={styles.stack}>
        <MountainBadge label="Current Zone" value={weeklyMountain.currentZone} />

        <View style={styles.forcePanel}>
          <Text style={styles.panelLabel}>GRVTY Force Total</Text>
          <Text style={styles.forceTotal}>{weeklyForce.toLocaleString()}</Text>
          <Text style={styles.todayForce}>Today added: {todayForce} Force</Text>
          <ForceBar current={weeklyForce} target={weeklyMountain.targetForce} label="Weekly Goal" />
        </View>

        <View style={styles.mottoPanel}>
          <Text style={styles.motto}>{brand.motto}</Text>
          <Text style={styles.copy}>Stay ready. Help the rope. Ride the mountain together.</Text>
        </View>

        <Pressable accessibilityRole="button" onPress={onStartMission} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Start Today's Mission</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  stack: {
    gap: 16
  },
  forcePanel: {
    backgroundColor: "#0d2135",
    borderColor: "#1d3855",
    borderRadius: 8,
    borderWidth: 1,
    gap: 10,
    padding: 16
  },
  panelLabel: {
    color: "#7ed7ff",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  forceTotal: {
    color: "#ffffff",
    fontSize: 44,
    fontWeight: "900",
    lineHeight: 48
  },
  todayForce: {
    color: "#a8f0c4",
    fontSize: 14,
    fontWeight: "800"
  },
  mottoPanel: {
    backgroundColor: "#123456",
    borderRadius: 8,
    padding: 16
  },
  motto: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 28
  },
  copy: {
    color: "#c7d9ee",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    marginTop: 8
  },
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#f4d35e",
    borderRadius: 8,
    minHeight: 64,
    justifyContent: "center",
    paddingHorizontal: 18
  },
  primaryButtonText: {
    color: "#06111f",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center"
  }
});
