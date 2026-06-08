import { StyleSheet, Text, View } from "react-native";

import { ForceBar } from "../components/ForceBar";
import { Screen } from "../components/Screen";
import { ropeTeam } from "../mockData";

export function RopeTeamScreen() {
  return (
    <Screen
      kicker="Rope Team"
      title={ropeTeam.squadName}
      subtitle="Small squad, strong rope. Everyone's Force matters."
    >
      <View style={styles.goalPanel}>
        <ForceBar
          current={ropeTeam.currentForce}
          label="Squad Goal"
          target={ropeTeam.targetForce}
        />
      </View>

      <View style={styles.memberList}>
        {ropeTeam.members.map((member, index) => (
          <View key={member.name} style={styles.memberCard}>
            <View style={styles.rank}>
              <Text style={styles.rankText}>{index + 1}</Text>
            </View>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberForce}>{member.weeklyForce.toLocaleString()} Force</Text>
          </View>
        ))}
      </View>

      <View style={styles.messagePanel}>
        <Text style={styles.message}>{ropeTeam.message}</Text>
        <Text style={styles.messageCopy}>Check in, cheer up, keep moving.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  goalPanel: {
    backgroundColor: "#0d2135",
    borderColor: "#1d3855",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    padding: 16
  },
  memberList: {
    gap: 10
  },
  memberCard: {
    alignItems: "center",
    backgroundColor: "#0d2135",
    borderColor: "#1d3855",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    minHeight: 64,
    paddingHorizontal: 14
  },
  rank: {
    alignItems: "center",
    backgroundColor: "#f4d35e",
    borderRadius: 8,
    height: 34,
    justifyContent: "center",
    width: 34
  },
  rankText: {
    color: "#06111f",
    fontSize: 16,
    fontWeight: "900"
  },
  memberName: {
    color: "#ffffff",
    flex: 1,
    fontSize: 18,
    fontWeight: "900",
    marginLeft: 12
  },
  memberForce: {
    color: "#a8f0c4",
    fontSize: 14,
    fontWeight: "900"
  },
  messagePanel: {
    backgroundColor: "#123456",
    borderRadius: 8,
    marginTop: 16,
    padding: 18
  },
  message: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 30
  },
  messageCopy: {
    color: "#c7d9ee",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 8
  }
});
