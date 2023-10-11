import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Navigate to HomeScreen after login
        navigation.navigate('Goals');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Halas Center</Text>
            <Image 
                style={styles.imagePlaceholder}
                source={{uri: 'https://via.placeholder.com/100'}}  // Placeholder image URL, replace with your logo
            />
            <TextInput 
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput 
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginButton}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF'  // Background color matching the mockup
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    imagePlaceholder: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
        backgroundColor: '#F4F4F4'  // Light grey background for input fields
    },
    loginButton: {
        fontSize: 18,
        color: '#007BFF'  // Button color
    }
});

export default LoginScreen;
