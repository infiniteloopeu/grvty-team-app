import { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type ScreenProps = PropsWithChildren<{
  kicker: string;
  title: string;
  subtitle?: string;
}>;

export function Screen({ children, kicker, subtitle, title }: ScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.screen}>
      <View style={styles.mountainBack} />
      <View style={styles.mountainFront} />
      <View style={styles.courseLine} />
      <View style={styles.header}>
        <Text style={styles.kicker}>{kicker}</Text>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#06111f"
  },
  content: {
    overflow: "hidden",
    padding: 18,
    paddingBottom: 28
  },
  header: {
    marginBottom: 18,
    minHeight: 112
  },
  kicker: {
    color: "#7ed7ff",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  title: {
    color: "#ffffff",
    fontSize: 31,
    fontWeight: "900",
    letterSpacing: 0,
    lineHeight: 36,
    marginTop: 6
  },
  subtitle: {
    color: "#c7d9ee",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 21,
    marginTop: 8
  },
  mountainBack: {
    borderBottomColor: "#102b46",
    borderBottomWidth: 155,
    borderLeftColor: "transparent",
    borderLeftWidth: 105,
    borderRightColor: "transparent",
    borderRightWidth: 105,
    height: 0,
    opacity: 0.72,
    position: "absolute",
    right: -58,
    top: 22,
    width: 0
  },
  mountainFront: {
    borderBottomColor: "#1c4669",
    borderBottomWidth: 120,
    borderLeftColor: "transparent",
    borderLeftWidth: 82,
    borderRightColor: "transparent",
    borderRightWidth: 82,
    height: 0,
    opacity: 0.65,
    position: "absolute",
    right: 28,
    top: 58,
    width: 0
  },
  courseLine: {
    backgroundColor: "rgba(255, 255, 255, 0.34)",
    height: 2,
    position: "absolute",
    right: -38,
    top: 132,
    transform: [{ rotate: "-24deg" }],
    width: 190
  }
});
