import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Internship Details</Text>

<Text>Name : Vishal Vishwakarma</Text>
<Text>I am From Pratapgarh</Text>
<Text>Internship : VertexMind</Text>
<Text>Domain : App Development</Text>
<Text>Learning : React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});