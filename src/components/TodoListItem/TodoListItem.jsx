import style from './TodoListItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import Text from '../Text/Text';

const TodoListItem = ({ todoItem: { text, id }, count, onDelete }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {count}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
