import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { Alert, View, Text, TouchableOpacity } from 'react-native';

import { 
  BackgroundContainer,
  Container, 
  LogoImage, 
  LogoutButton,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import HeaderStats from '../../components/HeaderStats';
import RankStats from '../../components/RankStats';
import MatchStats from '../../components/MatchStats';
import ModeStats from '../../components/ModeStats';

import Background from '../../assets/main-background.jpg'; 
import Logo from '../../assets/r6.png';

export default function Main({ navigation }) {
    

  const userData = navigation.getParam('response');
  const [loggedUserData, setLoggedUserData] = useState([]);
  const [shimmerVisible, setShimmerVisible] = useState(false);

  useEffect(() => {

    async function handleStats() {

      const userId = await AsyncStorage.getItem('userId');

      let url = `https://r6tab.com/api/player.php?p_id=${userId}`;

      await fetch(url, {
          method: 'GET'
      })
      .then((response) => response.json())
      .then(async (responseJson) => {          
                            
        setLoggedUserData(responseJson);                       
      })
      .catch((error) => {
          console.log(error);
      });   

      setShimmerVisible(true);             
    }           

    handleStats();

    //console.log(userData);
   
  }, []);

  function handleExit() {
    AsyncStorage.clear();
    navigation.navigate('Login');
  }

  return (

    <Container>      
      <BackgroundContainer source={Background}>

        <LogoutButton onPress={() => handleExit()}>
          <Icon size={32} name="exit-to-app" color="#e63939" />
        </LogoutButton>

        <LogoImage source={Logo} />   


        <HeaderStats stats={loggedUserData} shimmer={shimmerVisible} />

        <RankStats />

        <MatchStats stats={userData} matchType="Casual" />
        <MatchStats stats={userData} matchType="Ranked" />
        {/* <MatchStats stats={userData} matchType="Terrorist Hunt" /> */}

        <ModeStats />
        
        </BackgroundContainer>
      </Container>
  );
}
