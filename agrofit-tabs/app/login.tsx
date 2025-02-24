import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from "expo-router";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button, TextInput } from 'react-native';

//Login
export default function LoginScreen() {
  const { setIsLoggedIn, username, setUsername } = useContext(AuthContext);
  const router = useRouter();
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log(username);
    router.navigate('/(tabs)');
  };
    return (
      <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText style={{ fontSize: 24, fontWeight: 'bold' }}>Agrofit</ThemedText>
      <ThemedText style={{ fontSize: 16, color: 'gray' }}>Usuario</ThemedText>
      <TextInput 
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, color: 'black', backgroundColor: 'white', paddingHorizontal: 10 }}
        value={username}
        onChangeText={setUsername}
        placeholder="Usuario"
        placeholderTextColor="gray"
      />
      <ThemedText style={{ fontSize: 16, color: 'gray' }}>Contraseña</ThemedText>
      <TextInput 
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, color: 'black', backgroundColor: 'white', paddingHorizontal: 10, marginTop: 10 }}
        secureTextEntry
        placeholder="Contraseña"
        placeholderTextColor="gray"
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
      </ThemedView>
    );
}
