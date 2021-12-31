import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    Image,
    ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Gift() {
    const images = [
        {
            id: 1,
            image: "https://i.ibb.co/q5hHwZG/https-specials-images-forbesimg-com-imageserve-61266a795734f07820554556-Google-s-Wing-drone-with-a-p.jpg",
        },
        {
            id: 2,
            image: "https://i.ibb.co/KLX8NJ6/flytrex-e1537031618954.png",
        },
        {
            id: 3,
            image: "https://i.ibb.co/THpFmrN/02u-Lq-IJJd-SWNNArdh0nw-Qo-J-6-1569482670-fit-lim-size-1050x591.jpg",
        },
        {
            id: 4,
            image: "https://i.ibb.co/tbx5HJs/k7vx5-K6i-SESPEQapn-Yew-XZ.jpg",
        },
        {
            id: 5,
            image: "https://i.ibb.co/2MdLskf/DJI-Mavic-2-Zoom-Drone-Camera-3.jpg",
        },
    ];
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.inputFieldContainer}>
                    <TextInput
                        placeholder="pesquise aqui"
                        style={styles.inputField}
                    ></TextInput>
                    <MaterialCommunityIcons
                        name="air-filter"
                        size={24}
                        color="black"
                        style={styles.filter}
                    />
                </View>
                <Text style={styles.headerText}>Minha Wishlist</Text>
            </View>
            <View style={{ paddingTop: 70, paddingLeft: 8, paddingRight: 8 }}>
                <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={images}
                    renderItem={({ item, index }) => (
                        <ScrollView>
                            <View style={styles.forOuterView}>
                                <Image
                                    source={{ uri: `${item?.image}` }}
                                    style={styles.forImage}
                                />
                            </View>
                        </ScrollView>
                    )}
                    keyExtractor={(item, index) => `${item?.id}` + index}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    inputFieldContainer: {
        marginTop: 70,
        flexDirection: "row",
    },
    inputField: {
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 12,
        borderWidth: 2,
    },
    filter: {
        marginLeft: 10,
        paddingTop: 3,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 15,
        borderWidth: 2,
    },
    headerText: {
        marginTop: 60,
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 20,
    },
    forOuterView: {
        margin: 7,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 20,
    },
    forImage: {
        width: 100,
        height: 170,
        borderRadius: 20,
        margin: 5,
    },
});
