import { useState } from "react";
import { ITodo } from "./Todo";
import '../styles/createTodo.css'


interface CreateTodoProps {
    addTodo : (todo: ITodo) => void;
}


const CreateTodo = (props: CreateTodoProps) => {
    const [idx, setIdx] = useState(0);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const handleClickCreateBtn = () => {
        props.addTodo({idx:idx, title: title, content: content});
        setIdx(idx + 1);
        setEmpty();
    };

    const handleClickCancelBtn = () => {
        setEmpty();
    };

    const setEmpty = () => {
        setTitle("");
        setContent("");
    };



    return (
        <div className="create-todo-container">
            <div className="input-container">
            <label className="lbl-title">Title</label>
            <input type="text" className="input-title" value={title} onChange={handleChangeTitle}/>
            <label className="lbl-content">Content</label>
            <input type="text" className="input-content" value={content} onChange={handleChangeContent} />
            </div>
            <div className="btn-container">
            <button className="btn-create" onClick={handleClickCreateBtn}>Create</button>
            <button className="btn-cancel" onClick={handleClickCancelBtn}>Cancel</button>
            </div>
            {/* btn-container */}
        </div>
    );
};

export default CreateTodo;