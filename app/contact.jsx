import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Contact Page</Text>
      <Text>Just a test page for now</Text>

      <Link href="/" style={styles.link}>Home Page</Link>
    </View>
  )
}

export default Contact

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
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginVertical: 20
    }
})