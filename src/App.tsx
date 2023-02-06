import React from 'react';
import './App.css';
import TodoList from './components/TodoList';




function App() {
  return (
   <>
   <div className='mainContainer'>
    <div className="appContainer">
      {/* <Item text='투두리스트1' />
      <Item text='투두리스트2' />
      <Item text='투두리스트3' />
      <Item text='완료1' completed />
      <Item text='완료2' completed /> */}
      <TodoList />
      {/* <TodoForm /> */}

      {/* <input type="text" 
        className='inputText'
        placeholder='내용을 입력해주세요'/> */}

    </div>
   </div>

   </>
  );
}

export default App;