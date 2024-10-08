import { Link, Tabs } from 'expo-router'
import { Button, useTheme } from 'tamagui'
import { Home, Users, PlusSquare, Bell } from '@tamagui/lucide-icons'
import { TabHeader } from 'components/common'
import Entypo from '@expo/vector-icons/Entypo';

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
          borderBottomColor: theme.borderColor.val,
        },
        headerTintColor: theme.color.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Halaman Utama',
          tabBarIcon: ({ color }) => <Home color={color} />,
          header: () => <TabHeader />,
        }}
      />
      <Tabs.Screen
        name="Network"
        options={{
          title: 'Jaringan Saya',
          tabBarIcon: ({ color }) => <Users color={color} />,
        }}
      />
      <Tabs.Screen
        name="Posting"
        options={{
          title: 'Posting',
          tabBarIcon: ({ color }) => <PlusSquare color={color} />,
        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          title: 'Notifikasi',
          tabBarIcon: ({ color }) => <Bell color={color} />,
        }}
      />
      <Tabs.Screen
        name="Work"
        options={{
          title: 'Pekerjaan',
          tabBarIcon: ({ color }) => <Entypo name="suitcase" size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}
