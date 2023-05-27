import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
      <Link href="/">
        <Text>Home</Text>
      </Link>
    </View>
  );
}
