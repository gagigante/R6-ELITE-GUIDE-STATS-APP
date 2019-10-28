import React, { useState, useEffect } from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { 
  Container, 
  LogoImage,
  HeaderView,
  Avatar,
  HeaderStatsView,
  NameText,
  StatsView,
  InfoText,
  GreyText
} from './styles';

import Background from '../../assets/main-background.jpg'; 
import Logo from '../../assets/r6.png';


export default function Main({ navigation }) {
  
  const [loggedUserData, setLoggedUserData] = useState([]);

  useEffect(() => {
    async function handleStats() {

      const userId = await AsyncStorage.getItem('userId');

      

      let url = `https://r6tab.com/api/player.php?p_id=${userId}`;

      fetch(url, {
          method: 'GET'
      })
      .then((response) => response.json())
      .then(async (responseJson) => {          
          
          setLoggedUserData(responseJson);     
          console.log('entrou');      
          console.log(responseJson.p_name);
          
      })
      .catch((error) => {
          console.error(error);
      });    
    }

    handleStats();
  }, []);

  function handleExit() {
    AsyncStorage.clear();
    navigation.navigate('Login');
  }

  return (
    <Container source={Background}>

      <LogoImage source={Logo} />

      <HeaderView>
        <Avatar source={Logo}/>
        <HeaderStatsView>
          <NameText>{loggedUserData.p_name}</NameText>
          <StatsView>
            <InfoText>#{loggedUserData.p_pvtrank} 
              <GreyText> Global</GreyText></InfoText>
            <InfoText>
              <GreyText>Level</GreyText> {loggedUserData.p_level}</InfoText>
            <InfoText><GreyText>KD</GreyText> {loggedUserData.kd/100}</InfoText>
          </StatsView>
        </HeaderStatsView>
      </HeaderView>
      <Text style={{ color: 'white' }}>{loggedUserData.p_pvtrank}</Text>
      <TouchableOpacity onPress={() => handleExit()}> 
        <Text>SAIR</Text> 
      </TouchableOpacity>
    </Container>
  );
}
