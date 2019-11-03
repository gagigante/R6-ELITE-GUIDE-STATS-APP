import React, { useState, useEffect } from 'react';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import { Dimensions, View, StyleSheet } from 'react-native';

import { 
  HeaderView,
  Avatar,
  HeaderStatsView,
  TitleView,
  NameText,
  PlatformImage,
  StatsView,
  InfoText,
  GreyText
} from './styles';

export default function HeaderStats({ stats, shimmer }) {
        
  const shimmerStatus = shimmer;

  const platformImages = {
    'uplay' : require('../../assets/platforms/windows_logo.png'),
    'xbl': require('../../assets/platforms/xbox_logo.png'),
    'psn': require('../../assets/platforms/psn_logo.png')
  }

  return (
      <HeaderView>        

        <View style={styles.shimmerView}>
          <ShimmerPlaceHolder
            style={styles.shimmerAvatar}
            autoRun={true}
            visible={shimmerStatus}
          />           

          <View style={styles.shimmerStatsView}>
            <ShimmerPlaceHolder              
              style={styles.shimmerName}
              autoRun={true}
              visible={shimmerStatus}
            />
            <ShimmerPlaceHolder
              style={styles.shimmerStats}
              autoRun={true}
              visible={shimmerStatus}
            />
          </View>          
        </View>

        <Avatar source={{uri: `https://ubisoft-avatars.akamaized.net/${stats.p_id}/default_146_146.png?`}}/>

        <HeaderStatsView>          
          <TitleView>
            <NameText>{stats.p_name}</NameText>
            <PlatformImage               
              source={stats.p_platform == 'uplay' ? platformImages['uplay'] : stats.p_platform == 'psn' ? platformImages['psn'] :  platformImages['xbl'] } 
            />
          </TitleView>
          
          <StatsView>
            <InfoText>#{stats.p_pvtrank} 
              <GreyText> Global</GreyText></InfoText>
            <InfoText>
              <GreyText>Level</GreyText> {stats.p_level}</InfoText>
            <InfoText><GreyText>KD</GreyText> {stats.kd/100}</InfoText>
          </StatsView>
        </HeaderStatsView>
      </HeaderView>    
  );
}

const styles = StyleSheet.create({
  shimmerView: {
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 30,    
  },

  shimmerAvatar: {    
    alignSelf: 'stretch', marginBottom: 10, height: 30, 
    width: Dimensions.get("window").width * 0.15, 
    height: Dimensions.get("window").width * 0.15, 
    marginRight: 10,
    marginTop: 5,
    zIndex: 5,
  },

  shimmerStatsView: {    
    width: Dimensions.get("window").width * 0.65,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'column',    
    zIndex: 5,
  },

  shimmerName: {
    width: Dimensions.get("window").width * 0.65,    
    height: 30,    
    marginBottom: 5,
    
  },

  shimmerStats: {
    width: Dimensions.get("window").width * 0.65,
    height: 20,    
  }
});