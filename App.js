import React from "react";
import { StyleSheet, Dimensions, View, Text, ScrollView } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView indicatorStyle="black" pagingEnabled horizontal contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.descripiton}>Suny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.descripiton}>Suny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.descripiton}>Suny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 39,
    fontWeight: "600",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    fontSize: 158,
    fontWeight: "600",
    marginTop: 50,
  },
  descripiton: {
    marginTop: -40,
    fontSize: 50,
  },
});
