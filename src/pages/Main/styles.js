import styled from 'styled-components/native';
import { Dimensions } from "react-native";

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

export const LogoutButton = styled.TouchableOpacity`
   position: absolute;
   justify-content: center;
   align-items: center;
   right: 10px;
   top: 30px;
`;