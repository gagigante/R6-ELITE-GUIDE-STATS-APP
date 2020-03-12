import React, {useState, useEffect} from 'react';
import {ToastAndroid, ActivityIndicator} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  LogoImage,
  FormContainer,
  Label,
  Input,
  Picker,
  Button,
  ButtonText,
} from './styles';

import Background from '../../assets/background.jpg';
import Logo from '../../assets/r6.png';

export default function Login({navigation}) {
  const [userName, setUserName] = useState('');
  const [userPlatform, setUserPlatform] = useState('uplay');

  const [activityColor, setAcativityColor] = useState('transparent');
  const [buttonTextColor, setButtonTextColor] = useState('white');

  // useEffect(() => {
  //     AsyncStorage.getItem('userId').then(user_id => {
  //       if(user_id) {
  //         navigation.navigate('Main');
  //       }
  //     })
  // }, []);

  function handleSubmit(userName, userPlatform) {
    if (userName !== '') {
      setAcativityColor('white');
      setButtonTextColor('transparent');

      let url = `https://r6tab.com/api/search.php?platform=${userPlatform}&search=${userName}`;

      fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(async responseJson => {
          const {totalresults} = responseJson;

          if (totalresults > 0) {
            setAcativityColor('transparent');
            setButtonTextColor('white');

            navigation.navigate('LoginResults', {
              response: responseJson.results,
            });
          } else {
            ToastAndroid.show('Usuário não encontrado', ToastAndroid.SHORT);

            setAcativityColor('transparent');
            setButtonTextColor('white');
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      ToastAndroid.show('Preencha os campos!', ToastAndroid.SHORT);
    }
  }

  return (
    <Container source={Background}>
      <LogoImage source={Logo} />

      <FormContainer behavior="padding">
        <Label>Usuário</Label>
        <Input
          placeholder="SEU NICKNAME!"
          placeholderTextColor="#ddd"
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={setUserName}
        />

        <Label>Plataforma</Label>
        <Picker
          selectedValue={userPlatform}
          onValueChange={(itemValue, itemIndex) => setUserPlatform(itemValue)}>
          <Picker.Item label="PC" value="uplay" />
          <Picker.Item label="XBOX" value="xbl" />
          <Picker.Item label="Play Station" value="psn" />
        </Picker>
      </FormContainer>

      <Button onPress={() => handleSubmit(userName, userPlatform)}>
        <ButtonText style={{color: `${buttonTextColor}`}}>ENTRAR</ButtonText>
        <ActivityIndicator
          style={{position: 'absolute'}}
          size="large"
          color={activityColor}
        />
      </Button>
    </Container>
  );
}
