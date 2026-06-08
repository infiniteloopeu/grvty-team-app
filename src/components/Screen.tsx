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
    flex: 1
  },
  content: {
    padding: 18,
    paddingBottom: 28
  },
  header: {
    marginBottom: 18
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
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: 0,
    lineHeight: 37,
    marginTop: 6
  },
  subtitle: {
    color: "#c7d9ee",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 21,
    marginTop: 8
  }
});
