import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";

interface PersonalizeDataProps {
  route: any;
  navigation: any; 
}

export default function PersonalizeData({ navigation, route }: PersonalizeDataProps) {
  const { name, mass, area, cd, terminalVelocityResult, EtotalResult, isFatal } = route.params;

  const handleBack = () => {
    navigation.navigate("Objects");
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.iconBackBox}>
          <TouchableOpacity onPress={handleBack}>
            <Icon name="leftcircle" size={45} color="rgba(11,139,86,1)" />
          </TouchableOpacity>
          <Icon2 name="atom" size={45} color={"#8338ec"} />
          <TouchableOpacity>
            <Icon name="rightcircle" size={45} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Resultado</Text>
        <View style={styles.infoBox}>
          <Text style={styles.objectName}>{name}</Text>
          <Text style={styles.textItem}>• Massa: {mass * 1000} g ({mass}kg)</Text>
          <Text style={styles.textItem}>
            • Velocidade Terminal: {(terminalVelocityResult * 3.6).toFixed(2)} Km/h ({terminalVelocityResult} m/s)
          </Text>
          <Text style={styles.textItem}>
            • Energia Total: {EtotalResult} Joules
          </Text>
        </View>
        { isFatal && (
          <View style={styles.fatalBox}>
            <Icon2 name="skull" size={45} color="black" />
            <Text style={styles.textItem}>Acidente Fatal</Text>
          </View>
        )}
        {!isFatal && (
          <View style={styles.fatalBox}>
            <Icon3 name="hospital-building" size={50} color="black" />
            <Text style={styles.textItem}>Acidente sem Fatalidade</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    margin: "5%",
    backgroundColor: "white",
  },
  iconBackBox: {
    height: "15%",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    alignSelf: "center",
    margin: "5%",
    fontSize: 30,
    fontWeight: "500",
    color: "#8338ec",
  },
  infoBox: {
    height: "45%",
    width: "100%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(11,139,86,1)",
  },
  objectName: {
    alignSelf: "center",
    fontSize: 25,
    margin: "5%",
  },
  textItem: {
    fontSize: 20,
    margin: "5%",
  },
  fatalBox: {
    height: "20%",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "3%",
  },
});
