import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import animacao1 from "../../assets/animacao1.json";
import Icon from "react-native-vector-icons/AntDesign";

export default function Home({ navigation }: any) {
  const handleEnter = () => {
    navigation.navigate("Info")
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,1)", "rgba(11,139,86,1)"]}
        style={styles.container}
      >
        <View style={styles.titleBox}>
          <Text style={styles.title}>CALCULADORA</Text>
          <Text style={styles.subtitle}>CORPO EM QUEDA</Text>
        </View>
        <View style={styles.lottieBox}>
          <LottieView source={animacao1} autoPlay loop resizeMode="contain" />
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity onPress={handleEnter}>
            <Icon name="rightcircle" size={55} color="black" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  titleBox: {
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "900",
    margin: "5%",
  },
  subtitle: {
    color: "#8338ec",
    fontSize: 35,
    fontWeight: "900",
  },
  lottieBox: {
    height: "40%",
    width: "100%",
  },
  buttonBox: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
