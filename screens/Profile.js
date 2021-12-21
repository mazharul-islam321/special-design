import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Profile() {
    return (
        <View style={styles.ProfileStyle}>
            <View
                style={{
                    borderWidth: 1,
                    borderRadius: 60,
                    borderColor: "blue",
                }}
            >
                <View
                    style={{
                        borderWidth: 1,
                        borderRadius: 60,
                        borderColor: "blue",
                        margin: 2,
                        padding: 2,
                    }}
                >
                    <Image
                        source={require("../assets/images/mamun3.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 60,
                        }}
                    />
                </View>
            </View>
            <Text style={{ fontWeight: "bold" }}>
                Mazharul Islam Mamun{" "}
                <Feather name="edit-2" size={18} color="black" />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ProfileStyle: {
        justifyContent: "flex-end",
        alignItems: "center",
        height: 200,
    },
});
