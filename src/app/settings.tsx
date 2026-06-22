import { StyleSheet, Text, View } from "react-native";

export default function Settings(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.card}>
        <Text>App Settings</Text>
        <Text>Notifications: ON</Text>
        <Text>Theme: Dark</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  justifyContent:"center",
  padding:20
 },
 title:{
  fontSize:30,
  fontWeight:"bold"
 },
 card:{
  marginTop:20,
  padding:20,
  borderRadius:15,
  backgroundColor:"#ddd"
 }
});