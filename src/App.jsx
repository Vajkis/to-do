import './App.scss';

import { useReducer, useState } from "react";

import DataContext from './components/DataContext';
import Lists from './components/Lists';
import AddList from './components/AddList';
import tasksReducer from './reducers/tasksReducer';

function App() {

  const [id, setId] = useState(0)

  const [tasks, dispachTasks] = useReducer(tasksReducer, [])

  const [lists, setLists] = useState([])
  const getId = () => {
    setId(i => i + 1)
    return id;
  }

  return (
    <DataContext.Provider value={{
      lists,
      setLists,
      getId,
      tasks,
      dispachTasks
    }}>
      <Lists />
      <AddList />
    </DataContext.Provider>
  );
}

export default App;