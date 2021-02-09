import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';
 
export default function Demo() {
  return (
    <View style={styles.container}>
      <Image
          style={styles.image}
        source={{uri: 'https://via.placeholder.com/500.png',}}
      />
        <View style={styles.container2}>
            <View style={styles.flex}>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
            </View>
      <Text style={styles.title}>Lorem ipsum dolor sit amet consecteur adipiscing elit</Text>
      <Text style={styles.auteur}>by Sarah Town</Text>
            <View style={styles.buttonsBloc}>
                <Image
                    style={styles.icon}
                    source={{uri:'https://www.flaticon.com/download/icon/633991?icon_id=633991&author=190&team=190&keyword=Like&pack=633795&style=Filled&style_id=863&format=png&color=%23000000&colored=1&size=32&selection=1&premium=0&token=03AGdBq26jLi2LBXKuwdNXsK4JZjop2HnmJCE2ITlwUFxBlxygayMhLZX-PuQTh8qHF0jyTzyBdb47kOYgbYn8k3rgZaepR',}}
                />
            <Text style={styles.button}>
 
            Like</Text>
            <Text style={styles.button}>Comment</Text>
            </View>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a libero leo. Etiam vestibulum ut diam sit amet aliquam. Maecenas suscipit fringilla dui. Sed pellentesque posuere posuere. Nunc lacinia eget nibh a rhoncus. Quisque semper risus eu felis varius molestie.</Text>
      <Text style={styles.text}>Nam rutrum tortor vitae mauris efficitur efficitur. Maecenas urna dolor, egestas id convallis et, mattis commodo quam. Donec rutrum, dui nec volutpat placerat, mi turpis porttitor velit, in pellentesque magna urna ut sapien.</Text>
        <Text style={styles.text}>Cras tortor sapien, fermentum vitae dui nec, consequat aliquet sapien. Nam in bibendum mauris. </Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
      color: '#333333',
    height:'100%',
  },
 
  image: {
    width:'100%',
    height: '40%',
  },
 
  title: {
    fontSize:18,
    color: '#333',
      marginBottom: 16,
  },
 
  auteur: {
    color: '#a2a2a2',
  },
 
  container2: {
    marginHorizontal:20,
  },
 
  h1: {
    fontSize:16,
    textAlign: 'center',
    borderBottomWidth:2,
    paddingVertical:16,
    marginTop:16,
  },
 
  h2:  {
    fontSize:16,
    borderBottomWidth:2,
    padding:10,
  },
 
    text: {
      marginBottom:10,
    },
 
    buttonsBloc: {
      display:'flex',
        flexDirection: 'row',
       padding: 16,
    },
 
    button: {
      paddingVertical: 5,
        paddingHorizontal:7,
        borderWidth:1,
        borderColor: '#818181',
        borderRadius:5,
        marginRight:10,
    },
 
    flex: {
      display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
 
    dot: {
        backgroundColor: '#d8d8d8',
        width: 8,
        height: 8,
        borderRadius: 12,
        marginHorizontal: 4,
        marginVertical:8,
    },
 
    icon: {
      width:20,
        height:20,
    }
});
 
