import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import BottomBar from "./screens/BottomBar";
import Gift from "./screens/Gift";
import Home from "./screens/Home";
import HomeScreen from "./screens/HomeScreen";
import LiveScreen from "./screens/LiveScreen";
import MainScreen from "./screens/MainScreen";
import People from "./screens/People";
import Store from "./screens/Store";

export default function App() {
    return (
        <View style={styles.container}>
            <NativeRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}>
                        <Route
                            path=""
                            element={<MainScreen></MainScreen>}
                        ></Route>
                        <Route path="gift" element={<Gift></Gift>}></Route>
                        <Route
                            path="people"
                            element={<People></People>}
                        ></Route>
                    </Route>

                    <Route
                        path="/live"
                        element={<LiveScreen></LiveScreen>}
                    ></Route>
                    <Route path="/store" element={<Store></Store>}></Route>
                    <Route
                        path="/home"
                        element={<HomeScreen></HomeScreen>}
                    ></Route>
                </Routes>
                <BottomBar></BottomBar>
            </NativeRouter>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1efef",
    },
});
