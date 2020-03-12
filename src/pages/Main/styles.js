import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const BackgroundContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding: 10px 0;
`;

export const LogoImage = styled.Image`
  width: ${screenWidth * 0.2}px;
  height: ${screenWidth * 0.2}px;
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
