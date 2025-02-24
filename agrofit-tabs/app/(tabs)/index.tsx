import { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const HomePage = () => {
    const router = useRouter();
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        if (isLoggedIn === null) return; // Esperar a que el contexto esté definido
        if (!isLoggedIn) {
            setTimeout(() => {
                router.replace('/login'); // Usar `replace` en vez de `navigate`
            }, 0);
        }
    }, [isLoggedIn, router]);

    if (isLoggedIn === null) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeMessage}>Bienvenido a AgroFIT</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    welcomeMessage: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default HomePage;
