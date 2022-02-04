import Home from './app/screens/Home';
import { SafeAreaView, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Home />
    </SafeAreaView>
  )
}

export default App;
