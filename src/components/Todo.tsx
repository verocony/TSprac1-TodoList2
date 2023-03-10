import { useEffect, useState } from 'react';
import { CiTrash } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { FaUpload } from 'react-icons/fa';
import '../styles/todo.css'



export interface ITodo {
    idx : number;
    title: string;
    content : string;
};

interface TodoProps extends ITodo {
    deleteTodo : (idx: number) => void;
    updateTodo : (todo : ITodo) => void;
}

const Todo = (props: TodoProps) => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    setTitle(props.title);
    setContent(props.content);
  }, [props]);

  const handleClickDeleteBtn = () => {
    props.deleteTodo(props.idx);
  };

  const handleClickUpdateBtn = () => {
    setIsEdit(true);
  };

  const handleClickSubmitBtn = () => {
    props.updateTodo({ idx: props.idx, title: title, content: content });
    setIsEdit(false);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
    return (
        <div className="todo-item">
        <div className='title-container'>
          Title
          {isEdit ? (
            <input value={title} onChange={handleChangeTitle}></input>
          ) : (
            <p className="todo-title">{title}</p>
          )}
        </div>
        <div className='content-container'>
          Content
          {isEdit ? (
            <input value={content} onChange={handleChangeContent}></input>
          ) : (
            <p className="todo-content">{content}</p>
          )}
        </div>
        <div className="btns-container">
          {isEdit ? (
            <button onClick={handleClickSubmitBtn}><FaUpload /></button>
          ) : (
            <>
              <button className="btn-delete" onClick={handleClickDeleteBtn}>
                <CiTrash />
              </button>
              <button className="btn-update" onClick={handleClickUpdateBtn}>
                <FaPencilAlt />
              </button>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Todo;