// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Auth from '@stackNav/Auth';
// import Main from '@tabNav/Main';
// import {useEffect, useState} from 'react';
// import EncryptedStorage from 'react-native-encrypted-storage';

// export type RootStackParamList = {
//   Splash: undefined;
//   Auth: {screen: 'Login'};
//   Main: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// const AppInner = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkIsLoggedIn = async () => {
//       const accessToken = await EncryptedStorage.getItem('accessToken');
//       setIsLoggedIn(!!accessToken);
//     };
//     checkIsLoggedIn();
//   }, []);

//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       {isLoggedIn ? (
//         <Stack.Group>
//           <Stack.Screen name="Main" component={Main} />
//           <Stack.Screen name="Auth" component={Auth} />
//         </Stack.Group>
//       ) : (
//         <Stack.Group>
//           <Stack.Screen name="Auth" component={Auth} />
//           <Stack.Screen name="Main" component={Main} />
//         </Stack.Group>
//       )}
//     </Stack.Navigator>
//   );
// };

// export default AppInner;
