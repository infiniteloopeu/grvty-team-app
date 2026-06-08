import { StyleSheet, Text, View } from "react-native";

import { ForceCard } from "../components/ForceCard";
import { Screen } from "../components/Screen";
import { TeamMemberRow } from "../components/TeamMemberRow";
import { ropeTeam } from "../mockData";

export function RopeTeamScreen() {
  const memberTarget = ropeTeam.targetForce / ropeTeam.members.length;

  return (
    <Screen
      kicker="Rope Team"
      title={ropeTeam.squadName}
      subtitle="Small squad, strong rope. Everyone's Force matters."
    >
      <ForceCard
        accent="green"
        caption="Avalanche Squad is pulling the rope toward the weekly gate."
        current={ropeTeam.currentForce}
        force={ropeTeam.currentForce}
        label="Squad Force"
        progressLabel="Squad Goal"
        target={ropeTeam.targetForce}
      />

      <View style={styles.memberList}>
        {ropeTeam.members.map((member, index) => (
          <TeamMemberRow
            key={member.name}
            member={member}
            rank={index + 1}
            targetForce={memberTarget}
          />
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
    gap: 10,
    marginTop: 16
  },
  messagePanel: {
    backgroundColor: "#122942",
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
