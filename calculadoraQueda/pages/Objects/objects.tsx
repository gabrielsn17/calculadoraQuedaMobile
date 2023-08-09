import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";

export default function Objects({ navigation }: any) {
  const handleBack = () => {
    navigation.navigate("Info");
  };
  const handleNext = () => {
    if (selectedItem !== null) {
        if (selectedItem === 4) { 
          navigation.navigate("Personalize");
        } else {
          navigation.navigate("Result", { selectedObject: selectedItem });
        }
      }
  };

  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleSelectBoxPress = (index: number) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  const isItemSelected = (index: number) => index === selectedItem;

  const rightCircleColor =
    isItemSelected(0) ||
    isItemSelected(1) ||
    isItemSelected(2) ||
    isItemSelected(3) ||
    isItemSelected(4)
      ? "#8338ec"
      : "gray";


  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.iconBackBox}>
          <TouchableOpacity onPress={handleBack}>
            <Icon name="leftcircle" size={45} color="rgba(11,139,86,1)" />
          </TouchableOpacity>
          <Icon2 name="atom" size={45} color={"#8338ec"} />
          <TouchableOpacity>
            <Icon
              name="rightcircle"
              size={45}
              color={rightCircleColor}
              onPress={handleNext}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Selecione um objeto</Text>
        </View>
        <ScrollView>
          <View style={styles.objectBox}>
            <TouchableOpacity
              style={[
                styles.selectBox,
                isItemSelected(0) && styles.selectedBox,
              ]}
              onPress={() => handleSelectBoxPress(0)}
            >
              <Icon2 name="coins" size={45} color="#FFD700" />
              <Text style={styles.subtitle}>MOEDA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.selectBox,
                isItemSelected(1) && styles.selectedBox,
              ]}
              onPress={() => handleSelectBoxPress(1)}
            >
              <Icon2 name="apple-alt" size={45} color="#DC143C" />
              <Text style={styles.subtitle}>MAÇÃ</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.selectBox,
                isItemSelected(2) && styles.selectedBox,
              ]}
              onPress={() => handleSelectBoxPress(2)}
            >
              <Icon3 name="nail" size={45} color="gray" />
              <Text style={styles.subtitle}>PREGO</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.selectBox,
                isItemSelected(3) && styles.selectedBox,
              ]}
              onPress={() => handleSelectBoxPress(3)}
            >
              <Icon3 name="cellphone" size={45} color="black" />
              <Text style={styles.subtitle}>CELULAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.selectBox,
                isItemSelected(4) && styles.selectedBox,
              ]}
              onPress={() => handleSelectBoxPress(4)}
            >
              <Icon name="question" size={50} color="rgba(11,139,86,1)" />
              <Text style={styles.subtitlePersonalize}>PERSONALIZADO</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 25 }}></View>
        </ScrollView>
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
  titleBox: {
    height: "8%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    color: "#8338ec",
  },
  objectBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  selectBox: {
    height: 130,
    width: 130,
    backgroundColor: "#fff",
    margin: "3%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 2,
    borderColor: "#333",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  subtitlePersonalize: {
    fontSize: 14,
    fontWeight: "500",
  },
  selectedBox: {
    borderColor: "#98FB98",
    elevation: 15,
    shadowColor: "rgba(11,139,86,1)",
  },
});
