import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  LogoImage,
  BackgroundContainer,
  LogoutButton,
  ResultItem,
  ResultAvatar,
  ResultNick,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import Background from '../../assets/main-background.jpg';
import Logo from '../../assets/r6.png';

export default function LoginResults({navigation}) {
  const screenWidth = Dimensions.get('window').width;

  const response = navigation.getParam('response');
  var loggedUserData;

  async function handleSubmit(user_id) {
    const loggedId = user_id;

    //*****
    await AsyncStorage.setItem('userId', loggedId);
    //*****

    let url = `https://r6tab.com/api/player.php?p_id=${loggedId}`;

    await fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        //await AsyncStorage.setItem('loggedUserData', responseJson);
        loggedUserData = responseJson;
      })
      .catch(error => {
        console.log(error);
      });

    navigation.navigate('Main', {response: loggedUserData});
  }

  function handleExit() {
    AsyncStorage.clear();
    navigation.navigate('Login');
  }

  return (
    <BackgroundContainer source={Background}>
      <LogoutButton onPress={() => handleExit()}>
        <Icon size={32} name="exit-to-app" color="#e63939" />
      </LogoutButton>

      <LogoImage source={Logo} />

      <FlatList
        style={{width: screenWidth}}
        data={response}
        renderItem={({item}) => (
          <ResultItem onPress={() => handleSubmit(item.p_id)}>
            <ResultAvatar
              source={{
                uri: `https://ubisoft-avatars.akamaized.net/${
                  item.p_id
                }/default_146_146.png?`,
              }}
            />
            <ResultNick numberOfLines={1}>{item.p_name}</ResultNick>
          </ResultItem>
          // <Text>{item.p_name}</Text>
        )}
        keyExtractor={item => item.p_id}
      />
    </BackgroundContainer>
  );
}
