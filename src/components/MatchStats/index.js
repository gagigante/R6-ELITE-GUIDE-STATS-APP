import React, { useEffect, useState } from 'react';
import { View, Text  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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

    var userData = stats;
    
    const [matchData, setMatchData] = useState([0,0,0,0,0]);
    
    
    // useEffect(() => {
    //     console.log(userData);
    // }, []);

    useEffect(() => {                          
        function handleSetArrayIndex() {  
            if(matchType === "Casual"){                
                setMatchData([userData.data[5], userData.data[6], userData.data[7], userData.data[8], userData.data[9]]);
            }
            if(matchType === "Ranked"){     
                setMatchData([userData.data[0], userData.data[1], userData.data[2], userData.data[3], userData.data[4]]);                       
            }            
        }    
        handleSetArrayIndex();     
    }, []);
    

  return (
    <Container>
        <ModeText>{matchType}</ModeText>
        <StatsView>
            <GroupView>
                <StatLabel>Kills</StatLabel>
                <StatValue>{matchData[1]}</StatValue>                
            </GroupView>
            <GroupView>
                <StatLabel>Deaths</StatLabel>
                <StatValue>{matchData[2]}</StatValue>
            </GroupView>
            <GroupView>
                <StatLabel>Hours Played</StatLabel>
                <StatValue>{Math.round((matchData[0]/3600))}</StatValue>
            </GroupView>
        </StatsView>
        
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
                <StatValue>{matchData[3]}</StatValue>
            </GroupView>
            <GroupView>
                <StatLabel>Losses</StatLabel>
                <StatValue>{matchData[4]}</StatValue>
            </GroupView>
            <GroupView>
                <StatLabel>Matches</StatLabel>
                <StatValue>{matchData[3] + matchData[4]}</StatValue>
            </GroupView>
        </StatsView>
        
        <StatText>Winrate {Math.round(matchData[3] / (matchData[3] + matchData[4]) * 1000) / 10}%</StatText>
        <StatProgressbar
            styleAttr="Horizontal"
            color="#fff"
            indeterminate={false}
            progress={0.5}
        />
    </Container>
  );
}
