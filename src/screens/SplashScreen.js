import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import Colors from "../styles/Colors";

export default function SplashScreen({ navigation }) {

  useEffect(() => {

    const timer = setTimeout(() => {

      navigation.replace("Login");

    }, 3000);

    return () => clearTimeout(timer);

  }, );

  return (

    <View style={styles.container}>

      <Text style={styles.logo}>🛟</Text>

      <Text style={styles.title}>
        ReliefLink
      </Text>

      <Text style={styles.subtitle}>
        Stay Connected Even Without Internet
      </Text>

      <ActivityIndicator
        size="large"
        color={Colors.primary}
      />

    </View>

  );

}

const styles = StyleSheet.create({

  container:{

    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Colors.background,

  },

  logo:{

    fontSize:80,
    marginBottom:20,

  },

  title:{

    fontSize:34,
    fontWeight:"bold",
    color:Colors.primary,

  },

  subtitle:{

    marginVertical:20,
    fontSize:16,
    color:Colors.gray,

  }

});