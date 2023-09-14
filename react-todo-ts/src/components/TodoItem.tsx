import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: TodoItemType["id"]) => void;
};

const TodoItem = ({ todo, completeHandler, deleteHandler }: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);

  return (
    <Paper
      sx={{
        padding: "1rem",
      }}
      variant="outlined"
    >
      <Stack direction={"row"} alignItems={"center"}>
        {editActive ? (
          <TextField />
        ) : (
          <Typography marginRight={"auto"}>{todo.title}</Typography>
        )}

        <Checkbox
          checked={todo.isCompleted}
          onClick={() => completeHandler(todo.id)}
        />
        <Button onClick={() => deleteHandler(todo.id)}>
          <Delete />
        </Button>
        <Button onClick={() => setEditActive((prev) => !prev)}>
          <Edit />
        </Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
