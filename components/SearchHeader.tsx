import { SafeAreaView } from 'react-native-safe-area-context'
import { View, XStack } from 'tamagui'
import { Pressable, TextInput } from 'react-native'
import { useNavigation } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const SearchHeader = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <XStack alignItems='center' justifyContent='space-between' gap="$3" py="$2" px="$3" bg="$white1">
                <Pressable onPress={() => {
                    navigation.goBack()
                }}>
                    <Ionicons name="arrow-back" size={30} color="gray" />
                </Pressable>
                <View flex={1} bg="#dce6f1" borderRadius="$2" px="$2" py="$1.5">
                    <XStack alignItems='center' justifyContent="space-between" >
                        <View flex={1}>
                            <TextInput placeholder="Cari" />
                        </View>
                        <XStack justifyContent="flex-end">
                            <MaterialIcons name="qr-code-scanner" size={24} color="black" />
                        </XStack>
                    </XStack>
                </View>
            </XStack>
        </SafeAreaView>
    )
}