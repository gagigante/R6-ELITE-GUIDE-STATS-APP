import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

// YellowBox.ignoreWarnings([
//   'Unrecognized WebSocket'
// ]);

export default function App() {
  return (
    <>
    <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
    <Routes />
    </>
  )
}
