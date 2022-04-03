import Button from '@mui/material/Button';
import React, { useRef } from 'react';

import './NewTodo.css';


type NewTodoProps = {
    onAddItem: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddItem(enteredText);
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <input
                    className="input"
                    placeholder="Wpisz zadanie"
                    type="text"
                    id="todo-text"
                    ref={textInputRef} />
            </div>
            <Button
                variant="contained"
                type="submit"
            >
                Dodaj
            </Button>
        </form>
    );
}

export default NewTodo;