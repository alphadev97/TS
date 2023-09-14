import {
  AppBar,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([
    {
      title: "sfsdffsf",
      isCompleted: false,
      id: "sdfsdfsfg",
    },
  ]);

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>

      <Stack height={"70%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem key={i.id} todo={i} />
        ))}
      </Stack>
      <TextField fullWidth label={"New Task"} />
      <Button
        sx={{
          margin: "1rem 0",
        }}
        fullWidth
        variant="contained"
      >
        Add
      </Button>
    </Container>
  );
};

export default App;
