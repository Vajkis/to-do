import './App.scss';

import { useState } from "react";

import DataContext from './components/DataContext';
import List from './components/List';
import AddList from './components/AddList';

function App() {

  const [id, setId] = useState(0)

  const [list, setList] = useState([])
  const getId = () => {
    setId(i => i + 1)
    return id;
  }

  return (
    <DataContext.Provider value={{
      list,
      setList,
      getId
    }}>
      <List />
      <AddList />
    </DataContext.Provider>
  );
}

export default App;