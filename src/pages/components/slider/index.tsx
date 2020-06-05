import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {StyleSheet} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

import {Container, TabItem, TabText, TabIcon} from './style';

const Slider: React.FC = () => {
  const styles = StyleSheet.create({
    contentContainer: {
      paddingRight: 0,
    },
  });

  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TabItem>
          <Icon name="receipt" size={27} color="#0e0e0e" />
          <TabText>VER EXTRATO</TabText>
        </TabItem>

        <TabItem>
          <Icon name="credit-card" size={27} color="#0e0e0e" />
          <TabText>CARTÃO</TabText>
        </TabItem>

        <TabItem>
          <Icon name="payment" size={27} color="#0e0e0e" />
          <TabText>PAGAR</TabText>
        </TabItem>

        <TabItem>
          <TabIcon>
            <Icon name="smartphone" size={27} color="#0e0e0e" />
            <Icon name="arrow-back" size={22} color="#0e0e0e" />
          </TabIcon>
          <TabText>RECARGA</TabText>
        </TabItem>

        <TabItem>
          <TabIcon>
            <Icon name="attach-money" size={27} color="#0e0e0e" />
            <Icon name="arrow-back" size={22} color="#0e0e0e" />
          </TabIcon>
          <TabText>DEPOSITAR</TabText>
        </TabItem>

        <TabItem>
          <TabIcon>
            <Icon name="attach-money" size={27} color="#0e0e0e" />
            <Icon name="arrow-forward" size={22} color="#0e0e0e" />
          </TabIcon>
          <TabText>TRANSFERIR</TabText>
        </TabItem>

        <TabItem>
          <Icon name="account-balance-wallet" size={27} color="#0e0e0e" />
          <TabText>TRAZER SALARIO</TabText>
        </TabItem>

        <TabItem>
          <TabIcon>
            <Icon name="smartphone" size={27} color="#0e0e0e" />
            <Icon name="arrow-forward" size={22} color="#0e0e0e" />
          </TabIcon>
          <TabText>C6KICK</TabText>
        </TabItem>

        <TabItem>
          <Icon name="redeem" size={27} color="#0e0e0e" />
          <TabText>ÁTOMOS</TabText>
        </TabItem>

        <TabItem>
          <Icon name="headset-mic" size={27} color="#0e0e0e" />
          <TabText>Chat</TabText>
        </TabItem>
      </ScrollView>
    </Container>
  );
};

export default Slider;
