import styled from 'styled-components/native';
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export const HeaderView = styled.View`
    padding: 0 30px;
    flex-direction: row;    
`;

export const Avatar = styled.Image`
    width: ${screenWidth * 0.15}px;
    height: ${screenWidth * 0.15}px;
    margin-right: 10px;
    margin-top: 5px;
`;

export const HeaderStatsView = styled.View`
    /* background: rgba(0, 0, 0, 0.3); */
    width: ${screenWidth * 0.65}px;
    /* height: ${screenWidth * 0.15}px; */
    padding: 0 10px 5px 10px;
`;

export const TitleView = styled.View`
    flex-direction: row;
    align-items: center;    
`;

export const NameText = styled.Text`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-right: 5px;
`;

export const PlatformImage = styled.Image`
    width: 20px;
    height: 20px;
`;

export const StatsView = styled.View`
    flex-direction: row;
`;

export const InfoText = styled.Text`
    color: #fff;
    margin-right: 5px;
    padding-right: 5px;
    border-right-width: 1px;
    border-right-color: #363636;
`;

export const GreyText = styled.Text`
    color: #636363;
`;