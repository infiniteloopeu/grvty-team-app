import { StyleSheet, Text, View } from "react-native";

import { ForceCard } from "../components/ForceCard";
import { MissionItem } from "../components/MissionItem";
import { Screen } from "../components/Screen";
import { missions } from "../mockData";

type DailyMissionsScreenProps = {
  allComplete: boolean;
  bonusForce: number;
  completedMissionIds: string[];
  todayForce: number;
  onToggleMission: (missionId: string) => void;
};

export function DailyMissionsScreen({
  allComplete,
  bonusForce,
  completedMissionIds,
  onToggleMission,
  todayForce
}: DailyMissionsScreenProps) {
  const forceCaption = allComplete
    ? `All missions complete. Bonus added: +${bonusForce} Force.`
    : "Clear every gate to unlock a +200 Force bonus.";

  return (
    <Screen
      kicker="Daily Missions"
      title="Power Today's Run"
      subtitle="Tap each mission when it is done. Every point of Force helps the whole team climb."
    >
      <ForceCard
        accent={allComplete ? "green" : "gold"}
        caption={forceCaption}
        force={todayForce}
        label="Today's Force"
      />

      <View style={styles.list}>
        {missions.map((mission, index) => (
          <MissionItem
            completed={completedMissionIds.includes(mission.id)}
            index={index}
            key={mission.id}
            mission={mission}
            onToggle={() => onToggleMission(mission.id)}
          />
        ))}
      </View>

      <View style={[styles.bonusCard, allComplete && styles.bonusReady]}>
        <Text style={styles.bonusTitle}>All-In Team Bonus</Text>
        <Text style={styles.bonusCopy}>
          {allComplete
            ? "+200 Force is pushing the rope team forward."
            : "Complete every mission today to light up the bonus."}
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 12,
    marginTop: 16
  },
  bonusCard: {
    backgroundColor: "#0b1b2d",
    borderColor: "#1d3855",
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 16,
    padding: 16
  },
  bonusReady: {
    backgroundColor: "#213519",
    borderColor: "#a8f0c4"
  },
  bonusTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "900"
  },
  bonusCopy: {
    color: "#c7d9ee",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    marginTop: 6
  }
});
