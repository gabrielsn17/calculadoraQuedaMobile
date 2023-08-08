import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";

export default function Info({ navigation }: any) {
    const handleBack = () => {
        navigation.navigate("Home")
      }
  return (
    <View style={styles.container}>
      <View style={styles.iconBackBox}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="leftcircle" size={45} color="rgba(11,139,86,1)"/>
        </TouchableOpacity>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Como funciona?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "5%",
  },
  iconBackBox: {
    height: "15%",
    width: "100%",
    alignItems:'center',
    flexDirection:'row',
  },
  titleBox:{
    height:'15%',
    width:'100%',
    backgroundColor: 'orange',
    alignItems:'center',
  },
  title: {
    fontSize:35,
    fontWeight:'600',
  },
});
