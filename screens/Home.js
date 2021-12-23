import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
// import BottomBar from "./BottomBar";
import MainScreen from "./MainScreen";
import Profile from "./Profile";
import SideBar from "./SideBar";

export default function Home() {
    return (
        <View>
            <Profile></Profile>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 5,
                    paddingBottom: 70,
                    width: "100%",
                }}
            >
                <View
                    style={{
                        width: "22%",
                        // backgroundColor: "red",
                    }}
                >
                    <SideBar></SideBar>
                </View>
                <ScrollView
                    style={{
                        width: "78%",
                        height: 500,
                        // backgroundColor: "green",
                    }}
                >
                    <MainScreen></MainScreen>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
