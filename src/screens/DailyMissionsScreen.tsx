import { StyleSheet, Text, View } from "react-native";

import { MissionCard } from "../components/MissionCard";
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
  return (
    <Screen
      kicker="Daily Missions"
      title="Power Today's Run"
      subtitle="Tap each mission when it is done. Every point of Force helps the whole team climb."
    >
      <View style={styles.forcePanel}>
        <Text style={styles.label}>Today's Force</Text>
        <Text style={styles.total}>{todayForce}</Text>
        <Text style={styles.message}>
          {allComplete
            ? `All missions complete. Bonus added: +${bonusForce} Force.`
            : "Finish the full board to unlock a +200 Force bonus."}
        </Text>
      </View>

      <View style={styles.list}>
        {missions.map((mission) => (
          <MissionCard
            completed={completedMissionIds.includes(mission.id)}
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
  forcePanel: {
    backgroundColor: "#102b46",
    borderColor: "#7ed7ff",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    padding: 16
  },
  label: {
    color: "#7ed7ff",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  total: {
    color: "#ffffff",
    fontSize: 52,
    fontWeight: "900",
    lineHeight: 58,
    marginTop: 4
  },
  message: {
    color: "#dcecff",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20
  },
  list: {
    gap: 12
  },
  bonusCard: {
    backgroundColor: "#0d2135",
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
