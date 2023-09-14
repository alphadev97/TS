import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: TodoItemType["id"]) => void;
};

const TodoItem = ({ todo, completeHandler, deleteHandler }: PropsType) => {
  return (
    <Paper
      sx={{
        padding: "1rem",
      }}
      variant="outlined"
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Typography marginRight={"auto"}>{todo.title}</Typography>
        <Checkbox
          checked={todo.isCompleted}
          onClick={() => completeHandler(todo.id)}
        />
        <Button onClick={() => deleteHandler(todo.id)}>
          <Delete />
        </Button>
        <Button>
          <Edit />
        </Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
