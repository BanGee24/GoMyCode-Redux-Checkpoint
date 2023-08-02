// App.js
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './redux/reducers'; // Importing the tasksReducer.
import AddTask from './components/Addtask'; // Importing the AddTask component.
import ListTask from './components/ListTask'; // Importing the ListTask component.

const store = createStore(tasksReducer); // Creating the Redux store with the tasksReducer.

const App = () => {
  return (
    <Provider store={store}> {/* Providing the Redux store to the entire application */}
      <div style={{  background: 'linear-gradient(to left, #818cf8, #ddd6fe)', margin: '45px', height: '40rem', padding: '2px 50px 60px 36rem'}}>
        <h1>Todo List App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
