import { useState } from "react";
import CreateTodo from "./CreateTodo";
import Todo, { ITodo } from "./Todo";


const TodoList = () => {
    const [ todos, setTodos ] = useState<ITodo[]>([]);
    //     { idx : 1, title: "todo-1", content: "content-1" },
    //     { idx : 2, title: "todo-2", content: "content-2" },
    // ]);

    const addTodo = (todo: ITodo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (idx: number) => {
        const newTodo = todos.filter((item) => {
            return item.idx !== idx;
        });
        setTodos(newTodo);
    };

    const updateTodo = (todo: ITodo) => {
        const newTodo = todos.map((item) => {
            if (item.idx === todo.idx) {
                return todo;
            } else {
                return item;
            }
        });
        setTodos(newTodo);
    };



    const Items = () => {
        return todos.map((item) => {
            return (
                <Todo
                idx = {item.idx}
                title={item.title} 
                content={item.content}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}                
                />
                // </Todo>
            );
        });
    };

    return (
        <div className="todo-list-container">
            {Items()}
            <CreateTodo addTodo={addTodo} />
        </div>
    );
};

export default TodoList;