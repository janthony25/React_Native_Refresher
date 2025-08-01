import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/colors';
import { StatusBar } from 'react-native-web';

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
    <StatusBar value="auto" />
         <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" options={{ title: 'Home'}} />
            <Stack.Screen name='about' options={{ title: 'About' }} />
            <Stack.Screen name='contact' options={{ title: 'Contact'}} />
        </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})