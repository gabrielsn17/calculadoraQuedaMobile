import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome5";

export default function Personalize({ navigation, route }: any) {
  const handleBack = () => {
    navigation.navigate("Objects");
  };

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  const [terminalVelocityResult, setTerminalVelocityResult] = useState("");
  const [massValueResult, setMassValueResult] = useState("");
  const [EtotalResult, setEtotalResult] = useState("");
  const [isFatal, setIsFatal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isCalculationDone, setIsCalculationDone] = useState(true);
  const [inputsEnabled, setInputsEnabled] = useState(true);
  const [name, setName] = useState("");
  const [mass, setMass] = useState("");
  const [area, setArea] = useState("");
  const [cd, setCd] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [massValid, setMassValid] = useState(false);
  const [areaValid, setAreaValid] = useState(false);
  const [cdValid, setCdValid] = useState(false);
  const [calculateButtonColor, setCalculateButtonColor] = useState("grey");

  const validateName = (text: string) => {
    const lettersRegex = /^[a-zA-Z]+$/;
    setNameValid(lettersRegex.test(text));
  };

  const validateNumber = (text: string) => {
    const numberRegex = /^[0-9]+(\.[0-9]*)?$/;
    return numberRegex.test(text);
  };

  const validateMass = (text: any) => {
    setMassValid(validateNumber(text));
  };

  const validateArea = (text: any) => {
    setAreaValid(validateNumber(text));
  };

  const validateCd = (text: any) => {
    setCdValid(validateNumber(text));
  };

  const updateCalculateButtonColor = () => {
    if (nameValid && massValid && areaValid && cdValid) {
      setCalculateButtonColor("rgba(11,139,86,1)");
    } else {
      setCalculateButtonColor("grey");
    }
  };
  useEffect(() => {
    if (nameValid && massValid && areaValid && cdValid) {
      setCalculateButtonColor("rgba(11,139,86,1)");
    } else {
      setCalculateButtonColor("grey");
    }
  }, [nameValid, massValid, areaValid, cdValid]);
  const [errorMessage, setErrorMessage] = useState("");

  const calculateTerminalVelocity = () => {
    if (nameValid && massValid && areaValid && cdValid) {
      setInputsEnabled(false);
      const gravity = 9.8;
      const airResistance = 1.2;
      const massValue = parseFloat(mass);
      const areaValue = parseFloat(area);
      const cdValue = parseFloat(cd);

      const terminalVelocity = Math.sqrt(
        (2 * massValue * gravity) / (airResistance * areaValue * cdValue)
      );

      const EnergiyPG = massValue * gravity * 50;
      const EnergyC = (massValue * Math.pow(terminalVelocity, 2)) / 2;
      const Etotal = EnergiyPG + EnergyC;

      setEtotalResult(Etotal.toFixed(2));

      if (Etotal >= 45) {
        setIsFatal(true);
      } else {
        setIsFatal(false);
      }
      setTerminalVelocityResult(terminalVelocity.toFixed(2));
      setMassValueResult(massValue.toFixed(2));
      setEtotalResult(Etotal.toFixed(2));
      setIsCalculationDone(true);
      setErrorMessage("");
      console.log("Nome:", { name });
      console.log("massa:", { mass });
      console.log("Velocidade Terminal:", { terminalVelocity });
      console.log("Velocidade Terminal:", { Etotal });
      console.log("Velocidade Terminal:", { isFatal });
    } else {
      setErrorMessage(
        "Preencha todos os dados corretamente antes de calcular."
      );
    }
  };

  const handleFocus = () => {
    setName("");
    setMass("");
    setArea("");
    setCd("");
    setNameValid(false);
    setMassValid(false);
    setAreaValid(false);
    setCdValid(false);
    setCalculateButtonColor("grey");
    setErrorMessage("");
    setIsCalculationDone(false);
    setTerminalVelocityResult("");
    setMassValueResult("");
    setEtotalResult("");
    setIsFatal(false);
    setInputsEnabled(true);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", handleFocus);

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    console.log("Nome:", name);
    console.log("massa:", mass);
    console.log("Velocidade Terminal:", terminalVelocityResult);
    console.log("Velocidade Terminal:", EtotalResult);
    console.log("Velocidade Terminal:", isFatal);
  }, [name, mass, setTerminalVelocityResult, EtotalResult, isFatal]);

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
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
                color={isCalculationDone ? "#8338ec" : "grey"}
                onPress={() => {
                  if (isCalculationDone) {
                    navigation.navigate("PersonalizeData", {
                      name,
                      mass,
                      area,
                      cd,
                      terminalVelocityResult,
                      EtotalResult,
                      isFatal,
                    });
                  }
                }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.infoBox}>
              <Text style={styles.textTitle}>Insira os dados</Text>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome do Objeto"
                onChangeText={(text) => {
                  setName(text);
                  validateName(text);
                  updateCalculateButtonColor();
                  
                }}
                editable={inputsEnabled}
              />
              <TextInput
                style={styles.input}
                placeholder="Massa em quilos(Kg)"
                onChangeText={(text) => {
                  setMass(text);
                  validateMass(text);
                  updateCalculateButtonColor();
                }}
                editable={inputsEnabled}
              />
              <TextInput
                style={styles.input}
                placeholder="Área projetada em m²"
                onChangeText={(text) => {
                  setArea(text);
                  validateArea(text);
                  updateCalculateButtonColor();
                }}
                editable={inputsEnabled}
              />
              <TextInput
                style={styles.input}
                placeholder="Coeficiente de arrasto do objeto"
                onChangeText={(text) => {
                  setCd(text);
                  validateCd(text);
                  updateCalculateButtonColor();
                }}
                editable={inputsEnabled}
              />
              <Text>
                {"- Nome deve conter apenas letras;\n"}
                {"- O resto deve contem apenas números;"}
              </Text>
              <TouchableOpacity
                style={[
                  styles.buttonCalculate,
                  { backgroundColor: calculateButtonColor },
                ]}
                onPress={calculateTerminalVelocity}
                disabled={!inputsEnabled}
              >
                <Text style={styles.textButton}>Calcular</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    margin: "5%",
    height: "100%",
  },
  iconBackBox: {
    height: "15%",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
  },
  infoBox: {
    height: 600,
    width: "100%",
    alignItems: "center",
  },
  textTitle: {
    alignSelf: "center",
    fontSize: 30,
    color: "#8338ec",
    fontWeight: "500",
    margin: "5%",
  },
  input: {
    backgroundColor: "#f1f1f1",
    height: "10%",
    width: "70%",
    borderRadius: 10,
    margin: "1%",
    padding: "5%",
    borderWidth: 1,
    borderColor: "#8338ec",
  },
  buttonValidate: {
    alignSelf: "center",
    margin: "5%",
    backgroundColor: "rgba(11,139,86,1)",
    height: "10%",
    width: "40%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCalculate: {
    alignSelf: "center",
    margin: "5%",
    backgroundColor: "grey",
    height: "10%",
    width: "40%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
