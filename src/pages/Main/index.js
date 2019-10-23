import React, { useState, useEffect } from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// import { Container } from './styles';

export default function Main({ navigation }) {

  const [userId, setUserId] = useState('');

  useEffect(() => {
    // AsyncStorage.getItem('userId').then(user_id => {
    //   console.log(user_id);
    //   setUserId(user_id);
    //   Alert.alert(`O id logado e: ${userId}`);
    // })
  }, []);

  function handleExit() {
    AsyncStorage.clear();
    navigation.navigate('Login');
  }

  return (
    <View>
      <Text>Main</Text>      
      <TouchableOpacity onPress={() => handleExit()}> 
        <Text>SAIR</Text> 
      </TouchableOpacity>
    </View>
  );
}
