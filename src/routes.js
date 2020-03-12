import React from 'react';
import {Platform} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './pages/Login';
import LoginResults from './pages/LoginResults';
import Main from './pages/Main';
import Seasons from './pages/Seasons';
import Operators from './pages/Operators';
import Leaderboard from './pages/Leaderboard';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const MainTabNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon
            name="3d-rotation"
            size={20}
            color={focused ? '#0edee8' : '#ddd'}
          />
        ),
        tabBarLabel: 'Stats',
      }),
    },

    Seasons: {
      screen: Seasons,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon
            name="3d-rotation"
            size={20}
            color={focused ? '#0edee8' : '#ddd'}
          />
        ),
        tabBarLabel: 'Seasonal',
      }),
    },
    Operators: {
      screen: Operators,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon
            name="3d-rotation"
            size={20}
            color={focused ? '#0edee8' : '#ddd'}
          />
        ),
        tabBarLabel: 'Operators',
      }),
    },
    Leaderboard: {
      screen: Leaderboard,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon
            name="3d-rotation"
            size={20}
            color={focused ? '#0edee8' : '#ddd'}
          />
        ),
        tabBarLabel: 'Leaderboard',
      }),
    },
  },
  {
    initialRouteName: 'Main',
    tabBarOptions: {
      activeTintColor: '#0edee8',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#161f2e',
        borderBottomWidth: 0,
      },
    },
  },
);

const Routes = createAnimatedSwitchNavigator(
  {
    Login,
    LoginResults,
    MainTabNavigator,
  },
  {
    transition: (
      <Transition.Together>
        {/* <Transition.Out
                type="fade"
                durationMs={300}
                interpolation="linear"
                /> */}
        <Transition.In type="fade" durationMs={400} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(Routes);
