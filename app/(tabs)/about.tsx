import { Background } from "@react-navigation/elements";
import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>About This App</Text>

            <Text style={styles.description}>
                A React Native mobile app that lets you add fun stickers to your photos! Built with Expo and React Native.
            </Text>
            <Text style={styles.subheading}>Features:</Text>
            <View style={styles.list}>
                <Text style={styles.listItem}>📸 Choose photos from your device's gallery</Text>
                <Text style={styles.listItem}>🎨 Add emoji stickers to your photos</Text>
                <Text style={styles.listItem}>✨ Interact with stickers:</Text>
                <Text style={styles.subListItem}>- Double tap to resize</Text>
                <Text style={styles.subListItem}>- Drag to reposition</Text>
                <Text style={styles.listItem}>💾 Save your edited photos to your device</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    heading: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    description: {
        color: "#ddd",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
        lineHeight: 22,
    },
    subheading: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
        textAlign: "center",
    },
    list: {
        alignSelf: "flex-start",
        paddingHorizontal: 10,
    },
    listItem: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 8,
    },
    subListItem: {
        color: "#bbb",
        fontSize: 15,
        marginLeft: 20,
        marginBottom: 5,
    },
});