import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

const Profile = () => {
    const { username, setUsername, setIsLoggedIn } = useContext(AuthContext);
    const router = useRouter();

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("");
        router.replace("/login");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola, {username}</Text>
            <Button title="Cerrar Sesión" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    }
});

export default Profile;
