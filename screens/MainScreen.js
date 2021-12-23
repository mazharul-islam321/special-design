import React from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function MainScreen() {
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
            image: "https://i.ibb.co/vLt5Z3T/Autel-EVO-II-drone.jpg",
        },
        {
            id: 7,
            image: "https://i.ibb.co/HrdMft8/20210306-103032.jpg",
        },
        {
            id: 8,
            image: "https://i.ibb.co/BGv0PzG/46aa0a6292788f5febd7065e16374fdc2a-30-drone-lede-2x-rsocial-w600.jpg",
        },
        {
            id: 9,
            image: "https://i.ibb.co/Zc91FrH/videoblocks-interchange-highway-road-network-aerial-landscape-road-crossing-aerial-view-road-junctio.png",
        },
        {
            id: 10,
            image: "https://i.ibb.co/wy9b891/DJI-0235-1.jpg",
        },
        {
            id: 11,
            image: "https://i.ibb.co/6JBR70K/photo-1506947411487-a56738267384-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-Nnx8-ZHJvbm-Vzf-GVuf-DB8f-DB8f.jpg",
        },
        {
            id: 12,
            image: "https://i.ibb.co/6JBR70K/photo-1506947411487-a56738267384-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-Nnx8-ZHJvbm-Vzf-GVuf-DB8f-DB8f.jpg",
        },
    ];
    return (
        <>
            <View style={{ paddingTop: 5 }}>
                <FlatList
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    data={images}
                    renderItem={({ item, index }) => (
                        <ScrollView>
                            {index === 0 ? (
                                <View style={styles.forEmptyBox}>
                                    <Text style={{ fontSize: 20 }}>+</Text>
                                </View>
                            ) : (
                                <Image
                                    source={{ uri: `${item?.image}` }}
                                    style={styles.forImage}
                                />
                            )}
                        </ScrollView>
                    )}
                    keyExtractor={(item, index) => `${item?.id}` + index}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    forEmptyBox: {
        padding: 1,
        margin: 5,
        width: 90,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 12,
    },
    forImage: {
        width: 88,
        height: 150,
        borderRadius: 12,
        margin: 5,
    },
});
