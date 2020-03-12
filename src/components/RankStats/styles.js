import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const Container = styled.TouchableOpacity`
  width: ${screenWidth * 0.9}px;
  margin-top: 10px;
  padding: 10px 0;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

export const CurrentRankImage = styled.Image`
  width: ${screenWidth * 0.15}px;
  height: ${screenWidth * 0.15}px;
  margin-bottom: -10px;
`;

export const RankbarView = styled.View`
  flex-direction: row;
`;

export const RankImage = styled.Image`
  width: ${screenWidth * 0.1}px;
  height: ${screenWidth * 0.1}px;
`;

export const MMRbar = styled.ProgressBarAndroid`
  width: ${screenWidth * 0.6}px;
`;

export const CurrentMMR = styled.Text`
  color: #fff;
  margin-top: -10px;
`;
