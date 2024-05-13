import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoListContainer from './store/TodoListContainer';
import AddTodoForm from './components/AddTodoForm';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App bg-white rounded shadow p-6 mx-auto mt-5 w-full lg:w-3/4 lg:max-w-lg">
        <AddTodoForm />
        <TodoListContainer />
      </div>
    </Provider>
    
  );
}

export default App;
