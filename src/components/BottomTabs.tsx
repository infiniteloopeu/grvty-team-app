import { Pressable, StyleSheet, Text, View } from "react-native";

import { AppTab, TabConfig } from "../types";

type BottomTabsProps = {
  activeTab: AppTab;
  tabs: TabConfig[];
  onTabPress: (tab: AppTab) => void;
};

export function BottomTabs({ activeTab, tabs, onTabPress }: BottomTabsProps) {
  return (
    <View style={styles.nav}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            key={tab.id}
            onPress={() => onTabPress(tab.id)}
            style={[styles.tab, isActive && styles.activeTab]}
          >
            <View style={[styles.tabMarker, isActive && styles.activeMarker]} />
            <Text style={[styles.tabLabel, isActive && styles.activeLabel]} numberOfLines={1}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 12,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#071320",
    borderTopColor: "#315d80",
    borderTopWidth: 1
  },
  tab: {
    alignItems: "center",
    borderRadius: 8,
    flex: 1,
    minHeight: 56,
    justifyContent: "center",
    paddingHorizontal: 3
  },
  activeTab: {
    backgroundColor: "#102b46",
    borderColor: "#7ed7ff",
    borderWidth: 1
  },
  tabMarker: {
    width: 22,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#ef5d60",
    marginBottom: 7
  },
  activeMarker: {
    backgroundColor: "#f4d35e"
  },
  tabLabel: {
    color: "#a9bdd2",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center"
  },
  activeLabel: {
    color: "#ffffff"
  }
});
