import React from 'react';

import {Image, Animated, View} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  SwipeablePanel,
  Text,
  Account,
  PerfIcon,
  Header,
} from './style';

import Slider from '../components/slider';

import Block from '../components/block';

import Balance from '../components/balance';

import logoImg from '../../assets/logo.png';

interface Values {
  offset: number;
}

const Dashboard: React.FC = () => {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event<Values>(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandleStateChange(event: any) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY <= -100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? -300 : 0,
        duration: 225,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? -300 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <View>
        <Content
          style={{
            opacity: translateY.interpolate({
              inputRange: [-200, 0],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          }}>
          <Image source={logoImg} />
        </Content>
        <Account
          style={{
            translateY: translateY.interpolate({
              inputRange: [-405, 0],
              outputRange: [-375, 0],
              extrapolate: 'clamp',
            }),
          }}>
          <Text>Bom dia</Text>
          <PerfIcon>
            <Icon name="person" size={32} color="#0e0e0e" />
          </PerfIcon>
        </Account>
      </View>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandleStateChange}>
        <SwipeablePanel
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-650, 0],
                  outputRange: [-600, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Header>
            <Balance />
            <Slider />
          </Header>
          <Block />
        </SwipeablePanel>
      </PanGestureHandler>
    </Container>
  );
};

export default Dashboard;
