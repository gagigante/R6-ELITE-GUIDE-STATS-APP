import styled from 'styled-components/native';
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const Container = styled.View`
    width: ${screenWidth * 0.90}px;
    margin-top: 10px;
               
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ModeContainer = styled.View`
    width: ${screenWidth * 0.28}px;
    background: rgba(0, 0, 0, 0.3); 
    padding: 10px; 
`;

export const ModeText = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;    
    margin-bottom: 10px; 
    min-height: 30px;   
`;

export const StatText = styled.Text`
    color: #fff;
    font-size: 12px;
`;

export const StatLabel = styled.Text`
    color: #636363;
`;
