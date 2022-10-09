import './scss/app.scss';

import { useEffect, useReducer } from 'react';

import { loadTasks_action } from './actions/taskActions';
import tasks_reducer from './reducers/tasksReducer';

import DataContext from './components/DataContext';
import Header from './components/Header';
import Lists from './components/Lists';
import AddList from './components/AddList';

function App() {

  const [tasks, dispachTasks] = useReducer(tasks_reducer, null);

  useEffect(() => {
    dispachTasks(loadTasks_action())
  }, []);

  useEffect(() => {
    if (tasks) {
      localStorage.setItem('tasksData', JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <DataContext.Provider value={{
      tasks,
      dispachTasks
    }}>
      <Header />
      <Lists />
      <AddList />
    </DataContext.Provider>
  );
}

export default App;