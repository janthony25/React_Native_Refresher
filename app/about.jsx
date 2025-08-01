import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/colors'

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  console.log(colorScheme)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is About Page</Text>

      <Link href="/" style={styles.link}>Home Page</Link>
    </View>
  )
}

export default About

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