import React from 'react';
import {StyleSheet, Text, View,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
export default function Header({title}) {
    const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable 
        style={styles.back}
        onPress={()=>navigation.goBack()}
        >
        <Icon name="arrow-back-outline" size={24} color="white" />
      </Pressable>
      <View style={styles.headerTitle}>
        <Text style={styles.textHeader} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
      </View>
      <View style={[styles.back, {backgroundColor: 'transparent'}]}></View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    // marginBottom: 20,
    backgroundColor: '#09bff2',
  },
  back: {
    width: 32,
    height: 32,
    backgroundColor: 'gray',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
