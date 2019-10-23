import React, { useState, useEffect } from 'react';
import { Alert, ToastAndroid } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Background from '../../assets/background.jpg'; 
import Logo from '../../assets/r6.png';

import { 
    Container, 
    LogoImage, 
    FormContainer, 
    Label, 
    Input, 
    Picker, 
    Button, 
    ButtonText 
} from './styles';

export default function Login({ navigation }) {

    const [userName, setUserName] = useState('');
    const [userPlatform, setUserPlatform] = useState('uplay');    

    useEffect(() => {
        AsyncStorage.getItem('userId').then(user_id => {
          if(user_id) {
            navigation.navigate('Main');
          }
        })    
    }, []);

    function handleSubmit(userName, userPlatform) {        
        if(userName !== '') {

            let url = `https://r6tab.com/api/search.php?platform=${userPlatform}&search=${userName}`;

            fetch(url, {
                method: 'GET'
            })
            .then((response) => response.json())
            .then(async (responseJson) => {
                
                console.log(responseJson); 
                const { totalresults } = responseJson;

                if(totalresults > 0) {

                    const loggedId = responseJson.results[0].p_id;                    

                    await AsyncStorage.setItem('userId', loggedId);                                  
                    navigation.navigate('Main');
                }else {
                    ToastAndroid.show('Usuário não encontrado', ToastAndroid.SHORT);
                }      
            })
            .catch((error) => {
                console.error(error);
            });    
        } else {
            ToastAndroid.show('Preencha os campos!', ToastAndroid.SHORT);
        }        
    }

    return (
        <Container source={Background}>
            
            <LogoImage source={Logo} />

            <FormContainer behavior="padding" >

                <Label>Usuário</Label>
                <Input
                    placeholder="SEU NICKNAME!"
                    placeholderTextColor="#ddd"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={userName}
                    onChangeText={setUserName}
                />  

                <Label>Plataforma</Label>
                <Picker
                    selectedValue={userPlatform}
                    onValueChange={(itemValue, itemIndex) => setUserPlatform(itemValue)}           
                >
                    <Picker.Item label="PC" value="uplay" />
                    <Picker.Item label="XBOX" value="xbl" />
                    <Picker.Item label="Play Station" value="psn" />
                </Picker>

            </FormContainer>

            <Button onPress={() => handleSubmit(userName, userPlatform)}>
                <ButtonText>ENTRAR</ButtonText>
            </Button>

        </Container>
    );
}
