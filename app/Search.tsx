import { Text, View, XStack, YStack, Avatar, ScrollView, Image } from 'tamagui'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SearchScreen() {
    return (
        <ScrollView flex={1} bg="#e9e5df">
            <View bg="white" py="$3" mb="$2">
                <YStack gap="$3">
                    <XStack px="$3" alignItems='center' justifyContent='space-between'>
                        <Text fontWeight="bold">
                            Terbaru
                        </Text>
                        <Text>
                            Lihat Semua
                        </Text>
                    </XStack>
                    <XStack mb="$3" px="$3" alignItems='center' justifyContent='space-between'>
                        <YStack alignItems='center' gap="$1">
                            <Avatar circular size="$3">
                                <Avatar.Image
                                    accessibilityLabel="Cam"
                                    src="https://randomuser.me/api/portraits/women/75.jpg"
                                />
                                <Avatar.Fallback backgroundColor="$blue10" />
                            </Avatar>
                            <Text fontSize={"$2"}>Ferry Lay</Text>
                        </YStack>
                        <YStack alignItems='center' gap="$1">
                            <Avatar circular size="$3">
                                <Avatar.Image
                                    accessibilityLabel="Cam"
                                    src="https://randomuser.me/api/portraits/women/76.jpg"
                                />
                                <Avatar.Fallback backgroundColor="$blue10" />
                            </Avatar>
                            <Text fontSize={"$2"}>Zhu Yuan</Text>
                        </YStack>
                        <YStack alignItems='center' gap="$1">
                            <Avatar circular size="$3">
                                <Avatar.Image
                                    accessibilityLabel="Cam"
                                    src="https://randomuser.me/api/portraits/men/76.jpg"
                                />
                                <Avatar.Fallback backgroundColor="$blue10" />
                            </Avatar>
                            <Text fontSize={"$2"}>Cold Palmer</Text>
                        </YStack>
                        <YStack alignItems='center' gap="$1">
                            <Avatar circular size="$3">
                                <Avatar.Image
                                    accessibilityLabel="Cam"
                                    src="https://randomuser.me/api/portraits/women/77.jpg"
                                />
                                <Avatar.Fallback backgroundColor="$blue10" />
                            </Avatar>
                            <Text fontSize={"$2"}>El Kecepatan</Text>
                        </YStack>
                        <YStack alignItems='center' gap="$1">
                            <Avatar circular size="$3">
                                <Avatar.Image
                                    accessibilityLabel="Cam"
                                    src="https://randomuser.me/api/portraits/men/78.jpg"
                                />
                                <Avatar.Fallback backgroundColor="$blue10" />
                            </Avatar>
                            <Text fontSize={"$2"}>El Gasing</Text>
                        </YStack>
                    </XStack>
                    <YStack px="$5" gap="$4" mb="$2">
                        <XStack alignItems='center' gap="$3">
                            <FontAwesome name="clock-o" size={14} color="black" />
                            <Text>
                                abi wicaksono
                            </Text>
                        </XStack>
                        <XStack alignItems='center' gap="$3">
                            <FontAwesome name="clock-o" size={14} color="black" />
                            <Text>
                                mr beat
                            </Text>
                        </XStack>
                        <XStack alignItems='center' gap="$3">
                            <FontAwesome name="clock-o" size={14} color="black" />
                            <Text>
                                punipun
                            </Text>
                        </XStack>
                    </YStack>
                    <View>
                        <View px="$3" mb="$2">
                            <Text>Coba cari</Text>
                        </View>
                        <YStack px="$5" gap="$4">
                            <XStack alignItems='center' gap="$3">
                                <FontAwesome name="search" size={14} color="black" />
                                <Text>
                                    hsbc
                                </Text>
                            </XStack>
                            <XStack alignItems='center' gap="$3">
                                <FontAwesome name="search" size={14} color="black" />
                                <Text>
                                    pwc
                                </Text>
                            </XStack>
                            <XStack alignItems='center' gap="$3">
                                <FontAwesome name="search" size={14} color="black" />
                                <Text>
                                    ferry lay inc
                                </Text>
                            </XStack>
                        </YStack>
                    </View>
                </YStack>
            </View>
            <View bg="white" p="$3" >
                <Text fontWeight="bold">Berita dan kunjungan hari ini</Text>
                <YStack gap="$1">
                    <View>
                        <XStack height={100} alignItems="center" justifyContent="space-between" gap="$5">
                            <View flex={0.8}>
                                <Text fontWeight="bold" fontSize="$5">
                                    Hurricane Milton heads for Tampa
                                </Text>
                                <Text numberOfLines={2} color="$gray10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Text>
                            </View>
                            <View flex={0.2} bg="red" >
                                <Image
                                    source={{
                                        uri: 'https://picsum.photos/200/300'
                                    }}
                                    style={{
                                        width: '100%',
                                        height: 60,
                                        objectFit: "cover"
                                    }}
                                />
                            </View>
                        </XStack>
                        <View height={1} bg="$gray8" />
                    </View>
                    <View>
                        <XStack height={100} alignItems="center" justifyContent="space-between" gap="$5">
                            <View flex={0.8}>
                                <Text fontWeight="bold" fontSize="$5">
                                    Hurricane Milton heads for Tampa
                                </Text>
                                <Text numberOfLines={2} color="$gray10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Text>
                            </View>
                            <View flex={0.2} bg="red" >
                                <Image
                                    source={{
                                        uri: 'https://picsum.photos/200/300'
                                    }}
                                    style={{
                                        width: '100%',
                                        height: 60,
                                        objectFit: "cover"
                                    }}
                                />
                            </View>
                        </XStack>
                        <View height={1} bg="$gray8" />
                    </View>
                    <View>
                        <XStack height={100} alignItems="center" justifyContent="space-between" gap="$5">
                            <View flex={0.8}>
                                <Text fontWeight="bold" fontSize="$5">
                                    Hurricane Milton heads for Tampa
                                </Text>
                                <Text numberOfLines={2} color="$gray10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Text>
                            </View>
                            <View flex={0.2} bg="red" >
                                <Image
                                    source={{
                                        uri: 'https://picsum.photos/200/300'
                                    }}
                                    style={{
                                        width: '100%',
                                        height: 60,
                                        objectFit: "cover"
                                    }}
                                />
                            </View>
                        </XStack>
                        <View height={1} bg="$gray8" />
                    </View>
                    <View>
                        <XStack height={100} alignItems="center" justifyContent="space-between" gap="$5">
                            <View flex={0.8}>
                                <Text fontWeight="bold" fontSize="$5">
                                    Hurricane Milton heads for Tampa
                                </Text>
                                <Text numberOfLines={2} color="$gray10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Text>
                            </View>
                            <View flex={0.2} bg="red" >
                                <Image
                                    source={{
                                        uri: 'https://picsum.photos/200/300'
                                    }}
                                    style={{
                                        width: '100%',
                                        height: 60,
                                        objectFit: "cover"
                                    }}
                                />
                            </View>
                        </XStack>
                        <View height={1} bg="$gray8" />
                    </View>
                    <View>
                        <XStack height={100} alignItems="center" justifyContent="space-between" gap="$5">
                            <View flex={0.8}>
                                <Text fontWeight="bold" fontSize="$5">
                                    Hurricane Milton heads for Tampa
                                </Text>
                                <Text numberOfLines={2} color="$gray10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Text>
                            </View>
                            <View flex={0.2} bg="red" >
                                <Image
                                    source={{
                                        uri: 'https://picsum.photos/200/300'
                                    }}
                                    style={{
                                        width: '100%',
                                        height: 60,
                                        objectFit: "cover"
                                    }}
                                />
                            </View>
                        </XStack>
                        <View height={1} bg="$gray8" />
                    </View>
                </YStack>
            </View>
        </ScrollView>
    )
}
