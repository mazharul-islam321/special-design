import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LiveScreen() {
    return (
        <View style={styles.container}>
            <Text>this is live screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
});
