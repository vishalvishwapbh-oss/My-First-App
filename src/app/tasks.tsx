import { TaskContext } from "@/context/taskContext";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tasks() {

  const { tasks } = useContext(TaskContext);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Tasks</Text>

      {tasks.length === 0 ? (
        <Text>No Tasks Added</Text>
      ) : (
        tasks.map((item:any, index:any) => (
          <View style={styles.card} key={index}>
            <Text style={styles.task}>{item}</Text>
            <Text>Status: In Progress</Text>
          </View>
        ))
      )}

    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    justifyContent:"center",
  },
  title:{
    fontSize:30,
    fontWeight:"bold",
    marginBottom:20,
  },
  card:{
    padding:20,
    backgroundColor:"#ddd",
    borderRadius:15,
    marginBottom:15,
  },
  task:{
    fontSize:18,
    fontWeight:"bold",
  }
});