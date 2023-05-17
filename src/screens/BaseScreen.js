import { StyleSheet, View } from "react-native";
import Navbar from "../components/home/Navbar";

const BaseScreen = ({ children }) => {
    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3B5323",
    },
    content: {
        flex: 1,
        padding: 1,
    },
})

export default BaseScreen;
