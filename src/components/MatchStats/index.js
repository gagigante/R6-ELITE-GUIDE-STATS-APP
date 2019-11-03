import React, { useEffect, useState } from 'react';
import { View, Text  } from 'react-native';

import { 
    Container,
    ModeText,
    StatsView,
    GroupView,
    StatLabel,
    StatValue,
    StatText,
    StatProgressbar
} from './styles';

export default function MatchStats({ stats, matchType }) {

    const userData = stats;

    const [matchData, setMatchData] = useState([0,0,0,0,0]);
    
    useEffect(() => {
        function handleSetArrayIndex() {
            //console.log('entrou');
            //console.log(stats);

            // if(matchType === "Casual"){
            //     console.log('casual');
            //     //setMatchData([stats.data[5], stats.data[6], stats.data[7], stats.data[8], stats.data[9]]);
            // }
            // if(matchType === "Ranked"){            
            //     console.log('ranked');
            // }
            // if(matchType === "Terrorist Hunt"){
            //     console.log('terrrorist');
            // }
            console.log(stats);
            
        }
    
        handleSetArrayIndex();
    }, []);
    

  return (
    <Container>
        <ModeText>{matchType}</ModeText>
        {/* <StatsView>
            <GroupView>
                <StatLabel>Kills</StatLabel>
                <StatValue>{stats[1]}</StatValue>                
            </GroupView>
            <GroupView>
                <StatLabel>Deaths</StatLabel>
                <StatValue>{stats[2]}</StatValue>
            </GroupView>
            <GroupView>
                <StatLabel>Hours Player</StatLabel>
                <StatValue>{Math.round((stats[0]/3600))}</StatValue>
            </GroupView>
        </StatsView> */}
        
        <StatText>Casual KD 1.21</StatText>
        <StatProgressbar
                styleAttr="Horizontal"
                color="#fff"
                indeterminate={false}
                progress={0.5}
        />

        <StatsView>
            <GroupView>
                <StatLabel>Wins</StatLabel>
                <StatValue>725</StatValue>
            </GroupView>
            <GroupView>
                <StatLabel>Losses</StatLabel>
                <StatValue>623</StatValue>
            </GroupView>
            <GroupView>
                <StatLabel>Matches</StatLabel>
                <StatValue>1348</StatValue>
            </GroupView>
        </StatsView>
        
        <StatText>Winrate 53,78%</StatText>
        <StatProgressbar
                styleAttr="Horizontal"
                color="#fff"
                indeterminate={false}
                progress={0.5}
        />

    </Container>
  );
}
