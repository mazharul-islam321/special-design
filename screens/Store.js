import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Store() {
    return (
        <View style={styles.container}>
            <Text>this is store screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
    },
});
