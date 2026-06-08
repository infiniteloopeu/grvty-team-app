import { useMemo, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import { BottomTabs } from "./src/components/BottomTabs";
import { appTabs, missions, racerBaseStats } from "./src/mockData";
import { DailyMissionsScreen } from "./src/screens/DailyMissionsScreen";
import { HomeMountainScreen } from "./src/screens/HomeMountainScreen";
import { MyRacerScreen } from "./src/screens/MyRacerScreen";
import { RopeTeamScreen } from "./src/screens/RopeTeamScreen";
import { WeeklyStoryScreen } from "./src/screens/WeeklyStoryScreen";
import { AppTab, RacerStats } from "./src/types";

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>("home");
  const [completedMissionIds, setCompletedMissionIds] = useState<string[]>([]);

  const missionSummary = useMemo(() => {
    const completedMissions = missions.filter((mission) =>
      completedMissionIds.includes(mission.id)
    );
    const baseForce = completedMissions.reduce(
      (total, mission) => total + mission.force,
      0
    );
    const allComplete = completedMissions.length === missions.length;
    const bonusForce = allComplete ? 200 : 0;
    const todayForce = baseForce + bonusForce;

    const stats = completedMissions.reduce<RacerStats>(
      (nextStats, mission) => {
        Object.entries(mission.statBoosts).forEach(([key, value]) => {
          const statKey = key as keyof RacerStats;
          if (typeof value === "number") {
            nextStats[statKey] += value;
          }
        });
        return nextStats;
      },
      { ...racerBaseStats }
    );

    return {
      allComplete,
      baseForce,
      bonusForce,
      stats,
      todayForce
    };
  }, [completedMissionIds]);

  const toggleMission = (missionId: string) => {
    setCompletedMissionIds((currentIds) =>
      currentIds.includes(missionId)
        ? currentIds.filter((id) => id !== missionId)
        : [...currentIds, missionId]
    );
  };

  const renderScreen = () => {
    switch (activeTab) {
      case "missions":
        return (
          <DailyMissionsScreen
            allComplete={missionSummary.allComplete}
            bonusForce={missionSummary.bonusForce}
            completedMissionIds={completedMissionIds}
            onToggleMission={toggleMission}
            todayForce={missionSummary.todayForce}
          />
        );
      case "racer":
        return <MyRacerScreen completedCount={completedMissionIds.length} stats={missionSummary.stats} />;
      case "ropeTeam":
        return <RopeTeamScreen />;
      case "story":
        return <WeeklyStoryScreen />;
      case "home":
      default:
        return (
          <HomeMountainScreen
            onStartMission={() => setActiveTab("missions")}
            todayForce={missionSummary.todayForce}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.appFrame}>
        {renderScreen()}
        <BottomTabs activeTab={activeTab} tabs={appTabs} onTabPress={setActiveTab} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#06111f"
  },
  appFrame: {
    flex: 1,
    backgroundColor: "#06111f"
  }
});
