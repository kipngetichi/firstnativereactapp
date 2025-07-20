import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>this is my first app!<br/>
        this is my first app!<br/>
        this is my first app!
      </Text>
      <Text>enjoy react!<br/></Text>
      
      <StatusBar style="auto" />
      <Button  title="press me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
