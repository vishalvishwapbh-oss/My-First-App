import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function AddTaskScreen() {
  const [task, setTask] = useState("");

  const addTask = () => {
    if(task.trim() === ""){
      alert("Enter task first");
      return;
    }

    alert("Task Added: " + task);
  };

  return (
    <View>
      <Text>Add Task</Text>

      <TextInput
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />

      <Button title="Add" onPress={addTask}/>
    </View>
  );
}