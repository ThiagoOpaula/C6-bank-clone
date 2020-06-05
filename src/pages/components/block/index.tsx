import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

import {
  Container,
  Title,
  SubText,
  Content,
  Logo,
  Description,
  SubTitle,
  Money,
  SubDescription,
} from './style';

import Icon from 'react-native-vector-icons/MaterialIcons';

import taggy from '../../../assets/taggy.png';

const Block: React.FC = () => {
  const page = StyleSheet.create({
    image: {
      marginLeft: 24,
      marginTop: 20,
    },
  });

  return (
    <>
      <Container>
        <Title>Últimas transações</Title>
        <SubText>Sex, 29 de mai</SubText>
        <Content>
          <Logo>
            <Icon name="compare-arrows" size={34} color="#0e0e0e" />
          </Logo>
          <View>
            <SubTitle>Transferência</SubTitle>
            <Description>Envio de TED transferência</Description>
            <Money>R$ 347,00</Money>
          </View>
        </Content>
        <Content>
          <Logo>
            <Icon name="arrow-downward" size={32} color="#0e0e0e" />
          </Logo>
          <View>
            <SubTitle>Transferência</SubTitle>
            <Description>Recebimento de DOC</Description>
            <Money>R$ 347,00</Money>
          </View>
        </Content>
      </Container>

      <Container>
        <Title>Taggy</Title>
        <Image style={page.image} source={taggy} />
        <SubDescription> Fila de pedágio nunca mais</SubDescription>
      </Container>
    </>
  );
};

export default Block;
