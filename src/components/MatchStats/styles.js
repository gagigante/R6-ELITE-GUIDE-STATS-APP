import styled from 'styled-components/native';
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const Container = styled.View`
    width: ${screenWidth * 0.90}px;
    margin-top: 10px;
    padding: 10px 0;            
    background: rgba(0, 0, 0, 0.3); 
    align-items: center;
`;

export const ModeText = styled.Text`
    color: #fff;
    font-size: 32px;
    font-weight: bold;    
    margin-bottom: 10px;    
`;

export const StatsView = styled.View`
    width: ${screenWidth * 0.90}px;    
    flex-direction: row;
    justify-content: space-around;
`;

export const GroupView = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StatLabel = styled.Text`
    color: #636363;
    font-size: 14px;
`;

export const StatValue = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;

export const StatText = styled.Text`
    color: #fff;
    padding-top: 10px;  
`;

export const StatProgressbar = styled.ProgressBarAndroid`
    width: ${screenWidth * 0.80}px;    
`;