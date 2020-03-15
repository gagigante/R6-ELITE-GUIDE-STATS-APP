import React, {useState} from 'react';
import {ToastAndroid, ActivityIndicator} from 'react-native';

import api from '../../services/api';

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

  async function handleSubmit(userName, userPlatform) {
    if (userName !== '') {
      setAcativityColor('white');
      setButtonTextColor('transparent');

      await api
        .get(`/search.php?platform=${userPlatform}&search=${userName}`)
        .then(function(response) {
          const {totalresults} = response.data;

          if (totalresults > 0) {
            setAcativityColor('transparent');
            setButtonTextColor('white');

            navigation.navigate('LoginResults', {
              response: response.data.results,
            });
          } else {
            ToastAndroid.show('Usuário não encontrado', ToastAndroid.SHORT);

            setAcativityColor('transparent');
            setButtonTextColor('white');
          }
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
