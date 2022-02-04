import React, { ReactHTMLElement, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export interface NameEntity {
  id?: number,
  name: string
}

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 20,
    flexDirection: 'column',
    backgroundColor: '#fff',
    fontSize: 30
  },
  header: {
    fontSize: 22,
    fontWeight: "bold"
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10
  },
  button: {
    marginBottom: 10
  }
});

export default App;