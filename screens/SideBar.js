import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function SideBar() {
    return (
        <View style={{ alignItems: "center" }}>
            <View style={[styles.iconBox, styles.sidebarIcon]}>
                <Ionicons name="logo-windows" size={20} color="black" />
            </View>
            <View style={[styles.iconBox, styles.sidebarIcon]}>
                <FontAwesome name="gift" size={20} color="black" />
            </View>
            <View style={styles.sidebarIcon}>
                <View style={styles.iconBox}>
                    <FontAwesome5 name="user-shield" size={20} color="black" />
                </View>
                <Text style={{ textAlign: "center", marginTop: 4 }}>1907</Text>
            </View>
            <View style={styles.sidebarIcon}>
                <View style={styles.iconBox}>
                    <FontAwesome5 name="user-clock" size={20} color="black" />
                </View>
                <Text style={{ textAlign: "center", marginTop: 4 }}>302</Text>
            </View>
            <View style={styles.sidebarIcon}>
                <View style={styles.iconBox}>
                    <FontAwesome5 name="box-open" size={20} color="black" />
                </View>
                <Text style={{ textAlign: "center", marginTop: 4 }}>13</Text>
            </View>
            <View style={styles.settingIcon}>
                <Ionicons name="settings" size={22} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    iconBox: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        elevation: 4,
    },
    sidebarIcon: { marginTop: 10, marginBottom: 10 },

    settingIcon: {
        marginTop: 25,
        // marginBottom: 35,
        borderRadius: 50,
        elevation: 3,
    },
});
