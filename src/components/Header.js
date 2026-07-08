import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>

      <Text style={styles.menu}>☰</Text>

      <Text style={styles.title}>
        ReliefLink
      </Text>

      <View style={styles.right}>
        <Text style={styles.icon}>🔔</Text>
        <Text style={styles.icon}>👤</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

header:{
height:70,
backgroundColor:'#D32F2F',
paddingHorizontal:20,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
},

menu:{
fontSize:24,
color:'white',
},

title:{
fontSize:24,
fontWeight:'bold',
color:'white',
},

right:{
flexDirection:'row',
},

icon:{
fontSize:20,
marginLeft:15,
},

});