import React from "react";
import { BackHandler, StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.descripiton}>Suny</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 39,
    fontWeight: "600",
  },
  weather: {
    flex: 3,
  },
  day: {
    flex: 1,
    alignItems: "center",
  },
  temp: {
    fontSize: 158,
    marginTop: 50,
  },
  descripiton: {
    marginTop: -40,
    fontSize: 50,
  },
});
