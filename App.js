import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Amplify } from 'aws-amplify';
import 'react-native-get-random-values';

// AWS Amplify configuration will be added here
// Uncomment and configure when you have your Amplify backend set up
/*
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'YOUR_USER_POOL_ID',
      userPoolClientId: 'YOUR_USER_POOL_CLIENT_ID',
      region: 'YOUR_REGION'
    }
  },
  API: {
    REST: {
      YourAPIName: {
        endpoint: 'YOUR_API_ENDPOINT',
        region: 'YOUR_REGION'
      }
    }
  }
});
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Text style={styles.subtitle}>React Native Expo + AWS Amplify</Text>
      <Text style={styles.description}>
        Ready for AWS Amplify integration
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#999',
  },
});
