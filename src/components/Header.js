import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Logo from '../assets/images/future-plan-logo.png';
import Menu from '../components/svg/Menu';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <Menu style={styles.menu}></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
    width: 200,
  },
  menu: {
    height: 24,
    width: 24,
  },
});
