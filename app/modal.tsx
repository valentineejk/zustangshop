import { StatusBar } from 'expo-status-bar';
import { Button, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useState } from 'react';
import { storage } from '../store/mmkv';
import { useMMKVString } from 'react-native-mmkv';

export default function ModalScreen() {
  const [name, setName] = useMMKVString('user.userName', storage);


  const updateName = () => {
    storage.set("user.userName", "Superman Girl");
  }
  return (
    <View style={styles.container}>
<Text>Welcome to your app {name}</Text>
<Button  onPress={updateName} title='update'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
