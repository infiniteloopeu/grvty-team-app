import { StyleSheet, Text, View } from "react-native";

import { RopeTeamMember } from "../types";
import { ProgressBar } from "./ProgressBar";

type TeamMemberRowProps = {
  member: RopeTeamMember;
  rank: number;
  targetForce: number;
};

export function TeamMemberRow({ member, rank, targetForce }: TeamMemberRowProps) {
  const gateColor = rank % 2 === 0 ? "#4da3ff" : "#ef5d60";

  return (
    <View style={styles.row}>
      <View style={[styles.gate, { backgroundColor: gateColor }]} />
      <View style={styles.bib}>
        <Text style={styles.bibText}>{rank}</Text>
      </View>
      <View style={styles.memberContent}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{member.name}</Text>
          <Text style={styles.force}>{member.weeklyForce.toLocaleString()}</Text>
        </View>
        <ProgressBar
          compact
          current={member.weeklyForce}
          fillColor="#a8f0c4"
          label="Weekly Force"
          target={targetForce}
          valueLabel="Rope contribution"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    backgroundColor: "#0b1b2d",
    borderColor: "#24435f",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    minHeight: 86,
    overflow: "hidden",
    padding: 12
  },
  gate: {
    bottom: 0,
    left: 0,
    position: "absolute",
    top: 0,
    width: 5
  },
  bib: {
    alignItems: "center",
    backgroundColor: "#f4d35e",
    borderRadius: 8,
    height: 42,
    justifyContent: "center",
    width: 42
  },
  bibText: {
    color: "#06111f",
    fontSize: 17,
    fontWeight: "900"
  },
  memberContent: {
    flex: 1,
    gap: 8,
    marginLeft: 12
  },
  nameRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "900"
  },
  force: {
    color: "#a8f0c4",
    fontSize: 14,
    fontWeight: "900"
  }
});
