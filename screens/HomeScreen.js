import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import SignOut from './SignOut';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'planet-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='Screen1' component={Screen1} />
      <Tab.Screen name='Screen2' component={Screen2} />
      <Tab.Screen name='Screen3' component={Screen3} />
      <Tab.Screen name='SignOut' component={SignOut} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

// const Tab = createBottomTabNavigator();
// <NavigationContainer>
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ color, size }) => {
//         let iconName;

//         if (route.name === 'Home') {
//           iconName = 'planet-outline';
//         } else if (route.name === 'Settings') {
//           iconName = 'settings';
//         }

//         // You can return any component that you like here!
//         return <Ionicons name={iconName} size={size} color={color} />;
//       },
//       tabBarActiveTintColor: 'tomato',
//       tabBarInactiveTintColor: 'gray',
//     })}
//   >
//     <Tab.Screen name='Home' component={HomeScreen} />
//     <Tab.Screen name='Settings' component={SettingScreen} />
//   </Tab.Navigator>
// </NavigationContainer>;

//   const navigation = useNavigation();

//   const handleSignOut = () => {
//     auth
//       .signOut()
//       .then(() => {
//         navigation.replace('Login');
//       })
//       .catch((error) => alert(error.message));
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Email: {auth.currentUser?.email}</Text>
//       <TouchableOpacity onPress={handleSignOut} style={styles.button}>
//         <Text style={styles.buttonText}>Sign Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
