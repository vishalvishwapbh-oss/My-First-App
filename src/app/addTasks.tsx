import { TaskContext } from "@/context/taskContext";
import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddTask() {

  const [task, setTask] = useState("");

  const { addTask } = useContext(TaskContext);

  const handleAddTask = () => {
    if(task.trim()){
      addTask(task);
      alert("Task Added Successfully");
      setTask("");
    } else {
      alert("Enter a task first");
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Add Task</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Task"
        value={task}
        onChangeText={setTask}
      />

      <Button
        title="ADD"
        onPress={handleAddTask}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    padding:20,
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20,
  },

  input:{
    borderWidth:1,
    padding:15,
    borderRadius:10,
    marginBottom:15,
  }
});