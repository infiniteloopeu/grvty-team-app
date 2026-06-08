export type AppTab = "home" | "missions" | "racer" | "ropeTeam" | "story";

export type RacerStats = {
  strength: number;
  recovery: number;
  focus: number;
  mobility: number;
  teamwork: number;
};

export type Mission = {
  id: string;
  label: string;
  force: number;
  statBoosts: Partial<RacerStats>;
};

export type RopeTeamMember = {
  name: string;
  weeklyForce: number;
};

export type TabConfig = {
  id: AppTab;
  label: string;
};
