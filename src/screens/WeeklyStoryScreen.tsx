import { StyleSheet, Text, View } from "react-native";

import { ForceCard } from "../components/ForceCard";
import { Screen } from "../components/Screen";
import { brand, weeklyMountain, weeklyStory } from "../mockData";

export function WeeklyStoryScreen() {
  return (
    <Screen
      kicker="Weekly Story"
      title={weeklyStory.title}
      subtitle={weeklyStory.story}
    >
      <View style={styles.bossPanel}>
        <Text style={styles.label}>Boss</Text>
        <Text style={styles.boss}>{weeklyStory.boss}</Text>
        <Text style={styles.copy}>Strong core. Calm balance. Team discipline.</Text>
      </View>

      <View style={styles.goalWrap}>
        <ForceCard
          caption={weeklyStory.goal}
          current={weeklyMountain.currentForce}
          force={weeklyMountain.currentForce}
          label="Mountain Force"
          progressLabel="Boss Gate"
          target={weeklyMountain.targetForce}
        />
      </View>

      <View style={styles.anthemPanel}>
        <Text style={styles.label}>GRVTY Anthem</Text>
        {brand.anthem.map((line) => (
          <Text key={line} style={styles.anthemLine}>
            {line}
          </Text>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bossPanel: {
    backgroundColor: "#2a3140",
    borderColor: "#637086",
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 152,
    padding: 18,
    justifyContent: "center"
  },
  label: {
    color: "#7ed7ff",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  boss: {
    color: "#ffffff",
    fontSize: 36,
    fontWeight: "900",
    lineHeight: 42,
    marginTop: 6
  },
  copy: {
    color: "#dcecff",
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 21,
    marginTop: 8
  },
  goalWrap: {
    marginTop: 16
  },
  anthemPanel: {
    backgroundColor: "#123456",
    borderRadius: 8,
    marginTop: 16,
    padding: 18
  },
  anthemLine: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 30,
    marginTop: 3
  }
});
