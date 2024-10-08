import { SafeAreaView } from 'react-native-safe-area-context'
import { View, XStack, Avatar, Input } from 'tamagui'
import { MessageSquareMore } from '@tamagui/lucide-icons'
import { Pressable } from 'react-native'

export const TabHeader = () => {

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
                <View flex={1} >
                    <Input size="$3" borderWidth={2} />
                </View>
                <View >
                    <Pressable>
                        <MessageSquareMore />
                    </Pressable>
                </View>
            </XStack>
        </SafeAreaView>
    )
}