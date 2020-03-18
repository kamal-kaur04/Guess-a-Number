import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style= {styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    width: '100%' ,
    height: 90 ,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent:'center'
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    
  }
});

export default Header;
