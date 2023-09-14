import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByValue } from "./redux";

function App() {
  const [val, setVal] = useState<number>(0);

  const dispatch = useDispatch();

  const incrementByValueHandler = () => {
    dispatch(incrementByValue);
  };

  return (
    <div>
      <h1>Toolkit</h1>
      <button>+</button>
      <button>-</button>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button onClick={incrementByValueHandler}>Add</button>
    </div>
  );
}

export default App;
