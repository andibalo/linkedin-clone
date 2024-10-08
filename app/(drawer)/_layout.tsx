import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
    Entypo,
    Ionicons,
} from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { XStack, View, Text, YStack, Image } from "tamagui";

const CustomDrawerContent = (props) => {
    const pathname = usePathname();

    useEffect(() => {
        console.log(pathname);
    }, [pathname]);

    return (
        <DrawerContentScrollView {...props}>
            <View borderBottomWidth={1} borderBottomColor="#ccc" py="$4" px="$5">
                <XStack mb="$3" >
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80" }}
                        style={styles.userImg}
                    />
                </XStack>
                <View mb='$3'>
                    <Text fontWeight="bold" fontSize="$7" mb='$2'>
                        Tifa Lockhart
                    </Text>
                    <Text fontSize="$3" mb='$2'>Software Engineer</Text>
                    <Text fontSize="$3" color="$gray10">Jakarta Indonesia</Text>
                </View>
                <View >
                    <XStack alignItems="center" gap="$2" py="$2" px="$1" bg="#F3F4EF" borderWidth={3} borderStyle="dashed" borderColor="#DADAD8">
                        <Entypo name="plus" size={24} color="#6F707A" />
                        <Text color="#6F707A">
                            Pengalaman
                        </Text>
                    </XStack>
                </View>
            </View>
            <View borderBottomWidth={1} borderBottomColor="#ccc" py="$4" px="$5">
                <YStack gap="$5">
                    <Text fontSize="$3" color="$gray10">
                        <Text fontWeight="bold">74</Text> pengunjung profil
                    </Text>
                    <Text fontSize="$3" color="$gray10">
                        <Text fontWeight="bold">1</Text> tayangan posting
                    </Text>
                </YStack>
            </View>
            <View borderBottomWidth={1} borderBottomColor="#ccc" py="$4" px="$5">
                <Text fontSize="$3" mb="$3">Kelola Halaman</Text>
                <XStack alignItems="center" gap="$2" px="$1.5">
                    <View>
                        <Image
                            source={{
                                uri: 'https://picsum.photos/50/50'
                            }}
                            style={{
                                width: 20,
                                height: 20,
                                objectFit: "cover"
                            }}
                        />
                    </View>
                    <Text fontWeight="bold">
                        MyStartup
                    </Text>
                </XStack>
            </View>
            <View borderBottomWidth={1} borderBottomColor="#ccc" py="$5" px="$5">
                <YStack gap="$4">
                    <Text fontSize="$6" fontWeight="bold" mb="$3">Posting tersimpan</Text>
                    <Text fontSize="$6" fontWeight="bold" mb="$4">Grup</Text>
                </YStack>
            </View>
            <View pt="$4" pb="$2" px="$5">
                <XStack alignItems="center" gap="$2" px="$1.5">
                    <View w={20} h={20} bg="#EDC568" />
                    <Text fontWeight="bold" fontSize={16}>
                        Coba Premium seharga IDR0
                    </Text>
                </XStack>

            </View>
            <View px="$2">
                <DrawerItem
                    icon={({ color, size }) => (
                        <Ionicons
                            name="settings-outline"
                            size={size}
                            color={pathname == "/settings" ? "#fff" : "#000"}
                        />
                    )}
                    label={"Pengaturan"}
                    labelStyle={[
                        styles.navItemLabel,
                        { color: pathname == "/settings" ? "#fff" : "#000" },
                    ]}
                    style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
                    onPress={() => {
                    }}
                />
            </View>

        </DrawerContentScrollView>
    );
};

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
                <Drawer.Screen name="settings" options={{ headerShown: false }} />
            </Drawer>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    navItemLabel: {
        marginLeft: -24,
        fontSize: 16,
    },
    userInfoWrapper: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    userImg: {
        borderRadius: 40,
        width: 80,
        height: 80
    },
    userDetailsWrapper: {
        marginTop: 25,
        marginLeft: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 16,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    }
});