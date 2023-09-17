import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [result, setResult] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [ans, setAns] = useState<string>("");
  const navigate = useNavigate();

  return <div>Quiz</div>;
};

export default Quiz;
