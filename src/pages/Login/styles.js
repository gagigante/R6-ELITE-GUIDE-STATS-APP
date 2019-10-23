import styled from 'styled-components/native';
import {Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const Container = styled.ImageBackground`
   width: 100%;
   height: 100%;
   align-items: center;
`;

export const LogoImage = styled.Image`
     width: ${screenWidth*0.20}px;
     height: ${screenWidth*0.20}px;
     margin-bottom: 30px;
     margin-top: 60px; 
`;

export const FormContainer = styled.KeyboardAvoidingView`
    width: ${screenWidth - screenWidth*0.15}px;
    height: ${screenWidth - screenWidth*0.15}px;
    max-width: ${screenWidth}px;

    margin: 0 auto;
    padding: 0 30px;

    justify-content: center;

    background: rgba(0, 0, 0, 0.3);
    border-radius: 2px;

    border-radius: 2px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.3);
`;

export const Label = styled.Text`
    color: #fff;
    font-size: 16px;    
    margin-bottom: 5px;
`;

export const Input = styled.TextInput`
    color: #fff;
    background: rgba(255, 255, 255, 0.1);       
    height: 40px;    
    margin-bottom: 10px;
    border-radius: 2px;
`;

export const Picker = styled.Picker`
    color: #fff;
    background: rgba(255, 255, 255, 0.1); 
    height: 40px;          
`;

export const Button = styled.TouchableOpacity`
    background: #0ec3e3;

    margin-top: 10px;
    width: ${screenWidth - screenWidth*0.15}px;    
    height: 48px;

    justify-content: center;
    align-items: center;

    border-radius: 2px;
    border-width: 1px;
    border-color: #fff;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20px;    
`;
