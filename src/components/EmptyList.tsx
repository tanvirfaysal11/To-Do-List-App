import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/empty.png')} style={styles.image} />
      <Text style={styles.text}>No tasks yet! Add a new task to get started.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 160, height: 160, marginBottom: 16 },
  text: { fontSize: 16, color: '#666', textAlign: 'center', paddingHorizontal: 20 },
});
