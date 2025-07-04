    import React from 'react';
    import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

    export default function App() {
      return (
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.title}>Let's get you</Text>
              <Image
                source={require('./assets/dating-app.png')} // <-- PERUBAHAN DI SINI
                style={styles.illustration}
              />
              <Text style={styles.subtitle}>
                Let's talk with your friends and family wherever and whenever
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => alert('Log In Pressed!')}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.phoneButton]} onPress={() => alert('Continue with phone Pressed!')}>
                <Text style={styles.buttonText}>Continue with phone</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      );
    }

    const styles = StyleSheet.create({
      safeArea: {
        flex: 1,
        backgroundColor: '#fff',
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingHorizontal: 20,
        paddingVertical: 40,
      },
      content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 40,
      },
      illustration: {
        width: 300,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 40,
      },
      subtitle: {
        fontSize: 18,
        color: '#6c6c6c',
        textAlign: 'center',
        paddingHorizontal: 20,
      },
      buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
      },
      button: {
        backgroundColor: '#1c1c1e',
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 15,
      },
      phoneButton: {
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
      },
    });
    