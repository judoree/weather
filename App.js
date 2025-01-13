import * as Location from "expo-location";

import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, View, Text, ScrollView } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const API_KEY = "49dc17df210676fe55961df2b9170e3e";

export default function App() {
  const [city, setCity] = useState("Loading....");
  const [ok, setOk] = useState(true);
  const [day, setDay] = useState();
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
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
