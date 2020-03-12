import React from 'react';
import {View} from 'react-native';

import {
  Container,
  ModeContainer,
  ModeText,
  StatText,
  StatLabel,
} from './styles';

export default function ModeStats() {
  return (
    <Container>
      <ModeContainer>
        <ModeText>Bomb</ModeText>
        <StatText>
          <StatLabel>Matches</StatLabel> 7678
        </StatText>
        <StatText>
          <StatLabel>Wins</StatLabel> 7678
        </StatText>
        <StatText>
          <StatLabel>Losses</StatLabel> 7678
        </StatText>
        <StatText>
          <StatLabel>Winrate</StatLabel> 50%
        </StatText>
      </ModeContainer>

      <ModeContainer>
        <ModeText>Secure Area</ModeText>
        <StatText>
          <StatLabel>Matches</StatLabel> 7678
        </StatText>
        <StatText>
          <StatLabel>Wins</StatLabel> 7678
        </StatText>
        <StatText>
          <StatLabel>Losses</StatLabel> 7678
        </StatText>
        <StatText>
          <StatLabel>Winrate</StatLabel> 50%
        </StatText>
      </ModeContainer>

      <ModeContainer>
        <ModeText>Hostage</ModeText>
        <StatText>
          <StatLabel>Matches</StatLabel> 7678
        </StatText>
        <StatText>
          <StatLabel>Wins</StatLabel> 7678
        </StatText>
        <StatText>
          <StatLabel>Losses</StatLabel> 7678
        </StatText>
        <StatText>
          <StatLabel>Winrate</StatLabel> 50%
        </StatText>
      </ModeContainer>
    </Container>
  );
}
