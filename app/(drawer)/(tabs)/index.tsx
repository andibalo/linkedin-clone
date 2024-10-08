import { XStack, View, Text, Avatar, Image, YStack, ScrollView } from 'tamagui'
import Entypo from '@expo/vector-icons/Entypo';
import ReadMore from '@fawazahmed/react-native-read-more';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen() {
  return (
    <ScrollView f={1} bg="#e9e5df">
      <View mb="$2" bg="$white1" >
        <XStack alignItems='center' justifyContent='space-between' gap="$3" mb="$3" pt="$2" px="$3">
          <View>
            <Avatar circular size="$5">
              <Avatar.Image
                accessibilityLabel="Cam"
                src="https://randomuser.me/api/portraits/men/75.jpg"
              />
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
          </View>
          <View flex={1} >
            <XStack alignItems='center' justifyContent='space-between'>
              <XStack alignItems='center' gap="$1.5">
                <Text fontWeight="bold">
                  Bocchi The Rock
                </Text>
                <View h={3} w={3} borderRadius={999} bg="black" />
                <Text color="$gray10">
                  Ke-1
                </Text>
              </XStack>
              <XStack alignItems='center' justifyContent='space-between' gap="$5">
                <Entypo name="dots-three-vertical" size={12} color="black" />
                <Entypo name="cross" size={20} color="black" />
              </XStack>
            </XStack>
            <Text fontSize="$2" color="$gray10">
              Customer Service
            </Text>
            <XStack alignItems='center' gap="$1.5">
              <Text fontSize="$2" color="$gray10">
                8mnt
              </Text>
              <View h={3} w={3} borderRadius={999} bg="black" />
              <Entypo name="globe" size={10} color="black" />
            </XStack>
          </View>
        </XStack>
        <View px="$3" mb="$4">
          <ReadMore numberOfLines={3} seeMoreText='selengkapnya' expandOnly seeMoreStyle={{ color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </ReadMore>
        </View>
        <View px="$3" mb="$2">
          <Text>
            Lihat Terjemahan
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://picsum.photos/500/300',
              height: 300,
            }}
          />
        </View>
        <View px="$3" py="$3">
          <XStack alignItems='center' justifyContent='space-between' >
            <Text fontSize="$2">
              LeBum James dan 13 lainnya
            </Text>
            <Text fontSize="$2">
              4 Komentar
            </Text>
          </XStack>
        </View>
        <View height={1} bg="$gray8" />
        <View px="$3" py="$2">
          <XStack alignItems='center' justifyContent='space-between' gap="$3">
            <XStack alignItems='center' gap="$1">
              <Avatar circular size="$2">
                <Avatar.Image
                  accessibilityLabel="Cam"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                />
                <Avatar.Fallback backgroundColor="$blue10" />
              </Avatar>
              <Entypo name="triangle-down" size={15} color="black" />
            </XStack>
            <YStack alignItems='center'>
              <FontAwesome name="thumbs-o-up" size={18} color="black" />
              <Text>Suka</Text>
            </YStack>
            <YStack alignItems='center'>
              <FontAwesome name="commenting-o" size={18} color="black" />
              <Text>Komentar</Text>
            </YStack>
            <YStack alignItems='center'>
              <FontAwesome name="share-square-o" size={18} color="black" />
              <Text>Bagikan</Text>
            </YStack>
            <YStack alignItems='center'>
              <FontAwesome name="send-o" size={18} color="black" />
              <Text>Kirim</Text>
            </YStack>
          </XStack>
        </View>
      </View>
      <View mb="$2" bg="$white1" >
        <XStack alignItems='center' justifyContent='space-between' gap="$3" mb="$3" pt="$2" px="$3">
          <View>
            <Avatar circular size="$5">
              <Avatar.Image
                accessibilityLabel="Cam"
                src="https://randomuser.me/api/portraits/men/76.jpg"
              />
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
          </View>
          <View flex={1} >
            <XStack alignItems='center' justifyContent='space-between'>
              <XStack alignItems='center' gap="$1.5">
                <Text fontWeight="bold">
                  Cold Palmer
                </Text>
                <View h={3} w={3} borderRadius={999} bg="black" />
                <Text color="$gray10">
                  Ke-1
                </Text>
              </XStack>
              <XStack alignItems='center' justifyContent='space-between' gap="$5">
                <Entypo name="dots-three-vertical" size={12} color="black" />
                <Entypo name="cross" size={20} color="black" />
              </XStack>
            </XStack>
            <Text fontSize="$2" color="$gray10">
              Recruitment Consultant
            </Text>
            <XStack alignItems='center' gap="$1.5">
              <Text fontSize="$2" color="$gray10">
                8mnt
              </Text>
              <View h={3} w={3} borderRadius={999} bg="black" />
              <Entypo name="globe" size={10} color="black" />
            </XStack>
          </View>
        </XStack>
        <View px="$3" mb="$4">
          <ReadMore numberOfLines={3} seeMoreText='selengkapnya' expandOnly seeMoreStyle={{ color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </ReadMore>
        </View>
        <View px="$3" mb="$2">
          <Text>
            Lihat Terjemahan
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://picsum.photos/500/300',
              height: 300,
            }}
          />
        </View>
        <View px="$3" py="$3">
          <XStack alignItems='center' justifyContent='space-between' >
            <Text fontSize="$2">
              Nokotan dan 10 lainnya
            </Text>
            <Text fontSize="$2">
              2 Komentar
            </Text>
          </XStack>
        </View>
        <View height={1} bg="$gray8" />
        <View px="$3" py="$2">
          <XStack alignItems='center' justifyContent='space-between' gap="$3">
            <XStack alignItems='center' gap="$1">
              <Avatar circular size="$2">
                <Avatar.Image
                  accessibilityLabel="Cam"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                />
                <Avatar.Fallback backgroundColor="$blue10" />
              </Avatar>
              <Entypo name="triangle-down" size={15} color="black" />
            </XStack>
            <YStack alignItems='center'>
              <FontAwesome name="thumbs-o-up" size={18} color="black" />
              <Text>Suka</Text>
            </YStack>
            <YStack alignItems='center'>
              <FontAwesome name="commenting-o" size={18} color="black" />
              <Text>Komentar</Text>
            </YStack>
            <YStack alignItems='center'>
              <FontAwesome name="share-square-o" size={18} color="black" />
              <Text>Bagikan</Text>
            </YStack>
            <YStack alignItems='center'>
              <FontAwesome name="send-o" size={18} color="black" />
              <Text>Kirim</Text>
            </YStack>
          </XStack>
        </View>
      </View>
    </ScrollView>
  )
}
