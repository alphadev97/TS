import { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType =
  | {
      type: "Increament";
      payload: number;
    }
  | {
      type: "Decrement";
      payload: number;
    };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "Increament":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

const initialState: StateType = {
  count: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = (): void => {
    dispatch({
      type: "Increament",
      payload: 1,
    });
  };

  const deccrement = (): void => {
    dispatch({
      type: "Decrement",
      payload: 1,
    });
  };

  return (
    <div>
      <h1>Count Change</h1>
      <p>Count: {state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={deccrement}>-</button>
    </div>
  );
}

export default App;
