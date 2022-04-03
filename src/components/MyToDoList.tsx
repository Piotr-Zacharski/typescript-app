import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import React from 'react'

import './MyTodoList.css';

interface MyToDoListProps {
    items: {id: string, text: string}[];
    deleteTodo: (id: string) => void;
}

const MyToDoList: React.FC<MyToDoListProps> = props => {
    return (
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 200,
                height: 200,
            },
        }}>
        {props.items.map(todo => (
            <Paper elevation={7} key={todo.id}>
                <h4 style={{color: 'black', fontSize: 18}}>{todo.text}</h4>
                <div className="btn-container">
                    <Button
                        type="submit"
                        onClick={props.deleteTodo.bind(null, todo.id)}
                    >
                        Usuń
                    </Button>
                </div>

            </Paper>
            ))}
    </Box>
);
};

export default MyToDoList;