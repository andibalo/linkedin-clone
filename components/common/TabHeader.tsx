import { SafeAreaView } from 'react-native-safe-area-context'
import { View, XStack, Avatar, Text } from 'tamagui'
import { MessageSquareMore } from '@tamagui/lucide-icons'
import { Pressable } from 'react-native'
import { useNavigation } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const TabHeader = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <XStack alignItems='center' justifyContent='space-between' gap="$3" py="$2" px="$3" bg="$white1">
                <View>
                    <Avatar circular size="$3">
                        <Avatar.Image
                            accessibilityLabel="Cam"
                            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                        />
                        <Avatar.Fallback backgroundColor="$blue10" />
                    </Avatar>
                </View>
                <Pressable style={{ flex: 1 }} onPress={() => {
                    // @ts-ignore
                    navigation.navigate('Search')
                }}>
                    <View flex={1} bg="#dce6f1" borderRadius="$2" px="$2">
                        <XStack flex={1} alignItems='center' gap="$2">
                            <FontAwesome name="search" size={18} color="black" />
                            <Text color="$gray10">Cari</Text>
                        </XStack>
                    </View>
                </Pressable>
                <View >
                    <Pressable>
                        <MessageSquareMore />
                    </Pressable>
                </View>
            </XStack>
        </SafeAreaView>
    )
}