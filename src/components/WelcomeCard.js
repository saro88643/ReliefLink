import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function WelcomeCard(){

return(

<View style={styles.card}>

<Text style={styles.title}>
👋 Welcome Back
</Text>

<Text style={styles.sub}>
Stay Connected Even Without Internet
</Text>

</View>

);

}

const styles=StyleSheet.create({

card:{
backgroundColor:'white',
margin:15,
padding:20,
borderRadius:18,
elevation:4,
},

title:{
fontSize:25,
fontWeight:'bold',
},

sub:{
marginTop:8,
fontSize:16,
color:'gray',
},

});