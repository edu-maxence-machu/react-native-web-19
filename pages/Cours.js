import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Image, Button, Alert, Text, View } from 'react-native';

export default function Cours() {

  function onPressLearnMore(){
    console.log('')
  }
    {/* La scrollview permet de rajouter un overflow scroll si le contenu dépasse de l'écran */}
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      {/* Style en mode 'classe CSS' */}
      <Text style={styles.h1}>Hello</Text>
      <Text style={styles.h2}>World</Text>
      {/* Appliquer plusieurs styles à un élément */ }
      <Text style={[styles.h3, styles.underline]}>Hello CESI</Text>

      {/* Ne pas oublier d'importer Image en haut ;) */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      {/*
       Pour la fonction onPress du bouton il faut ajouter 
        une fonction dans le code de App.js 
      */}
      <Button
        //onPress={() => Alert.alert('HELLO WORLD')}
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor in turpis sagittis molestie. Phasellus sagittis leo nisl, in maximus purus elementum vel. Vestibulum sodales metus dictum erat fringilla egestas. Nunc ex orci, placerat at posuere quis, hendrerit non libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet massa leo. Aliquam sem ligula, porta in dolor sed, laoreet porttitor sapien. Etiam elit nisl, tempus non libero quis, aliquam rutrum sapien. Cras eu volutpat velit. Integer aliquam tincidunt sagittis. </Text>

      {/* Styliser une View et un texte */}
      <View style={styles.helloParent}>
        <View style={styles.helloContainer}>
          <Text style={styles.helloText}>1</Text>
        </View>

        <View style={styles.helloContainer}>
          <Text style={styles.helloText}>1</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  helloParent: {
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  helloContainer: {
    backgroundColor: 'orange',
    height: 200,
    width: '50%',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  helloText : {
    fontSize: 35,
    fontWeight: 'bold'
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  h1 : {
    fontSize: 50,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  h2: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 6
  },
  h3: {
    fontSize: 30,
    fontWeight: 'normal',
    paddingBottom: 3
  }, 
  underline: {
    textDecorationColor: 'red',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid'
  }
});
