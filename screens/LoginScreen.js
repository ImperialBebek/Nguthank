import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';
import InputField from '../components/inputs/InputField';
import PrimaryButton from '../components/buttons/PrimaryButton';

const LoginScreen = () => {
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Email:', email);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Illu_login.png')}
                style={{ width: '100%', height: '60%',}}
            />
            <Text style={styles.title}>Boleh NguThank.</Text>
            <Text style={styles.subtitle}>Asal Dibayar.</Text>
            <InputField
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
            />
            <PrimaryButton onPress={handleLogin}>
                <Text style={styles.loginText}>Masuk ke aplikasi</Text>
            </PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        backgroundColor: '#F9F7F3',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    loginButton: {
        backgroundColor: '#C19A6B',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
        fontFamily: 'PTSerif-Bold'
    },  
    loginText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
        fontFamily: 'PTSerif'
    },
      subtitle: {
        fontSize: 24,
        color: '#000000',
        marginBottom: 32,
    },
});

export default LoginScreen;