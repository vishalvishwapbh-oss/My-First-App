import { TaskProvider } from "@/context/taskContext";
import { Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <TaskProvider>
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Profile" }} />
      <Tabs.Screen name="details" options={{ title: "Details" }} />
      <Tabs.Screen name="tasks" options={{ title: "Tasks" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      <Tabs.Screen name="addtask" options={{ title: "Add Task" }} />
    </Tabs>
    </TaskProvider>
  );
}