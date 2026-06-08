import { Mission, RacerStats, RopeTeamMember, TabConfig } from "./types";

export const brand = {
  appName: "GRVTY: Ride the Mountain",
  teamName: "GRVTY",
  fullTeamName: "Gravity Racing Team",
  motto: "One Team. One Force. For Glory.",
  anthem: [
    "We don't fight gravity.",
    "We ride it.",
    "Master it.",
    "Become one with it."
  ]
};

export const appTabs: TabConfig[] = [
  { id: "home", label: "Home" },
  { id: "missions", label: "Missions" },
  { id: "racer", label: "Racer" },
  { id: "ropeTeam", label: "Rope Team" },
  { id: "story", label: "Story" }
];

export const weeklyMountain = {
  currentZone: "Valley of Strength",
  currentForce: 32450,
  targetForce: 50000
};

export const missions: Mission[] = [
  {
    id: "core",
    label: "Core Workout",
    force: 50,
    statBoosts: { strength: 10, teamwork: 2 }
  },
  {
    id: "mobility",
    label: "Mobility",
    force: 40,
    statBoosts: { mobility: 10, recovery: 3 }
  },
  {
    id: "homework",
    label: "Homework",
    force: 30,
    statBoosts: { focus: 10, teamwork: 2 }
  },
  {
    id: "breakfast",
    label: "Healthy Breakfast",
    force: 20,
    statBoosts: { recovery: 6, focus: 3 }
  },
  {
    id: "sleep",
    label: "Sleep Goal",
    force: 60,
    statBoosts: { recovery: 12, strength: 2 }
  }
];

export const racerBaseStats: RacerStats = {
  strength: 42,
  recovery: 38,
  focus: 40,
  mobility: 36,
  teamwork: 45
};

export const racer = {
  level: "Gravity Rider"
};

export const ropeTeam = {
  squadName: "Avalanche Squad",
  currentForce: 8000,
  targetForce: 10000,
  message: "Nobody climbs alone.",
  members: [
    { name: "Adam", weeklyForce: 1650 },
    { name: "Emma", weeklyForce: 1580 },
    { name: "Julia", weeklyForce: 1710 },
    { name: "Max", weeklyForce: 1420 },
    { name: "Lena", weeklyForce: 1640 }
  ] satisfies RopeTeamMember[]
};

export const weeklyStory = {
  title: "Valley of Strength",
  story:
    "This week GRVTY enters the Valley of Strength. The mountain tests every racer's core, balance, and discipline.",
  boss: "Stone Giant",
  goal: "Reach 50,000 Force by Sunday."
};
