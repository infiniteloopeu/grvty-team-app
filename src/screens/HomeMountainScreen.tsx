import { Pressable, StyleSheet, Text, View } from "react-native";

import { ForceCard } from "../components/ForceCard";
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

        <ForceCard
          caption={`Today added: ${todayForce} Force`}
          current={weeklyForce}
          force={weeklyForce}
          label="GRVTY Force Total"
          progressLabel="Weekly Summit Push"
          target={weeklyMountain.targetForce}
        />

        <View style={styles.mottoPanel}>
          <View style={styles.gateFlag} />
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
  mottoPanel: {
    backgroundColor: "#122942",
    borderRadius: 8,
    overflow: "hidden",
    padding: 16
  },
  gateFlag: {
    backgroundColor: "#ef5d60",
    bottom: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: 8
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
    borderBottomColor: "#a77918",
    borderBottomWidth: 5,
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
