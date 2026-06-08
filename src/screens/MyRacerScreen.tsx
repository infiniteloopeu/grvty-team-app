import { StyleSheet, Text, View } from "react-native";

import { Screen } from "../components/Screen";
import { StatBar } from "../components/StatBar";
import { racer } from "../mockData";
import { RacerStats } from "../types";

type MyRacerScreenProps = {
  completedCount: number;
  stats: RacerStats;
};

export function MyRacerScreen({ completedCount, stats }: MyRacerScreenProps) {
  const statAccents = ["#ef5d60", "#7ed7ff", "#f4d35e", "#a8f0c4", "#b993ff"];

  return (
    <Screen
      kicker="My Racer"
      title="Future Champion"
      subtitle="Your racer grows when you train, recover, focus, and help the team."
    >
      <View style={styles.hero}>
        <View style={styles.avatar}>
          <View style={styles.skiLeft} />
          <View style={styles.skiRight} />
          <View style={styles.helmet} />
          <View style={styles.goggles} />
          <View style={styles.face} />
          <View style={styles.body} />
        </View>
        <View style={styles.levelPanel}>
          <Text style={styles.levelLabel}>Level</Text>
          <Text style={styles.level}>{racer.level}</Text>
          <Text style={styles.missions}>{completedCount} missions completed today</Text>
        </View>
      </View>

      <View style={styles.statsPanel}>
        <Text style={styles.sectionTitle}>Racer Stats</Text>
        <View style={styles.statsList}>
          {Object.entries(stats).map(([key, value], index) => (
            <StatBar
              accentColor={statAccents[index]}
              key={key}
              label={key}
              value={value}
            />
          ))}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignItems: "center",
    backgroundColor: "#0b1b2d",
    borderColor: "#315d80",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 16,
    padding: 16
  },
  avatar: {
    alignItems: "center",
    backgroundColor: "#eef7ff",
    borderRadius: 8,
    height: 142,
    justifyContent: "center",
    overflow: "hidden",
    width: 116
  },
  helmet: {
    backgroundColor: "#ef5d60",
    borderRadius: 34,
    height: 66,
    position: "absolute",
    top: 18,
    width: 74
  },
  face: {
    backgroundColor: "#f1c9a5",
    borderRadius: 24,
    height: 46,
    position: "absolute",
    top: 56,
    width: 52
  },
  body: {
    backgroundColor: "#102b46",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: -18,
    height: 70,
    position: "absolute",
    width: 88
  },
  goggles: {
    backgroundColor: "#071320",
    borderRadius: 8,
    height: 16,
    position: "absolute",
    top: 60,
    width: 60,
    zIndex: 2
  },
  skiLeft: {
    backgroundColor: "#4da3ff",
    bottom: 10,
    height: 5,
    left: 14,
    position: "absolute",
    transform: [{ rotate: "-15deg" }],
    width: 48,
    zIndex: 3
  },
  skiRight: {
    backgroundColor: "#ef5d60",
    bottom: 10,
    height: 5,
    position: "absolute",
    right: 14,
    transform: [{ rotate: "15deg" }],
    width: 48,
    zIndex: 3
  },
  levelPanel: {
    flex: 1
  },
  levelLabel: {
    color: "#7ed7ff",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  level: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 33,
    marginTop: 4
  },
  missions: {
    color: "#a8f0c4",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
    marginTop: 8
  },
  statsPanel: {
    backgroundColor: "#0b1b2d",
    borderColor: "#1d3855",
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 16,
    padding: 16
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 16
  },
  statsList: {
    gap: 14
  }
});
