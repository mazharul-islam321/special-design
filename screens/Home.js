import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Profile from "./Profile";

export default function Home() {
    return (
        <View>
            <Profile></Profile>
            <Text>this is home screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
