import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { theme } from '../../config';
import { Body1, Body1Bold, Caption } from '../../styles';
import Icon from '../Icon';
import { Entypo } from '@expo/vector-icons';

function UserInfoBar1() {
  return (
      <View style={styles.container}>
          <Image style={styles.image} source={require('../../assets/gitDp.jpg')} />
          <View style-={styles.detailsContainer}>
              <View style={styles.text}>
                  <Body1>Community</Body1>
                  <Entypo name="dot-single" size={16} />
                  <Body1Bold>PTSD</Body1Bold>
              </View>
              <View style={styles.text}>
                  <Caption>Posted By Ajwad Akil</Caption>
                  <Entypo name="dot-single" size={16} />
                  <Caption color={'blue'}>8h</Caption>
              </View>
          </View>
          <View style={styles.icon}>
              <Icon name="dots-horizontal"/>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.secondary,
        flexDirection : 'row',
        height: 64,
        padding : 8,
        width: '100%',
    },
    detailsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding : 8,
    },
    icon: {
        marginLeft: 'auto',
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 24,
    },
    text: {
        backgroundColor: theme.white,
        flex: 1,
        flexDirection : 'row',
        marginLeft: 8,
    },

});

export default UserInfoBar1;