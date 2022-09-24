import './App.scss';

import { useState } from "react";

import DataContext from './components/DataContext';
import List from './components/List';

function App() {

  const [list, setList] = useState([])
  const [focus, setFocus] = useState(false)

  return (
    <DataContext.Provider value={{
      list,
      setList
    }}>
      <List />
      <input className='list addList' placeHolder={focus ? null : '+ Add new list'} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
    </DataContext.Provider>
  );
}

export default App;