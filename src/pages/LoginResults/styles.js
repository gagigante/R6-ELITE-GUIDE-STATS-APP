import styled from 'styled-components/native';
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const BackgroundContainer = styled.ImageBackground`
   flex: 1;
   align-items: center;   
   padding: 10px 0;
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

export const ResultItem = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: rgba(0, 0, 0, 0.3);
    margin: 0 10px 10px;
    padding: 10px;
`;

export const ResultAvatar = styled.Image`
    width: 50px;
    height: 50px;
`;

export const ResultNick = styled.Text`
    color: #fff;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
`;
