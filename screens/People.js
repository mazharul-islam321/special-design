import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    Image,
    ScrollView,
    Button,
    Alert,
} from "react-native";

export default function People() {
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
        {
            id: 6,
            image: "https://i.ibb.co/q5hHwZG/https-specials-images-forbesimg-com-imageserve-61266a795734f07820554556-Google-s-Wing-drone-with-a-p.jpg",
        },
        {
            id: 7,
            image: "https://i.ibb.co/KLX8NJ6/flytrex-e1537031618954.png",
        },
        {
            id: 8,
            image: "https://i.ibb.co/THpFmrN/02u-Lq-IJJd-SWNNArdh0nw-Qo-J-6-1569482670-fit-lim-size-1050x591.jpg",
        },
        {
            id: 9,
            image: "https://i.ibb.co/tbx5HJs/k7vx5-K6i-SESPEQapn-Yew-XZ.jpg",
        },
        {
            id: 10,
            image: "https://i.ibb.co/q5hHwZG/https-specials-images-forbesimg-com-imageserve-61266a795734f07820554556-Google-s-Wing-drone-with-a-p.jpg",
        },
        {
            id: 11,
            image: "https://i.ibb.co/KLX8NJ6/flytrex-e1537031618954.png",
        },
        {
            id: 12,
            image: "https://i.ibb.co/THpFmrN/02u-Lq-IJJd-SWNNArdh0nw-Qo-J-6-1569482670-fit-lim-size-1050x591.jpg",
        },
    ];

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.inputFieldContainer}>
                    <TextInput
                        placeholder="pesquiser"
                        style={styles.inputField}
                    ></TextInput>
                </View>
                <View style={styles.headerText}>
                    <Text>Minha Wishlist Minha</Text>
                    <View style={{ width: 50, height: 50, borderRadius: 50 }}>
                        <Image
                            source={{
                                uri: "https://i.ibb.co/tbx5HJs/k7vx5-K6i-SESPEQapn-Yew-XZ.jpg",
                            }}
                            style={{ width: 50, height: 50, borderRadius: 50 }}
                        />
                    </View>
                </View>
            </View>
            <View style={{ paddingTop: 60, paddingLeft: 8 }}>
                <FlatList
                    numColumns={3}
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
                            <Text>abalimes</Text>
                            <Text>ana ligia dfg</Text>
                            <View
                                style={{
                                    borderRadius: 12,
                                    margin: 5,
                                }}
                            >
                                <Button
                                    onPress={() =>
                                        Alert.alert("This is remove button")
                                    }
                                    title="remove"
                                    color="#e7e5e9"
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
        marginTop: 90,
        flexDirection: "row",
    },
    inputField: {
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 30,
        borderWidth: 2,
    },
    headerText: {
        marginTop: 30,
        flexDirection: "row",
        marginLeft: 30,
    },
    forOuterView: {
        margin: 5,
        padding: 3,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 20,
    },
    forImage: {
        width: "100%",
        height: 120,
        borderRadius: 20,
    },
});
