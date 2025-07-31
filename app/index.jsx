import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import logo from '../assets/img/refresh_light.png'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.logo} />
      <Text style={[styles.title, {textDecorationLine: 'underline'}]}>Welcome Again!</Text>
      <Text style={{ marginTop: 10, color:  'blue'}}>Reading list app</Text>

      <View style={styles.card}>
        <Text>Hello, this is a card.</Text>
      </View>

      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)',
        marginVertical: 50
    },
    logo: {
        height: 80,
        width: 80
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    }
})