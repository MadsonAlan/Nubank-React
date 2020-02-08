import React from 'react';
import { View } from 'react-native';
import { Container, Top, Logo, Title } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';
//react-native unlink react-native-vector-icons
export default function Header() {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>
                    Madson
                </Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF"></Icon>
        </Container>
    );
}
