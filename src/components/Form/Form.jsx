import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { nanoid } from 'nanoid';

const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    onSubmit({
      text: value,
      id: nanoid(),
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
