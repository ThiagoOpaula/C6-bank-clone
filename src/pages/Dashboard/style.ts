import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #0e0e0e;
  justify-content: center;
  align-items: center;
`;

export const Content = styled(Animated.View)`
  background: #0e0e0e;
  bottom: 300%;
`;

export const Account = styled(Animated.View)`
  flex-direction: row;
  bottom: 26%;
`;

export const Text = styled.Text`
  color: #fcfcfc;
  background: #0e0e0e;
  font-size: 36px;
  right: 170%;
`;

export const SwipeablePanel = styled(Animated.View)`
  z-index: 5;
  top: 42%;
  height: 1000px;
  width: 100%;
  background: #f5f5f5;
  position: absolute;
  border-radius: 30px;
`;

export const PerfIcon = styled.View`
  background: #f5f5f5;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  left: 180%;
`;

export const Header = styled.View`
  padding-top: 20px;
  background: #fbfbfb;
  padding-left: 10px;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: 250px;
`;
