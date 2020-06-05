import React from 'react';

import {Image} from 'react-native';

import {Container, ContentHeader, Text, ContentFooter, Money} from './style';

import Icon from 'react-native-vector-icons/MaterialIcons';

import flag from '../../../assets/brazilflag.png';

const Balance: React.FC = () => {
  return (
    <Container>
      <ContentHeader>
        <Image source={flag} />
        <Text>Saldo</Text>
      </ContentHeader>
      <ContentFooter>
        <Money>R$</Money>
        <Icon name="more-horiz" size={32} color="#0e0e0e" />
        <Icon name="more-horiz" size={32} color="#0e0e0e" />
      </ContentFooter>
    </Container>
  );
};

export default Balance;
