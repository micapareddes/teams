import { ActivityIndicator, StatusBar } from 'react-native';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { GroupParticipants } from '@screens/GroupParticipants';
import { Routes } from 'src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent/>
      {fontsLoaded ? <Routes/> : <ActivityIndicator/>}
    </ThemeProvider>
  );
}