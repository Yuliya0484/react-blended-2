import { useState } from 'react';
import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';
import toast, { Toaster } from 'react-hot-toast';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const addTodo = newTodo => {
    setTodos(prevState => [...prevState, newTodo]);
  };
  const deleteTodo = todoId => {
    setTodos(todos => {
      return todos.filter(todoItem => todoItem.id !== todoId);
    });
  };
  return (
    <>
      <Form onSubmit={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};

export default Todos;
