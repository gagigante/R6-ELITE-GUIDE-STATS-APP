import React from 'react';
import { View, ProgressBarAndroid } from 'react-native';

import { 
    Container,
    RankbarView,
    CurrentRankImage,
    RankImage,
    MMRbar,
    CurrentMMR
} from './styles';

import CurrentRank from '../../assets/ranks/example.png';

export default function RankStats({ stats }) {
  return (
    <Container> 

        <CurrentRankImage source={CurrentRank} />        

        <RankbarView>
            <RankImage source={CurrentRank} />

            <MMRbar
                styleAttr="Horizontal"
                color="#fff"
                indeterminate={false}
                progress={0.5}
            />

            <RankImage source={CurrentRank} />
        </RankbarView>
        <CurrentMMR>4000 MMR</CurrentMMR>
    </Container>
  );
}
