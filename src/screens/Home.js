import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import Index from './Index';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false
        }}>
          <Tab.Screen
            name="Home"
            component={Index}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              )
            }}
          />
          <Tab.Screen
            name="Orders"
            component={Index}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="receipt-outline" size={size} color={color} />
              )
            }}
          />
          <Tab.Screen
            name="Chats"
            component={Index}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbubble" size={size} color={color} />
              )
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" size={size} color={color} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
