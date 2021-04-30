import React, {useState} from 'react';
import './TodoInput.css';
import todos from '../../todos';

const TodoInput = () => {

  const [todo, setTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    todos.push(
      {
        taskTitle: todo,
        id: todos.length + 1
      }
    )
    console.log(todos);
}

    return (
        <form className='inputContainer' onSubmit={handleSubmit}>
          <label className='inputLabel' htmlFor='todo'>What's our next to do?</label>
          <input 
            className='inputContent' 
            type='text' 
            id='todo' 
            value={todo}
            onChange={event => setTodo(event.target.value)}></input>
          <input type='submit' value="Let's do it!" className='todoButton'/>
        </form>
    )
}

export default TodoInput;