import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";

interface ObjectInfo {
  name: string;
  mass: string;
  terminalVelocity: string;
  totalEnergy: string;
  fatal: boolean;
}

interface RouteParams {
  selectedObject: keyof typeof objectInfo;
}

const objectInfo = {
  0: {
    name: "Moeda",
    mass: "6,8 g (0,0068kg)",
    terminalVelocity: "94,3 km/h (26,2 m/s)",
    totalEnergy: "2,3 Joules",
    fatal: false,
  },
  1: {
    name: "Maçã",
    mass: "130 g (0,13 kg)",
    terminalVelocity: "144 km/h (40 m/s)",
    totalEnergy: "104 Joules",
    fatal: true,
  },
  2: {
    name: "Prego",
    mass: "3,7 g (0,0037 kg)",
    terminalVelocity: "66 km/h (18,4 m/s)",
    totalEnergy: "2,4 Joules",
    fatal: false,
  },
  3: {
    name: "Celular",
    mass: "157 g (0,157 kg)",
    terminalVelocity: "37,8 km/h (10,5 m/s)",
    totalEnergy: "85,58 Joules",
    fatal: true,
  },
};

export default function Result({ navigation, route }: any) {
  const handleBack = () => {
    navigation.navigate("Objects");
  };

  const { terminalVelocity, objectName, massValue, totalEnergy, isFatal }: any =
    route.params;

  const personalizedInfo: ObjectInfo = {
    name: objectName,
    mass: massValue,
    terminalVelocity: terminalVelocity,
    totalEnergy: totalEnergy,
    fatal: isFatal,
  };

  const { selectedObject }: RouteParams = route.params;
  const defaultInfo: ObjectInfo = objectInfo[selectedObject];

  const info: ObjectInfo = personalizedInfo.fatal
    ? personalizedInfo
    : defaultInfo;

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
          <Text style={styles.objectName}>{info.name}</Text>
          <Text style={styles.textItem}>• Massa: {info.mass}</Text>
          <Text style={styles.textItem}>
            • Velocidade Terminal: {info.terminalVelocity}
          </Text>
          <Text style={styles.textItem}>
            • Energia Total: {info.totalEnergy}
          </Text>
        </View>
        {info.fatal && (
          <View style={styles.fatalBox}>
            <Icon2 name="skull" size={45} color="black" />
            <Text style={styles.textItem}>Acidente Fatal</Text>
          </View>
        )}
        {!info.fatal && (
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
