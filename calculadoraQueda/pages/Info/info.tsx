import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome5";

export default function Info({ navigation }: any) {
  const handleBack = () => {
    navigation.navigate("Home");
  };
  const handleNext = () => {
    navigation.navigate("Objects");
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.iconBackBox}>
          <TouchableOpacity onPress={handleBack}>
            <Icon name="leftcircle" size={45} color="rgba(11,139,86,1)" />
          </TouchableOpacity>
          <Icon2  name="atom" size={45} color={"#8338ec"}/>
          <TouchableOpacity onPress={handleNext}>
            <Icon name="rightcircle" size={45} color="rgba(11,139,86,1)" />
          </TouchableOpacity>
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Como funciona?</Text>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.content}>
            <Text style={styles.text}>
              {
                " Já pensou estar andando pela calçada e um objeto cai do último andar"
              }
              {" de um prédio de 50 metros?\n\n"}
              {
                ' Você deve estar pensando "seria o meu fim", mas será? Abaixo vou explicar'
              }
              {
                " como será feito o cálculo para descobrir se determinado objeto seria fatal ou não."
              }
            </Text>
          </View>
          <View style={styles.title2}>
            <Text style={styles.title}>Fórmulas</Text>
          </View>
          <Text style={styles.subtitles}>• Velocidade Terminal</Text>
          <Text style={styles.text}>
            {
              "  A velocidade terminal é a velocidade máxima que um objeto atinge "
            }
            {
              "durante uma queda, quando a força de arrasto do ar (resistência do ar) "
            }
            {
              "se equilibra com a força gravitacional puxando o objeto para baixo. "
            }
            {"Isso ocorre quando a força de arrasto se iguala à força peso do "}
            {"objeto."}
          </Text>
          <View style={styles.imageFormula}>
            <Image
              source={require("../../assets/velocidadeTerminal.png")}
              style={styles.formula1}
            />
          </View>
          <Text style={styles.subtitles}>
            • Energia Potencial Gravitacional
          </Text>
          <Text style={styles.text}>
            {
              "  A energia potencial gravitacional é a energia associada à altura de um "
            }
            {
              "objeto em relação a um ponto de referência. \n  Ela é dada pela fórmula "
            }
            {"Up=m⋅g⋅h, onde m é a massa do objeto, g é a "}
            {"aceleração devido à gravidade e h é a altura. "}
          </Text>
          <View style={styles.imageFormula}>
            <Image
              source={require("../../assets/energiaPotencialGravitaional.png")}
              style={styles.formula2}
            />
          </View>
          <Text style={styles.subtitles}>• Energia Cinética</Text>
          <Text style={styles.text}>
            {
              " A energia cinética é a energia associada ao movimento de um objeto. \n"
            }
            {"No contexto de um objeto caindo, a energia cinética é dada pela "}
            {"fórmula Ec = 1/2·m⋅v² , onde m é a massa "}
            {"do objeto e v é sua velocidade."}
          </Text>
          <View style={styles.imageFormula}>
            <Image
              source={require("../../assets/energiaCinetica.png")}
              style={styles.formula3}
            />
          </View>
          <Text style={styles.subtitles}>• Soma das Energias</Text>
          <Text style={styles.text}>
            {
              "  A soma das energias potencial gravitacional e cinética nos dá a "
            }
            {
              "energia total do sistema. No entanto, a energia total não é uma medida direta dos danos "
            }
            {"que uma queda pode causar."}
          </Text>
          <View style={styles.title2}>
            <Text style={styles.title}>Considerações</Text>
          </View>
          <Text style={styles.text}>
            {
              " Nesta calculadora estamos considerando um corpo caindo de uma altura de 50 metros "
            }
            {
              "e atingindo a cabeça de uma pessoa. \n Segundo estudos a energia em Joules "
            }
            {
              "necessária para perfurar o crânio humano é de aproximadamente 45J, a partir desses dados "
            }
            {"será realizado o cálculo.\n"}
            {
              "  Os danos causados por uma queda dependem de outros fatores além da "
            }
            {
              "energia total. Fatores como a área de impacto, a capacidade do corpo "
            }
            {"de absorver energia e outros podem "}
            {"afetar significativamente os danos causados.\n\n"}
            {
              "  Esta calcularoda não tem como objetivo retornar valores exatos, apenas uma aproximação "
            }
            {"para o conhecimento deste perigo."}
          </Text>
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
    height: "10%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    color: "#8338ec",
  },
  scrollViewContainer: {},
  text: {
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
  title2: {
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
  },
  subtitles: {
    fontSize: 22,
    fontWeight: "500",
  },
  imageFormula: {
    width: "100%",
  },
  formula1: {
    height: 80,
    width: 130,
    margin: "5%",
  },
  formula2: {
    height: 25,
    width: 110,
    margin: "5%",
  },
  formula3: {
    height: 45,
    width: 105,
    margin: "5%",
  },
});
