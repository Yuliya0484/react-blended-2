import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';
import Grid from '../Grid/Grid';
const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map((todoItem, index) => (
        <GridItem key={todoItem.id}>
          <TodoListItem
            todoItem={todoItem}
            count={index + 1}
            onDelete={onDelete}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
