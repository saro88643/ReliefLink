import React from 'react';
import {ScrollView} from 'react-native';

import Header from '../components/Header';
import WelcomeCard from '../components/WelcomeCard';
import SOSButton from '../components/SOSButton';

export default function DashboardScreen(){

return(

<ScrollView>

<Header/>

<WelcomeCard/>

<SOSButton/>

</ScrollView>

);

}