import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const data = [
    {
      id: 1,
      name: "comprar pão",
      done: false,
    },
    {
      id: 2,
      name: "comprar leite",
      done: false,
    },
  ];
  const [list, setList] = useState<Item[]>(() => {
    const saved = localStorage.getItem("task");
    return JSON.parse(saved!) || data;
  });

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
    localStorage.setItem("task", JSON.stringify(newList));
    data.push(...list);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
    localStorage.setItem("task", JSON.stringify(newList));
    data.push(...list);
  };

  const deleteItem = (id: number) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList.splice(parseInt(i), 1);
      }
    }
    setList(newList);
    localStorage.setItem("task", JSON.stringify(newList));
    data.push(...list);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
            onClick={deleteItem}
          />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
