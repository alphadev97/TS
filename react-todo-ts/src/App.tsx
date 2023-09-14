import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import TodoItem from "./components/TodoItem";

const App = () => {
  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>

      <TodoItem />
    </Container>
  );
};

export default App;
