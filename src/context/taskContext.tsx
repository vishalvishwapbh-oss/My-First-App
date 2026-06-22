import { createContext, useState } from "react";

export const TaskContext = createContext<any>(null);

export function TaskProvider({ children }: any) {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}