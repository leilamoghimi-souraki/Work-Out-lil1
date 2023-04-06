import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import useCachedResources from './hook/useCachedResources';
import { useColorScheme } from 'react-native';
export default function App() {
  const isLoaded= useCachedResources();
  const colorScheme =  useColorScheme();
  

  if (isLoaded){
    return (
      
      <SafeAreaProvider>
        <Navigation  colorScheme={colorScheme}/>
        <StatusBar style="auto" />
        </SafeAreaProvider>
      
    );
  } else {
    return null;
  }
  
}

