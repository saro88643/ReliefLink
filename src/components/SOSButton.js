import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';

export default function SOSButton(){

return(

<TouchableOpacity style={styles.btn}>

<Text style={styles.text}>
🚨 EMERGENCY SOS
</Text>

</TouchableOpacity>

);

}

const styles=StyleSheet.create({

btn:{
backgroundColor:'#E53935',
marginHorizontal:15,
padding:22,
borderRadius:50,
alignItems:'center',
},

text:{
fontSize:22,
fontWeight:'bold',
color:'white',
},

});